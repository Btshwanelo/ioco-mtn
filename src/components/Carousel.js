import React, { useState } from "react";

import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import SliderCard from "./SliderCard";
import "../assets/theme/ImageSlider.css";
import SliderMainCard from "./SliderMainCard";

const NextArrow = ({ onClick }) => {
  return (
    <div className="nextArrow" onClick={onClick}>
      <ArrowForwardIosIcon />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prevArrow" onClick={onClick}>
      <ArrowBackIosNewIcon />
    </div>
  );
};

const Carousel = ({ images, slidesToShow = 3 }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: "1",
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const templateImages = images.map((image, idx) => {
    if (image !== null) {
      return (
        <div
          className={idx === imageIndex ? "activeSlide" : "slide"}
          key={image.id}
        >
          <div className="slideWrapper">
            {idx === imageIndex ? (
              <SliderMainCard title={image.title} />
            ) : (
              <SliderCard title={image.title} />
            )}
          </div>
        </div>
      );
    }
    return null;
  });

  return <Slider {...settings}>{templateImages} </Slider>;
};

export default Carousel;
