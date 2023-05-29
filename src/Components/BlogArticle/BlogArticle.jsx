import React from "react";
import style from "../../styles/BlogArticle.module.css";
import Post from "./Post";
import BlogNews from "./BlogNews";
import flower from "../../assets/images/flowerSun.jpg";
import orangeFlower from "../../assets/images/orangeFlower.jpg";
import flowerPlate from "../../assets/images/plate.jpg";

function BlogArticle() {
  return (
    <div className={`${style.BlogArticle}`}>
      <div className={`${style.posts}`}>
        <div>
          <span>The latest news.</span>
          <p>From the Ciseco blog</p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          <Post />
          <div className="flex flex-col">
            <BlogNews imgBlog={flower} />
            <BlogNews imgBlog={orangeFlower} />
            <BlogNews imgBlog={flowerPlate} />
          </div>
        </div>
        <div className={style.blogBtn}>
          <button>Show all blog articles</button>
        </div>
      </div>
    </div>
  );
}

export default BlogArticle;
