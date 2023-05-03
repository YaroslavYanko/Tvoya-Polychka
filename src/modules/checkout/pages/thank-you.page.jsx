import { LineImages } from "@app/common/components/line-images/line-images";
import styles from "../checkout.module.css";

import shoppingBag from "../../../images/icons/shopping_bag.png";

export default function ThankYouPage() {
  return (
    <>
      <LineImages />
      <div className={styles.thanksPage}>
        <h2>Дякуємо за замовлення </h2>

          <img src={shoppingBag} alt="" />

      </div>
    </>
  );
}
