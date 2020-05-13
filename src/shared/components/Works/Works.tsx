import React from "react";
import "./Works.scss";
import WorkBox from "./WorkBox/WorkBox";
import { workList } from "./definitions/constants/work-list.constant";
import { colorOrder } from "./definitions/constants/color-order.constant";

function Works() {
  return (
    <div className="Works">
      <div className="center">
        <span className="subject">Obra</span>
        <h1 className="title with-subject">Más all&aacute; del pa&iacute;s de Lilac</h1>
      </div>

      <div className="featured-works">
        <div className="pure-g">
          {workList
            .filter((w) => w.featured)
            .map((work, i) => {
              return (
                <div key={work.slug} className="pure-u-1 pure-u-sm-1-2 pure-u-lg-1-3">
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
      </div>
    </div>
  );
}

export default Works;
