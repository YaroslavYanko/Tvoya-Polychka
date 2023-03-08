import { LineImages } from "@app/common/components/line-images/line-images";
import { useGetProductsItemsQuery } from "@app/core/types";
import { useCartItems } from "@app/modules/checkout/hooks/use-cart-items";
import { useParams } from "react-router-dom";

import { ProductItem } from "../components/product-item/product-item";
import style from "../product-info-page.module.css";

export const ProductInfoPage = () => {
  const { id } = useParams();

  const { data, loading, error } = useGetProductsItemsQuery({
    variables: {
      productsIds: id,
    },
  });

  const {cartItems } = useCartItems()

  if (error) {
    return <h3>Ого , здається сталась помилка , зайдіт пізніше</h3>;
  }
  if (loading) {
    return " ";
  }
  if (!data) {
    return <h3>Хм , мабуть товари закінчились , зайдіт пізніше</h3>;
  }

  return (
    <div>
      <LineImages />
      <div className={style.wrapper__product_page}>
        <ProductItem {...data.goods[0]}  count={cartItems[id]} />
      </div>
    </div>
  );
};
