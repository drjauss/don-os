import React from "react";
import "./BannerImg.scss";
import PaginationBtn from "../PaginationBtn/PaginationBtn";

type BannerImgProps = {
  image: string;
  imageAlt: string;
  next: string;
  previous: string;
};

function BannerImg({ image, imageAlt, next, previous }: BannerImgProps) {
  return (
    <div className="BannerImg">
      <div className="pure-g">
        <div className="pure-u-1-4 flex-column justify-end">
          <div className="flex-item-start">
            <PaginationBtn text="Anterior" link={previous} />
          </div>
        </div>
        <div className="pure-u-1-2">
          <img className="image-box" src={image} alt={imageAlt} />
        </div>
        <div className="pure-u-1-4 flex-column justify-end">
          <div className="flex-item-end">
            <PaginationBtn text="Siguiente" link={next} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerImg;
