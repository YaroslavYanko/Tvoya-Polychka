import { cloudinary } from "@app/core/cloudinary";
import { AdvancedImage } from "@cloudinary/react";

import styles from "..//goods-item.module.css";

// interface GoodsItemProps {
//     shortName: string,
//     title: string,
//     imagePath: string,
//     description: string,
//     price: number

// }

const GoodsItem = ({ shortName, title, image, price }) => {
  const imageCloud = cloudinary.image(image);
  console.log(imageCloud)
  // imageCloud.addTransformation("w_984,h_440,dpr_2.0");

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
    </div>
  );
};

export default GoodsItem;
