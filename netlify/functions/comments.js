const { admin, getFirestore } = require("./_firebase-admin");

const jsonHeaders = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store"
};

function json(statusCode, body) {
  return {
    statusCode,
    headers: jsonHeaders,
    body: JSON.stringify(body)
  };
}

function cleanText(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength);
}

function formatTimestamp(timestamp) {
  if (!timestamp || typeof timestamp.toMillis !== "function") {
    return 0;
  }

  return timestamp.toMillis();
}

exports.handler = async (event) => {
  try {
    const db = getFirestore();

    if (event.httpMethod === "GET") {
      const snapshot = await db
        .collection("Comments")
        .orderBy("timestamp", "asc")
        .limit(1000)
        .get();

      const comments = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          groupId: Number(data.groupId),
          member: data.member || "",
          comment: data.comment || "",
          time: data.time || "",
          timestamp: formatTimestamp(data.timestamp)
        };
      });

      return json(200, { comments });
    }

    if (event.httpMethod === "POST") {
      const body = JSON.parse(event.body || "{}");
      const groupId = Number(body.groupId);
      const member = cleanText(body.member, 120);
      const comment = cleanText(body.comment, 3000);

      if (!Number.isInteger(groupId) || groupId < 1 || groupId > 5) {
        return json(400, { error: "Tổ thảo luận không hợp lệ." });
      }

      if (!member) {
        return json(400, { error: "Vui lòng nhập họ tên." });
      }

      if (!comment) {
        return json(400, { error: "Vui lòng nhập nội dung góp ý." });
      }

      await db.collection("Comments").add({
        groupId,
        member,
        comment,
        time: new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" }),
        timestamp: admin.firestore.FieldValue.serverTimestamp()
      });

      return json(200, { ok: true });
    }

    return json(405, { error: "Method not allowed" });
  } catch (error) {
    console.error(error);
    return json(500, { error: "Lỗi máy chủ. Vui lòng thử lại." });
  }
};
