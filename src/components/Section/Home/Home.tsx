import React from "react";
import "./Home.scss";
import Header from "../../Header";
import Banner from "../../../shared/components/Banner";
import Information from "../../../shared/components/Information";
import Works from "../../../shared/components/Works";
import Quote from "../../../shared/components/Quote";
import Subscription from "../../../shared/components/Subscription";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Banner />
      <Information />
      <Works />
      <Quote />
      <Subscription />
    </div>
  );
}

export default Home;
