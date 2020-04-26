import React from "react";
import "./Works.scss";
import WorkBox from "./WorkBox/WorkBox";
import { ColorsEnum } from "./definitions/enums/colors.enum";

function Works() {
  return (
    <div className="Works">
      <div className="center">
        <span className="subject">Obra</span>
        <h1 className="title with-subject">Más all&aacute; del pa&iacute;s de Lilac</h1>
      </div>

      <div className="featured-works">
        <div className="pure-g">
          <div className="pure-u-1-2">
            <WorkBox color={ColorsEnum.orange} title="El país de Lilac" subtitle="Cuento" />
          </div>
          <div className="pure-u-1-2">
            <WorkBox color={ColorsEnum.lightBlue} title="Aspecto de la Literatura infantil" subtitle="No ficción" />
          </div>
          <div className="pure-u-1-2">
            <WorkBox color={ColorsEnum.yellow} title="Blondinette" subtitle="Teatro" />
          </div>
          <div className="pure-u-1-2">
            <WorkBox color={ColorsEnum.pink} title="El cargador de sal" subtitle="Radioteatro" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
