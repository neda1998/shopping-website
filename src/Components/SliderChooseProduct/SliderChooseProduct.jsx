import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { SwiperNavButtons } from "./SwiperNavButton";
import style from "../../styles/SliderChooseProduct.module.css";
import clothes from "../../assets/images/clothes.png";
import body from "../../assets/images/body.png";
import back from "../../assets/images/back.png";
import head from "../../assets/images/head.png";

function SliderChooseProduct() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={3}
      >
        <SwiperNavButtons />
        <SwiperSlide>
          <div className={style.chooseProduct}>
            <div>
              <img src={clothes} alt="clothes" />
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              <div>
                <img src={head} alt="img" />
              </div>
              <div>
                <img src={back} alt="img" />
              </div>
              <div>
                <img src={body} alt="img" />
              </div>
            </div>
            <div>
              <div>
                <span>Suede Bomber Jacket</span>
                <div>
                  <span>Orange</span>
                  <span>|</span>
                  <span>⭐4.9(269 review)</span>
                </div>
              </div>
              <div>
                <button>$52.00</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </>
  );
}

export default SliderChooseProduct;
