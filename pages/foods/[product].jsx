import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/ProductDetail.module.css";

const ProductDetail = () => {
  const route = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src="https://www.donaldrussell.com/media/catalog/product/q/1/q177.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
          alt=""
          className={styles.image}
        />
      </div>
      <div className={styles.infoContainer}>
        <span className={styles.title}>Bramley Apple Pies</span>
        <span className={styles.subTitle}>Classic British dessert</span>
        <ul className={styles.list}>
          <li className={styles.listItem}>British Bramley apples</li>
          <li className={styles.listItem}>Crisp butter pastry</li>
          <li className={styles.listItem}>Individual servings</li>
        </ul>
        <div>
          <span className={styles.listItem}>Quantity : </span>
          <select className={styles.select}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className={styles.price}>
          <span className={styles.listItem}>Price : </span> $ 44
        </div>
        <button className={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
