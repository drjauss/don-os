import React from "react";
import "./Review.scss";
import Header from "../../../../components/Header/Header";
import { Redirect, useParams, useLocation } from "react-router-dom";
import { workSlugs } from "../definitions/constants/work-slugs.constant";
import Footer from "../../../../components/Footer/Footer";
import Subscription from "../../Subscription/Subscription";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { workList } from "../definitions/constants/work-list.constant";
import { Work } from "../definitions/types/work.type";
import { reviews } from "./definitions/constants/review-list.constant";

function Review() {
  let { item } = useParams();
  let { search } = useLocation();
  let color = search.split("=")[1];
  let work = workList.find((work: Work) => work.slug === item);
  let review = reviews[item as string];
  let tds = work?.technicalDetails;

  return (
    <div className="Review">
      {item && work && review && workSlugs.indexOf(item) === -1 && <Redirect to="/obra" />}
      <Header />
      <div className="section-padding">
        <SectionTitle title={work?.title as string} subtitle={work?.category as string} />
        <p className="center image-responsive">
          {work?.illustration && <img src={work?.illustration} alt={work?.title + " illustration"} />}
        </p>
        <div className="pure-g bottom-padding">
          <div className={`pure-u-1 pure-u-md-1-2 technicalDetails ${color || "orange"}-bg`}>
            <div>
              <p className="subtitle underlined white">Ficha técnica:</p>
              <p className="content">
                {tds?.title && (
                  <span className="white">
                    Titulo: {tds.title} <br />
                  </span>
                )}
                {tds?.author && (
                  <span className="white">
                    Autor: {tds.author} <br />
                  </span>
                )}
                {tds?.publishedAt && (
                  <span className="white">
                    En: {tds.publishedAt} <br />
                  </span>
                )}
                {tds?.genre && (
                  <span className="white">
                    Género: {tds.genre} <br />
                  </span>
                )}
                {tds?.publishingLocation && (
                  <span className="white">
                    Lugar de publicación: {tds.publishingLocation} <br />
                  </span>
                )}
                {tds?.availableAt && (
                  <span className="white">
                    Disponible en: {tds.availableAt} <br />
                  </span>
                )}
                {tds?.reviewedBy && (
                  <span className="white">
                    Reseña por: {tds.reviewedBy} <br />
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className="pure-u-1 pure-u-md-1-2">{review.mainParagraph}</div>
        </div>
        <div>{review.bottomParagraph}</div>
        <div className={`${color}-review`}>{review.sections}</div>
      </div>
      <Subscription />
      <Footer />
    </div>
  );
}

export default Review;
