// ==========================================
// 1. CẤU HÌNH FIREBASE
// ==========================================
// Dán cấu hình bạn copy từ Firebase Console vào đây
const firebaseConfig = {
  apiKey: "AIzaSyDWPq92w48NfPzuec0TPFfni-ZVQMFJOLs",
  authDomain: "thaoluandaihoi.firebaseapp.com",
  databaseURL: "https://thaoluandaihoi-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "thaoluandaihoi",
  storageBucket: "thaoluandaihoi.firebasestorage.app",
  messagingSenderId: "843405316234",
  appId: "1:843405316234:web:06d7cd6d1d9dbd49605d73",
  measurementId: "G-HNGH4F39TG"
};
// Khởi tạo Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const COLLECTION_NAME = "thaoluan";
// ==========================================
// 2. DỮ LIỆU ĐẠI BIỂU (Danh sách các Tổ)
// ==========================================
const groups = [ 
  { 
    id: 1, 
    title: "Tổ 1: Giáo dục lý tưởng cách mạng, đạo đức, lối sống cho thanh niên", 
    topic: "Tập trung trao đổi về: Thực trạng nhận thức chính trị, lý tưởng sống của thanh niên hiện nay. Những tác động của mạng xã hội, không gian mạng đến đời sống của giới trẻ. Giải pháp nâng cao “sức đề kháng” trước thông tin xấu độc trên không gian mạng. Mô hình, cách làm hiệu quả trong giáo dục lý tưởng cách mạng, đạo đức, lối sống cho thanh niên. Gợi ý trọng tâm: Tổ chức Hội các cấp cần làm thế nào để xây dựng hình mẫu thanh niên Đà Nẵng “khát vọng - trách nhiệm - văn minh - sáng tạo”.", 
    members: [ 
      "Nguyễn Bá Duân", "Trương Thị Ngọc Phương", "Nguyễn Thanh Phong", "Nguyễn Thanh Hiền", "Vũ Thanh Nguyên", 
      "Trần Phương Nam", "Nguyễn Đăng Hòa", "Ating Toàn", "Bùi Anh Đức", "Châu Ngọc Cường", 
      "Nguyễn Thị Thanh Long", "Lê Thị Kim Ngọc", "Phạm Thị Thùy Quyên", "Phan Đức Thắng", "Dương Quang Hậu", 
      "Nguyễn Văn Quang", "Trần Tường Vi", "Võ Duy Rin", "Trịnh Thị Hoài Thương", "Trần Quốc Duy", 
      "Nguyễn Thị Ngọc Bích", "Nguyễn Lê Hoài Thanh", "Nguyễn Thanh Thảo Nguyên", "Trần Thị Triều Giang", "Lê Bá Phương", 
      "Lê Thanh Hải", "Hồ Thị Phương Thảo", "Lê Cảnh Phong", "Lê Hoàng", "Nguyễn Thị Bích Ngân", "Võ Thu Uyên", 
      "Ngô Lâm Nhi", "Nguyễn Công Anh", "Phan Phi Hùng", "Trần Hữu Anh Quân", "Nguyễn Thị Thanh Tuyền", 
      "Thới Thị Non", "Phạm Quốc Huy", "Lê Viên Thành", "Nguyễn Thị Khánh Hằng", "Tô Viết Phước Khôi", "Lê Hữu Bình Nguyên", 
      "Phạm Trần Trúc Mai", "Lê Thanh Sơn", "Đinh Thị Thu Thanh", "Lê Đoàn Bảo Nguyên", "Nguyễn Thị Hoài Ân", "Đàm Thạch Thảo", 
      "Hồ Đắc Hạnh", "Võ Thị Như Ý", "Nguyễn Thị Hạnh Quyên", "Trần Quốc Chí Hiếu", "Bạch Ngọc Huyền Thi", "Ngô Thị Hoàng Thi", 
      "Vương Ngọc Sơn", "Lê Đức Thuận", "Mai Văn Việt", "Lê Đức Trung Thông", "Nguyễn Đức Cường", "Nguyễn Lê Kiều Oanh", 
      "Nguyễn Đình Thịnh", "Đinh Thị Thanh Hoa", "Phạm Thanh Thuận", "Đinh Ngọc Hiếu", "Nguyễn Phú Quý", "Nguyễn Thị Chung", 
      "Nguyễn Xuân Nhân", "Đỗ Văn Trân", "Tô Ngọc Hạnh Nữ", "Nguyễn Viết Trình" 
    ] 
  },
  { 
    id: 2, 
    title: "Tổ 2: Phát huy vai trò thanh niên trong chuyển đổi số", 
    topic: "Tập trung trao đổi về: Vai trò của thanh niên trong thực hiện chuyển đổi số thành phố; thực trạng kỹ năng số, năng lực số của thanh niên hiện nay; những thuận lợi, khó khăn trong việc ứng dụng công nghệ số vào học tập, lao động và đời sống. Các mô hình, sáng kiến hiệu quả của thanh niên trong chuyển đổi số cộng đồng, thương mại điện tử, kinh tế số và đổi mới sáng tạo. Đề xuất giải pháp nâng cao năng lực số, phát huy vai trò xung kích của thanh niên trong xây dựng công dân số, xã hội số và thành phố thông minh. Gợi ý trọng tâm: Tổ chức Hội các cấp cần làm gì để thanh niên trở thành lực lượng tiên phong, nòng cốt trong tiến trình chuyển đổi số và phát triển nền kinh tế số của thành phố.", 
    members: [ "Nguyễn Duy Thành", "Phan Ngọc Minh", "Nguyễn Lương Thành Đạt", "Lê Duy ", "Lê Ngọc Nhiên Hà",
               "Nguyễn Trọng Huy", "Phạm Tiến", "Ông Văn Tùng", "Nguyễn Văn Quy", "Hoàng Văn Hiệp", "Trương Đức Long", "Huỳnh Thanh Đông",
               "Phạm Thị Hiếu Ngân", "Phan Thành Lưu", "Huỳnh Ngọc Đông", "Võ Như Minh", "Hà Thị Nga", "Nguyễn Ngà ", "Ngô Thị Tú Trinh",
               "Trịnh Võ Anh Khoa", "Lê Anh Tuấn", "Lê Viết Hoàng", "Lê Tự Hoài Ân", "Nguyễn Quang Vinh", "Từ Nguyễn Tương Lai", "Lê Đăng Quốc Hải",
               "Nguyễn Quốc Công", "Nguyễn Văn Tân", "Lê Thị Ngọc Ly", "Hồ Thị Hoàng Tú", "Võ Thị Thu Hòa", "Trương Văn Hòa", "Phạm Thị Huyền Trang", "Trần Phước Vinh", "Nguyễn Hà Vi", "Phạm Hoàng Tuấn", "Nguyễn Thị Mỹ Ngọc ", "Phạm Thị Yến Chi", "Trần Văn Linh", "Trần Thị Nhơn",
               "Châu Ngọc Huy", "Đoàn Xuân Nương", "Huỳnh Minh Phát", "Hoàng Kim Anh", "Nguyễn Văn Hậu ", "Nguyễn Đức Hưng", "Nguyễn Thị Thu Huyền", "Huỳnh Đức Trí", "Đoàn Thanh Lâm",
               "Nguyễn Vũ Như Hoàng", "Cao Văn Nam", "Lê Đức Trung", "Trần Hồ Thu", "Trương Thị Thanh Tâm", "Lê Thị Ảnh", "Nguyễn Văn Hảo", "Mai Văn Dân", "Vũ Thành Đạt",
               "Trương Thị Tường Vi", "Trần Quốc Vũ", "Phạm Thành An", "Lê Thị Bảo Trâm", "Huỳnh Thị Hoa (Xã Trà Liên)", "Nguyễn Hoài Nhơn",
               "Nguyễn Văn Thạch", "Đinh Văn Mực", "Trần Quang Định", "Hồ Văn Tâm", "Trần Hồng Sơn", "Hồ Văn Dương"
 ] 
  }, 
  { 
    id: 3, 
    title: "Tổ 3: Thanh niên chung tay xây dựng nông thôn mới, đô thị văn minh, thành phố đáng sống", 
    topic: "Tập trung trao đổi về: Vai trò của thanh niên trong bảo vệ môi trường, xây dựng nếp sống văn minh đô thị. Các phong trào, mô hình thanh niên tham gia xây dựng thành phố xanh - sạch - đẹp. Giải pháp nâng cao ý thức cộng đồng, văn hóa ứng xử của thanh niên. Gắn hoạt động Hội với các nhiệm vụ phát triển kinh tế - xã hội của thành phố. Gợi ý trọng tâm: Tổ chức Hội các cấp cần làm gì để phát huy  vai trò thanh niên trong việc xây dựng Đà Nẵng trở thành đô thị sinh thái, thông minh, đáng sống.", 
    members: [ "Nguyễn Thị Nhung","Bùi Thiên Vỹ", "Đào Kim Long","Lê Xuân Thành ","Phan Hoàng Huy","Nguyễn Lê Hưng","Tô Thị Thùy Dung","Huỳnh Cao Huyền Trâm",
                "Lê Thị Bích Luyện","Hồ Văn Hiếu","Nguyễn Thị Hoàng My","Bùi Văn Liu","Hồ Tư Huỳnh","Huỳnh Văn Hoàng","Nguyễn Văn Thanh","Hồ Văn Dũng (Xã Trà Tập)",
                "Hồ Văn Gương","Nguyễn Hồng Xuyến","Hồ Văn Dấu","Nguyễn Thành Long","Nguyễn Thị Bích Thùy","Hồ Văn Trí","Võ Thị Lệ Thu","Nguyễn Nhật Tuân ",
                "Phạm Thị Diệu","Nguyễn Thị Lin","Võ Ngọc Anh","Ngô Văn Tư","Bùi Văn Khánh","Nguyễn Vũ Việt","Nguyễn Thị Thùy Ngân","Đặng Thành Công",
                "Nguyễn Thị Mỹ Linh (Xã Thăng Phú)","Trần Lê Thị Kim Oanh","Bùi Nguyễn Hiền Vi","Lê Thị Hoài Thương","Nguyễn Thị Ánh Quyên",
                "Nguyễn Thị Thúy Hằng","Trần Văn Thắng","Trần Đại Việt","Đoàn Xuân Lộc","Trần Vũ Ngọc","Hà Tấn anh","Nguyễn Đình An ","Lương Văn Vinh ","Nguyễn Linh","Trương Thị Thu Viên","Phan Văn Pháp",
                "Nguyễn Văn Thuận","Ngô Thị Thảo Nguyên","Nguyễn Thị Mỵ Châu","Nguyễn Phước Tiến Huy","Trần Văn Trọng","Trần Quốc Công",
                "Huỳnh Thị Thùy Trâm","Huỳnh Thị Ngọc Thúy","Nguyễn Dương Hậu ","Trương Minh Quốc","Huỳnh Thị Hoa (Xã Hà Nha)","Lê Thị Long Viên ",
                "Huỳnh Thanh Thiên ","Đỗ Minh Vương","Nguyễn Thị Hương","Nguyễn Thị Yến Vy","Nguyễn Hồng Tươi","Nguyễn Văn Hường","Võ Thanh Luân","A Rất Dương","Bhling Ưi","A Rất Chung" ]
  }, 
  { 
    id: 4, 
    title: "Tổ 4: Đổi mới công tác Hội, tăng cường mở rộng đoàn kết tập hợp thanh niên", 
    topic: "Tập trung trao đổi về: Thực trạng hoạt động của tổ chức Hội hiện nay. Những khó khăn trong việc tập hợp thanh niên đặc thù (lao động tự do, thanh niên tôn giáo, thanh niên trên không gian mạng…). Đổi mới nội dung, phương thức hoạt động Hội. Ứng dụng công nghệ trong quản lý, kết nối hội viên. Gợi ý trọng tâm: Tổ chức Hội các cấp cần làm thế nào để tổ chức Hội thực sự là “người bạn đồng hành” của thanh niên.", 
    members: [ "Nguyễn Thành Trung","Hoàng Thị Ý Nhi","Lương Thị Nhẫn","Mai Hồng Anh","Nguyễn Đỗ Bảo Trâm",
                "Lê Lãnh","Lê Thị Hồng Tuyết","Đoàn Thị Thu Ba","Pơ Loong Pao ","Coor Nhung","Un Thị Kim","Hiên Thị Tịnh","Zơ Râm Hải","A Lăng Thế",
                "Coor Thanh Sơn","A Lăng Thị Hằng","Alăng Ứi","A Lăng Thị Bích","Bríu Công","Ating Bi","Ploong Thị Hoài","Hồ Thị Lê","Riah Rục",
                "Bnướch Hút","Bling Vơn","Phạm Trần Lương Tri","Alăng Crom","Alăng Bơm","Ríah Dung","Hốih Anh","Huỳnh Đức Tú","Trần Phục Triều",
                "Nguyễn Thị Kim Thoa","Mai Thị Vân","Hồ Thị Danh","Tạ Thành Công","A Yá","Nguyễn Hoàng Huy","Hồ Thị Ngân","Nguyễn Thị Mỹ Linh (Xã Phước Năng)","Nguyễn Thị Trâm",
                "Phạm Văn Hữu","Hồ Văn Tranh","A Mực","Hồ Văn Dũng (Xã Phước Hiệp)","Nguyễn Thị Thế","Võ Thị Minh Lý","Lê Thị Xuân","Trần Thị Kim Yến",
                "Bùi Thị Thùy Dương","Nguyễn Hoàng Đạt","Trần Thị Lệ Chi","Ngô Văn Thảo Nguyên","Đặng Anh Đào","Lê Minh Dũng","Cao Nam Hải","Đào Hồng Phú Mỹ",
                "Tống Duy Quốc","Ngô Thị Hoàng Vân","Trần Như Quỳnh","Nguyễn Hoàng Khánh Đoan","Hồ Thị Mỹ Hà","Phạm Văn Mãi","Đặng Ngọc Nhung",
                "Lương Lê Ngọc Sương","Lê Thế Vĩnh","Trương Anh Tài","Hồ Hồng Quang Hào","A Râl Vượng","Trần Thị Hoài Linh"
 ] 
  }, 
  { 
    id: 5, 
    title: "Tổ 5: Khơi dậy khát vọng khởi nghiệp, lập nghiệp trong thanh niên", 
    topic: "Tập trung trao đổi về: Nhu cầu, xu hướng khởi nghiệp, lập nghiệp của thanh niên trong giai đoạn hiện nay; những thuận lợi, khó khăn trong quá trình khởi nghiệp của thanh niên. Vai trò của tổ chức Hội trong đồng hành, hỗ trợ thanh niên về kiến thức, kỹ năng, vốn, kết nối nguồn lực và môi trường khởi nghiệp. Chia sẻ các mô hình kinh tế hiệu quả, dự án khởi nghiệp tiêu biểu của thanh niên trên các lĩnh vực; giải pháp thúc đẩy tinh thần đổi mới sáng tạo, phát triển kinh tế số, kinh tế xanh trong thanh niên. Gợi ý trọng tâm: Tổ chức Hội các cấp cần làm thế nào để khơi dậy mạnh mẽ tinh thần dám nghĩ, dám làm, khát vọng lập thân, lập nghiệp và phát triển kinh tế trong thanh niên Đà Nẵng.", 
    members: [ "Trần Xuân Vĩ","Đỗ Lê Hưng Toàn ","Nguyễn Khoa Vỹ","Nguyễn Trọng Nghĩa","Bùi Thị Triều","Nguyễn Thị Hạnh Nguyên","Nguyễn Quốc Khánh","Đinh Quang Lĩnh",
"Võ Thị Như Ngọc","Trần Vĩnh Tiến","Trịnh Ngọc Tấn","Nguyễn Viết Hùng","Lê Thị Kim Dung","Nguyễn Thị Yến Nhi","Nguyễn Khoa Điềm","Lê Đình Lượng",
"Phan Tú Anh","Phan Thị Hoàng Lê","Nguyễn Đức Tài","Cao Anh Tuấn","Đặng Minh Vương","Nguyễn Vinh Huy","Nguyễn Đăng Khoa","Nguyễn Hữu Anh Dũng","Hồng Thị Kim Uyên","Nguyễn Thị Hoàng Vy",
"Trần Thị Xuân Hương","Trần Thị Thanh Hằng","Nguyễn Hoàng Việt Danh","Huỳnh Lê Triều Vỹ","Võ Văn Nhi","Hoàng Anh Cảm","Nguyễn Hoàng Nam","Đoàn Thị Anh Thư ","Nguyễn Thị Mơ",
"Nguyễn Thanh Hiếu","Nguyễn Trí Thành","Đỗ Lê Văn Thuấn","Huỳnh Đức","Lê Văn Hiệp","Đỗ Hồng Quang","Nguyễn Văn Điệp","Trần Văn Thơ","Nguyễn Khắc Tuấn ","Nguyễn Anh Tuấn","Hà Phước Thái",
"Hồ Đình Trí","Phạm Quang Mẫn ","Võ Văn Thành","Phạm Phú Dũng","Nguyễn Văn Hoàng","Đinh Hữu Công","Nguyễn Văn Sơn","Phùng Nhật Tuyên","Nguyễn Ngọc Tâm","Lê Thị Lành","Dương Đình Cường ","Trương Thanh Tịnh ",
"Nguyễn Đức Hải","Nguyễn Thi Mây","Hồ Thanh Tâm","Lê Long Khánh","Võ Thị Thanh Minh","Đặng Thị Vân","Trịnh Hồng Minh ","Phạm Thị Kim Thoa ","Nguyễn Đình Khâm Thuận","Trương Công Nhàn ","Nguyễn Thị Thanh Phúc","Hồ Thị Hoàng Châu "

 ] 
  } 
];

