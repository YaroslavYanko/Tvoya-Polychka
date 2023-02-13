import { ProductItemGeneral } from "../product-item-general/product-item-general";
import styles from "./products-list.module.css";

const ProductsListGeneral = ({ products }) => {

  return (
    <div className={styles.container}>
      {products.map((item) => (
        <ProductItemGeneral {...item} key={`productsGeneral-${item.id}`} />

      ))}
    
    </div>
  );
};

export default ProductsListGeneral;
