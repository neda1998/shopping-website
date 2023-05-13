import React from "react";
import style from "../../styles/BlogArticle.module.css";
import boyBlog from "../../assets/images/boyBlog.png";
import book from "../../assets/images/book.jpg"

function BlogArticle() {
  return (
    <div className="w-full">
      <div className={`px-20 ${style.BlogArticle}`}>
        <div>
          <span>The latest news.</span>
          <p>From the Ciseco blog</p>
        </div>
        <div className="grid lg:grid-cols-3">
          
          <div>
            <span>Non Sodales Neque Sodales Ut Etiam Sit Amet Nisl Purus</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              dolorem...
            </p>
            <div>
              <img src={boyBlog} alt="blog" />
              <span>Belinda Ret</span>
              <span>.</span>
              <span>May 20,2021</span>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default BlogArticle;
