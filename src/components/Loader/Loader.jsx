import React from "react";
import "./Loader.scss";

export const Loader = () => {
  return (
    <div className="loader-wrapper">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="bar"></div>
      ))}
    </div>
  );
};
