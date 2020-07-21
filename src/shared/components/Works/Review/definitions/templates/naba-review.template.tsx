import React from "react";
import { Link } from "react-router-dom";

export const mainParagraph = (
  <div className="mainParagraph">
    <p className="content justified">
      Naba, princesa indígena hija del rey Atlacatl, está enamorada del joven Hoitzi. Su historia de amor, a la manera
      de Romeo y Julieta, es imposible: Hoitzi pertenece al pueblo de los mayaquichi, y el rey jamás consentiría que su
      hija o ninguna persona de su pueblo se juntara con el pueblo enemigo.
    </p>
    <p className="content justified">
      Esta leyenda salvadoreña, adaptada al radioteatro por Oswaldo Díaz Díaz y escrita originalmente por Salvador
      Salazar Arrué (Salarrué), refleja dos intereses de Don Os: la recreación de la historia por medio de la ficción y
      el protagonista indígena en una narración prehispánica (como en{" "}
      <Link className="orange" to="/obra/el-cargador-de-sal?color=orange">
        El cargador de sal
      </Link>
      ).
    </p>
    <p className="content justified">
      Para mejorar, una historia de amor imposible y un final que, en un primer vistazo, podría considerarse triste,
      pero de gran trascendencia: los personajes mueren y a causa de sus virtudes en vida se transforman en algo que
      beneficia a los demás. Veamos.
    </p>
  </div>
);

export const bottomParagraph = (
  <div className="bottomParagraph">
    <p className="content justified">
      El joven Hoitzi pretende raptar a la princesa. Piensa que cuando se junten en una unión sagrada, los dos pueblos
      se reconciliarán. Pero su intento resulta frustrado, pues es delatado y atacado por los guardias del rey. Nabá se
      entera de la pelea y, junto con un grupo de mujeres, se dirige al lugar de la pelea para confortar con remedios a
      los heridos. De esta manera alcanza a encontrar a su amado agonizante, pero no logra salvarlo y este muere en sus
      brazos.
    </p>
    <p className="content justified">
      La tragedia se consolida cuando avisan al rey que su hija está socorriendo a los heridos del pueblo enemigo,
      entonces, sin importarle el lazo familiar, el soberano manda a matar a las siete mujeres, entre ellas a Nabá.
    </p>
    <p className="content justified">
      La idea de trascendencia, al estilo del admirado Hans Christian Andersen, se consolida cuando en el lugar donde
      murieron las mártires crecen siete árboles de deliciosa fragancia: sus cortezas expelen un bálsamo curativo que
      incluso hoy, dice la leyenda, sana al herido y cura al enfermo.
    </p>
    <p className="content justified">
      La representación radioteatral es de un grupo experimentado: hay un trabajo actoral en el manejo de las voces y la
      puesta en escena, y los aditamentos que acompañan la representación (música, sonidos) invitan a los radioescuchas
      a permanecer atentos a una pieza corta (18 minutos) y sustancial.
    </p>
  </div>
);

export const sections = <div className="sectionsReview"></div>;
