import React from "react";
import "./Review.scss";
import Header from "../../../../components/Header/Header";
import { Redirect, useParams } from "react-router-dom";
import { workSlugs } from "../definitions/constants/work-slugs.constant";
import Footer from "../../../../components/Footer/Footer";
import Subscription from "../../Subscription/Subscription";

function Review() {
  let { item } = useParams();
  return (
    <div className="Review">
      {item && workSlugs.indexOf(item) === -1 && <Redirect to="/obra" />}
      <Header />
      <div>review</div>
      <Subscription />
      <Footer />
    </div>
  );
}

export default Review;
