import styles from "..//products-item.module.css";

export const ProductsItemLoading = () => {
  return (
    <div className={styles.wrapper__product}>
      <div className={styles.product__card}>
        <div className={`${styles.skeleton__img} ${styles.skeleton}`}></div>
        <div className={styles.product__card_description}>
          <div
            className={`${styles.skeleton__card_shortName} ${styles.skeleton}`}
          ></div>
          <div
            className={`${styles.skeleton__card_title} ${styles.skeleton}`}
          ></div>
          <div
            className={`${styles.skeleton__card_price} ${styles.skeleton}`}
          ></div>
        </div>
      </div>
    </div>
  );
};
