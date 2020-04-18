import React from "react";
import "./Home.scss";
import Header from "../../Header";
import Banner from "../../../shared/components/Banner";
import Information from "../../../shared/components/Information";
import Works from "../../../shared/components/Works";
import Quote from "../../../shared/components/Quote";
import Subscription from "../../../shared/components/Subscription";
import Footer from "../../Footer/Footer";
import donOsImg from "../../../images/don-os-2.png";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Banner />
      <Information />
      <Works />
      <Quote
        image={donOsImg}
        subtitle="Don Os en palabras"
        quote="Mis kilos y la pequeñez de mi vehículo nos hacen un objeto para burlas, apodos y caricaturas"
        author="Oswaldo Díaz Díaz"
      />
      <Subscription />
      <Footer />
    </div>
  );
}

export default Home;
