import React from "react";
import "./Home.scss";
import Header from "../../Header";
import Banner from "../../../shared/components/Banner";
import Information from "../../../shared/components/Information";
import Works from "../../../shared/components/Works/Works";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Banner />
      <Information />
      <Works />
    </div>
  );
}

export default Home;
