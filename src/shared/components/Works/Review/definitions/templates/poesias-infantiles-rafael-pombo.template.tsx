import React from "react";
import { Link } from "react-router-dom";

export const mainParagraph = (
  <div className="mainParagraph">
    <p className="content justified">
      Si bien Oswaldo Díaz Díaz no tuvo una educación académica sobre aspectos formales y teóricos de la literatura, sí
      es evidente su estudio empírico y su capacidad de análisis, además de la pasión por la escritura para niños que
      inició siendo un hobby y se convirtió en una de sus actividades principales.
    </p>
    <p className="content justified">
      En esta ocasión, Díaz Díaz nos sorprende con un artículo sobre las fábulas y las poesías del reconocido autor
      colombiano Rafael Pombo, y en este texto expone y sustenta sus ideas alrededor de las bondades del trabajo del
      poeta, y lo defiende de los injustos y desmerecidos comentarios sobre la figura plagiaria de la que fue acusado en
      repetidas ocasiones.
    </p>
    <p className="content justified">
      Para Oswaldo Díaz, el gran logro de Pombo no está relacionado con las ideas de sus poesías o con los personajes
      principales de sus historias –como <i>Simón el bobito</i> o <i>La pobre viejecita</i>–, que fueron tomados de la
      tradición oral inglesa –de la que Pombo se declara conocedor y abiertamente expone que bebió de esa fuente para
      crear las historias que muchos niños de Colombia se saben de memoria– sino que su éxito reside en la capacidad de
      adaptar narraciones de la oralidad inglesa para que en español suenen con mucha naturalidad y no tengan rezagos de
      una lengua extranjera.
    </p>
  </div>
);

export const bottomParagraph = (
  <div className="bottomParagraph">
    <p className="content justified">
      Por ello, expone que Rafael Pombo no fue un traductor de palabras, sino de temas. Para evidenciar esto, Díaz Díaz
      nos muestra fragmentos de las historias en inglés y hace un análisis de la manera en que esas ideas son
      transformadas por Pombo y cómo, en algunos casos, adiciona fragmentos a las historias originales producto de su
      invención.
    </p>
    <p className="content justified">
      Se destaca también la utilización de ambientes y escenarios que acercan a los lectores colombianos a las
      narraciones, por lo que a las fábulas y a los poemas se les dota de un contexto nacional.
    </p>
    <p className="content justified">
      Sin duda, este es uno de los mejores textos de Díaz Díaz donde vemos sus habilidades para hacer un análisis
      literario, su interés por desmenuzar y sus ganas de teorizar la literatura infantil colombiana, justo como se
      evidencia en su ensayo{" "}
      <Link className="orange" to="/obra/aspecto-de-la-literatura-infantil?color=yellow">
        “Aspecto de la literatura infantil”
      </Link>
      , publicado en la <i>Revista de las Indias</i>.
    </p>
  </div>
);

export const sections = <div className="sectionsReview"></div>;
