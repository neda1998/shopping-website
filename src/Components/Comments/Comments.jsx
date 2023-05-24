import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import style from "../../styles/Comments.module.css";
import client from "../../assets/images/client.png";
import Comment from "./Comment";
import commaRight from "../../assets/images/commaRight.png";
import commaLeft from "../../assets/images/comma.png";
import imgLeft from "../../assets/images/img6.png";
import imgBottom from "../../assets/images/img5.png";
import imgRight from "../../assets/images/img.png";
import imgBlack from "../../assets/images/img2.png";
import imgSmile from "../../assets/images/img3.png";
import imgGirl from "../../assets/images/img4.png";

function Comments() {
  return (
    <div className="lg:px-20">
      <div className={style.slideComments}>
      <div className={style.comments}>
        <h1>Good news from far away 🥇</h1>
        <p>Let's see what people think of Ciseco</p>
      </div>
      <div className={` ${style.imgComments}`}>
        <img src={imgLeft} alt="img" className={`hidden md:block ${style.imgBetween}`}/>
        <img src={client} alt="img" />
        <img src={imgRight} alt="img" className={`hidden md:block ${style.imgBetween}`}/>
      </div>
      <div className={style.imgComma}>
        <img src={commaLeft} alt="comma" className={style.commaLeft}/>
        <img src={commaRight} alt="comma" className={style.commaRight}/>
      </div>
      <div className={` ${style.imgCommentBetween}`}>
          <img src={imgBottom} alt="img" className="hidden md:block"/>
          <img src={imgBlack} alt="img" className="hidden md:block"/>
      </div>
      <div className={style.swiperComments}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <Comment />
          </SwiperSlide>
          <SwiperSlide>
            <Comment />
          </SwiperSlide>
          <SwiperSlide>
            <Comment />
          </SwiperSlide>
        </Swiper>
        <div className={style.images}>
          <img src={imgGirl} alt="img" className="hidden md:block"/>
          <img src={imgSmile} alt="img" className="hidden md:block"/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Comments;
