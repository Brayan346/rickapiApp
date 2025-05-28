import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
apiKey: "AIzaSyBRbJLxP6XXXRLhMcCAwbCXSfWe16Gh5u4",
authDomain: "myapi-c1ace.firebaseapp.com",
projectId: "myapi-c1ace",
storageBucket: "myapi-c1ace.firebasestorage.app",
messagingSenderId: "191753857197",
appId: "1:191753857197:web:72625966941edae332fe24"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!

export { auth, db };