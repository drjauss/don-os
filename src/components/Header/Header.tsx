import React from "react";
import { ReactComponent as Logo } from "../../images/don-os-vuelve-a-lila.svg";
import "./Header.scss";

function Header() {
  return (
    <div className="Header">
      <nav>
        <div>
          <Logo />
        </div>
        <div>
          <ul>
            <li>
              <a>Inicio</a>
            </li>
            <li>
              <a>Biografía</a>
            </li>
            <li>
              <a>Obra</a>
            </li>
            <li>
              <a>Contacto</a>
            </li>
            <li>
              <a>Acerca de</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
