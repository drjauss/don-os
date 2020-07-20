import React from "react";
import "./About.scss";
import Header from "../../Header";
import Footer from "../../Footer";
import Subscription from "../../../shared/components/Subscription";
import SectionTitle from "../../../shared/components/SectionTitle";

function About() {
  return (
    <div className="About">
      <Header />
      <div className="section-padding">
        <SectionTitle title="El proyecto" subtitle="Acerca de" />
        <div className="empty-space"></div>
        <p className="content justified">
          Este micrositio es el producto final de la investigación titulada{" "}
          <i>Don os vuelve a Lilac: panorama de la obra literaria y radioteatral infantil de Oswaldo Díaz Díaz</i>,
          ganadora de la “Beca de investigación sobre las colecciones de literatura infantil y juvenil de la Biblioteca
          Nacional”, obtenida en la Convocatoria Estímulos, Fase II 2019 del Ministerio de Cultura.
        </p>
        <p className="content justified">
          Con esta investigación quisimos rescatar del olvido, revitalizar y difundir la obra infantil del historiador,
          escritor y dramaturgo Oswaldo Díaz Díaz, figura destacada en la producción cultural, literaria y radiofónica
          de la primera mitad del siglo XX en Colombia.
        </p>
        <p className="content justified">
          Este autor fue determinante en el ámbito de la literatura infantil por sus cuentos, obras teatrales y
          radiofónicas.
        </p>
        <div className="center content underlined">
          <a
            download
            href="/src/files/Documento-de-investigación-Don-Os-vuelve-a-Lilac.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="file-download-anchor orange content underlined"
          >
            <svg
              fill="#fc643f"
              width="28"
              height="28"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M24 12c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12 12-5.377 12-12zm-1 0c0-6.071-4.929-11-11-11s-11 4.929-11 11 4.929 11 11 11 11-4.929 11-11zm-11.5 4.828l-3.763-4.608-.737.679 5 6.101 5-6.112-.753-.666-3.747 4.604v-11.826h-1v11.828z" />
            </svg>
            <span>Descarga el documento de investigación aquí</span>
          </a>
        </div>

        <h3 className="content bold-font">Agradecimientos</h3>
        <p className="content justified">
          Gracias al &nbsp;
          <a
            className="yellow-link no-decoration"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.mincultura.gov.co/Paginas/default.aspx"
          >
            Ministerio de Cultura
          </a>
          &nbsp; por impulsar la investigación en literatura infantil en Colombia; a los miembros del jurado por
          habernos seleccionado como ganadoras y por su voto de confianza en nuestro proyecto.
        </p>

        <p className="content justified">
          Gracias a la &nbsp;
          <a
            className="yellow-link no-decoration"
            href="https://bibliotecanacional.gov.co/es-co"
            target="_blank"
            rel="noopener noreferrer"
          >
            Biblioteca Nacional
          </a>
          &nbsp; por su apoyo e interés en el desarrollo de la investigación; a Camilo Páez, por su guía y gestión; a
          Diana Galindo, por su coordinación.
        </p>

        <p className="content justified">
          Agradecemos especialmente a &nbsp;
          <a
            className="yellow-link no-decoration"
            href="https://www.senalmemoria.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Señal Memoria,
          </a>
          &nbsp; por habernos abierto las puertas para conocer y trabajar con su archivo sonoro. A Juan Carlos Murillo,
          por todo su apoyo y disposición; a Juan David Carvajal, a Germán, a Federico, a Daniel y a Cristian por su
          gran colaboración en las tareas de búsqueda, restauración y digitalización de los radioteatros de Don Os.
        </p>

        <p className="content justified">
          Gracias a Carlos Alberto Fernández por su generosidad para compartir con nosotroas su conocimiento del
          radioteatro en Colombia.
        </p>

        <p className="content justified">
          Agradecemos al &nbsp;
          <a
            className="yellow-link no-decoration"
            href="https://gimnasiomoderno.edu.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gimnasio Moderno
          </a>
          , especialmente a Camilo De-Irisarri por preservar y valorar la herencia cultural de Oswaldo Díaz Díaz, y por
          habernos permitido acceder a los archivos con los que atamos algunos cabos sueltos.
        </p>
        <p className="content justified">
          Gracias a Catalina Díaz, nieta de Oswaldo Díaz Díaz, por abrir la comunicación entre los herederos y la
          Biblioteca Nacional. También a Germán Izquierdo, por compartir con nosotras el legado de su casiabuelo.
        </p>

        <p className="content justified">
          A Fredy Forero todo nuestro agradecimiento por su ayuda incondicional y por esclarecer todas nuestras dudas
          frente a los derechos de autor de Don Os.
        </p>
        <p className="content justified">
          Gracias a la Pontificia Universidad Javeriana, a la&nbsp;
          <a
            className="yellow-link no-decoration"
            href="https://www.javeriana.edu.co/especializacion-literatura-infantil"
            target="_blank"
            rel="noopener noreferrer"
          >
            Especialización de Literatura Infantil y Juvenil
          </a>
          &nbsp; y a Jeffrey Cedeño; a la&nbsp;
          <a
            className="yellow-link no-decoration"
            href="https://unal.edu.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Universidad Nacional de Colombia
          </a>
          , particularmente a Carmen Elisa Acosta y Patricia Trujillo por creer en este proyecto desde sus inicios.
          Gracias por los espacios brindados para divulgar nuestros hallazgos.
        </p>

        <p className="content justified">
          Gracias también a Daniela Caicedo, a John Varón y a Gina Navarro por tener un ojo acertado para llevar a Don
          Os a las imágenes y al mundo digital.
        </p>

        <p className="content justified">
          Gracias a nuestras familias y amigos por entender y compartir nuestro amor por Oswaldo Díaz Díaz.
        </p>
        <p className="content">Y en especial, gracias a Don Os.</p>
        <h3 className="content bold-font">Créditos</h3>
        <p className="content justified">
          Ministra de Cultura
          <br />
          Carmen Inés Vásquez Camacho
        </p>
        <p className="content justified">
          Viceministro de Creatividad y Economía Naranja
          <br />
          Felipe Buitrago Restrepo
        </p>
        <p className="content justified">
          Viceministro de Fomento Regional y Patrimonio
          <br />
          José Ignacio Argote López
        </p>
        <p className="content justified">
          Secretaria General
          <br />
          Claudia Isabel Victoria Niño Izquierdo
        </p>
        <p className="content justified">
          Directora de la Biblioteca Nacional
          <br />
          Diana Patricia Restrepo Torres
        </p>
      </div>
      <Subscription />
      <Footer />
    </div>
  );
}

export default About;
