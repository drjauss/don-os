import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div className="Header">
      <nav>
        <div>
          <h2 className="title">Don Os vuelve a Lilac</h2>
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
