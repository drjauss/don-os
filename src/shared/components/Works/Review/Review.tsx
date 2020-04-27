import React from "react";
import "./Review.scss";
import Header from "../../../../components/Header/Header";
import { Redirect, useParams } from "react-router-dom";
import { workSlugs } from "../definitions/constants/work-slugs.constant";
import Footer from "../../../../components/Footer/Footer";
import Subscription from "../../Subscription/Subscription";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { workList } from "../definitions/constants/work-list.constant";
import { Work } from "../definitions/types/work.type";
import { reviews } from "./definitions/constants/review-list.constant";

function Review() {
  let { item } = useParams();
  let work = workList.find((work: Work) => work.slug === item);
  let review = reviews[item as string];

  return (
    <div className="Review">
      {item && work && review && workSlugs.indexOf(item) === -1 && <Redirect to="/obra" />}
      <Header />
      <div className="section-padding">
        <SectionTitle title={work?.title as string} subtitle={work?.category as string} />
        <p className="center image-responsive">
          <img src={work?.illustration} alt={work?.title + " illustration"} />
        </p>
      </div>
      <Subscription />
      <Footer />
    </div>
  );
}

export default Review;
