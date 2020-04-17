import React from "react";
import "./Work.scss";
import Header from "../../Header";
import Footer from "../../Footer";
import Subscription from "../../../shared/components/Subscription";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import WorkBox from "../../../shared/components/Works/WorkBox/WorkBox";
import { ColorsEnum } from "../../../shared/definitions/enums/colors.enum";

function Work() {
  return (
    <div className="Work">
      <Header />
      <div className="section-padding">
        <SectionTitle title="Más allá del país de Lilac" subtitle="Obra" />
      </div>
      <div className="pure-g">
        <div className="pure-u-1-2">
          <WorkBox color={ColorsEnum.orange} title="El país de Lilac" subtitle="Cuento" />
        </div>
        <div className="pure-u-1-2">
          <WorkBox color={ColorsEnum.lightBlue} title="Aspecto de la literatura infantil" subtitle="No ficción" />
        </div>
        <div className="pure-u-1-2">
          <WorkBox color={ColorsEnum.yellow} title="Blondinette" subtitle="Teatro" />
        </div>
        <div className="pure-u-1-2">
          <WorkBox color={ColorsEnum.pink} title="El cargador de sal" subtitle="Radioteatro" />
        </div>
        <div className="pure-u-1-2">
          <WorkBox color={ColorsEnum.magenta} title="Rayos y centellas" subtitle="Cuento" />
        </div>
        <div className="pure-u-1-2">
          <WorkBox color={ColorsEnum.orange} title="Juegos de antaño" subtitle="No ficción" />
        </div>
        <div className="pure-u-1-2">
          <WorkBox color={ColorsEnum.yellow} title="Los papagayos de Don Cristóforo" subtitle="Radioteatro" />
        </div>
        <div className="pure-u-1-2">
          <WorkBox color={ColorsEnum.pink} title="Rómpelo-Todo" subtitle="Cuento" />
        </div>
        <div className="pure-u-1-2">
          <WorkBox color={ColorsEnum.orange} title="Matilde Anaray, la pastorcita de Socha" subtitle="Cuento" />
        </div>
        <div className="pure-u-1-2">
          <WorkBox color={ColorsEnum.lightBlue} title="Rataplán" subtitle="Radioteatro" />
        </div>
      </div>
      <Subscription />
      <Footer />
    </div>
  );
}

export default Work;
