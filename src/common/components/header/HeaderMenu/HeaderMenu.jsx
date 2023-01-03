import styles from "../header.module.css";
// import { Link } from "react-router-dom";

const HeaderMenu = ({ hideCategory, showCategory }) => {
  return (
    <header onMouseMove={hideCategory}>
      <div className={styles.header__inner}>
        <div className={styles.header__inner_logo}>
          <h3>Твоя поличка</h3>
        </div>
        <div className={styles.header__inner_user}>
          <nav className={styles.nav__user_mine}>
            <a href="/" className={styles.nav__basket}>
              shop cart
            </a>
            <a href="/" className={`${styles.nav__favorite} ${styles.hiden}`}>
              favorite
            </a>
            <a href="/" className={`${styles.nav__mypage} ${styles.hiden}`}>
              mypage
            </a>
          </nav>
        </div>
      </div>
      <div className={styles.header__menu}>
        <nav>
          <ul className={styles.header__menu_nav}>
            <li>
              <a
                className={`${styles.header__category} ${styles.active}`}
                href="/"
              >
                Головна
              </a>
            </li>
            <li className={styles.hiden}>
              <a
                onMouseMove={showCategory}
                data-drop-list={"drop-list"}
                className={`${styles.header__category}  ${styles.header__drop_down_list}`}
                href="/category"
              >
                Категорії
              </a>
            </li>
            <li>
              <a className={styles.header__category} href="/aboutus">
                Про нас
              </a>
            </li>
            <li>
              <a className={styles.header__category} href="/">
                Новики
              </a>
            </li>
            <li>
              <a className={styles.header__category} href="/">
                Знижки
                <span className={styles.header__category_discount}> %</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderMenu;
