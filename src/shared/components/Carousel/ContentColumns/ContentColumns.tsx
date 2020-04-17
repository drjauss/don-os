import React from "react";
import "./ContentColumns.scss";

type ContentColumnsProps = {
  title: string;
  subtitle: string;
  content: string;
};

function ContentColumns({ title, subtitle, content }: ContentColumnsProps) {
  return (
    <div className="ContentColumns">
      <div className="pure-g">
        <div className="pure-u-1-3">
          <h2 className="title no-margin left">{title}</h2>
          <p className="content justified">{subtitle}</p>
        </div>
        <div className="pure-u-2-3">
          <p className="content justified">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default ContentColumns;
