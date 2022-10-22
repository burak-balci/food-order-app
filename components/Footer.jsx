import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <span className={styles.logo}>BB Food</span>
      </div>
      <div className={styles.innerContainer}>
        <span className={styles.title}>Working Hours</span>
        <ul className={styles.list}>
          <li>
            Monday Until Friday
            <span className={styles.bold}> 9:00 - 22:00</span>
          </li>
          <li>
            Saturday - Sunday
            <span className={styles.bold}> 12:00 - 24:00</span>
          </li>
        </ul>
      </div>
      <div className={styles.innerContainer}>
        <span className={styles.title}>Find Our Restorants</span>
        <ul className={styles.list}>
          <li>
            935 Garfield Ave, Jersey City, NJ 07304
            <span className={styles.bold}> +1 201-792-2272</span>
          </li>
          <li>
            49 Mall Dr W, Jersey City, NJ 07302
            <span className={styles.bold}> +1 201-793-2333</span>
          </li>
          <li>
            367 Central Ave, Jersey City, NJ 07307
            <span className={styles.bold}> +1 201-794-2444</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
