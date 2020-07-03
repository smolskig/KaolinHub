import React from "react";
import "./styles.css";

export default function ButtonBlue(props) {
  return (
    <div className="div-button">
      <button className="button-blue" onClick={props.onClick}>{props.title}</button>
    </div>
  );
}
