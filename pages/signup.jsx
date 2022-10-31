import Image from "next/image";
import React from "react";
import styles from "../styles/Signup.module.css";
import restaurant from "../assets/images/signinimg.jpg";

const SignUp = () => {
  return (
    <div className={styles.container}>
      <Image
        src={restaurant}
        alt="restaurant"
        width="433"
        height="577"
        className={styles.image}
      />
      <div className={styles.innerContainer}>
        <form className={styles.list}>
          <div className={styles.listItem}>
            <span className={styles.text}>Email</span>
            <input
              placeholder="Please enter your email address."
              type="text"
              className={styles.input}
            />
          </div>
          <div className={styles.listItem}>
            <span className={styles.text}>Password</span>
            <input
              placeholder="Please enter your password."
              type="password"
              className={styles.input}
            />
          </div>
          <div className={styles.listItem}>
            <span className={styles.text}>Password Confirm</span>
            <input
              placeholder="Please enter your password again."
              type="password"
              className={styles.input}
            />
          </div>
          <button className={styles.button}>
            <span className={styles.buttonText}>Sign up</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
