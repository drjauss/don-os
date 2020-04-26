import React from "react";
import "./WorkBox.scss";
import { ColorsEnum } from "../definitions/enums/colors.enum";
import { Link } from "react-router-dom";

type WorkBoxProps = {
  color?: ColorsEnum;
  subtitle?: string;
  title?: string;
  link?: string;
};

function WorkBox({ color, subtitle, title, link }: WorkBoxProps) {
  return (
    <div className="WorkBox">
      <div className={"box center " + color + "-bg"}>
        {subtitle && <span className="subject">{subtitle}</span>}
        {title && (
          <h1 className="title with-subject">
            <Link to={link || "/obra"}>{title}</Link>
          </h1>
        )}
      </div>
    </div>
  );
}

const initialWorkBoxProps = {
  color: ColorsEnum.orange,
};

WorkBox.defaultProps = initialWorkBoxProps;

export default WorkBox;
