import React from "react";
import "./ContentColumns.scss";

type ContentColumnsProps = {
  title: string;
  subtitle: string;
  content: any;
};

function ContentColumns({ title, subtitle, content }: ContentColumnsProps) {
  return (
    <div className="ContentColumns">
      <div className="pure-g">
        <div className="pure-u-1-4">
          <div className="right-padding">
            <h2 className="title no-margin right">{title}</h2>
            <p className="content right">{subtitle}</p>
          </div>
        </div>
        <div className="pure-u-3-4">
          <div className="left-padding">{content}</div>
        </div>
      </div>
    </div>
  );
}

export default ContentColumns;
