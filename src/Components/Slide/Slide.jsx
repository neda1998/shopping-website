import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import slideOne from "../../assets/images/slideImageOne.png";
import slideTwo from "../../assets/images/slideImageTwo.png";
import slideThree from "../../assets/images/slideImageThree.png";
import { Autoplay, Pagination, Navigation } from "swiper";
import style from "../../styles/Slide.module.css";
import Slides from "./SlidesHead";

const Slide = () => {
  return (
    <div className={style.slideShow}>
      <div className={style.slideSwiper}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5500000000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            290: {
              slidesPerView: 1,
            }
          }}
        >
          <SwiperSlide>
            <Slides img={slideOne} />
          </SwiperSlide>
          <SwiperSlide>
            <Slides img={slideTwo} />
          </SwiperSlide>
          <SwiperSlide>
            <Slides img={slideThree} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slide;
