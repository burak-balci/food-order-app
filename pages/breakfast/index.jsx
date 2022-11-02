import React from "react";
import Card from "../../components/Card";
import styles from "../../styles/Breakfast.module.css";

const Breakfast = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.container}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default Breakfast;
