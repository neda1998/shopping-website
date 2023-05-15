import React from "react";
import style from "../../styles/Tabs.module.css";
import line from "../../assets/svg/oribLine.svg";
import backpack from "../../assets/images/backpack.png";

function TabItem() {
  return (
      <div className={style.tabsItems}>
        <div className={style.tabProduct}>
          <div>
            <img src={backpack} alt="img" />
          </div>
          <span>192 products</span>
        </div>
        <div className={style.tabsTitle}>
          <div>
            <p>Manufacturar</p>
            <h3>Backpack</h3>
            <div className={style.tabsBody}>
              <span>See Collection</span>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={style.tabLineImg}>
            <img src={line} alt="line" />
          </div>
        </div>
      </div>
  );
}

export default TabItem;
