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
import imgPlaybackSvg from "../../../../images/play-solid.svg";

function Review() {
  let { item } = useParams();
  let { search } = useLocation();
  let color = search.split("=")[1];
  let work = workList.find((work: Work) => work.slug === item);
  let review = reviews[item as string];
  let tds = work?.technicalDetails;

  const colorArray = ["black", "orange", "light-blue", "green", "yellow", "pink", "magenta", "pale-green"];
  const colorHexArray = ["#1f2532", "#fc643f", "#8ab9dd", "#06c48c", "#ffd05d", "#ff657d", "#cb1d5b", "#648f85"];

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
                {tds?.script && (
                  <span className="white">
                    Libreto: {tds.script} <br />
                  </span>
                )}
                {tds?.basedOn && (
                  <span className="white">
                    Historia basada en: {tds.basedOn} <br />
                  </span>
                )}
                {tds?.series && (
                  <span className="white">
                    Serie: <i>{tds.series}</i> <br />
                  </span>
                )}
                {tds?.transmittedBy && (
                  <span className="white">
                    Transmitido por: {tds.transmittedBy} <br />
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
                {!tds?.script && tds?.reviewedBy && (
                  <span className="white">
                    Reseña por: {tds.reviewedBy} <br />
                  </span>
                )}
              </p>
              {tds?.script && tds?.reviewedBy && <p className="white">Reseña por: {tds.reviewedBy}</p>}
              {tds?.playbackUrl && (
                <p className="content white">
                  <span className="playback">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path
                        fill={colorHexArray[colorArray.indexOf(color)]}
                        d="M20.34 10.758L4.86 3.018c-.425-.196-.92-.165-1.316.084-.395.25-.638.682-.644 1.15v15.473c-.004.48.243.928.652 1.18.409.252.92.273 1.348.053l15.44-7.74c.466-.234.76-.711.76-1.233 0-.522-.294-1-.76-1.233v.006z"
                      />
                    </svg>
                  </span>
                  &nbsp; Escucha&nbsp;
                  <a
                    className="white bold-font underlined"
                    href={tds.playbackUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    aquí
                  </a>
                  &nbsp; la obra completa
                </p>
              )}
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
