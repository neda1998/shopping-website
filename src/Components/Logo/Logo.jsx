import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/svg/logo.svg";

function Logo({customWidth}) {
  return (
    <div className="ml-28 md:ml-0">
      <Link to="/">
        <img src={logo} alt="logo" style={{minWidth: customWidth}}/>
      </Link>
    </div>
  );
}

export default Logo;
