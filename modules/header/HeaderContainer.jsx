import { useState } from "react";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

import { useReactiveVar } from "@apollo/client";

import { useLocation } from "react-router-dom";
import styles from "./header.module.css";

import { isLoggedInReactive } from "../auth/store/reactive-vars";
import MainSlider from "../main-page/components/MainSlider/MainSlider";
import { CartSidebar } from "../cart/components/cart-sidebar";

const HeaderContainer = ({ showAllProducts }) => {
  const [useCategory, setCategory] = useState(false);
  let isLoggedIn = useReactiveVar(isLoggedInReactive);

  const location = useLocation();
  const mainHeader = location.pathname === "/";

  const showCategory = (e) => {
    setCategory(true);
  };
  const hideCategory = (e) => {
    if (e.target.dataset.dropList === "drop-list") {
      return;
    } else {
      setCategory(false);
    }
  };

  return (
    <div
      className={`${
        mainHeader ? styles.header__wrapper : styles.header__wrapper_hide
      }`}
    >
      <HeaderMenu
        hideCategory={hideCategory}
        showCategory={showCategory}
        isLoggedIn={isLoggedIn}
      />
      {mainHeader && <MainSlider />}
      <CartSidebar />


    </div>
  );
};

export default HeaderContainer;
