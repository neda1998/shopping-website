import React from 'react';
import boyBlog from "../../assets/images/boyBlog.png";
import style from "../../styles/BlogArticle.module.css";

function Author() {
  return (
    <div className={style.author}>
      <img src={boyBlog} alt="blog" className='hidden sm:block' />
      <h5>Belinda Ret</h5>
      <p>.</p>
      <span>May 20,2021</span>
    </div>
  )
}

export default Author