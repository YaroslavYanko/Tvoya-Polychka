import { useGetGoodsQuery } from "@app/core/types";
import { GoodsListLoading } from "../components/goods-list-loading/goods-list-loading";
import GoodsList from "../components/goods-list/goods-list.component";
import MainSlider from "../components/MainSlider/MainSlider";


export const GoodsPage = () => {
  const { data, loading, error } = useGetGoodsQuery();

  if (error) {
    return <h3>Ого , здається сталась помилка , зайдіт пізніше</h3>;
  }
  if (loading) {
    return <GoodsListLoading items={8} />;
  }
  if (!data) {
    return <h3>Хм , мабуть товари закінчились , зайдіт пізніше</h3>;
  }

  return (
    <>
     <MainSlider/>
      <GoodsList items={data.goods} />
    </>
  );
};
