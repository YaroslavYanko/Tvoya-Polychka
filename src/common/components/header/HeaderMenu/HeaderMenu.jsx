import styles from "../header.module.css";
import { Link, useLocation } from "react-router-dom";
import { UserDropdown } from "@app/modules/auth/components/user-dropdown.component";
import basket from "../../../../images/basket.svg";
import { CartSidebar } from "@app/modules/cart/components/cart-sidebar";
import { toggleCart } from "../../../../modules/cart/store/cart-opened-state";


const HeaderMenu = ({ hideCategory, showCategory, isLoggedIn }) => {
  const location = useLocation();

  const loginIn = location.pathname !== "/login";

  return (
    <header onMouseMove={hideCategory}>
      <div className={styles.header__box}>
        <div className={styles.header__inner}>
          <div className={styles.header__inner_logo}>
            <Link to="/">
              <h3>Твоя поличка</h3>
            </Link>
          </div>
          <div className={styles.header__inner_user}>
            <nav className={styles.nav__user_mine}>
              <Link to="#" className={styles.btn__basket_link}>
                <button className={styles.btn__basket} onClick={toggleCart}>
                  <img src={basket} alt="basket_header" />
                </button>
              </Link>
              <CartSidebar />
              {loginIn && (
                <div className={styles.header__login}>
                  {isLoggedIn ? (
                    <UserDropdown />
                  ) : (
                    <Link to="/login">Вхід</Link>
                  )}
                </div>
              )}

              {/* <Link to="/login" className={`${styles.nav__mypage} ${styles.hiden}`}>
                mypage
              </Link> */}
            </nav>
          </div>
        </div>
      </div>
      <div className={styles.header__menu}>
        <nav>
          <ul className={styles.header__menu_nav}>
            <li>
              <Link
                className={`${styles.header__category} ${styles.active}`}
                to="/"
              >
                Головна
              </Link>
            </li>
            <li className={styles.hiden} onMouseMove={showCategory}>
              <Link
                to="/products"
                data-drop-list={"drop-list"}
                className={`${styles.header__category}  ${styles.header__drop_down_list}`}
              >
                Категорії
              </Link>
            </li>
            <li>
              <Link className={styles.header__category} to="/aboutus">
                Про нас
              </Link>
            </li>
            <li>
              <Link className={styles.header__category} to="/">
                Новики
              </Link>
            </li>
            <li>
              <Link className={styles.header__category} to="/">
                Знижки
                <span className={styles.header__category_discount}> %</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderMenu;
