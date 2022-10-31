import React from "react";
import styles from "../styles/Header.module.css";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const route = useRouter();

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
            <Link href="/">
              <li
                className={
                  route.pathname === "/" ? styles.active : styles.listItem
                }
              >
                Homepage
              </li>
            </Link>
            <Link href="/foods">
              <li
                className={
                  route.pathname === "/foods" ? styles.active : styles.listItem
                }
              >
                Foods
              </li>
            </Link>
            <Link href="/desserts">
              <li
                className={
                  route.pathname === "/desserts"
                    ? styles.active
                    : styles.listItem
                }
              >
                Desserts
              </li>
            </Link>
            <Link href="/breakfast">
              <li
                className={
                  route.pathname === "/breakfast"
                    ? styles.active
                    : styles.listItem
                }
              >
                Breakfast
              </li>
            </Link>
          </ul>
        </div>
        <div className={styles.item}>
          <span className={styles.logo}>BB Food</span>
        </div>
        <div className={styles.item}>
          <Link href="/signin">
            <span
              className={
                route.pathname === "/signin"
                  ? styles.activeButton
                  : styles.button
              }
            >
              Sign in
            </span>
          </Link>
          <Link href="/signup">
            <span
              className={
                route.pathname === "/signup"
                  ? styles.activeButton
                  : styles.button
              }
            >
              Sign up
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
