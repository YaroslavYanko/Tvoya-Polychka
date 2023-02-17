import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__info}>
          <nav>
            <ul>
              <li>
                <a className={styles.footer__menu} href="/">
                  Доставка та відправлення
                </a>
              </li>
              <li>
                <a className={styles.footer__menu} href="/">
                  Cпосіб оплати
                </a>
              </li>
              <li>
                <a className={styles.footer__menu} href="/">
                  Повернення
                </a>
              </li>
 
            </ul>
          </nav>
          <span>Графік роботи: Пн-Птн 10:00 ~ 17:00</span>
          <br />
          <span>Вихідні: Cубота-Неділя</span>
          <br />
          <a href="tel:+3804580454558">+3804580454558</a>
          <a href="mailto:ingo@ua.com">info@ua.com</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
