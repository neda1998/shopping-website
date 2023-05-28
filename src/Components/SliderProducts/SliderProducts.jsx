import React from 'react';
import smallSize from "../../assets/images/smallSize.png";
import proArm from "../../assets/images/proArm.png";
import proBack from "../../assets/images/proBack.png";
import productAll from "../../assets/images/productAll.png";
import style from "../../styles/Product.module.css";

function SliderProducts() {
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-3 md:gap-6'>
            <div>
                <img src={productAll} alt="clothes" className={style.imgSlidePro}/>
            </div>
            <div>
                <img src={proBack} alt="clothes" className={style.imgSlidePro}/>
            </div>
            <div className={`grid grid-rows-2 col-span-1 gap-6 ${style.productImg}`}>
                <img src={proArm} alt="clothes" />
                <img src={smallSize} alt="clothes" />
            </div>
        </div>
    )
}

export default SliderProducts