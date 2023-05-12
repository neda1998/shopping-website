import React from "react";
import style from "../../styles/BlogArticle.module.css";
import boyBlog from "../../assets/images/boyBlog.png";

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
            <img src="" alt="" />
            <h2>
              The latest news. From the Ciseco blog title Et Leo Duis Ut Diam
              Quam Nulla Porttitor Massa Id
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              vero perspiciatis ullam ea? Nihil accusamus similique debitis
            </p>
            <div>
              <img src={boyBlog} alt="blog" />
              <span>Belinda Ret</span>
              <span>.</span>
              <span>May 20,2021</span>
            </div>
          </div>
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
