import React from "react";
import styles from "./MobileMenu.module.css";
// import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.mobile__menu}>
        <ul>
          <li>
            <a href={'/'}>Головна</a>
          </li>
          <li>
            <a href={'/'}>Доставка</a>
          </li>
          <li>
            <a href={'/category'}>Категорії</a>
          </li>
          <li>
            <a href={'/like'}>Улюблене</a>
          </li>
          <li>
            <a href={'/profile'}>Профіль</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
