import React from "react";
import Logo from "../Logo/Logo";
import style from "../../styles/EarnMoney.module.css";
import money from "../../assets/images/money.png";

function EarnMoney() {
  return (
    <div className="lg:py-10 md:px-20 px-10">
      <div className={`grid lg:grid-cols-2 lg:place-items-start grid-cols-1 gap-12 ${style.earnMoney}`}>
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
          <img src={money} alt="money" className={`sm:w-[450px] lg:w-[540px] ${style.imgMoney}`} />
        </div>
      </div>
    </div>
  );
}

export default EarnMoney;
