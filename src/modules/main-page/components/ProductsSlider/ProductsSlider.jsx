import React from "react";
import Slider from "react-slick";

import dots1 from "../../../../images/foundation.png";
import dots2 from "../../../../images/serum.png";
import dots3 from "../../../../images/faceMask.png";
import dots4 from "../../../../images/cream.png";

import "./slick.css";
import "./slick-theme.css";
import "./mainSlider.css";
import { Link } from "react-router-dom";

const ProductsSlider = () => {
  const settings2 = {
    dots: true,
    dotsClass: "custom-dots", // Клас для обгортки кастомних точок
    infinite: true,
    speed: 500,
    fade: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 865,
        settings: {
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: (index, slide) => (
      <div className="custom-dot" key={index}>
        {index === 0 && (
          <div className={`dot-s`}>
            <img className="dot-image glob-small" src={dots3} alt="Dot 1" />
          </div>
        )}
        {index === 1 && (
          <div className={`dot-s`}>
            <img className="dot-image glob" src={dots2} alt="Dot 2" />
          </div>
        )}
        {index === 2 && (
          <div className={`dot-s`}>
            <img className="dot-image glob" src={dots1} alt="Dot 2" />{" "}
          </div>
        )}
        {index === 3 && (
          <div className={`dot-s`}>
            <img className="dot-image glob-small" src={dots4} alt="Dot 2" />
          </div>
        )}


        <div
          className={`slick-dots_products ${
            index === slide ? "slick-active" : ""
          }`}
        />
      </div>
    ),
  };
  return (
    <div className="sliderWrapper">
      <h4 className="container__info_title_products">Товари-</h4>

   
      <Slider className="products-slider" {...settings2}>
      <div className="card">
          <div className="card__wrapper_products">
            <Link
              to="/products/67e90c56-94ad-429b-be53-511bceb7045f"
              className="card__border_products"
            ></Link>
            <div className="card_wrapper_products_img">
              <img
                src="https://res.cloudinary.com/tvoyapolychka/image/upload/v1/goods/goods-1686653749?_a=AJAK9WI0"
                alt="Корейський догляд за волоссям"
              />
            </div>

            <div className="usefulInformation__title_products">
              <h3>Нічна медова маска для обличчя з ріпаком</h3>
            </div>
          </div>
    
        </div>
        <div className="card">
          <div className="card__wrapper_products">
            <Link
              to="/products/5ceadbc0-1cd8-4f80-a693-d97216316052"
              className="card__border_products"
            ></Link>
            <div className="card_wrapper_products_img">
              <img
                src="https://res.cloudinary.com/tvoyapolychka/image/upload/v1/goods/goods-1685081619?_a=AJAK9WI0"
                alt="Корейський догляд за волоссям"
              />
            </div>

            <div className="usefulInformation__title_products">
              <h3>Ефірне масло для росту волосся</h3>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__wrapper_products">
            <Link
              to="/products/12b245df-fc97-4c8f-b2dd-9e817cea338a"
              className="card__border_products"
            ></Link>
            <div className="card_wrapper_products_img">
              <img
                src="https://res.cloudinary.com/tvoyapolychka/image/upload/v1/goods/goods-1685866692?_a=AJAK9WI0"
                alt="Корейський догляд за волоссям"
              />
            </div>

            <div className="usefulInformation__title_products">
              <h3>Поживна арганова олія для волосся</h3>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card__wrapper_products">
            <Link
              to="/products/8547c7f3-7510-4aaa-ba1a-0424d626900c"
              className="card__border_products"
            ></Link>
            <div className="card_wrapper_products_img">
              <img
                src="https://res.cloudinary.com/tvoyapolychka/image/upload/v1/goods/goods-1684323508?_a=AJAK9WI0"
                alt="Корейський догляд за волоссям"
              />
            </div>

            <div className="usefulInformation__title_products">
              <h3>Патчі для очей з екстрактом чорної ікри</h3>
            </div>
          </div>
        </div>

      </Slider>
      <div className="box__products_link">
        <Link className="All__products_link" to="/products">
          Перейти в каталог
        </Link>
      </div>
    </div>
  );
};

export default ProductsSlider;
