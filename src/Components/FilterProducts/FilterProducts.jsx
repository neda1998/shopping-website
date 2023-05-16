import React, { useState } from "react";
// import style from "../../styles/FilterProducts.module.css";
import imgBag from "../../assets/images/imgBag.png";
import DataProducts from "../Data/DataProducts";
import SlideCart from "../SliderCartAdd/SlideCart";
import style from "../../styles/SliderCartAdd.module.css";


function FilterProducts() {
  const [data, setData] = useState(DataProducts);
  const filterResult = (item) => {
    const result = DataProducts.filter(curData => {
      return curData.category === item;
    });
    setData(result);
  }
  return (
    <div className={`px-20 ${style.filterProducts}`}>
      <h1>What's trending now</h1>
      <p>Discover the most trending products in Ciseco.</p>
      <div>
        <button onClick={() => setData(DataProducts)}>All Items</button>
        <button onClick={() => filterResult("Women")}>Women</button>
        <button onClick={() => filterResult("Men")}>Men</button>
        <button onClick={() => filterResult("Kids")}>Kids</button>
        <button onClick={() => filterResult("Jewels")}>Jewels</button>
      </div>
      <div>
        <div>
          {
            data.map(values =>{
              const {id, title,price,image, para} = values;
              return(
                <>
          {/* <SlideCart key={id} title="Rey Nylon Backpack" para="Brown cockroach wings" price="$23.00"/> */}


          <div key={id}>
      <div className={style.imgCartGreen}>
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
        <img src={image} alt="blose" className={style.images}/>
      </div>
      {/* <div className={style.colorChoose}>
        <img src={blue} alt="blue" />
        <img src={blueLight} alt="blueLight" />
        <img src={blueDark} alt="blueDark" />
        <img src={brown} alt="brown" />
        <img src={black} alt="black" />
      </div> */}
      <div className={style.textSlideAdd}>
        <p>{title}</p>
        <span>{para}</span>
      </div>
      <div className={style.btnPriceAdd}>
        <div>
          <button>${price}</button>
        </div>
        <div>
          <span>⭐ 4.7 (48 reviews)</span>
        </div>
      </div>
    </div>
                </>
              )
            })
          }
          
        </div>
      </div>
    </div>
  );
}

export default FilterProducts;
