import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { SwiperNavButtons } from "./SwiperNavButton";
import style from "../../styles/SliderMoreCollection.module.css";
import travel from "../../assets/images/travel.png";
import pet from "../../assets/images/pet.png";
import sport from "../../assets/images/sport.png";
import pharmacy from "../../assets/images/pharmacy.png";

function SliderMoreCollection() {
  return (
    <>
      <div className={`lg:px-20 ${style.sliderMore}`}>
        <div>
          <p>Shop by department</p>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        //   spaceBetween={10}
        slidesPerView={4}
      >
        <SwiperNavButtons />
        <SwiperSlide>
          <div className={style.travel}>
            <div>
              <div>
                <img
                  src={travel}
                  alt="travel"
                  className={style.imgCollection}
                />
              </div>
            </div>
            <p>Travel Kits</p>
            <span>20+ categories</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.pharmacy}>
            <div>
              <img
                src={pharmacy}
                alt="pharmacy"
                className={style.imgCollection}
              />
            </div>
            <p>Travel Kits</p>
            <span>20+ categories</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.sport}>
            <div>
              <img src={sport} alt="sport" className={style.imgCollection} />
            </div>
            <p>Travel Kits</p>
            <span>20+ categories</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.pet}>
            <div>
              <img src={pet} alt="pet" className={style.imgCollection} />
            </div>
            <p>Travel Kits</p>
            <span>20+ categories</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.moreCollection}>
            <div>
              <span>More collection</span>
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
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>
            <p>Show me more</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SliderMoreCollection;
