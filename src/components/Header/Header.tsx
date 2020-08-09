import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import { NavigationRoutesEnum } from "./definitions/enums/section-routes.enum";

function Header() {
  let location = useLocation();
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={"Header " + (location.pathname === NavigationRoutesEnum.HOME ? " floating-header" : "")}>
      <nav className="desktop">
        {location.pathname !== NavigationRoutesEnum.HOME && (
          <div>
            <Link to="/">
              <h2 className="title">Don Os vuelve a Lilac</h2>
            </Link>
          </div>
        )}
        <div>
          <ul>
            <li className={location.pathname === NavigationRoutesEnum.HOME ? "active" : "not-home"}>
              <Link to="/">Inicio</Link>
            </li>
            <li className={location.pathname.includes(NavigationRoutesEnum.BIOGRAPHY) ? "active" : ""}>
              <Link to="/biografia">Biografía</Link>
            </li>
            <li className={location.pathname.includes(NavigationRoutesEnum.WORK) ? "active" : ""}>
              <Link to="/obra">Obra</Link>
            </li>
            <li className={location.pathname.includes(NavigationRoutesEnum.CONTACT) ? "active" : ""}>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li className={location.pathname.includes(NavigationRoutesEnum.ABOUT) ? "active" : ""}>
              <Link to="/acerca-de">Acerca de</Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="mobile">
        {location.pathname !== NavigationRoutesEnum.HOME && (
          <div>
            <Link to="/">
              <h2 className="title">Don Os vuelve a Lilac</h2>
            </Link>
          </div>
        )}
        <div
          className={
            "menu-icon " + (location.pathname === NavigationRoutesEnum.HOME ? "floating-nav" : "non-floating-nav")
          }
          onClick={() => setIsActive(!isActive)}
        >
          <div
            className={"hamburger hamburger--collapse " + (isActive ? "is-active" : "")}
            aria-label="Menu"
            role="button"
            aria-controls="navigation"
          >
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
