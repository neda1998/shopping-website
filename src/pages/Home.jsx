import React from "react";
import Slide from "../Components/Slide/Slide";
import SliderCart from "../Components/SliderCarts/SliderCart";
import SliderCartAdd from "../Components/SliderCartAdd/SliderCartAdd";
import StepBuy from "../Components/StepsBuy/StepBuy";
import EarnMoney from "../Components/EarnMoney/EarnMoney";
import Tabs from '../Components/Tabs/Tabs';
import SectionKids from "../Components/SectionKids/SectionKids";
import Register from "../Components/Register/Register";
import SliderMoreCollection from "../Components/SliderMoreCollection/SliderMoreCollection";
import BlogArticle from "../Components/BlogArticle/BlogArticle";
import SliderChooseProduct from "../Components/SliderChooseProduct/SliderChooseProduct";
import Comments from "../Components/Comments/Comments";
import FilterProducts from "../Components/FilterProducts/FilterProducts";
import BtnToTop from "../Components/BtnJumpToTop/BtnToTop";

function Home() {
  return (
    <>
      <Slide />
      <SliderCart />
      <SliderCartAdd />
      <StepBuy />
      <EarnMoney />
      <Tabs />
      <FilterProducts />
      <SectionKids />
      <SliderChooseProduct />
      <SliderMoreCollection />
      <Register />
      <BlogArticle />
      <Comments />
      <BtnToTop />
    </>
  );
}

export default Home;
