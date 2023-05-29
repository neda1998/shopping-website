import React from "react";
import style from "../../styles/BlogArticle.module.css";
import Post from "./Post";
import BlogNews from "./BlogNews";
import flower from "../../assets/images/flowerSun.jpg";
import orangeFlower from "../../assets/images/orangeFlower.jpg";
import flowerPlate from "../../assets/images/plate.jpg";

function BlogArticle() {
  return (
  <div className="md:px-20 px-10">
      <div className={`${style.BlogArticle}`}>
      <div className={`${style.posts}`}>
        <div>
          <h1>The latest news.</h1>
          <h1 className={style.textBlogArticle}>From the Ciseco blog</h1>
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
  </div>
  );
}

export default BlogArticle;
