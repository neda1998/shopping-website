import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import slideOne from "../../assets/images/slideImageOne.png";
import slideTwo from "../../assets/images/slideImageTwo.png";
import slideThree from "../../assets/images/slideImageThree.png";
import { Autoplay, Pagination, Navigation } from "swiper";
import style from "../../styles/Slide.module.css";

const Slide = () => {
  return (
    <div className={style.slideShow}>
      <div className={style.slideSwiper}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className={`grid lg:grid-cols-2 sm:grid-cols-1`}>
              <div className={`${style.imageSlideTwo} ${style.textSlide}`}>
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
              <div className="flex lg:justify-end flex justify-center">
                <img className={style.imgSlide} src={slideOne} alt="sliderOne" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:px-12">
              <div className={`${style.imageSlideTwo} ${style.textSlide}`}>
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
              <div className="flex lg:justify-end flex justify-center">
                <img className={style.imgSlide} src={slideTwo} alt="sliderOne" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:px-12">
              <div className={`${style.imageSlideTwo} ${style.textSlide}`}>
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
              <div className="flex lg:justify-end flex justify-center">
                <img className={style.imgSlide} src={slideThree} alt="sliderOne" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slide;
