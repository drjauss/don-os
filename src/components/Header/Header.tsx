import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import { NavigationRoutesEnum } from "./definitions/enums/section-routes.enum";

function Header() {
  let location = useLocation();

  return (
    <div className="Header">
      <nav>
        <div>
          <h2 className="title">Don Os vuelve a Lilac</h2>
        </div>
        <div>
          <ul>
            <li className={location.pathname === NavigationRoutesEnum.HOME ? "active" : ""}>
              <Link to="/">Inicio</Link>
            </li>
            <li className={location.pathname === NavigationRoutesEnum.BIOGRAPHY ? "active" : ""}>
              <Link to="/biografia">Biografía</Link>
            </li>
            <li className={location.pathname === NavigationRoutesEnum.WORK ? "active" : ""}>
              <Link to="/obra">Obra</Link>
            </li>
            <li className={location.pathname === NavigationRoutesEnum.CONTACT ? "active" : ""}>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li className={location.pathname === NavigationRoutesEnum.ABOUT ? "active" : ""}>
              <Link to="/acerca-de">Acerca de</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
