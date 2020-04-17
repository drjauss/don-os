import React from "react";
import "./Biography.scss";
import Header from "../../Header";
import Footer from "../../Footer";
import Subscription from "../../../shared/components/Subscription";
import Carousel from "../../../shared/components/Carousel";

function Biography() {
  return (
    <div className="Biography">
      <Header />
      <Carousel />
      <Subscription />
      <Footer />
    </div>
  );
}

export default Biography;