let currentGroup = null;
let comments = [];
// ==========================================
// 3. LOGIC XỬ LÝ GIAO DIỆN & FIREBASE
// ==========================================

// Khi tải trang xong: Ẩn loader, hiện thẳng danh sách Tổ (Không qua Menu)
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("groupContainer").classList.remove("hidden");
    renderGroups();
  }, 1000);
});
// Lắng nghe dữ liệu Real-time từ Firebase
db.collection("thaoluan").onSnapshot((snapshot) => {
  comments = [];
  
  snapshot.forEach((doc) => {
    comments.push(doc.data());
  });

  // Tự động sắp xếp tin nhắn bằng Javascript thay vì nhờ Firebase (tránh lỗi thiếu Index)
  comments.sort((a, b) => {
    let timeA = a.timestamp ? a.timestamp.toMillis() : Date.now();
    let timeB = b.timestamp ? b.timestamp.toMillis() : Date.now();
    return timeA - timeB;
  });
  
  // Tự động Cập nhật giao diện (Đổi màu tên, Thanh tiến độ, Danh sách ý kiến)
  if (currentGroup && !document.getElementById("discussion").classList.contains("hidden")) {
    loadComments();
    loadProgress(); // Hàm này sẽ quét lại danh sách và đổi người đó sang màu Xanh
  }
}, (error) => {
  console.log("Lỗi đồng bộ Real-time: ", error);
});
function showToast(message){
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.classList.add("show");
  setTimeout(()=>{ toast.classList.remove("show") }, 3000);
}

