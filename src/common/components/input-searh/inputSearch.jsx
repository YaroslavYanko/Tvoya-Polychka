import React, { useState, useEffect, useRef } from "react";
import styles from "./inputSearch.module.css";
import { AdvancedImage } from "@cloudinary/react";
import { cloudinary } from "@app/core/cloudinary";

import { IoSearch } from "react-icons/io5";
import { useGetGoodsQuery } from "@app/core/types";
import { Link } from "react-router-dom";

export default function InputSearch({ inputSearchColor }) {
  const { data, loading, error } = useGetGoodsQuery();

  const [searchText, setSearchText] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [clearedSearchText, setClearedSearchText] = useState("");

  const inputRef = useRef(null);

  const handleIconClick = () => {
    setIsSearching(true);
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleLinkClick = () => {
    setIsSearching(false);
  };
  const handleOutsideClick = (event) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(event.target) &&
      !event.target.closest(`.${styles.search__results}`)
    ) {
      setIsSearching(false);
      setSearchText("");
      setClearedSearchText("");
    }
  };

  useEffect(() => {
    const filtered = data?.categories.reduce((acc, category) => {
      const filteredItems = category.goods_items.filter(
        (item) =>
          item.shortName.toLowerCase().includes(searchText.toLowerCase()) ||
          item.title.toLowerCase().includes(searchText.toLowerCase())
      );
      acc.push(...filteredItems);
      return acc;
    }, []);
    setFilteredProducts(filtered);
  }, [data, searchText]);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  if (error) {
    return <h3>Ого, здається сталась помилка, зайдіть пізніше</h3>;
  }
  if (loading) {
    return (
      <IoSearch
        className={styles.btn__search}
        color={inputSearchColor}
        onClick={handleIconClick}
      />
    );
  }
  if (!data) {
    return <h3>Хм, мабуть товари закінчились, зайдіть пізніше</h3>;
  }

  return (
    <div className={styles.search__container}>
      <IoSearch
        className={styles.btn__search}
        color={inputSearchColor}
        onClick={handleIconClick}
      />

      <input
        ref={inputRef}
        type="text"
        className={`${styles.search__product} ${
          !isSearching ? styles.search__product_hide : ""
        }`}
        placeholder="Пошук товару"
        value={searchText}
        onChange={handleInputChange}
        onBlur={() => setClearedSearchText("")}
      />

      {isSearching && searchText && filteredProducts.length > 0 && (
        <ul className={styles.search__results}>
          {filteredProducts.map((product) => (
            <Link to={`/products/${product.id}`} onClick={handleLinkClick}>
              <li key={product.id} className={styles.search__result}>
                {product.image && (
                  <div>
                    <AdvancedImage
                      cldImg={cloudinary.image(product.image)}
                      cloudname="tvoyapolychka"
                    />
                  </div>
                )}
                <div className={styles.search__results_shortName}>
                  <p>{product.shortName}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
