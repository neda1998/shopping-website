import React, { useState } from 'react';
import ReviewSection from "./ReviewSection";
import style from "../../styles/Product.module.css";
import Modal from "./Modal"

function ModalReviews() {
    const [openModal, setOpenModal] = useState(false);
    const toggleModal = () => { setOpenModal(!openModal) }
    return (
        <>
            <div className='px-10 md:px-16 pb-10'>
                <ReviewSection />
                <button className={style.btnReview} onClick={toggleModal}>Show me all 142 reviews</button>
            </div>
            {openModal && (
                <Modal />
            )}
        </>

    )
}

export default ModalReviews