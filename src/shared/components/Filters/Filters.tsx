import React, { useState } from "react";
import "./Filters.scss";
import { WorkCategory } from "../Works/definitions/enums/work-category.enum";

type FiltersProps = {
  active: WorkCategory;
  activeHandler: Function;
};

function Filters({ active, activeHandler }: FiltersProps) {
  const [activeState, setActive] = useState(active);

  const workCategoryList = [
    WorkCategory.TODOS,
    WorkCategory.CUENTO,
    WorkCategory.TEATRO,
    WorkCategory.RADIOTEATRO,
    WorkCategory.NO_FICCION,
  ];

  function handleSetActive(element: WorkCategory) {
    setActive(element);
    activeHandler(element);
  }

  return (
    <div className="Filters">
      <ul className="content bold-font">
        {workCategoryList.map((element: WorkCategory) => {
          return (
            <li key={element}>
              <span onClick={() => handleSetActive(element)} className={activeState === element ? "active" : ""}>
                {element}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Filters;
