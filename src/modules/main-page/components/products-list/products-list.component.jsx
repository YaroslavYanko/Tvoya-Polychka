// import goodsItems from "@app/mocks/goods.json";
import ProductsItem from "../products-item/products-item.component";

import styles from "..//products-item.module.css";

const ProductsList = ({ item,title }) => {
  const products = item.slice(0,8)

  return (
    <div className={styles.container}>
      <div className={styles.products__title}>
        <h2>{title}</h2>
      </div>
      <div className={styles.products}>
        {products.map((item) => (
          <ProductsItem {...item} key={`goods-${item.id}`} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
