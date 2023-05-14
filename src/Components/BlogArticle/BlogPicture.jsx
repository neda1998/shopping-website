import React from "react";
import style from "../../styles/BlogArticle.module.css";
import flower from "../../assets/images/flowerSun.jpg";
import orangeFlower from "../../assets/images/orangeFlower.jpg";
import flowerPlate from "../../assets/images/plate.jpg";

function BlogPicture() {
  return (
    <div className={style.BlogPicture}>
       <img src={flower} alt="flower" />
      <div>
       <img src={orangeFlower} alt="flower" />
      </div>
      <div>
        <img src={flowerPlate} alt="flower" />
      </div>
    </div>
  );
}

export default BlogPicture;
