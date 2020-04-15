import React from "react";
import "./Information.scss";
import donOsImage from "../../../images/Don_Os_Home_Bio.png";

function Information() {
  return (
    <div className="Information">
      <div className="pure-g section-padding">
        <div className="pure-u-1-2">
          <img className="image-box" src={donOsImage} alt="Ilustración Don Os" />
        </div>
        <div className="pure-u-1-2">
          <span className="subject">Biografía</span>
          <h1 className="title with-subject">Oswaldo Diaz Diaz</h1>
          <p className="content">
            Oswaldo Díaz Díaz, Dos Os, fue un autor prolífico del siglo XX, además de profesor, historiador y abogado.
            Escribió cuentos, teatro, radioteatro y textos de no ficción, por lo que dejó un legado muy importante para
            la construcción de la historia de la literatura infantil colombiana.
          </p>
          <p className="content">
            Don Os creó para los niños El país de Lilac, un lugar imaginario donde los niños pueden ser libres.
            ¡Bienvenido!
          </p>
          <button className="link-btn yellow bottom-shadow">Conoce su vida</button>
        </div>
      </div>
    </div>
  );
}

export default Information;