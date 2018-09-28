const admin = require('firebase-admin');
const serviceAccount = require('../firebaseAdminKey.json');
const logger = require('../logger');


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.GOOGLE_DB_URL,
});
const auth = admin.auth();

async function verifyIdToken(token) {
    try {
        const decodedToken = await auth.verifyIdToken(token);
        return decodedToken;
    } catch (err) {
        logger.info(err.message);
        return null;
    }
}

module.exports = {
    verifyIdToken,
};