function escapeHTML(value){
  return String(value || "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function renderGroups(){
  const container = document.getElementById("groupContainer");
  container.innerHTML = "";
  groups.forEach(group => {
    container.innerHTML += `
      <div class="group-card" onclick="openGroup(${group.id})">
        <h2>${group.title}</h2>
        <p>${group.members.length} đại biểu</p>
      </div>
    `;
  });
}

function openGroup(id){
  currentGroup = groups.find(g => g.id === id);
  
  // Chuyển màn hình
  document.getElementById("groupContainer").classList.add("hidden");
  document.getElementById("discussion").classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Set nội dung
  document.getElementById("groupTitle").innerText = currentGroup.title;
  document.getElementById("groupTopic").innerText = currentGroup.topic;
  document.getElementById("searchInput").value = "";
  document.getElementById("guestNameInput").value = "";
  renderMembers();
  loadProgress();
  loadComments();
  
  // Mặc định ẩn chi tiết nội dung gợi ý cho gọn
  document.getElementById("topicContent").classList.remove("hidden-topic");
  document.getElementById("topicArrow").classList.add("rotate");
}

function backHome(){
  document.getElementById("discussion").classList.add("hidden");
  document.getElementById("groupContainer").classList.remove("hidden");
  currentGroup = null;
}

function toggleTopic(){
  document.getElementById("topicContent").classList.toggle("hidden-topic");
  document.getElementById("topicArrow").classList.toggle("rotate");
}

function renderMembers(){
  const select = document.getElementById("memberSelect");
  select.innerHTML = "";
  // Đổ danh sách thành viên của nhóm hiện tại vào ô Dropdown
  currentGroup.members.forEach(member => {
    select.innerHTML += `<option value="${member}">${member}</option>`;
  });
}

// Gửi góp ý lên Firebase
function submitComment(){
  const selectedMember = document.getElementById("memberSelect").value;
  const guestName = document.getElementById("guestNameInput").value.trim();
  const member = guestName || selectedMember;
  const comment = document.getElementById("commentInput").value.trim();

  if(!member){
    showToast("Vui lòng chọn đại biểu hoặc nhập họ tên!");
    return;
  }

  if(!comment){
    showToast("Vui lòng nhập ý kiến!");
    return;
  }

  // Khóa nút để tránh spam (Tùy chọn)
  const btn = document.querySelector(".form-box button");
  btn.disabled = true;
  btn.innerText = "ĐANG GỬI...";

  db.collection("thaoluan").add({
    groupId: currentGroup.id,
    member: member,
    comment: comment,
    time: new Date().toLocaleString('vi-VN'),
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    document.getElementById("commentInput").value = "";
    document.getElementById("guestNameInput").value = "";
    showToast("Đã gửi góp ý thành công!");
  }).catch((error) => {
    showToast("Lỗi kết nối! Vui lòng thử lại.");
    console.error(error);
  }).finally(() => {
    btn.disabled = false;
    btn.innerText = "GỬI Ý KIẾN";
  });
}

function loadComments(){
  const box = document.getElementById("commentsList");
  box.innerHTML = "";
  
  // Lọc lấy comment của tổ hiện tại, sau đó đảo ngược để tin mới nhất lên đầu
  const groupComments = comments.filter(item => item.groupId === currentGroup.id).reverse();
  
  if (groupComments.length === 0) {
    box.innerHTML = "<p style='opacity:0.6; text-align:center; padding: 20px 0;'>Chưa có ý kiến nào.</p>";
    return;
  }

  groupComments.forEach(item => {
    box.innerHTML += `
      <div class="comment-item">
        <h4>${escapeHTML(item.member)}</h4>
        <p>${escapeHTML(item.comment)}</p>
        <small>⏳ ${escapeHTML(item.time || 'Vừa xong')}</small>
      </div>
    `;
  });
}

function loadProgress(){
  const box = document.getElementById("progressList");
  box.innerHTML = "";
  
  currentGroup.members.forEach(member => {
    // Kiểm tra xem thành viên này đã có ý kiến trong mảng comments chưa
    const done = comments.some(item => item.groupId === currentGroup.id && item.member === member);
    box.innerHTML += `
      <div class="progress-item">
        <span>${member}</span>
        <span class="${done ? 'done' : 'pending'}">${done ? '✓ Đã góp ý' : 'Chưa góp ý'}</span>
      </div>
    `;
  });
  
  updateStats();
}

function updateStats(){
  const total = currentGroup.members.length;
  
  // 1. Lọc lấy tất cả các ý kiến thuộc về Tổ hiện tại
  const groupComments = comments.filter(item => item.groupId === currentGroup.id);
  const listedMemberNames = new Set(currentGroup.members);
  
  // 2. Trích xuất tên người gửi và dùng Set để LOẠI BỎ TRÙNG LẶP
  // Ví dụ: ["A", "B", "A", "A"] sẽ bị biến thành ["A", "B"]
  const uniqueMembers = new Set(
    groupComments
      .map(item => item.member)
      .filter(member => listedMemberNames.has(member))
  );
  
  // 3. Đếm số lượng người (size) thay vì đếm số bài
  const done = uniqueMembers.size; 
  
  // 4. Tính toán số người chưa nộp và %
  const pending = total - done;
  const percent = Math.round((done / total) * 100) || 0; 

  document.getElementById("totalMembers").innerText = total;
  document.getElementById("doneMembers").innerText = done;
  document.getElementById("pendingMembers").innerText = pending;
  document.getElementById("progressFill").style.width = percent + "%";
  document.getElementById("progressText").innerText = `${percent}% hoàn thành`;
}
function filterMembers() {
  // Lấy từ khóa người dùng gõ và chuyển thành chữ thường
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  const select = document.getElementById("memberSelect");
  select.innerHTML = "";

  // Lọc ra những người trong tổ có tên chứa từ khóa
  const filtered = currentGroup.members.filter(member => 
    member.toLowerCase().includes(keyword)
  );

  // Cập nhật lại danh sách Dropdown
  if (filtered.length === 0) {
    select.innerHTML = `<option value="">Không tìm thấy đại biểu, hãy nhập tên ở ô bên dưới</option>`;
  } else {
    filtered.forEach(member => {
      select.innerHTML += `<option value="${member}">${member}</option>`;
    });
  }
}
