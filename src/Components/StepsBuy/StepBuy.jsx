import React from "react";
import style from "../../styles/StepBuy.module.css";
import Steps from "./Steps";
import serachImg from "../../assets/images/search.png";
import addToBag from "../../assets/images/addToBag.png";
import timer from "../../assets/images/timer.png";
import price from "../../assets/images/price.png";

function StepBuy() {
  return (
    <div className={`md:px-25 px-10 ${style.stepBuy}`}>
      <div
        className={`grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 ${style.StepBuy}`}
      >

        <Steps
          img={serachImg}
          step="Step 1"
          title="Filter & Discover"
          text="Smart filtering and suggestions make it easy to find"
        />
        <Steps
          img={addToBag}
          step="Step 2"
          title="Add to bag"
          text="Easily select the correct items and add them to the cart"
        />
        <Steps
          img={timer}
          step="Step 3"
          title="Fast shipping"
          text="The carrier will confirm and ship quickly to you"
        />
        <Steps
          img={price}
          step="Step 4"
          title="Enjoy the product"
          text="Have fun and enjoy your 5-star quality products"
        />
      </div>
    </div>
  );
}

export default StepBuy;
