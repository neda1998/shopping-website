import React from 'react';
import Navbar from "../Components/Navbar/Navbar";
import Slide from '../Components/Slide/Slide';
import SliderCart from "../Components/SliderCarts/SliderCart";
import SliderCartAdd from '../Components/SliderCartAdd/SliderCartAdd';
import StepBuy from '../Components/StepsBuy/StepBuy';
import EarnMoney from '../Components/EarnMoney/EarnMoney';
// import Tabs from '../Components/Tabs/Tabs';
import SectionKids from '../Components/SectionKids/SectionKids';
import Register from '../Components/Register/Register';



function Home() {
  return (
    <>
      <Navbar />
      <Slide />
      <SliderCart />
      <SliderCartAdd />
      <StepBuy />
      <EarnMoney />
      {/* <Tabs /> */}
      <SectionKids />
      <Register />
    </>
  )
}

export default Home