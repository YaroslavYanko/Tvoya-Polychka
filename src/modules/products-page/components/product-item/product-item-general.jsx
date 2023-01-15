import React from 'react'
import styles from "./product-item-general.module.css"
import { AdvancedImage } from "@cloudinary/react";
import { cloudinary } from "@app/core/cloudinary";

export const ProductItemGeneral = ({shortName, title, image, price}) => {
  const imageCloud = cloudinary.image(image);

  return (
    <div className={styles.wrapper__product}>
    <a href="/" className={styles.product__card}>
      <AdvancedImage cldImg={imageCloud} />
      {/* <img src={imagePath} alt={title} /> */}
      <div className={styles.product__card_description}>
        <h5 className={styles.product__card_shortName}>{shortName}</h5>
        <h4 className={styles.product__card_title}>{title}</h4>
        <span className={styles.product__card_price}>{price} грн</span>
      </div>
    </a>
    <button>Добавити до корзини</button>
  </div>
  )
}
