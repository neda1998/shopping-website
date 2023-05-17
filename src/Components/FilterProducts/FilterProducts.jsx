import React, { useState } from "react";
import style from "../../styles/FilterProducts.module.css";
import DataProducts from "../Data/DataProducts";
import blue from "../../assets/images/blue.jpg";
import brown from "../../assets/images/brown.jpg";
import blueLight from "../../assets/images/blueLight.jpg";
import black from "../../assets/images/black.jpg";
import blueDark from "../../assets/images/blueDark.jpg";

function FilterProducts() {
  const [data, setData] = useState(DataProducts);
  const filterResult = (item) => {
    const result = DataProducts.filter((curData) => {
      return curData.category === item;
    });
    setData(result);
  };
  return (
    <div className={`px-20 ${style.filterProducts}`}>
      <h1>What's trending now</h1>
      <p>Discover the most trending products in Ciseco.</p>
      <div className={style.filter}>
        <div className={style.btnFilter}>
          <button onClick={() => setData(DataProducts)}>All Items</button>
          <button onClick={() => filterResult("Women")}>Women</button>
          <button onClick={() => filterResult("Men")}>Men</button>
          <button onClick={() => filterResult("Kids")}>Kids</button>
          <button onClick={() => filterResult("Jewels")}>Jewels</button>
        </div>
        <div className={style.btnCategory}>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
              />
            </svg>
          </button>
          <span>Filter</span>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <div className="grid lg:grid-cols-4 lg:gap-12 md:grid-cols-2 md:gap-4 grid-cols-1">
          {data.map((values) => {
            const { id, title, price, image, para } = values;
            return (
              <>
                <div key={id}>
                  <div className={style.imgCartGreen}>
                   <div className={style.heartIcon}>
                   <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </button>
                   </div>
                    <img src={image} alt="blose" className={style.images} />
                  </div>
                  <div className={style.colorChoose}>
                    <img src={blue} alt="blue" />
                    <img src={blueLight} alt="blueLight" />
                    <img src={blueDark} alt="blueDark" />
                    <img src={brown} alt="brown" />
                    <img src={black} alt="black" />
                  </div>
                  <div className={style.textSlideAdd}>
                    <p>{title}</p>
                    <span>{para}</span>
                  </div>
                  <div className={style.btnPriceAdd}>
                    <div>
                      <button>${price}.00</button>
                    </div>
                    <div>
                      <span>⭐ 4.7 (48 reviews)</span>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FilterProducts;
