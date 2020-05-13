import React from "react";
import "./WorkBox.scss";
import { ColorsEnum } from "../definitions/enums/colors.enum";
import { Link } from "react-router-dom";

type WorkBoxProps = {
  color?: ColorsEnum;
  subtitle?: string;
  title?: string;
  link?: string;
  backgroundImg?: string;
};

function WorkBox({ color, subtitle, title, link, backgroundImg }: WorkBoxProps) {
  const backgroundStyle =
    (backgroundImg && {
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundImage: "url(" + backgroundImg + ")",
      backgroundPosition: "bottom right",
    }) ||
    {};

  return (
    <div className="WorkBox">
      <div className={"box " + color + "-bg"} style={backgroundStyle}>
        {subtitle && <span className="subject">{subtitle}</span>}
        {title && (
          <h2 className="title with-subject">
            <Link
              to={{
                pathname: link || "/obra",
                search: `?color=${color}`,
              }}
            >
              {title}
            </Link>
          </h2>
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
