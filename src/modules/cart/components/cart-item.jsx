import styles from "./cart-sidebar.module.css";
import { cloudinary } from "@app/core/cloudinary";
import { AdvancedImage } from "@cloudinary/react";
import { InputNumber } from "@app/common/components/input-number-item/input-number-item";
import { changeCartItemAmount, remoceItemFromCart } from "../store/cart-state";

import { BsTrash } from "react-icons/bs";


export const CartItem = ({ image, price, shortName, count, productItemId ,handleUpdateToCart}) => {

  const imageCloud = cloudinary.image(image);

  const handleChangeAmount = (amount) => {
    changeCartItemAmount(productItemId, amount);
    handleUpdateToCart()
  };

  const handleDeleteItem = () => {
    remoceItemFromCart(productItemId);
    handleUpdateToCart()
  };

  return (
    <div className={styles.cart__item}>
      <div className={styles.cart__item_info}>
        <div className={styles.cart__box_image}>
          <AdvancedImage
            className={styles.cart__item_image}
            cldImg={imageCloud}
          />
        </div>

        <div className={styles.cart__info}>
          <span>{shortName}</span>
          <span>
            Ціна: {count} х {price} = {count * price} грн
          </span>
          <div className={styles.cart__item_btn}>
            <InputNumber value={count} setValue={handleChangeAmount} />
            <button
              onClick={handleDeleteItem}
              className={styles.cart__btn_delete}
            >

              <BsTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
