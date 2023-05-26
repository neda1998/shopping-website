import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { SwiperNavButtons } from "../SwiperNavButton/SwiperNavButton";
import style from "../../styles/SliderCart.module.css";
import shopCoat from "../../assets/images/shopCoat.png";
import ball from "../../assets/images/ball.png";
import perfume from "../../assets/images/perfume.png";
import dog from "../../assets/images/dog.png";
import SliderShow from "./SliderShow";

const SliderCart = () => {
  return (
    <div className="lg:px-20 px-10">
      <div className={`${style.headSlider}`}>
        <div>
          <span>Discover more.</span>
          <p>Good things are waiting for you</p>
        </div>
      </div>
      <div>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={3}
          spaceBetween={15}
          breakpoints={{
            290: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3.65,
            }
          }}
        >
          <SwiperNavButtons />
          <SwiperSlide>
            <SliderShow img={shopCoat} title="Explore new arrivals" text="Show me all" content="Shop the latest from top brands" className="cartSlider"/>
          </SwiperSlide>
          <SwiperSlide>
          <SliderShow img={ball} title="Explore new arrivals" text="Show me all" content="Shop the latest from top brands" className="cartSliderTwo"/>
          </SwiperSlide>
          <SwiperSlide>
          <SliderShow img={perfume} title="Explore new arrivals" text="Show me all" content="Shop the latest from top brands" className="cartSliderThree"/>
          </SwiperSlide>
          <SwiperSlide>
          <SliderShow img={dog} title="Explore new arrivals" text="Show me all" content="Shop the latest from top brands" className="cartSliderFour"/>
          </SwiperSlide>
          <SwiperSlide>
            <div></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SliderCart;
