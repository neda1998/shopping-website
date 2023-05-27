import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { SwiperNavButtons } from "../SwiperNavButton/SwiperNavButton";
import clothes from "../../assets/images/clothes.png";
import style from "../../styles/SliderChooseProduct.module.css";
import body from "../../assets/images/body.png";
import back from "../../assets/images/back.png";
import head from "../../assets/images/head.png";
import bag from "../../assets/images/bag.png";
import bagDog from "../../assets/images/bagDog.png";
import intoBag from "../../assets/images/intoBag.png";
import petTote from "../../assets/images/petTote.png";
import shoes from "../../assets/images/shoes.png";
import shoe from "../../assets/images/shoe.png";
import sideShoe from "../../assets/images/sideShoe.png";
import shoeDetail from "../../assets/images/shoeDetail.png";
import SliderProduct from "./SliderProduct";

function SliderChooseProduct() {
  return (
    <div>
      <div className={style.headSliderChoose}>
        <h1>Chosen by our experts</h1>
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          290: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          }
        }}
      >
        <SwiperNavButtons />
        <SwiperSlide>
          <SliderProduct
            imgMain={clothes}
            imgHead={head}
            imgBack={back}
            imgBody={body}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderProduct
            imgMain={bag}
            imgHead={bagDog}
            imgBack={intoBag}
            imgBody={petTote}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderProduct
            imgMain={shoes}
            imgHead={shoe}
            imgBack={sideShoe}
            imgBody={shoeDetail}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.moreItems}>
            <div>
              <span>More Items</span>
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
    </div>
  );
}

export default SliderChooseProduct;
