import React from "react";
import "./PaginationBtn.scss";
import { PaginationBtnProps } from "./definitions/types/PaginationBtnProps.type";

function PaginationBtn(props: PaginationBtnProps) {
  return (
    <div className="PaginationBtn">
      <button className="subtitle black bottom-shadow small-size">{props.text}</button>
    </div>
  );
}

export default PaginationBtn;
