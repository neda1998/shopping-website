import React from "react";
import style from "../../styles/SectionKids.module.css";
import Logo from "../Logo/Logo";
import kids from "../../assets/images/kids.png";

function SectionKids() {
  return (
    <div className={`px-20 w-full`}>
      <div className={style.sectionKids}>
        <div>
          <img src={kids} alt="kids" />
        </div>
        <div>
          <Logo />
          <h1>Special offer in kids products</h1>
          <p>
            Fashion is a form of self-expression and autonomy at a particular
            period and place.
          </p>
          <button>Discover more</button>
        </div>
      </div>
    </div>
  );
}

export default SectionKids;
