import { useGetGoodsQuery } from "@app/core/types";
import { ProductsListLoading } from "../components/products-list-loading/products-list-loading";
import ProductsList from "../components/products-list/products-list.component";
import styles from "../components/products-item.module.css";
import { UsefulInformation } from "@app/modules/header/useful-information/useful-information";

export const MainPage = () => {
  const { data, loading, error } = useGetGoodsQuery();
  // const { data:settings} = useGetSettingsQuery({fetchPolicy: 'cache-only'})

  if (error) {
    return <h3>Ого , здається сталась помилка , зайдіт пізніше</h3>;
  }
  if (loading) {
    return <ProductsListLoading items={8} />;
  }
  if (!data) {
    return <h3>Хм , мабуть товари закінчились , зайдіт пізніше</h3>;
  }

  console.log(data.categories);
  const categories = data.categories.slice(0, 2);

  return (
    <div className={styles.main__page_wrapper}>
      <UsefulInformation />
      {categories.map((categorie) => (
        <ProductsList
          item={categorie.goods_items}
          title={categorie.title}
          key={`categorie:${categorie.id}`}
        />
      ))}
    </div>
  );
};
