import React from "react";
import styles from "../header.module.css";

const DropDownList = ({ hideCategory, showCategory }) => {
  return (
    <div
      onMouseLeave={hideCategory}
      onMouseMove={showCategory}
      data-drop-list={"drop-list"}
      className={styles.category__drop_down_list}
    >
      <div className={styles.category__sub}>
        
        <div className={styles.container}>

        <nav>
          <ul className={styles.category__sub_second}>
            <li className={styles.category__general}>
              <a href="/">Загальне</a>
            </li>
          </ul>

          <ul className={styles.category__sub_second}>
            <li className={styles.category__general}>
              <a href="/">Догляд за шікрою</a>
            </li>
            <li>
              <a href="/">Маска</a>
            </li>
            <li>
              <a href="/">Емульсія</a>
            </li>
          </ul>
          <ul className={styles.category__sub_second}>
            <li className={styles.category__general}>
              <a href="/">Догляд за волоссям</a>
            </li>
            <li>
              <a href="/">Шампунь</a>
            </li>
            <li>
              <a href="/">Лосьйон</a>
            </li>
            <li>
              <a href="/">Ополіскувач</a>
            </li>
          </ul>
          <ul className={styles.category__sub_second}>
            <li className={styles.category__general}>
              <a href="/">Макіяж</a>
            </li>
            <li>
              <a href="/">База</a>
            </li>
          </ul>
        </nav>


        </div>
       
      </div>
    </div>
  );
};

export default DropDownList;
