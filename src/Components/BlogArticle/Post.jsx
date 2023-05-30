import React from "react";
import style from "../../styles/BlogArticle.module.css";
import book from "../../assets/images/book.jpg";
import Author from "./Author";

function Post() {
  return (
    <div className={style.post}>
      <img src={book} alt="book" />
      <h1 className={style.text}>Non Sodales Neque Sodales Ut Etiam Sit Amet Nisl Purus</h1>
      <p className={style.paraBlog}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        dolorem...
      </p>
      <Author />
    </div>
  );
}

export default Post;
