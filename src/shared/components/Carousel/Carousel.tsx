import React from "react";
import "./Carousel.scss";
import BannerImg from "./BannerImg";
import ContentColumns from "./ContentColumns";
import SectionTitle from "../SectionTitle";
import { useParams, Redirect } from "react-router-dom";
import { BiographyItems } from "./definitions/constants/biography-items.constant";
import { Navigation } from "./definitions/types/bio-item.type";

function Carousel() {
  let { item } = useParams();
  return (
    <div className="Carousel">
      {!item || (!BiographyItems[item] && <Redirect to="/biografia" />)}
      {item && BiographyItems[item] && (
        <div className="section-padding center">
          <SectionTitle title="Oswaldo Díaz Díaz" subtitle="Biografía" />
          <div className="section-margin">
            <BannerImg
              image={BiographyItems[item].bannerImage as string}
              imageAlt={BiographyItems[item].imageAlt as string}
              next={(BiographyItems[item].navigation as Navigation).next}
              previous={(BiographyItems[item].navigation as Navigation).previous}
            />
          </div>
          <ContentColumns
            title={BiographyItems[item].title as string}
            subtitle={BiographyItems[item].subtitle as string}
            content={BiographyItems[item].content}
          />
        </div>
      )}
    </div>
  );
}

export default Carousel;
