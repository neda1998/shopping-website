import React from "react";
import style from "../../styles/BlogArticle.module.css";
import Post from "./Post";
import BlogNews from "./BlogNews";
import flower from "../../assets/images/flowerSun.jpg";
import orangeFlower from "../../assets/images/orangeFlower.jpg";
import flowerPlate from "../../assets/images/plate.jpg";

function BlogArticle() {
  return (
    <div className={`sm:mx-[44px] ${style.BlogArticle}`}>
      <div className={`sm:px-14 px-8 ${style.posts}`}>
        <div>
          <span className="text-[19px] sm:text-[26px] md:text-[40px]">The latest news.</span>
          <p className="text-[19px] sm:text-[23px] md:text-[40px]">From the Ciseco blog</p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          <Post />
          <div className="flex flex-col">
            <BlogNews imgBlog={flower} />
            <BlogNews imgBlog={orangeFlower} />
            <BlogNews imgBlog={flowerPlate} />
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
