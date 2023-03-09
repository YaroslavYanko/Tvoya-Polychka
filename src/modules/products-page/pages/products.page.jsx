import { useGetGoodsQuery } from "@app/core/types";
import { ProductsListLoading } from "@app/modules/main-page/components/products-list-loading/products-list-loading";
import ProductsListGeneral from "../components/products-list-general/products-list-general";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { CategorySelector } from "../components/category-selector/category-selector";
import styles from "./products.page.module.css";
import { LineImages } from "@app/common/components/line-images/line-images";

export const ProductsPage = () => {
  const { data, loading, error } = useGetGoodsQuery();

  const [selectedCategory, setSelectedCategory] = useState("all");

  if (error) {
    return <h3>Ого , здається сталась помилка , зайдіт пізніше</h3>;
  }
  if (loading) {
    return <ProductsListLoading items={8} />;
  }
  if (!data) {
    return <h3>Хм , мабуть товари закінчились , зайдіт пізніше</h3>;
  }

  const allProducts = data.categories.reduce((acc, category) => {
    acc.push(...category.goods_items);
    return acc;
  }, []);

  const products =
    selectedCategory === "all"
      ? allProducts
      : data.categories.find((category) => category.slug === selectedCategory)
          .goods_items;

  const handleCategorySelect = (categorySlug) => {
    setSelectedCategory(categorySlug);
  };

  return (
    <div>
      <LineImages />

      <div className={styles.products__page}>
        <Helmet>
          <title>Косметика</title>
        </Helmet>

        <CategorySelector onCategorySelect={handleCategorySelect} />

        <ProductsListGeneral products={products} />
      </div>
    </div>
  );
};
