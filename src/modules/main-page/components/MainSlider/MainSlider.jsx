import React from "react";
import Slider from "react-slick";
import styles from "../../../header/header.module.css";

import laikou from "../../../../images/lakoil.webp";
import oil from "../../../../images/oil.jpg";
import mask from "../../../../images/Mask2.png";

import dataSlider from "../../../../imgSlider.json";

import "./slick.css";
import "./slick-theme.css";
import "./mainSlider.css";
import { Link } from "react-router-dom";


const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 865,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (

    
    <div className="sliderWrapper">
     
     <h4 className="container__info_title">Корисна інформація-</h4>

      <Slider {...settings}>
        <Link to='/blog' className="card">
          <div className="card__wrapper">
            <div className="card__border"></div>
            <img src={laikou} alt="Корейський догляд за волоссям" />

            <div className="usefulInformation__title">
              <h3>Поживна арганова олія для волосся Laikou</h3>
              <br />
              <p>
                Привітайте здорове, сильне волосся з аргановою олією Laikou!{" "}
                <br /> Корисні властивості мараканового масла для волосся.
              </p>
            </div>
          </div>
        </Link>
        <Link to='/blog' className="card">
          <div className="card__wrapper">
          <div className="card__border"></div>
            <img src={oil} alt="" />

            <div className="usefulInformation__title">
              
              <h3>Сироватки для лиця</h3>
              <br />
              <p>
                Здивуйте свою шкіру: Отримайте сяйво з сироватками для обличчя!
              </p>
            </div>
          </div>
        </Link>
        <Link to='/blog' className="card">
          <div className="card__wrapper">
          <div className="card__border"></div>
            <img src={mask} alt="" />

            <div className="usefulInformation__title">
              <h3>Маски для лиця</h3>
              <br />
              <p>
                Здивуйте свою шкіру: Отримайте сяйво з сироватками для обличчя!
              </p>
            </div>
          </div>
        </Link>
      </Slider>
    </div>
  );
};

export default MainSlider;
