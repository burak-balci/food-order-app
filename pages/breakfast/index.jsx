import React from "react";
import Card from "../../components/Card";
import styles from "../../styles/Breakfast.module.css";

const Breakfast = ({ data }) => {
  const filtered = data.filter((item) => item.type === "breakfast");
  return (
    <div className={styles.container}>
      {filtered.map((item) => (
        <Card key={item._id} item={item} />
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.VERCEL_URL}/api/products`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default Breakfast;
