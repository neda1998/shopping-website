import React from "react";
import style from "../../styles/Tabs.module.css";
import TabComp from "./TabComp"

function Tabs() {
  return (
    <div className="md:px-20 px-10 w-full">
     <div className={`${style.tab}`}>
      <div className={`py-20`}>
     <h1>Start exploring.</h1>
     <TabComp />
     </div>
    </div>
    </div>
  );
}

export default Tabs;
