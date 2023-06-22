import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import styles from "./category-selector.module.css";

export const CategorySelector = ({ onCategorySelect }) => {
  // const [selectedCategory, setSelectedCategory] = useState("all");
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  // const handleCategoryChange = (event) => {
  //   setSelectedCategory(event.target.value);
  //   onCategorySelect(event.target.value);
  // };

  const handleMenuClick = (index) => {
    setOpenMenuIndex(index === openMenuIndex ? null : index);
  };

  return (
    <div className={styles.wrapper__sidebar}>
      <nav className={styles.sidebar}>
        <div className={styles.title}>Категорія</div>

        <ul>
          <li onClick={() => onCategorySelect("all")}>Показати всі товари</li>
          <li onClick={() => handleMenuClick(0)}>
            <div className={styles.wrapper__list}>
              Для волосся
              <IoMdArrowDropdown
                className={
                  openMenuIndex === 0 ? styles.arrow__show : styles.arrow
                }
              />
            </div>

            <ul className={openMenuIndex === 0 ? styles.show : styles.hide}>
              <li onClick={() => onCategorySelect("Shampoo")}>Шампунь</li>
              <li onClick={() => onCategorySelect("hairDye")}>Фарба</li>
              <li onClick={() => onCategorySelect("HairSpray")}>Спрей</li>
              <li onClick={() => onCategorySelect("hairSerum")}>Cироватка</li>
              <li onClick={() => onCategorySelect("EssentialOil")}>
                Ефірна олія
              </li>
            </ul>
          </li>
          <li onClick={() => handleMenuClick(1)}>
            <div className={styles.wrapper__list}>
              Для лиця
              <IoMdArrowDropdown
                className={
                  openMenuIndex === 1 ? styles.arrow__show : styles.arrow
                }
              />
            </div>

            <ul className={openMenuIndex === 1 ? styles.show : styles.hide}>
              <li onClick={() => onCategorySelect("Patchi")}>Патчі під очі</li>
              <li onClick={() => onCategorySelect("Mask")}>Маска для лиця</li>
              <li onClick={() => onCategorySelect("Serum")}>Сироватка для лиця</li>   
              <li onClick={() => onCategorySelect("FaceScrub")}>Скраб для лиця</li>  
            </ul>
          </li>
          <li onClick={() => handleMenuClick(2)}>
            <div className={styles.wrapper__list}>
              Для тіла
              <IoMdArrowDropdown
                className={
                  openMenuIndex === 2 ? styles.arrow__show : styles.arrow
                }
              />
            </div>

            <ul className={openMenuIndex === 2 ? styles.show : styles.hide}>
              <li onClick={() => onCategorySelect("Soap")}>Мило</li>
            </ul>
          </li>
          <li onClick={() => handleMenuClick(3)}>
            <div className={styles.wrapper__list}>
              Для рук
              <IoMdArrowDropdown
                className={
                  openMenuIndex === 3 ? styles.arrow__show : styles.arrow
                }
              />
            </div>

            <ul className={openMenuIndex === 3 ? styles.show : styles.hide}>
              <li onClick={() => onCategorySelect("HandCream")}>Крем</li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};
