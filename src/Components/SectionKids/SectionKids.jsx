import React from "react";
import style from "../../styles/SectionKids.module.css";
import Logo from "../Logo/Logo";
import kids from "../../assets/images/kids.png";

function SectionKids() {
  return (
    <div className={`lg:px-20 px-10`}>
      <div className={`grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-24 ${style.sectionKids}`}>
        <div className="order-2 lg:order-1">
          <img src={kids} alt="kids" />
        </div>
        <div className={`order-1 lg:order-2 ${style.sectionText}`}>
          <Logo customWidth="120px"/>
          <h1 className="lg:text-[40px] md:text-[30px] text-[23px]">Special offer in kids products</h1>
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
