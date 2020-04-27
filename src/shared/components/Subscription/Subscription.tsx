import React from "react";
import "./Subscription.scss";

function Subscription() {
  return (
    <div className="Subscription">
      <div className="center section-padding">
        <h1 className="title white no-margin">Conoce el país de Lilac</h1>
        <p className="content white s1em">Suscríbete a nuestro boletín mensual</p>
        <form action="mailto:donosvuelvealilac@gmail.com,zumaservicioseditoriales@gmail.com">
          <input required className="content" type="text" placeholder="Correo electrónico" />
          <div className="white content">
            <input required type="checkbox" />
            Acepto la <a className="underlined">política de privacidad</a>
          </div>
          <button className="content" type="submit">
            Suscribirme
          </button>
        </form>
      </div>
    </div>
  );
}

export default Subscription;
