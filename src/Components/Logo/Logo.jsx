import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/svg/logo.svg";

function Logo() {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
}

export default Logo;
