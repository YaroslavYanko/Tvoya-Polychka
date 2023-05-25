import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__info}>
          <nav>
            <ul>
              <li>
                <Link to="/delivery" className={styles.footer__menu}>
                  ОПЛАТА І ДОСТАВКА
                </Link>
              </li>
              <li>
                <Link to="/login" className={styles.footer__menu}>
                  КОРИСТУВАЧ
                </Link>
              </li>
              <li>
                <Link to="/blog" className={styles.footer__menu}>
                  БЛОГ
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.work__time}>
            <h3>Графік роботи:</h3>
            <span>Пн - Птн 10:00 ~ 18:00</span>
            <h3 className={styles.weekend__heading}>Вихідні:</h3>
            <span>Cубота - Неділя</span>
          </div>

          <div className={styles.contacts}>
            <h3>Номер телефону:</h3>
            <a href="tel:+380986388747">+380 98 6388 747</a>

            <h3 className={styles.email__heading}>Електронна пошта:</h3>
            <a href="mailto:tvoyapolychka@gmail.com">tvoyapolychka@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
