import { useCartItems } from "@app/modules/checkout/hooks/use-cart-items";

import { CartItem } from "../cart-item";

import styles from "../cart-sidebar.module.css";

export const CartList = ({handleUpdateToCart}) => {
  const { data, previousData, cartItems } = useCartItems();

  const cartSum =
    data?.goods.reduce((acc, value) => {
      return acc + value.price * cartItems[value.id];
    }, 0) ?? 0;

  return (
    <div className={styles.cart__sidebar_basket}>
      <div className={styles.checkout__price}>
        <span>Загальна сума: {cartSum} грн</span>
      </div>
      <div className={styles.cart__basket_items}>
        {(data || previousData)?.goods.map((item) => (
          <CartItem
            {...item}
            handleUpdateToCart={handleUpdateToCart}
            count={cartItems[item.id]}
            productItemId={item.id}
            key={`product-cart-item-${item.id}`}
          />
        ))}
      </div>
    </div>
  );
};
