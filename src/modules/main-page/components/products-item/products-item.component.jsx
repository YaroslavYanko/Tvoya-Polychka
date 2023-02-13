import { cloudinary } from "@app/core/cloudinary";
import { AdvancedImage } from "@cloudinary/react";
import { Link } from "react-router-dom";

import styles from "..//products-item.module.css";


const ProductsItem = ({ shortName, title, image, price,id }) => {
  const imageCloud = cloudinary.image(image);


  return (
    <div className={styles.wrapper__product}>
      <Link to={`/products/${id}`} className={styles.product__card}>   
        <AdvancedImage cldImg={imageCloud} />
        <div className={styles.product__card_description}>
          <h5 className={styles.product__card_shortName}>{shortName}</h5>
          <h4 className={styles.product__card_title}>{title}</h4>
          <span className={styles.product__card_price}>{price} грн</span>
        </div>
      </Link>
    </div>
  );
};

export default ProductsItem;
