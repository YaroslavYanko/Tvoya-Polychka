import React from "react";
import styles from "./MobileMenu.module.css";
// import { Link } from "react-router-dom";

import { RiCloseLine } from "react-icons/ri";
import { useReactiveVar } from "@apollo/client";
import { closeMobileMenu, mobileMenuOpenedState } from "./store/mobile-state";

const MobileMenu = () => {
  const isOpened = useReactiveVar(mobileMenuOpenedState);

  return (
    <div className={`${styles.mobile__menu} ${isOpened && styles.mobile__menu_show}`}>
      <RiCloseLine className={styles.mobile__menu_btn_close}     onClick={closeMobileMenu}/>
      <nav className={styles.mobile__menu_nav}>
        <ul>
          <li>
            <a href={"/"}>Головна</a>
          </li>
          <li>
            <a href={"/"}>Магазин</a>
          </li>
          <li>
            <a href={"/category"}>Доставка</a>
          </li>
          <li>
            <a href={"/like"}>Новинки</a>
          </li>
          <li>
            <a href={"/profile"}>Блог</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
