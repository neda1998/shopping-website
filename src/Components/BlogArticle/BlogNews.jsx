import React from "react";
import Author from "./Author";
import style from "../../styles/BlogArticle.module.css";

function BlogNews({ imgBlog }) {
  return (
    <div className={`mb-[20px] lg:mb-0 ${style.Articles}`}>
      <div className={style.blogNews}>
        <h6>Et Leo Duis Ut Diam Quam Nulla Porttitor Massa Id</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          dolorem
        </p>
        <Author />
      </div>
      <div>
        <img src={imgBlog} alt="flower" className={style.BlogPicture} />
      </div>
    </div>
  );
}

export default BlogNews;
