import React from 'react';
import style from "../../styles/SliderCart.module.css";

function SliderShow({img,title, text, content, className}) {
    return (
        <div className={className}>
            <div className={style.cart}>
                <div>
                    <p>{title}</p>
                    <h3 className="sm:18px md:text-[18px] lg:text-[35px]">{content}</h3>
                    <button>{text}</button>
                </div>
                <img src={img} alt="shopCoat" className={style.imgCart} />
            </div>
        </div>
    )
}

export default SliderShow