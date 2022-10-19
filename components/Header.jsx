import React from "react";
import styles from "../styles/Header.module.css";
import Head from "next/head";

const Header = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.item}>
          <ul className={styles.list}>
            <li className={styles.listItem}>Homepage</li>
            <li className={styles.listItem}>Foods</li>
            <li className={styles.listItem}>Desserts</li>
            <li className={styles.listItem}>Breakfast</li>
          </ul>
        </div>
        <div className={styles.item}>
          <span className={styles.logo}>BB Food</span>
        </div>
        <div className={styles.item}>
          <button className={styles.button}>Sign in</button>
        </div>
      </div>
    </>
  );
};

export default Header;
