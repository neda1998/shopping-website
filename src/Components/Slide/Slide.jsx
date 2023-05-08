// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import slideOne from "../../assets/images/slideImageOne.png";
// import slideTwo from "../../assets/images/slideImageTwo.png";
// import slideThree from "../../assets/images/slideImageThree.png";
// import { Autoplay, Pagination, Navigation } from "swiper";
// import style from "../../styles/Slide.module.css";

// const Slide = () => {
//   return (
//     <div className={`md:grid grid-cols-2 ${style.slideShow}`}>
//       <div className={style.textSlide}>
//         <p>In this season, find the best ⭐</p>
//         <h1>Exclusive collection for everyone</h1>
//         <button className={style.btnSlide}>
//           <span>Explore now</span>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
//             />
//           </svg>
//         </button>
//       </div>
//       <div className={style.slideSwiper}>
//         <Swiper
//           spaceBetween={30}
//           centeredSlides={true}
//           autoplay={{
//             delay: 4500,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//           }}
//           navigation={true}
//           modules={[Autoplay, Pagination, Navigation]}
//         >
//           <SwiperSlide>
//             <img className={style.imgSlide} src={slideOne} alt="sliderOne" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img className={style.imgSlide} src={slideTwo} alt="sliderTwo" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               className={style.imgSlide}
//               src={slideThree}
//               alt="sliderThree"
//             />
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Slide;

// import React from 'react';
// import Slider from 'react-slick';
// import slideOne from "../../assets/images/slideImageOne.png";
// import slideTwo from "../../assets/images/slideImageTwo.png";
// import slideThree from "../../assets/images/slideImageThree.png";
// import style from "../../styles/Slide.module.css";

// const Slide = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };

//   return (
//     <div className="flex flex-row items-center mt-4">
//       <div className="mt-4">
//         <p className="text-lg font-bold">Lorem ipsum dolor sit amet</p>
//         <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eget varius lacinia, nisi velit malesuada lorem, vel tincidunt dolor urna et nisl.</p>
//       </div>
//       <div className="w-50">
//         <Slider {...settings}>
//           <div>
//             <img src={slideOne} className={style.imgSlide} alt="Slide1" />
//           </div>
//           <div>
//             <img src={slideTwo} className={style.imgSlide} alt="Slide2" />
//           </div>
//           <div>
//             <img src={slideThree} className={style.imgSlide} alt="Slide3" />
//           </div>
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Slide;


