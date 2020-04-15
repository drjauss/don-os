import React from "react";
import "./WorkBox.scss";
import { ColorsEnum } from "../../../definitions/enums/colors.enum";

type WorkBoxProps = {
  color?: ColorsEnum;
  subtitle?: string;
  title?: string;
};

function WorkBox(props: WorkBoxProps) {
  return (
    <div className="WorkBox">
      <div className={"box center " + props.color + "-bg"}>
        {props.subtitle && <span className="subject">{props.subtitle}</span>}
        {props.title && <h1 className="title with-subject">{props.title}</h1>}
      </div>
    </div>
  );
}

const initialWorkBoxProps = {
  color: ColorsEnum.orange,
};

WorkBox.defaultProps = initialWorkBoxProps;

export default WorkBox;
