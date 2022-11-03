import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "../components/Icon/Icon";
import styles from "../styles/Basket.module.css";
import { deleteItem, clearBasket } from "../context/basketSlice";
import axios from "axios";

const Basket = () => {
  const { basket } = useSelector((state) => state.basketReducer);
  const [totalP, setTotalP] = useState(0);
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();

  const total = () => {
    let totalPrice = 0;
    basket &&
      basket.map((item) => {
        totalPrice += item.quantity * item.item.price;
      });
    setTotalP(totalPrice);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (address && name) {
      axios
        .post(`${process.env.VERCEL_URL}/api/orders`, {
          customer: name,
          address: address,
          items: basket,
        })
        .then((res) => {
          if (res.status === 201) {
            dispatch(clearBasket());
            setModal(false);
          }
        });
    }
  };

  useEffect(() => {
    total();
  }, [basket]);

  return (
    <div className={styles.container}>
      {modal && (
        <div className={styles.modalContainer}>
          <form onSubmit={handleSubmit} className={styles.modalContent}>
            <span className={styles.inputTitle}>Name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Please enter your name"
              className={styles.input}
              type="text"
            />
            <span className={styles.inputTitle}>Address</span>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Please enter your address"
              className={styles.input}
              type="text"
            />
            <button type="submit" className={styles.modalButton}>
              Submit
            </button>
          </form>
        </div>
      )}
      {basket.length > 0 && (
        <div className={styles.left}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.listTitle}>Products</th>
                <th className={styles.listTitle}>Description</th>
                <th className={styles.listTitle}>Quantity</th>
                <th className={styles.listTitle}>Price</th>
                <th className={styles.listTitle}>Delete</th>
              </tr>
            </thead>
            <tbody>
              {basket.map((item, index) => (
                <tr className={styles.list} key={index}>
                  <td className={styles.listItem}>
                    <img
                      className={styles.image}
                      src={item.item.image}
                      alt=""
                    />
                  </td>
                  <td className={styles.listItem}>{item.item.title}</td>
                  <td className={styles.listItem}>{item.quantity}</td>
                  <td className={styles.listItem}>$ {item.item.price}</td>
                  <td className={styles.listItem}>
                    <span
                      onClick={() => dispatch(deleteItem(item.item._id))}
                      className={styles.button}
                    >
                      <Icon icon="xmark" size="24" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className={styles.right}>
        {basket.length > 0 ? (
          <>
            <div className={styles.orderTitle}>Order Summary</div>
            <div className={styles.orderDesc}>{basket.length} Products</div>
            <div className={styles.orderTotal}>Total: $ {totalP}</div>
            <button
              onClick={() => setModal(true)}
              className={styles.orderButton}
            >
              Checkout
            </button>
          </>
        ) : (
          <div className={styles.warn}>There are no items in your basket</div>
        )}
      </div>
    </div>
  );
};

export default Basket;
