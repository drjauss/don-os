import React from "react";
import { Link } from "react-router-dom";

export const mainParagraph = (
  <div className="mainParagraph">
    <p className="content justified">
      “¿Que son trojes? Trojes son graneros o despensas que están en los campos cerca de las casas de habitación”: así
      comienza la narración de este radioteatro.
    </p>
    <p className="content justified">
      “La niña de siete trojes” cuenta la historia de una pequeña que recoge en el campo varias flores, como margaritas
      y claveles, hasta formar un ramillete que lleva con ella mientras recorre en total siete trojes.
    </p>
    <p className="content justified">
      Cada uno, tiene en su interior cosas llamativas ante los ojos de la niña. El primero de ellos es el de la riqueza
      donde ve muchas monedas, joyas y objetos de valor. La niña se ve tentada a entrar, pero las flores le advierten:
    </p>
    <p className="content center">
      “Cuidado, niña de siete trojes,
      <br />
      <br />
      escucha los consejos que dan las flores.
      <br />
      <br />
      No ambiciones tesoros ni pedrería,
      <br />
      <br />
      la riqueza encontrada no da alegría.
      <br />
      <br />
      Cuidado, niña de siete trojes,
      <br />
      <br />
      escucha los consejos que dan las flores”.
    </p>
  </div>
);

export const bottomParagraph = (
  <div className="bottomParagraph">
    <p className="content justified">
      Así que la niña sigue su camino hasta llegar al segundo troje: el del poder. Ante tan grande tentación, su
      ramillete de flores vuelve a advertirle de los peligros, por lo que la niña continúa su andar.
    </p>
    <p className="content justified">
      Otros de los trojes con que se encuentra a lo largo de su camino son el de la belleza y el de los goces, entre
      otros. Siempre, con sus amigas flores listas para cuidarla de todo lo que la pueda distraer del último troje, el
      más valiosos de todos. En este último, la niña ve cosas maravillosas,como por ejemplo a su osito de peluche y sus
      libros de cuentos, pero claro, todo esto tiene un significado profundo y especial.
    </p>
  </div>
);

export const sections = (
  <div className="sectionsReview">
    <div className="sectionReview">
      <h3 className="review-title subtitle">Del libro a la radio</h3>
      <p className="content justified">
        “La niña de siete trojes” es un cuento de Oswaldo Díaz Díaz, publicado por primera vez en{" "}
        <i>Otra vez en Lilac</i>
        (1942). Tiene un claro tono moralizante y aleccionador, rasgo que se diluye con el paso del tiempo en la obra de
        Don Os, pues consideraba que esta no era la mejor manera de comunicarse con los niños. Al respecto, se puede
        consultar el artículo{" "}
        <Link className="orange" to="/obra/aspecto-de-la-literatura-infantil?color=yellow">
          “Aspecto de la literatura infantil”
        </Link>{" "}
        (1941).
      </p>
      <p className="content justified">
        En esta versión radioteatral de 1954, José Agustín Pulido Telléz, director de la serie <i>Teatro para niños</i>{" "}
        y del grupo escénico infantil de la emisora, respeta la idea original de Díaz Díaz y realiza una versión
        dramatizada del cuento. La temática central es la misma y el número de las trojes, así como su contenido es
        prácticamente idéntico.
      </p>
      <p className="content justified">
        Sin embargo, sí hay algunas diferencias. En el caso del cuento escrito, solamente hay dos voces presentes: la de
        un narrador y la del ramillete de flores. En cambio, en la versión de radioteatro, la niña tiene un lugar
        protagónico en la narración, dice lo que piensa y lo que siente. Las flores también tienen voz, tanto como grupo
        o ramillete, como de manera individual. Adicionalmente, escuchamos a otros personajes que aparecen en las
        diferentes trojes y, por supuesto, a la narradora, quien además apela directamente a los radioescuchas, les hace
        preguntas y les explica significados de las palabras que puedan ser desconocidas para los niños.
      </p>
      <p className="content justified">
        Estas diferencias son entendibles, ya que el medio para comunicar la historia es diferente. En el caso de la
        radio, había un objetivo de hacer una versión dramatizada, lo que implica la intervención de varios personajes,
        la utilización de música y de efectos de sonido; mientras que en un soporte escrito como un libro los recursos
        narrativos son diferentes.
      </p>
      <p className="content justified">
        “La niña de siete trojes” fue publicado también en <i>Cambam Bali</i> (1973) y <i>Retorno a Lilac</i> (1987) y
        representa la etapa temprana de la escritura en Díaz Díaz.
      </p>
    </div>
  </div>
);
