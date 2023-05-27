import React from "react";
import Logo from "../Logo/Logo";
import style from "../../styles/EarnMoney.module.css";
import money from "../../assets/images/money.png";

function EarnMoney() {
  return (
    <div className="lg:py-10">
      <div className={`grid lg:grid-cols-2 place-items-center grid-cols-1 gap-12 ${style.earnMoney}`}>
        <div className={style.textMoney}>
          <Logo customWidth="120px" />
          <h1>Earn free money with Ciseco</h1>
          <p>With Ciseco you will get freeship & savings combo...</p>
          <div className={style.btnMoney}>
            <button className={style.btnSave}>Saving combo</button>
            <button className={style.btnDiscover}>Discover more</button>
          </div>
        </div>
        <div>
          <img src={money} alt="money" className={`sm:w-[500px] lg:w-[600px] ${style.imgMoney}`} />
        </div>
      </div>
    </div>
  );
}

export default EarnMoney;
