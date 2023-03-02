import { InputNumber } from "@app/common/components/input-number-item/input-number-item";
import { cloudinary } from "@app/core/cloudinary";
import { addItemToCart } from "@app/modules/cart/store/cart-state";
import { AdvancedImage } from "@cloudinary/react";
import styles from "../../product-info-page.module.css";
import Description from "./product-description/product-description";

export const ProductItem = ({
  title,
  image,
  price,
  description,
  shortName,
  characteristics,
  ingredients,
  id,
}) => {
  const imageCloud = cloudinary.image(image);

  const lines = characteristics.split("\n");

  const newСharacter = lines.map((line) => {
    if (line.includes(":")) {
      const index = line.indexOf(":");

      return (
        <li key={line}>
          <b> {line.substring(0, index)}:</b> {line.substring(index + 1)}
        </li>
      );
    } else {
      return <li>{line}</li>;
    }
  });

  const handleAddToCart = () => {
    addItemToCart(id);
  };

  return (
    <div className={styles.wrapper_product_item}>
      <div className={styles.product__item_title}>
        <AdvancedImage cldImg={imageCloud} />
        <div className={styles.item_title}>
          <h1>{shortName}</h1>
          <div className={styles.line}></div>
          <h3>{title}</h3>
          <div className={styles.characteristics}>
            <ul>{newСharacter}</ul>
          </div>
          <div className={styles.price}>
            <div>
              <InputNumber />
              <span>{price} грн</span>
            </div>
            <button onClick={handleAddToCart}>до кошика</button>
          </div>
        </div>
      </div>

      <div className={styles.product__item_description}>
        <div className={styles.line}></div>
        <Description description={description} ingredients={ingredients} />
      </div>
    </div>
  );
};
