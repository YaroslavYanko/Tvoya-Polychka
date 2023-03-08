import { useReactiveVar } from "@apollo/client";
import { useOnClickOutside } from "@app/common/hooks/use-on-click-outside.hook";
import { useGetProductsItemsQuery } from "@app/core/types";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { cartOpenedState, closeCart } from "../store/cart-opened-state";
import { cartState } from "../store/cart-state";
import { CartList } from "./cart-list/cart-list";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { RiCloseFill } from "react-icons/ri";

import styles from "./cart-sidebar.module.css";

export const CartSidebar = () => {
  const isOpened = useReactiveVar(cartOpenedState);
  const cartItems = useReactiveVar(cartState);

  const { data } = useGetProductsItemsQuery({
    variables: {
      productsIds: Object.keys(cartItems),
    },
  });

  const disableBodyScroll = () => {
    document.body.classList.add("scroll-lock");
  };

  const enableBodyScroll = () => {
    document.body.classList.remove("scroll-lock");
  };
  const cartRef = useRef(null);

  //Закрити при при кліку по windowElement
  useOnClickOutside(cartRef, (e) => {
    const path = e.composedPath();

    const isCartButton = path.find((el) => el.id === "basket_header");
    if (!isCartButton && isOpened) {
      closeCart();
    }
  });

  const handleCheckoutClick = () => {
    closeCart();
  };

  const cartSum =
    data?.goods.reduce((acc, value) => {
      return acc + value.price * cartItems[value.id];
    }, 0) ?? 0;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    if (isOpened && mediaQuery.matches) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }
  }, [isOpened]);

  return (
    <div
      ref={cartRef}
      className={`${styles.cart__sidebar} ${
        !isOpened ? styles.cart__sidebar_show : null
      }`}
    >
      <div>
      <div className={styles.cart__sidebar_title}>
        <span>Кошик</span>
        <button className={styles.sidebar__btn_close} onClick={closeCart}>
          <RiCloseFill />
        </button>
      </div>

      <div className={styles.cart__sidebar_btn}>
        <Link to="/checkout">
          <button
            onClick={handleCheckoutClick}
            className={styles.cart_sidebar_order}
          >
            Оформити замовлення
          </button>
        </Link>
      </div>
      </div>
      {Object.keys(cartItems).length === 0 ? (
        <div className={styles.basket__items_empty}>
          <AiOutlineShoppingCart className={styles.empty__cart}/>
          <span>Ви не добавляли товарів</span>
        </div>
      ) : (
        <CartList />
      )}
    </div>
  );
};
