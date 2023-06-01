import React, { useState } from 'react';
import Review from "./ReviewSection";
import style from "../../styles/Product.module.css";

function ModalReviews() {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <div className='grid md:grid-cols-2 grid-cols-1 md:gap-14 gap-8 mb-16 px-10 md:px-16'>
                <Review />
                <button className={style.btnReview} onClick={() => setOpenModal(!openModal)}>Show me all 142 reviews</button>
            </div>
            {openModal && (
                <div>
                    <Review />
                </div>
            )}
        </>

    )
}

export default ModalReviews