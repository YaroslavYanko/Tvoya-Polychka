import styles from "../header.module.css";
import { Link, useLocation } from "react-router-dom";
import { UserDropdown } from "@app/modules/auth/components/user-dropdown.component";


import { toggleCart } from "@app/modules/cart/store/cart-opened-state";

import { AiOutlineShopping } from "react-icons/ai";
import { RiMenu2Fill } from "react-icons/ri";
import { RxEnter } from "react-icons/rx";
import MobileMenu from "../MobileMenu/MobileMenu";
import { openMobileMenu } from "../MobileMenu/store/mobile-state";
import { useEffect, useState } from "react";

const HeaderMenu = ({ isLoggedIn }) => {
  const location = useLocation();

  const loginIn = location.pathname !== "/login";
  const mainPage = location.pathname !== "/";

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 200) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header style={{ position: mainPage ? "static" : "absolute"}}>
      <MobileMenu />
      <div className={`${styles.wrapperMenuBtn} ${isFixed ? styles.fixedMenuBtn : ""}`}>
        <RiMenu2Fill
          onClick={openMobileMenu}
          className={styles.mobile__menu_btn}
          style={{ color: mainPage ? "#444444" : "white" }}
        />
      </div>

      <div className={styles.header__inner}>
        <div className={styles.header__inner_logo}>
          <Link to="/">
            <h3 style={{ color: mainPage ? "#444444" : "white" }}>
              Твоя поличка
            </h3>
          </Link>
        </div>
      </div>

      <div className={styles.header__menu}>
        <nav>
          <ul className={styles.header__menu_nav}>
            <li>
              <Link
                className={`${styles.header__category} ${styles.active} ${
                  mainPage && styles.header__category_color
                }`}
                to="/"
              >
                Головна
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                data-drop-list={"drop-list"}
                className={`${styles.header__category} ${
                  mainPage && styles.header__category_color
                }`}
              >
                Магазин
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.header__category} ${
                  mainPage && styles.header__category_color
                }`}
                to="/aboutus"
              >
                Доставка
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.header__category} ${
                  mainPage && styles.header__category_color
                }`}
                to="/"
              >
                Новинки
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.header__category} ${
                  mainPage && styles.header__category_color
                }`}
                to="/"
              >
                Блог
              </Link>
            </li>
          </ul>

          <div
            className={`${styles.user__menu} ${
              isFixed ? styles.fixedUserMenu : ""
            }`}
          >
            <Link to="#" className={styles.btn__basket_link}>
              <button
                className={`${styles.btn__basket} ${
                  mainPage && styles.header__category_color
                }`}
                onClick={toggleCart}
                id="basket_header"
              >
                <AiOutlineShopping />
              </button>
            </Link>

            {loginIn && (
              <div
                className={styles.header__login}
                style={{ color: mainPage ? "#444444" : "white" }}
              >
                {isLoggedIn ? (
                  <UserDropdown mainPage={mainPage} />
                ) : (
                  <Link
                    to="/login"
                    style={{ color: mainPage ? "#444444" : "white" }}
                  >
                    <RxEnter />
                  </Link>
                )}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderMenu;
