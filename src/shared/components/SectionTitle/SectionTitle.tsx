import React from "react";
import "./SectionTitle.scss";

type SectionTitleProps = {
  title: string;
  subtitle: string;
};

function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="SectionTitle center">
      <span className="subject">{subtitle}</span>
      <h1 className="title with-subject no-margin">{title}</h1>
    </div>
  );
}

export default SectionTitle;
