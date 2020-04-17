import React from "react";
import "./BannerImg.scss";
import img from "../../../../images/bio/1_Pluma-min.png";
import PaginationBtn from "../PaginationBtn/PaginationBtn";

function BannerImg() {
  return (
    <div className="BannerImg">
      <div className="pure-g">
        <div className="pure-u-1-4 flex-column justify-end">
          <div className="flex-item-start">
            <PaginationBtn text="Anterior" />
          </div>
        </div>
        <div className="pure-u-1-2">
          <img className="image-box" src={img} alt="Pluma de Don Os" />
        </div>
        <div className="pure-u-1-4 flex-column justify-end">
          <div className="flex-item-end">
            <PaginationBtn text="Siguiente" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerImg;
