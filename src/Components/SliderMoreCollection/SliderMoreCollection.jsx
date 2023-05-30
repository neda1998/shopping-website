import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { SwiperNavButtons } from "../SwiperNavButton/SwiperNavButton";
import style from "../../styles/SliderMoreCollection.module.css";
import travel from "../../assets/images/travel.png";
import pet from "../../assets/images/pet.png";
import sport from "../../assets/images/sport.png";
import pharmacy from "../../assets/images/pharmacy.png";
import SliderCollection from "./SliderCollection";

function SliderMoreCollection({ img }) {
  return (
    <div className="md:px-20 px-10">
      <div className={`${style.sliderMore}`}>
        <div>
          <h1>Shop by department</h1>
        </div>
      </div>
      <Swiper
        className={style.swiperSlideShow}
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={4}
        spaceBetween={20}
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
          <SliderCollection img={travel} customBack="var(--bg-blue-800)"/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderCollection img={pharmacy} customBack="var(--bg-blue-300)"/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderCollection img={sport} customBack="var(--bg-box-slider2)"/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderCollection img={pet} customBack="var(--bg-box-slider"/>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.moreCollection}`}>
            <div>
              <p>More collection</p>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>
            <span>Show me more</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SliderMoreCollection;
