import React from "react";
import Author from "./Author";
import style from "../../styles/BlogArticle.module.css";

function BlogNews({ imgBlog }) {
  return (
    <div className={`mb-[20px] lg:mb-0 grid sm:grid-cols-2 grid-cols-1 ${style}`}>
      <div className={style.blogNews}>
        <h6>Et Leo Duis Ut Diam Quam Nulla Porttitor Massa Id</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          dolorem
        </p>
        <Author />
      </div>
      <div className="grid sm:place-items-end place-items-center">
        <img src={imgBlog} alt="flower" className={`${style.BlogPicture}`} />
      </div>
    </div>
  );
}

export default BlogNews;
