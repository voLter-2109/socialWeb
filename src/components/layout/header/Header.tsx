import React from "react";
import logo from "../../../assets/img/logo.svg";
import style from "./Header.module.scss";

const Header: React.FC = () => {

  return (
    <div className={style.header}>
      <img src={logo} alt="logo" width="40px" />
      <h1>Sochial newWork</h1>
 
    </div>
  );
};

export default Header;
