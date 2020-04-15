import React from "react";
import "./Home.scss";
import Header from "../../Header";
import Banner from "../../../shared/components/Banner";
import Information from "../../../shared/components/Information";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Banner />
      <Information />
    </div>
  );
}

export default Home;
