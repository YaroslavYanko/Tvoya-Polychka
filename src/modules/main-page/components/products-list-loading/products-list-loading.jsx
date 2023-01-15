import { ProductsItemLoading } from "../products-item-loading/products-item-loading.component";
import styles from '../products-item.module.css'

export const ProductsListLoading = ({items}) => {
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {new Array(items).fill(1).map((item,index) => (
          <ProductsItemLoading key={`loading - ${index}`} />
        ))}
      </div>
    </div>
  );
};
