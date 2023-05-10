import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { SwiperNavButtons } from "./SwiperNavButton";
import style from "../../styles/SliderCart.module.css";
import shopCoat from "../../assets/images/shopCoat.png";
import ball from "../../assets/images/ball.png";
import perfume from "../../assets/images/perfume.png";
import dog from "../../assets/images/dog.png";

const SliderCart = () => {
  return (
    <>
      <div className={`lg:px-32 ${style.headSlider}`}>
        <div>
          <span>Discover more.</span>
          <p>Good things are waiting for you</p>
        </div>
      </div>
      <h1>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={3}
        >
          <SwiperNavButtons />
          <SwiperSlide>
            <div className={style.cartSlider}>
              <div className={style.cart}>
                <div>
                  <p>Explore new arrivals</p>
                  <h3>Shop the latest from top brands</h3>
                  <button>Show me all</button>
                </div>
                <img src={shopCoat} alt="shopCoat" className={style.imgCart} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.cartSlider}>
              <div className={style.cart}>
                <div>
                  <p>Explore new arrivals</p>
                  <h3>Shop the latest from top brands</h3>
                  <button>Show me all</button>
                </div>
                <img src={ball} alt="ball" className={style.imgCart} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.cartSlider}>
              <div className={style.cart}>
                <div>
                  <p>Explore new arrivals</p>
                  <h3>Shop the latest from top brands</h3>
                  <button>Show me all</button>
                </div>
                <img src={perfume} alt="perfume" className={style.imgCart} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.cartSlider}>
              <div className={style.cart}>
                <div>
                  <p>Explore new arrivals</p>
                  <h3>Shop the latest from top brands</h3>
                  <button>Show me all</button>
                </div>
                <img src={dog} alt="dog" className={style.imgCart} />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </h1>
    </>
  );
};

export default SliderCart;
