import React from "react";
import Card from "../../components/Card";
import styles from "../../styles/Foods.module.css";

const Foods = () => {
  return (
    <div className={styles.container}>
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

export default Foods;
