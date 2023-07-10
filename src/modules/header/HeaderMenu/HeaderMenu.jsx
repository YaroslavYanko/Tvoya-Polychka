import styles from "../header.module.css";
import { Link, useLocation } from "react-router-dom";
import { UserDropdown } from "@app/modules/auth/components/user-dropdown.component";
import { toggleCart } from "@app/modules/cart/store/cart-opened-state";
import { AiOutlineShopping, AiOutlineImport } from "react-icons/ai";
import { RiMenu2Fill } from "react-icons/ri";
import MobileMenu from "../MobileMenu/MobileMenu";
import { openMobileMenu } from "../MobileMenu/store/mobile-state";
import { useContext, useEffect, useState } from "react";
import InputSearch from "@app/common/components/input-searh/inputSearch";
import { CgEnter } from "react-icons/cg";

import { BiShoppingBag } from "react-icons/bi";
import { TotalQuantityContext } from "../../../App";



const HeaderMenu = ({ isLoggedIn }) => {
  const location = useLocation();

  const loginIn = location.pathname !== "/login";
  const mainPage = location.pathname !== "/";

  const [isFixed, setIsFixed] = useState(false);

  const totalQuantity = useContext(TotalQuantityContext);
  

  useEffect(() => {
    // Оновлення компонента при зміні totalQuantity
  }, [totalQuantity]);

  const inputSearchColor = isFixed ? "white" : mainPage ? "#444444" : "white";

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
    <header style={{ position: mainPage ? "static" : "absolute" }}>
      <MobileMenu />
      <div
        className={`${styles.wrapperMenuBtn} ${
          isFixed ? styles.fixedMenuBtn : ""
        }`}
      >
        <RiMenu2Fill
          onClick={openMobileMenu}
          className={styles.mobile__menu_btn}
          style={{ color: isFixed ? "white" : mainPage ? "#444444" : "white" }}
        />
      </div>

      <div
        className={`${styles.user__menu} ${
          isFixed ? styles.fixedUserMenu : ""
        }`}
      >
        <InputSearch inputSearchColor={inputSearchColor} />

        {loginIn && (
          <div
            className={styles.header__login}
            style={{ color: mainPage ? "#444444" : "white" }}
          >
            {isLoggedIn ? (
              <UserDropdown isFixed={isFixed} mainPage={mainPage} />
            ) : (
              <Link
                to="/login"
                style={{ color: mainPage ? "#444444" : "white" }}
              >
                <CgEnter
                  style={{
                    color: isFixed ? "white" : mainPage ? "#444444" : "white",
                  }}
                />
              </Link>
            )}
          </div>
        )}

        <Link to="#" className={styles.btn__basket_link}>
          <button
            className={`${styles.btn__basket} ${
              mainPage && styles.header__category_color
            }`}
            onClick={toggleCart}
            id="basket_header"
          >
            <BiShoppingBag
              style={{
                color: isFixed ? "white" : mainPage ? "#444444" : "white",
              }}
            />
          </button>
          {totalQuantity > 0 ? (
            <div className={styles.basket__num}>
              <span>{totalQuantity}</span>
            </div>
          ) : (
            ""
          )}
        </Link>
      </div>

      <div className={styles.header__inner}>
        <div className={styles.header__inner_logo}>
          <Link to="/">
            <h3 style={{ color: mainPage ? "#444444" : "white" }}>
              ТВОЯ ПОЛИЧКА
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
                ГОЛОВНА
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
                ТОВАРИ
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.header__category} ${
                  mainPage && styles.header__category_color
                }`}
                to="/delivery"
              >
                ОПЛАТА І ДОСТАВКА
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.header__category} ${
                  mainPage && styles.header__category_color
                }`}
                to="/blog"
              >
                БЛОГ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderMenu;
