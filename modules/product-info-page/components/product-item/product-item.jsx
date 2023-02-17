import { InputNumber } from "@app/common/components/input-number-item/input-number-item";
import { cloudinary } from "@app/core/cloudinary";
import { AdvancedImage } from "@cloudinary/react";
import style from "../../product-info-page.module.css";

export const ProductItem = ({ title, image, price, description }) => {
  const imageCloud = cloudinary.image(image);

  return (
    <div className={style.wrapper_product_item}>
      <div className={style.product__item_title}>
        <AdvancedImage cldImg={imageCloud} />
        <div className={style.item_title}>
          <h1>{title}</h1>
          <InputNumber />

          <button >до кошика</button>
        </div>
      </div>
      <div className={style.product__item_description}>
        <div>
          <h2>Опис</h2>
        </div>

        <p>{description}</p>
      </div>
    </div>
  );
};
