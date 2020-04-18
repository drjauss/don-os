import React from "react";
import "./PaginationBtn.scss";
import { Link } from "react-router-dom";
import { PaginationBtnProps } from "./definitions/types/PaginationBtnProps.type";

function PaginationBtn({ text, link }: PaginationBtnProps) {
  return (
    <div className="PaginationBtn">
      <button className="subtitle black bottom-shadow small-size">
        <Link to={link}>{text}</Link>
      </button>
    </div>
  );
}

export default PaginationBtn;
