import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import styles from "./category-selector.module.css";

export const CategorySelector = ({ onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    onCategorySelect(event.target.value);
  };

  const handleMenuClick = (index) => {
    setOpenMenuIndex(index === openMenuIndex ? null : index);
  };

  return (
    <div className={styles.wrapper__sidebar}>
      <nav className={styles.sidebar}>
        <div className={styles.title}>Категорія товарів</div>

        <ul>
          <li onClick={() => onCategorySelect("all")}>Всі товари</li>
          <li onClick={() => handleMenuClick(0)}>
            <div className={styles.wrapper__list} >
              Для волосся
              <IoMdArrowDropdown
                className={openMenuIndex === 0 ? styles.arrow__show : styles.arrow}
              />
            </div>

            <ul className={openMenuIndex === 0 ? styles.show : styles.hide}>
              <li onClick={() => onCategorySelect("Shampoo")}>Шампунь</li>
              <li onClick={() => onCategorySelect("hairDye")}>Фарба для волосся</li>
            </ul>
          </li>
          <li onClick={() => handleMenuClick(1)}>
            <div className={styles.wrapper__list}>
              Крем для лиця
              <IoMdArrowDropdown
                className={openMenuIndex === 1 ? styles.arrow__show : styles.arrow}
              />
            </div>

            <ul className={openMenuIndex === 1 ? styles.show : styles.hide}>
              <li>Маска під очі</li>
              <li>Крем для лиця</li>
            </ul>
            
          </li>
        </ul>
      </nav>
    </div>
  );
};
