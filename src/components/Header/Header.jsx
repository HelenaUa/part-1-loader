import React from "react";
import "./Header.scss";
import Logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo-wrapper">
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
};

