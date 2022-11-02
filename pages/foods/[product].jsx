import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/ProductDetail.module.css";

const ProductDetail = ({ data }) => {
  const route = useRouter();
  const filtered = data.filter((item) => item.title === route.query.product);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={filtered[0].image}
          alt={filtered[0].title}
          className={styles.image}
        />
      </div>
      <div className={styles.infoContainer}>
        <span className={styles.title}>{filtered[0].title}</span>
        <span className={styles.subTitle}>{filtered[0].subTitle}</span>
        <ul className={styles.list}>
          {filtered[0].desc.map((item, index) => (
            <li key={index} className={styles.listItem}>
              {item}
            </li>
          ))}
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
          <span className={styles.listItem}>Price : </span> ${" "}
          {filtered[0].price}
        </div>
        <button className={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/products`);
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: { product: item.title },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/products`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default ProductDetail;
