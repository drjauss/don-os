import React from "react";
import { Link } from "react-router-dom";

export const mainParagraph = (
  <div className="mainParagraph">
    <p className="content justified">
      Hay una hora de la noche en la que ocurre algo muy especial. Es el momento en que todos están dormidos: los más
      trasnochadores ya han cerrado sus ojos y los más madrugadores aún no han despertado, así que todo está en paz y
      silencio. Y para que eso tan especial ocurra se necesitan las palabras mágicas “Cambam bali, cambam balicó”.
      Entonces: la magia ocurre.
    </p>
    <p className="content justified">
      Magdalena y Cornelio, dos hermanitos de 4 y 5 años, estaban dormidos. Pero sus juguetes: Flor de Haba, una hermosa
      pastorcita de porcelana, Cucharita de Palo y el Teniente de Plomo despertaron tras las palabras mágicas.
    </p>
    <p className="content justified">
      También lo hicieron Max Maravilla, Sombra Azul, Matulejo y Morral de Hocico. “Todos estos nombres os parecerán sin
      duda bastante raros, pero todo lo que sucede durante la maravillosa hora en que las cosas hablan, es raro e
      inexplicable en las demás horas del día”.
    </p>
  </div>
);

export const bottomParagraph = (
  <div className="bottomParagraph">
    <p className="content justified">
      Oswaldo Díaz Díaz nos cuenta detalladamente el plan de los malvados Matulejo y Morral de Hocico para capturar a
      Flor de Haba –envidiosos porque era la favorita de Magdalena–, y así obtener un lucrativo monto por el rescate.
    </p>
    <p className="content justified">
      Pero sus amigos hicieron varias cosas para recuperar a la preciosa pastora: atravesaron una peligrosa cornisa a
      cuatro metros de altura del suelo, el Teniente de Plomo quedó atrapado dentro de una tabaquera y Cucharita de Palo
      quedó pegado en una superficie con goma, entre muchas otras situaciones.
    </p>
    <p className="content justified">
      Finalmente, Flor de Haba logró ser rescatada antes de que acabara la hora maravillosa y, cuando se hizo de día, la
      vida transcurrió con normalidad para la familia de Cornelio y Magdalena.
    </p>
  </div>
);

export const sections = (
  <div className="sectionsReview">
    <div className="sectionReview">
      <h3 className="review-title subtitle">La hora de la fantasía</h3>
      <p className="content justified">
        “Cambam Bali” es uno de los primeros cuentos de Don Os y representa fuertemente una de sus líneas temáticas: la
        fantasía en el mundo infantil. Adicionalmente, se empiezan a delinear temas como el juego, la amistad, las
        aventuras y la resolución de conflictos. También se destaca el uso de la animación de juguetes y objetos.
      </p>
      <p className="content justified">
        En esta historia vemos un personaje que ya habíamos conocido: Cucharita de Palo que apareció en la revista{" "}
        <i>Rin Rin</i> (1936) en el cuento “Aventuras y desventuras de Cucharita de Palo”. Por otro lado, nos enteramos
        de personajes que veremos más adelante como la muñequita de porcelana y el teniente de plomo, con quienes nos
        encontraremos en la obra de teatro{" "}
        <Link to="/obra/blondinette?color=orange" className="orange">
          Blondinette
        </Link>{" "}
        (1941).
      </p>
      <p className="content justified">
        Es curioso que este cuento no haya sido incluido en un libro que lleva el mismo título, <i>Cambam Bali</i>, en
        el que se recopilan otras de sus historias como{" "}
        <Link className="orange" to="/obra/rompelo-todo?color=orange">
          “Rómpelo-todo”
        </Link>
        ,{" "}
        <Link className="orange" to="/obra/pomarrosa-en-el-parque?color=orange">
          “Pomarrosa en el parque”
        </Link>{" "}
        y{" "}
        <Link className="orange" to="/obra/diario-de-un-gorrion?color=pink">
          “Diario de un gorrión”
        </Link>
        , entre otras.
      </p>
    </div>
  </div>
);
