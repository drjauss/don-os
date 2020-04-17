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
          Este micrositio es el producto final de la investigación titulada <i>Don os vuelve a Lilac</i>: panorama de la
          obra literaria y radioteatral infantil de Oswaldo Díaz Díaz, ganadora de la “Beca de investigación sobre las
          colecciones de literatura infantil y juvenil de la Biblioteca Nacional”, obtenida en la Convocatoria
          Estímulos, Fase II 2019 del Ministerio de Cultura.
        </p>
        <p className="content justified">
          Con esta investigación queremos rescatar del olvido, revitalizar y difundir la obra infantil del historiador,
          escritor y dramaturgo Oswaldo Díaz Díaz, figura destacada en la producción cultural, literaria y radiofónica
          de la primera mitad del siglo XX en Colombia.
        </p>
        <p className="content justified">
          Este autor fue determinante en el ámbito de la literatura infantil por sus cuentos, obras teatrales y
          radiofónicas.
        </p>
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
          &nbsp; por impulsar la investigación en literatura infantil en Colombia y a los miembros del jurado por
          habernos seleccionado como ganadoras.
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
          Diana Galindo, por su coordinación; a Elder Tovar, por sus lineamientos.
        </p>

        <p className="content justified">
          Agradecemos especialmente a &nbsp;
          <a
            className="yellow-link no-decoration"
            href="https://www.senalmemoria.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Señal Memoria
          </a>
          &nbsp; por habernos abierto las puertas para conocer y trabajar con su archivo sonoro. A Juan Carlos Murillo,
          por todo su apoyo y disposición; a Juan David Carvajal, a Germán, a Federico, a Daniel, a Cristian por su gran
          colaboración en las tareas de búsqueda, restauración y digitalización de los radioteatros de Don Os.
        </p>
        <p className="content justified">
          Gracias al &nbsp;
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
          Gracias a Germán Izquierdo por compartirnos el legado de su casiabuelo. Gracias también a Daniela Caicedo, a
          John Varón y a Gina Navarro por tener un ojo acertado para llevar a Don Os a las imágenes.
        </p>
        <p className="content justified">
          Gracias a Carlos Alberto Fernández por su generosidad para compartir con nosotras su conocimiento del
          radioteatro en Colombia.
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
          &nbsp; y a Jeffrey Cedeño; a&nbsp;
          <a
            className="yellow-link no-decoration"
            href="http://fundalectura.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fundalectura
          </a>
          , a Diana Rey; a la Universidad Nacional de Colombia, particularmente a Carmen Elisa Acosta y Patricia
          Trujillo por su voto de confianza en este proyecto desde sus inicios. Gracias por los espacios brindados para
          divulgar nuestros hallazgos.
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
