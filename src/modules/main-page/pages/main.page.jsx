import { useGetGoodsQuery, useGetSettingsQuery } from "@app/core/types";
import { ProductsListLoading } from "../components/products-list-loading/products-list-loading";
import ProductsList from "../components/products-list/products-list.component";
import MainSlider from "../components/MainSlider/MainSlider";

export const MainPage = () => {
  const { data, loading, error } = useGetGoodsQuery();
  // const { data:settings} = useGetSettingsQuery({fetchPolicy: 'cache-only'})
 console.log(data)
  if (error) {
    return <h3>Ого , здається сталась помилка , зайдіт пізніше</h3>;
  }
  if (loading) {
    return <ProductsListLoading items={8} />;
  }
  if (!data) {
    return <h3>Хм , мабуть товари закінчились , зайдіт пізніше</h3>;
  }

  return (
    <>
      <MainSlider />
      {data.categories.map((categorie) => (
        <ProductsList item={categorie.goods_items} title={categorie.title} key={`categorie:${categorie.id}`}/>
      ))}
    </>
  );
};
