import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { SwiperNavButtons } from "./SwiperNavButton";
import style from "../../styles/SliderCartAdd.module.css";
import SlideCart from "./SlideCart";

function SliderCartAdd() {
  return (
    <>
      <div className={`lg:px-32 ${style.headSlider}`}>
        <div>
          <span>New Arrivals.</span>
          <p>Rey backpacks & bags</p>
        </div>
      </div>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={4}
        >
          <SwiperNavButtons />
          <SwiperSlide>
           <SlideCart />
          </SwiperSlide>
          <SwiperSlide>
           <SlideCart />
          </SwiperSlide>
          <SwiperSlide>
          <SlideCart />
          </SwiperSlide>
          <SwiperSlide>
          <SlideCart />
          </SwiperSlide>
          <SwiperSlide>
          <SlideCart />
          </SwiperSlide>
        </Swiper>
    </>
  );
}

export default SliderCartAdd;
