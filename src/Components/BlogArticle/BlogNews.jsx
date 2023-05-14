import React from "react";
import Author from "./Author";
import style from "../../styles/BlogArticle.module.css";

function BlogNews() {
  return (
    <div className={style.blogNews}>
      <h6>Et Leo Duis Ut Diam Quam Nulla Porttitor Massa Id</h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        dolorem
      </p>
      <Author />
    </div>
  );
}

export default BlogNews;
