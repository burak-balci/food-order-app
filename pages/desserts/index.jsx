import React from "react";
import Card from "../../components/Card";
import styles from "../../styles/Desserts.module.css";

const Desserts = ({ data }) => {
  const filtered = data.filter((item) => item.type === "dessert");
  return (
    <div className={styles.container}>
      {filtered.map((item) => (
        <Card key={item._id} item={item} />
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default Desserts;
