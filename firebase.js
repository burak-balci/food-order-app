import { initializeApp } from "firebase/app";
import { addDoc, getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const addOrder = async (data) => {
  try {
    const result = await addDoc(collection(db, "orders"), data);
    return result.id;
  } catch (error) {
    console.log(error);
  }
};
