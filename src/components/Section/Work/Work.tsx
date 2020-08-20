import React, { useState } from "react";
import "./Work.scss";
import Header from "../../Header";
import Footer from "../../Footer";
import Subscription from "../../../shared/components/Subscription";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import WorkBox from "../../../shared/components/Works/WorkBox/WorkBox";
import Quote from "../../../shared/components/Quote";
import { workList } from "../../../shared/components/Works/definitions/constants/work-list.constant";
import { colorOrder } from "../../../shared/components/Works/definitions/constants/color-order.constant";
import Filters from "../../../shared/components/Filters/Filters";
import {
  WorkCategory,
  WorkCategoryName,
  CategoryToName,
} from "../../../shared/components/Works/definitions/enums/work-category.enum";
import { useLocation, useHistory } from "react-router-dom";

function Work() {
  let history = useHistory();
  let { search } = useLocation();
  let activeFilter = (search.split("=")[1] as WorkCategoryName) || WorkCategoryName.TODOS;
  const [active, setActive] = useState(WorkCategory[activeFilter]);

  function triggerSetActive(newValue: WorkCategory) {
    history.push({
      search: `?filter=${CategoryToName[newValue]}`,
    });
    setActive(newValue);
  }

  return (
    <div className="Work">
      <Header />
      <div className="section-padding">
        <SectionTitle title="Más allá del país de Lilac" subtitle="Obra" />
        <Filters active={active} activeHandler={triggerSetActive} />
      </div>
      <div className="pure-g">
        <div className="mid-section-padding">
          {workList
            .filter((work) => active === WorkCategory.TODOS || active === work.category)
            .map((work, i) => {
              return (
                <div key={work.slug} className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
                  <WorkBox
                    color={colorOrder[i % colorOrder.length]}
                    name={work.name}
                    subtitle={work.category}
                    link={`/obra/${work.slug}`}
                    backgroundImg={work.illustration}
                  />
                </div>
              );
            })}
        </div>
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
