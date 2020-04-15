import React from "react";
import "./Quote.scss";
import donOsImg from "../../../images/don-os-2.png";

function Quote() {
  return (
    <div className="Quote">
      <div className="center section-padding">
        <span className="subject">Don Os en palabras</span>
        <h1 className="title with-subject">
          “Mis kilos y la pequeñez de mi vehículo nos hacen un objeto para burlas, apodos y caricaturas”
        </h1>
        <p className="content center s16">– Oswaldo Díaz Díaz</p>
        <p className="center">
          <img className="image-responsive" src={donOsImg} alt="Don Os en su motocicleta" />
        </p>
      </div>
    </div>
  );
}

export default Quote;
