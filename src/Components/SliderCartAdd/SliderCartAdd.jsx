import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { SwiperNavButtons } from "../SwiperNavButton/SwiperNavButton";
import style from "../../styles/SliderCartAdd.module.css";
import SlideCart from "./SlideCart";
import imgBlose from "../../assets/images/imgBlose.png";
import imgJump from "../../assets/images/imgJump.png";
import toy from "../../assets/images/toy.png";
import imgShort from "../../assets/images/imgShort.png";
import imgBag from "../../assets/images/imgBag.png";

function SliderCartAdd() {
  return (
    <div className="mb-24 md:px-20 px-10">
      <div className={`${style.headSlider}`}>
        <div className="sm:flex items-center flex-none">
          <h1 className="truncate break-words">New Arrivals.</h1>
          <h1 className={`truncate break-words ${style.textSliderCardAdd}`}>Rey backpacks & bags</h1>
        </div>
      </div>
      <Swiper
        className={style.swiperSlideShow}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={4}
        breakpoints={{
          290: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          }
        }}
      >
        <SwiperNavButtons />
        <SwiperSlide>
          <SlideCart img={imgBlose} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideCart img={imgJump} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideCart img={toy} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideCart img={imgShort} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideCart img={imgBag} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SliderCartAdd;
