import React from "react";
import Slider from "react-slick";

import dataSlider from "../../../../imgSlider.json";

import "./slick.css";
import "./slick-theme.css";
import "./mainSlider.css";

const MainSlider = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
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
      <Slider {...settings}>
        {dataSlider.map((card) => (
          <div key={card.id} className="card">
            <img src={card.img} alt="" />
          </div>
        ))}
      </Slider>


    </div>
  );
};

export default MainSlider;
