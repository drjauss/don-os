import React from "react";
import "./Work.scss";
import Header from "../../Header";
import Footer from "../../Footer";
import Subscription from "../../../shared/components/Subscription";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import WorkBox from "../../../shared/components/Works/WorkBox/WorkBox";
import Quote from "../../../shared/components/Quote";
import { workList } from "../../../shared/components/Works/definitions/constants/work-list.constant";
import { colorOrder } from "../../../shared/components/Works/definitions/constants/color-order.constant";

function Work() {
  return (
    <div className="Work">
      <Header />
      <div className="section-padding">
        <SectionTitle title="Más allá del país de Lilac" subtitle="Obra" />
      </div>
      <div className="pure-g">
        {workList.map((work, i) => {
          return (
            <div key={work.slug} className="pure-u-1-2">
              <WorkBox
                color={colorOrder[i % colorOrder.length]}
                title={work.title}
                subtitle={work.category}
                link={`/obra/${work.slug}`}
                backgroundImg={work.illustration}
              />
            </div>
          );
        })}
      </div>
      <Quote
        subtitle="Don Os en palabras"
        author="Arturo Camacho Ramírez"
        quote="Pedagogo por vocación generosa, literato por exquisita dilación del espíritu"
      />
      <Subscription />
      <Footer />
    </div>
  );
}

export default Work;
