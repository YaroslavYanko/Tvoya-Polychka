import HeaderMenu from "./HeaderMenu/HeaderMenu";

import { useReactiveVar } from "@apollo/client";

import { useLocation } from "react-router-dom";
import styles from "./header.module.css";

import { isLoggedInReactive } from "../auth/store/reactive-vars";
import MainSlider from "../main-page/components/MainSlider/MainSlider";
import { CartSidebar } from "../cart/components/cart-sidebar";

const HeaderContainer = () => {
  let isLoggedIn = useReactiveVar(isLoggedInReactive);

  const location = useLocation();
  const mainHeader = location.pathname === "/";

  return (
    <div
      className={`${
        mainHeader ? styles.header__wrapper : styles.header__wrapper_hide
      }`}
    >
      <HeaderMenu isLoggedIn={isLoggedIn} />
      {mainHeader && <MainSlider />}
      <CartSidebar />
    </div>
  );
};

export default HeaderContainer;
