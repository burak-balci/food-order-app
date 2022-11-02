import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/Card.module.css";

const Card = ({ item }) => {
  const { route } = useRouter();

  return (
    <Link href={`${route}/${item.title}`}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={item.image} alt={item.title} className={styles.image} />
        </div>
        <div className={styles.innerContainer}>
          <div className={styles.titleContainer}>
            <span className={styles.title}>{item.title}</span>
          </div>
          <div>
            <span className={styles.price}>From ${item.price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
