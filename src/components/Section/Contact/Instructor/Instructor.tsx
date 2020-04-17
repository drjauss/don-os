import React from "react";
import "./Instructor.scss";

export type InstructorProps = {
  image: string;
  title: string;
  content: string;
};

function Instructor({ image, title, content }: InstructorProps) {
  return (
    <div className="Instructor">
      <div className="pure-g">
        <div className="pure-u-1-3">
          <div className="right-pad">
            <img className="image-box" src={image} alt="Fotografía de María Camila Monroy S." />
          </div>
        </div>
        <div className="pure-u-2-3">
          <div className="left-pad">
            <h1 className="title">{title}</h1>
            <p className="content justified">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructor;
