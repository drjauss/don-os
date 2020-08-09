import React from "react";
import "./Subscription.scss";

function Subscription() {
  return (
    <div className="Subscription">
      <div className="center section-padding">
        <h1 className="title white no-margin">Conoce el país de Lilac</h1>
        <p className="content white s1em">Suscríbete a nuestro boletín mensual</p>
        <form>
          <input required className="content" type="text" placeholder="Correo electrónico" />
          <div className="white content">
            <label className="checkbox bounce">
              <input type="checkbox" />
              <svg viewBox="0 0 21 21">
                <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
              </svg>
            </label>
            <span className="white content">
              Acepto la <a className="underlined">política de privacidad</a>
            </span>
          </div>
          <button className="content" type="submit">
            Suscríbete
          </button>
        </form>
      </div>
    </div>
  );
}

export default Subscription;
