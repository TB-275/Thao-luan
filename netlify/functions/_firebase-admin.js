const admin = require("firebase-admin");

function getCredential() {
  const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT;

  if (!serviceAccountJson) {
    throw new Error("Missing FIREBASE_SERVICE_ACCOUNT environment variable");
  }

  const serviceAccount = JSON.parse(serviceAccountJson);

  if (serviceAccount.private_key) {
    serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, "\n");
  }

  return admin.credential.cert(serviceAccount);
}

function getFirestore() {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: getCredential()
    });
  }

  return admin.firestore();
}

module.exports = { admin, getFirestore };
