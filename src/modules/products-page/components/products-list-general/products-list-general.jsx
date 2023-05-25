import { ProductItemGeneral } from "../product-item-general/product-item-general";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import styles from "./products-list.module.css";

const PAGE_SIZE = 28;

const ProductsListGeneral = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const LeftArrowIcon = () => <FaArrowLeft />;
  const RightArrowIcon = () => <FaArrowRight />;

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleNextClick = () => {
    const totalPages = Math.ceil(products.length / PAGE_SIZE);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const visibleProducts = products.slice(startIndex, endIndex);

  const totalPages = Math.ceil(products.length / PAGE_SIZE);
  const pageNumbers = [currentPage];
  if (currentPage > 1) {
    pageNumbers.unshift(currentPage - 1);
  }
  if (currentPage < totalPages) {
    pageNumbers.push(currentPage + 1);
  }

  return (
    <div>
      <div className={styles.container}>
        {visibleProducts.map((item) => (
          <ProductItemGeneral {...item} key={`productsGeneral-${item.id}`} />
        ))}
      </div>

      <div className={styles.wrapper__pagination}>
        <ul className={styles.pagination}>
          <li className={styles.pagination__prev}>
            <button onClick={handlePrevClick}>
              <LeftArrowIcon />
            </button>
          </li>
          {currentPage > 1 && (
            <li className={styles.page}>
              <button onClick={handlePrevClick}>{currentPage - 1}</button>
            </li>
          )}
          <li className={`${styles.page} ${styles.active__page}`}>
            <button onClick={() => setCurrentPage(currentPage)}>
              {currentPage}
            </button>
          </li>
          {currentPage < totalPages && (
            <li className={styles.page}>
              <button onClick={handleNextClick}>{currentPage + 1}</button>
            </li>
          )}
          <li className={styles.pagination__next}>
            <button onClick={handleNextClick}>
              <RightArrowIcon />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductsListGeneral;
