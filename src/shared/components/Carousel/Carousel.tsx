import React from "react";
import "./Carousel.scss";
import BannerImg from "./BannerImg";
import ContentColumns from "./ContentColumns";

function Carousel() {
  return (
    <div className="Carousel">
      <div className="section-padding center">
        <span className="subject">Biografía</span>
        <h1 className="title with-subject">Oswaldo Díaz Díaz</h1>
        <BannerImg />
        <ContentColumns />
      </div>
    </div>
  );
}

export default Carousel;
