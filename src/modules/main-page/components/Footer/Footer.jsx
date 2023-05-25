import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import smartphone_phone from "../../../../images/icons/smartphone_phone.png";
import letter_newsletter from "../../../../images/icons/letter_newsletter.png";
import calendar_icon from "../../../../images/icons/calendar_icon.png";
import secure_lock from "../../../../images/icons/secure_lock.png";

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
            <div className={styles.work__time_boxes}>
              <img src={calendar_icon} alt="Графік роботи" />
              <span>Пн - Птн 10:00 ~ 18:00</span>
            </div>

            <h3 className={styles.weekend__heading}>Вихідні:</h3>
            <div className={styles.work__time_boxes}>
              <img src={secure_lock} alt="Вихідні" />
              <span>Cубота - Неділя</span>
            </div>
          </div>

          <div className={styles.contacts}>
            <h3>Номер телефону:</h3>
            <div className={styles.contacts__boxes}>
              <img src={smartphone_phone} alt="телефон" />
              <a href="tel:+380986388747">+380 98 6388 747</a>
            </div>

            <h3 className={styles.email__heading}>Електронна пошта:</h3>
            <div className={styles.contacts__boxes}>
              <img src={letter_newsletter} alt="пошта" />
              <a href="mailto:tvoyapolychka@gmail.com">
                tvoyapolychka@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
