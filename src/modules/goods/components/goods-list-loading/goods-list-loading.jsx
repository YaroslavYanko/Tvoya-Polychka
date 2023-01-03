import { GoodItemLoading } from "../goods-item-loading/goods-item-loading.component";
import styles from '../goods-item.module.css'
export const GoodsListLoading = ({items}) => {
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {new Array(items).fill(1).map((item) => (
          <GoodItemLoading />
        ))}
      </div>
    </div>
  );
};
