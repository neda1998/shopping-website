import React from "react";
import Logo from "../Logo/Logo";
import style from "../../styles/EarnMoney.module.css";
import money from "../../assets/images/money.png";

function EarnMoney() {
  return (
    <div className="lg:px-20 lg:py-20">
      <div className={style.earnMoney}>
        <div className={style.textMoney}>
          <Logo />
          <h1>Earn free money with Ciseco</h1>
          <p>With Ciseco you will get freeship & savings combo...</p>
          <div className={style.btnMoney}>
            <button className={style.btnSave}>Saving combo</button>
            <button className={style.btnDiscover}>Discover more</button>
          </div>
        </div>
        <div>
          <img src={money} alt="money" className={style.imgMoney}/>
        </div>
      </div>
    </div>
  );
}

export default EarnMoney;
