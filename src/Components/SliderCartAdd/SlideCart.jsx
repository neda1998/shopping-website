import React from 'react';
import blue from "../../assets/images/blue.jpg";
import brown from "../../assets/images/brown.jpg";
import blueLight from "../../assets/images/blueLight.jpg";
import black from "../../assets/images/black.jpg";
import blueDark from "../../assets/images/blueDark.jpg";
import style from "../../styles/SliderCartAdd.module.css";

function SlideCart({ img }) {
  return (
    <div>
      <div className={style.imgCartGreen}>
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
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
        <img src={img} alt="img" className={style.images} />
      </div>
      <div className={style.colorChoose}>
        <img src={blue} alt="blue" />
        <img src={blueLight} alt="blueLight" />
        <img src={blueDark} alt="blueDark" />
        <img src={brown} alt="brown" />
        <img src={black} alt="black" />
      </div>
      <div className={style.textSlideAdd}>
        <p>Leather Gloves</p>
        <span>Perfect mint green</span>
      </div>
      <div className={style.btnPriceAdd}>
        <div>
          <button>$42.00</button>
        </div>
        <div>
          <span>⭐ 4.7 (48 reviews)</span>
        </div>
      </div>
    </div>
  )
}

export default SlideCart