import React from 'react';
import style from "../../styles/Slide.module.css";

function SlidesHead({ img }) {
  return (
    <div className='grid grid-cols-2'>
      <div className={` ${style.textSlide}`}>
        <p>In this season, find the best ⭐</p>
        <h1 className="md:text-5xl sm:text-xl md:max-w-lg">Exclusive collection for everyone</h1>
        <button className={style.btnSlide}>
          <span>Explore now</span>
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <div className="">
        <img className={style.imgSlide} src={img} alt="img" />
      </div>
    </div>
  )
}

export default SlidesHead