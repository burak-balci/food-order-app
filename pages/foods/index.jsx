import React from "react";
import Card from "../../components/Card";
import styles from "../../styles/Foods.module.css";

const Foods = ({ data }) => {
  const filtered = data.filter((item) => item.type === "food");
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

export default Foods;
