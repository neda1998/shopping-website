import React from "react";
import style from "../../styles/SliderChooseProduct.module.css";
import { Link } from "react-router-dom";

function SliderProduct({ imgMain, imgHead, imgBack, imgBody }) {
  return (
    <div>
      <div className={style.chooseProduct}>
        <Link to="/product">
        <div className={style.product}>
          <img src={imgMain} alt="clothes" />
        </div>
        </Link>
        <div className="grid grid-cols-3 gap-2.5">
          <div className={style.imgDetail}>
            <img src={imgHead} alt="img" />
          </div>
          <div className={style.imgDetail}>
            <img src={imgBack} alt="img" />
          </div>
          <div className={style.imgDetail}>
            <img src={imgBody} alt="img" />
          </div>
        </div>
        <div className={style.textSliderImage}>
          <div>
            <span className={style.titleSlide}>Suede Bomber Jacket</span>
            <div className={style.viewer}>
              <span>Orange</span>
              <p>|</p>
              <span>⭐4.9(269 review)</span>
            </div>
          </div>
          <div className={style.btnSliderGreen}>
            <button>$52.00</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderProduct;
