import React from "react";
import style from "../../styles/BlogArticle.module.css";
import boyBlog from "../../assets/images/boyBlog.png";
import book from "../../assets/images/book.jpg";
import Author from "./Author";

function Post() {
  return (
    <div className={style.post}>
      <img src={book} alt="book" />
      <span className={style.text}>Non Sodales Neque Sodales Ut Etiam Sit Amet Nisl Purus</span>
      <p className={style.paraBlog}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        dolorem...
      </p>
      <Author />
    </div>
  );
}

export default Post;
