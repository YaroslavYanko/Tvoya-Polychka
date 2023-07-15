import React from "react";
import Slider from "react-slick";

import laikou from "../../../../images/lakoil.webp";
import oil from "../../../../images/oil.jpg";
import artwork4 from "../../../../images/artwork4.jpg";




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
    autoplay: true,
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
        <Link to="/blog/2" className="card card_info">

          <div className="card__wrapper">
            <div className="card__border"></div>
            <img src={laikou} alt="Корейський догляд за волоссям" />

            <div className="usefulInformation__title blog_slider">
              <h3>Поживна арганова олія для волосся Laikou</h3>
              <br />
              <p>Корисні властивості мараканового масла для волосся.</p>
            </div>
          </div>
        </Link>
        <Link to="/blog/3" className="card card_info">
          <div className="card__wrapper">
            <div className="card__border"></div>
            <img src={oil} alt="" />

            <div className="usefulInformation__title blog_slider">
              <h3>Сироватки для лиця</h3>
              <br />
              <p>
                Здивуйте свою шкіру: Отримайте сяйво з сироватками для обличчя!
              </p>
            </div>
          </div>
        </Link>
        <Link to="/blog/1" className="card card_info" >
          <div className="card__wrapper">
            <div className="card__border"></div>
            <img src={artwork4} alt="" />

            <div className="usefulInformation__title blog_slider">
              <h3>Догляд за шкірою лиця</h3>
              <br />
              <p>
                Шкіра обличчя потребує належного догляду, щоб виглядати здорово
                і сяюче.
              </p>
            </div>
          </div>
        </Link>
      </Slider>
    </div>
  );
};

export default MainSlider;
