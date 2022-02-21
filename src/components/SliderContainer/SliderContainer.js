import React from "react";

import "./SliderContainer.css";
import Carousel from "../Carousel/Carousel";
import { SERVICES } from "../../assets/data/data";

const SliderContainer = () => {
  return (
    <div className="slidr">
      <div className="slidr_heading">
        <p>What are you</p>
        <h2>here to do?</h2>
      </div>
      <Carousel images={SERVICES} />
    </div>
  );
};

export default SliderContainer;
