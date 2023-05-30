import React from 'react';
import style from "../styles/MenPage.module.css";
import EarnMoney from "../Components/EarnMoney/EarnMoney";
import SLiderChooseProduct from "../Components/SliderChooseProduct/SliderChooseProduct";

function Women() {
  return (
    <div>
      <div className={`md:px-20 px-10 ${style.MenPage}`}>
        <h1>Women Collection</h1>
        <p>We not only help you design exceptional products, but also make it easy for you to share your designs with more like-minded people.</p>
      </div>
      <SLiderChooseProduct />
      <EarnMoney />
    </div>
  )
}

export default Women