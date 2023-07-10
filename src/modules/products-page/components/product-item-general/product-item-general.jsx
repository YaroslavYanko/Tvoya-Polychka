import React from "react";
import styles from "./product-item-general.module.css";
import { AdvancedImage } from "@cloudinary/react";
import { cloudinary } from "@app/core/cloudinary";
import { addItemToCart } from "@app/modules/cart/store/cart-state";
import { Link } from "react-router-dom";

export const ProductItemGeneral = ({
  shortName,
  image,
  price,
  id,
  handleUpdateToCart,
}) => {
  const imageCloud = cloudinary.image(image);

  const handleClick = () => {
    // Викликаємо оригінальну функцію handleAddToCart
    addItemToCart(id);
    handleUpdateToCart();
  };

  return (
    <div className={styles.wrapper__product}>
      <Link to={`/products/${id}`}>
        <div className={styles.product__card}>
          <AdvancedImage cldImg={imageCloud} />

          <div className={styles.product__card_description}>
            <h2 className={styles.product__card_shortName}>{shortName}</h2>
            <div className={styles.product__line}></div>
            <br />
            <span className={styles.product__card_price}>{price} грн</span>
          </div>
        </div>
      </Link>
      <button className={styles.btn__card} onClick={handleClick}>
        до кошика
      </button>
    </div>
  );
};
