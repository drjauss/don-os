import React from "react";
import "./Carousel.scss";
import BannerImg from "./BannerImg";
import ContentColumns from "./ContentColumns";
import SectionTitle from "../SectionTitle";

function Carousel() {
  return (
    <div className="Carousel">
      <div className="section-padding center">
        <SectionTitle title="Oswaldo Díaz Díaz" subtitle="Biografía" />
        <div className="section-margin">
          <BannerImg />
        </div>
        <ContentColumns
          title="La pluma"
          subtitle="Con la que firmaba y tomaba notas"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maxime esse voluptas quis autem cumque dignissimos, impedit doloribus nesciunt deleniti."
        />
      </div>
    </div>
  );
}

export default Carousel;
