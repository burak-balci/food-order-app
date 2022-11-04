import React from "react";
import Card from "../../components/Card";
import styles from "../../styles/Breakfast.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Breakfast = ({ data }) => {
  const filtered = data.filter((item) => item.type === "breakfast");
  return (
    <div className={styles.container}>
      {filtered.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  let data = [];
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  return {
    props: {
      data,
    },
  };
};

export default Breakfast;
