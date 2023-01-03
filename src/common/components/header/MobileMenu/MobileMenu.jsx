import React from "react";
import styles from "./MobileMenu.module.css";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.mobile__menu}>
        <ul>
          <li>
            <Link to={'/'}>Головна</Link>
          </li>
          <li>
            <Link to={'/'}>Доставка</Link>
          </li>
          <li>
            <Link to={'/category'}>Категорії</Link>
          </li>
          <li>
            <Link to={'/like'}>Улюблене</Link>
          </li>
          <li>
            <Link to={'/profile'}>Профіль</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
