import React from "react";
import styles from "../styles/Card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/easy-chocolate-molten-cakes-37a25eb.jpg?quality=90&webp=true&resize=375,341"
          alt=""
          className={styles.image}
        />
      </div>
      <div className={styles.innerContainer}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>Chocolate molten cakes</span>
        </div>
        <div>
          <span className={styles.desc}>
            Bake an impressive dinner party dessert with minimum fuss – these
            chocolate puddings, also known as chocolate fondant or lava cake,
            have a lovely gooey centre
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
