import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Card from "../components/Card";
import Icon from "../components/Icon/Icon";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.desc}>
        <span className={styles.title}>BB Food</span>
        <span className={styles.subTitle}>The Bakery-Cafe & Restaurant</span>
      </div>
      <ul className={styles.list}>
        <Link href="/foods">
          <li className={styles.listItem}>
            <Icon icon="food" size={60} color="white" />
            <span className={styles.menuDesc}>Foods</span>
          </li>
        </Link>
        <Link href="/breakfast">
          <li className={styles.listItem}>
            <Icon icon="food-egg" size={60} color="white" />
            <span className={styles.menuDesc}>Breakfast</span>
          </li>
        </Link>
        <Link href="/desserts">
          <li className={styles.listItem}>
            <Icon icon="food-cake" size={60} color="white" />
            <span className={styles.menuDesc}>Desserts</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}
