import { initializeApp } from "firebase/app";
import { addDoc, getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIRlm-vPrEnPtljE9OHZQoYQaBIuYN3E4",
  authDomain: "food-order-app-cd350.firebaseapp.com",
  projectId: "food-order-app-cd350",
  storageBucket: "food-order-app-cd350.appspot.com",
  messagingSenderId: "301599105046",
  appId: "1:301599105046:web:63834effe0020e1b141537",
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
