import React from 'react';
import Navbar from "../Components/Navbar/Navbar";
import Slide from '../Components/Slide/Slide';
import SliderCart from "../Components/SliderCarts/SliderCart";
import SliderCartAdd from '../Components/SliderCartAdd/SliderCartAdd';



function Home() {
  return (
    <>
      <Navbar />
      <Slide />
      <SliderCart />
      <SliderCartAdd />
    </>
  )
}

export default Home