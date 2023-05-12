import React from 'react';
import { useSwiper } from 'swiper/react';
import style from "../../styles/SliderCartAdd.module.css";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className={style.swiperNavBtns}>
      <button onClick={() => swiper.slidePrev()} className={style.prevBtn}>&#8592;</button>
      <button onClick={() => swiper.slideNext()} className={style.nextBtn}>&#8594;</button>
    </div>
  );
};