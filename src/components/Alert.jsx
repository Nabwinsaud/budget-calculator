import React from "react";
import "./alert.css";
const Alert = ({ type, text }) => {
  return (
    <div className="flex">
      <h3 className={`alert alert-${type}`}>{text}</h3>
    </div>
  );
};

export default Alert;
