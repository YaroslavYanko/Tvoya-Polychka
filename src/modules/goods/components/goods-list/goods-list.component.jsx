// import goodsItems from "@app/mocks/goods.json";
import GoodsItem from "../goods-item/goods-item.component";

import styles from "..//goods-item.module.css";

const GoodsList = ({ items }) => {
  console.log(items)
  return (
    <div className={styles.container}>
      <div className={styles.products__title}>
        <h3>Косметика</h3>
      </div>
      <div className={styles.products}>
        {items.map((item) => (
          <GoodsItem {...item} key={`goods-${item.id}`} />
        ))}
      </div>
      <a className={styles.btn__catalog} href="/">
        <span>Перейти до каталогу з товарами</span>
      </a>
    </div>
  );
};

export default GoodsList;
