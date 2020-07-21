import React from "react";
import { Link } from "react-router-dom";

export const mainParagraph = (
  <div className="mainParagraph">
    <p className="content justified">
      El nombre de Hans Christian Andersen no pasa desapercibido para un amante o un estudioso de la literatura
      infantil, como lo fue Oswaldo Díaz Díaz. Este autor, conocedor de la literatura para niños y su historia, comparte
      en “Cómo era Hans Christian Anderson” [sic] algunos datos sobre el autor de <i>El soldadito de plomo</i> y{" "}
      <i>La sirenita.</i>
    </p>
    <p className="content justified">
      Díaz Díaz, con gran admiración, empieza resaltando la importancia de Andersen en la literatura infantil y continúa
      narrando su vida de una manera considerada y nostálgica, especialmente su época infantil, penosa y triste, marcada
      por momentos de soledad, hambre y demás dificultades, lo que, sin duda, le dieron un cúmulo de experiencias y
      conocimientos que aplicaría en su vida y en su producción literaria.
    </p>
    <p className="content justified">
      A medida que se nos ofrecen datos biográficos y elementos tomados de “El cuento de mi vida” de Andersen, Oswaldo
      Díaz establece una relación con la obra del autor nacido en Dinamarca en 1805. Su hipótesis es que en muchos de
      los cuentos del autor danés hay muestras de los duros momentos que vivió en compañía de su familia y en ausencia
      de ella.
    </p>
  </div>
);

export const bottomParagraph = (
  <div className="bottomParagraph">
    <p className="content justified">
      Un ejemplo de esto, lo encontramos en el siguiente fragmento donde Díaz Díaz plantea: “Si queréis daros cuenta de
      cómo fue su vida de entonces, sólo tenéis que abrir las páginas de su cuento El Patito Feo; simbolizadas en forma
      narrativa, traspuestas al mundo maravilloso de la fantasía, están allí las desventuras que padeció y, por fin, el
      triunfo final de Hans Christian Anderson [sic] en el mundo de la literatura…”.
    </p>
    <p className="content justified">
      Así, Dinamarca y el mundo vieron cómo Andersen pasó a convertirse en un hermoso cisne para la historia de las
      letras.
    </p>
    <p className="content justified">
      En este texto, podemos evidenciar tres rasgos sobresalientes de Oswaldo Díaz Díaz. En primer lugar, su interés en
      el tema de la infancia, tanto de los niños colombianos como del autor danés. Para Don Os, la infnacia merece un
      lugar especial y un lenguaje particular. Para entender mejor este aspecto, los invitamos a leer{" "}
      <Link className="orange" to="/obra/el-pais-de-lilac?color=magenta">
        “El país de Lilac”.
      </Link>
    </p>
    <p className="content justified">
      En segundo lugar, podemos entender mejor la influencia de Andersen en la literatura del autor colombiano, en
      cuanto a personajes, situaciones y estructura narrativa. Un ejemplo de ello lo encontramos en el cuento{" "}
      <Link className="orange" to="/obra/pomarrosa-en-el-parque?color=orange">
        “Pomarrosa en el parque”.
      </Link>
    </p>
    <p className="content justified">
      En tercer lugar, vemos su pasión y su habilidad por estudiar a sus colegas y sus creaciones, desde una óptica
      literaria y humana, como lo hizo también en el caso de Rafael Pombo, al hacer un análisis de sus poemas y fábulas
      en un texto titulado{" "}
      <Link className="orange" to="/obra/poesias-infantiles-rafael-pombo?color=orange">
        “Las poesías infantiles de Rafael Pombo”
      </Link>{" "}
      publicado en Hojas de cultura popular colombiana en 1953.
    </p>
  </div>
);

export const sections = <div className="sectionsReview"></div>;
