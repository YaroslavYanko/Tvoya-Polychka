import styles from "./MobileMenu.module.css";

import { RiCloseLine } from "react-icons/ri";
import { useReactiveVar } from "@apollo/client";
import { closeMobileMenu, mobileMenuOpenedState } from "./store/mobile-state";
import { useEffect } from 'react';

import { Link } from "react-router-dom";

const MobileMenu = () => {
  const isOpened = useReactiveVar(mobileMenuOpenedState);
  const body = document.querySelector('body');

  useEffect(() => {
    if (isOpened) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  
    return () => {
      body.style.overflow = 'auto';
    };
  }, [isOpened, body]);
 

  return (
    <div className={`${styles.mobile__menu} ${isOpened && styles.mobile__menu_show}`}>
      <RiCloseLine className={styles.mobile__menu_btn_close}     onClick={closeMobileMenu}/>
      <nav className={styles.mobile__menu_nav}>
        <ul>
          <li>
            <Link onClick={closeMobileMenu} to="/">ГОЛОВНА</Link>
          </li>
          <li>
            <Link onClick={closeMobileMenu} to="/products">ТОВАРИ</Link>
          </li>
          <li>
            <Link onClick={closeMobileMenu} to="/delivery">ОПЛАТА І ДОСТАВКА</Link>
          </li>
          <li>
            <Link onClick={closeMobileMenu} to="/blog">БЛОГ</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
