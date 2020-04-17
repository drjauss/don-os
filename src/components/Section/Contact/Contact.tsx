import React from "react";
import "./Contact.scss";
import Header from "../../Header";
import Footer from "../../Footer";
import Subscription from "../../../shared/components/Subscription";
import SectionTitle from "../../../shared/components/SectionTitle";
import imgMaca from "../../../images/investigators/FotosMaca.jpg";
import imgZu from "../../../images/investigators/FotosZu.jpg";
import Instructor from "./Instructor/Instructor";

function Contact() {
  return (
    <div className="Contact">
      <Header />

      <div className="section-padding inner-gap">
        <SectionTitle title="Investigadoras" subtitle="Contacto" />
        <div>
          <p className="content justified">
            Si quieres conocer más sobre este trabajo de investigación o si quieres saber en dónde encontrar las obras
            de Don Os, puedes escribirnos y contactarnos vía correo electrónico.
          </p>
          <p className="content bold-font">
            donosvuelvealilac@gmail.com <br /> zumaservicioseditoriales@gmail.com
          </p>
          <p className="content justified">
            Para recibir información periódica sobre Oswaldo Díaz Díaz y la literatura infantil colombiana de la primera
            mitad del siglo XX, inscríbete a nuestro boletín mensual.
          </p>
        </div>

        <Instructor
          image={imgMaca}
          title="María Camila Monroy S."
          content="Máster en Libros y Literatura Infantil y Juvenil de la Universidad Autónoma de Barcelona. Profesional en Estudios Literarios y Comunicadora Social de la Pontificia Universidad Javeriana. Presta servicios editoriales como independiente y es investigadora de literatura infantil."
        />
        <Instructor
          image={imgZu}
          title="Zully Pardo Ch."
          content="Docente de la Especialización de Literatura Infantil y Juvenil de la Pontificia Universidad Javeriana, editora independiente e investigadora de literatura infantil. Magíster en Estudios literarios de la UNAL, Máster en Libros y Literatura Infantil y Juvenil de la Universidad Autónoma de Barcelona."
        />
      </div>

      <Subscription />
      <Footer />
    </div>
  );
}

export default Contact;
