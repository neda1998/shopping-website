import React from 'react'
import SliderProducts from '../Components/SliderProducts/SliderProducts';
import style from "../styles/Product.module.css";
import PropertyProducts from '../Components/PropertyProducts/PropertyProducts';

function Product() {
  return (
    <div className={style.product}>
        <SliderProducts />
        <PropertyProducts />
    </div>
  )
}

export default Product