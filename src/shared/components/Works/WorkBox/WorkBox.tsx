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
      backgroundImage: "url(" + backgroundImg + ")",
      backgroundPosition: "calc(100% - 24px) calc(100% - 24px)",
      backgroundSize: "60%",
    }) ||
    {};

  return (
    <div className="WorkBox">
      <Link
        to={{
          pathname: link || "/obra",
          search: `?color=${color}`,
        }}
      >
        <div className={"box " + color + "-bg media-size"} style={backgroundStyle}>
          {subtitle && <span className="subject">{subtitle}</span>}
          {title && <h2 className="title with-subject">{title}</h2>}
        </div>
      </Link>
    </div>
  );
}

const initialWorkBoxProps = {
  color: ColorsEnum.orange,
};

WorkBox.defaultProps = initialWorkBoxProps;

export default WorkBox;
