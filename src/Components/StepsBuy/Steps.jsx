import React from "react";
import style from "../../styles/StepBuy.module.css";

function Steps({ step, text, title, img }) {
  return (
    <div className={style.steps}>
      <img src={img} alt="search" className={style.searchImg} />
      <button className={style.btnStep}>{step}</button>
      <p className={style.title}>{title}</p>
      <span className={style.text}>{text}</span>
    </div>
  );
}

export default Steps;
