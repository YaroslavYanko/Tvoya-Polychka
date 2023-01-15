import { useGetGoodsQuery } from "@app/core/types";
import { ProductsListLoading } from "@app/modules/main-page/components/products-list-loading/products-list-loading";
import ProductsListGeneral from "../components/products/products-list-general";
import styles from "./products.page.module.css";

export const ProductsPage = ({showAllProducts}) => {
  const { data, loading, error } = useGetGoodsQuery();

  if (error) {
    return <h3>Ого , здається сталась помилка , зайдіт пізніше</h3>;
  }
  if (loading) {
    return <ProductsListLoading items={8} />;
  }
  if (!data) {
    return <h3>Хм , мабуть товари закінчились , зайдіт пізніше</h3>;
  }

  const products = [];
 

  data.categories.map((categori) => {
    return categori.goods_items.map((product) => {
      products.push(product);
    });
  });


  return (
    <>
      <ProductsListGeneral products={products} />
    </>
  );
};
