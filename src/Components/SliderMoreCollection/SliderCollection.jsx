import React from 'react';
import style from "../../styles/SliderMoreCollection.module.css";

function SliderCollection({ img, customBack }) {
    return (
        <>
            <div className={style.travel} style={{ backgroundColor: customBack }}>
                <div>
                    <div>
                        <img
                            src={img}
                            alt="travel"
                            className={style.imgCollection}
                        />
                    </div>
                </div>
            </div>
            <div className={style.textSliderCollection}>
                <p>Travel Kits</p>
                <span>20+ categories</span>
            </div>
        </>
    )
}

export default SliderCollection