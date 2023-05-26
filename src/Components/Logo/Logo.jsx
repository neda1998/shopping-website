import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/svg/logo.svg";

function Logo({customWidth, customDisplay}) {
  return (
    <div className={customDisplay}>
      <Link to="/">
        <img src={logo} alt="logo" style={{width: customWidth}}/>
      </Link>
    </div>
  );
}

export default Logo;
