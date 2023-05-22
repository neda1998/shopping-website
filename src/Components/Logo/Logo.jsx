import React from "react";
import { Link } from "react-router-dom";
import style from "../../styles/Navbar.module.css";
import logo from "../../assets/svg/logo.svg";

function Logo({className}) {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
}

export default Logo;
