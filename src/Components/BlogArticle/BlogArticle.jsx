import React from "react";
import style from "../../styles/BlogArticle.module.css";
import Post from "./Post";
import BlogNews from "./BlogNews";
import BlogPicture from "./BlogPicture";

function BlogArticle() {
  return (
    <div className={style.BlogArticle}>
      <div className={`px-14 ${style.posts}`}>
        <div>
          <span>The latest news.</span>
          <p>From the Ciseco blog</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-14">
          <div>
            <Post />
          </div>
          <div>
            <BlogNews />
            <BlogNews />
            <BlogNews />
            <div className={style.blogBtn}>
            <button>Show all blog articles</button>
          </div>
          </div>
          <div>
            <BlogPicture />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogArticle;
