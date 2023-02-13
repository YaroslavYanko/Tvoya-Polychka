import { useGetProductsItemsQuery } from "@app/core/types";
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

  if (error) {
    return <h3>Ого , здається сталась помилка , зайдіт пізніше</h3>;
  }
  if (loading) {
    return "s";
  }
  if (!data) {
    return <h3>Хм , мабуть товари закінчились , зайдіт пізніше</h3>;
  }
  console.log(data.goods[0])
  return (
    <div className={style.wrapper__product_page}>
      <ProductItem  {...data.goods[0]}/>
    </div>
  );
};
