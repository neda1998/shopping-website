import React, { useState } from "react";
import style from "../../styles/FilterProducts.module.css";
import DataProducts from "../../Data/DataProducts";
import blue from "../../assets/images/blue.jpg";
import brown from "../../assets/images/brown.jpg";
import blueLight from "../../assets/images/blueLight.jpg";
import black from "../../assets/images/black.jpg";
import blueDark from "../../assets/images/blueDark.jpg";
import CategoryBox from "./CategoryBox";

function FilterProducts() {
  //get images from dataProducts
  const [data, setData] = useState(DataProducts);
  //show category items
  const [filter, setFilter] = useState(false);
  //show category boxes
  const [category, setCategory] = useState(false);
  //show color boxes
  const [colorFilter, setColorFilter] = useState(false);
  //show sizes boxes
  const [sizeFilter, setSizeFilter] = useState(false);
  //show sort order box
  const [sortOrderFilter, setSortOrderFilter] = useState(false);
  // change bg button
  const [changeBgBtn, setChange] = useState(false);

  //filter Products
  const filterResult = (item) => {
    const result = DataProducts.filter((curData) => {
      return curData.category === item;
    });
    setData(result);
  };
  return (
    <div className={`md:px-20 px-10 ${style.filterProducts}`}>
      <h1>What's trending now</h1>
      <p>Discover the most trending products in Ciseco.</p>
      <div className={style.filter}>
        <div className={style.btnFilter}>
          <button
            onClick={() => {
              setData(DataProducts);
              setChange(!changeBgBtn);
            }}
            className={`${changeBgBtn} ? ${style.bgActive} : ""`}
          >
            All Items
          </button>
          <button
            onClick={() => filterResult("Women")}
            className={style.btnSelect}
          >
            Women
          </button>
          <button
            onClick={() => filterResult("Men")}
            className={style.btnSelect}
          >
            Men
          </button>
          <button
            onClick={() => filterResult("Kids")}
            className={style.btnSelect}
          >
            Kids
          </button>
          <button
            onClick={() => filterResult("Jewels")}
            className={style.btnSelect}
          >
            Jewels
          </button>
        </div>
        <div className={style.btnCategory} onClick={() => setFilter(!filter)}>
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
      {/* category */}
      {filter && (
        <div className={style.categoryProducts}>
          <div className={style.cateItemsFilter}>
            {/* range */}
            {/* range */}
            <div
              className={style.itemsCategoryPro}
              onClick={() => setCategory(!category)}
            >
              <button>
                <svg
                  class="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2V5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M16 2V5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M7 13H15"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M7 17H12"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M16 3.5C19.33 3.68 21 4.95 21 9.65V15.83C21 19.95 20 22.01 15 22.01H9C4 22.01 3 19.95 3 15.83V9.65C3 4.95 4.67 3.69 8 3.5H16Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <span>Categories</span>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>
            {/* open category box */}
            {category && (
              <CategoryBox
                itemOne="All Categories"
                itemTwo="New Arrivals"
                itemThree="Sale"
                itemFour="Backpacks"
                itemFive="Travel Bags"
                itemSix="Laptop Sleeves"
                itemSeven="Organization"
                itemEight="Accessories"
                className={style.CategoryBox}
              />
            )}
            {/* open category box */}
            <div
              className={style.itemsCategoryPro}
              onClick={() => setColorFilter(!colorFilter)}
            >
              <button>
                <svg
                  class="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.01 18.0001L3 13.9901C1.66 12.6501 1.66 11.32 3 9.98004L9.68 3.30005L17.03 10.6501C17.4 11.0201 17.4 11.6201 17.03 11.9901L11.01 18.0101C9.69 19.3301 8.35 19.3301 7.01 18.0001Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8.35 1.94995L9.69 3.28992"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M2.07 11.92L17.19 11.26"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M3 22H16"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M18.85 15C18.85 15 17 17.01 17 18.24C17 19.26 17.83 20.09 18.85 20.09C19.87 20.09 20.7 19.26 20.7 18.24C20.7 17.01 18.85 15 18.85 15Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <span>Colors</span>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>
            {/* open category box */}
            {colorFilter && (
              <CategoryBox
                itemOne="White"
                itemTwo="Beige"
                itemThree="Blue"
                itemFour="Black"
                itemFive="Brown"
                itemSix="Green"
                itemSeven="Navy"
                itemEight="Pink"
                className={style.colorBox}
              />
            )}
            {/* open category box */}
            <div
              className={style.itemsCategoryPro}
              onClick={() => setSizeFilter(!sizeFilter)}
            >
              <button>
                <svg
                  class="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 9V3H15"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M3 15V21H9"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M21 3L13.5 10.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M10.5 13.5L3 21"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <span>Sizes</span>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>
            {/* open category box */}
            {sizeFilter && (
              <CategoryBox
                itemOne="XXS"
                itemTwo="XS"
                itemThree="S"
                itemFour="M"
                itemFive="L"
                itemSix="XL"
                itemSeven="2XL"
                itemEight="X"
                className={style.sizeBox}
              />
            )}
            {/* open category box */}
            <div
              className={`${style.itemsCategoryPro} ${style.itemsCategorySale}`}
            >
              <button>
                <svg
                  class="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.9889 14.6604L2.46891 13.1404C1.84891 12.5204 1.84891 11.5004 2.46891 10.8804L3.9889 9.36039C4.2489 9.10039 4.4589 8.59038 4.4589 8.23038V6.08036C4.4589 5.20036 5.1789 4.48038 6.0589 4.48038H8.2089C8.5689 4.48038 9.0789 4.27041 9.3389 4.01041L10.8589 2.49039C11.4789 1.87039 12.4989 1.87039 13.1189 2.49039L14.6389 4.01041C14.8989 4.27041 15.4089 4.48038 15.7689 4.48038H17.9189C18.7989 4.48038 19.5189 5.20036 19.5189 6.08036V8.23038C19.5189 8.59038 19.7289 9.10039 19.9889 9.36039L21.5089 10.8804C22.1289 11.5004 22.1289 12.5204 21.5089 13.1404L19.9889 14.6604C19.7289 14.9204 19.5189 15.4304 19.5189 15.7904V17.9403C19.5189 18.8203 18.7989 19.5404 17.9189 19.5404H15.7689C15.4089 19.5404 14.8989 19.7504 14.6389 20.0104L13.1189 21.5304C12.4989 22.1504 11.4789 22.1504 10.8589 21.5304L9.3389 20.0104C9.0789 19.7504 8.5689 19.5404 8.2089 19.5404H6.0589C5.1789 19.5404 4.4589 18.8203 4.4589 17.9403V15.7904C4.4589 15.4204 4.2489 14.9104 3.9889 14.6604Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M9 15L15 9"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M14.4945 14.5H14.5035"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M9.49451 9.5H9.50349"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <span>On Sale</span>
            </div>
          </div>
          <div
            className={style.itemsCategoryPro}
            onClick={() => setSortOrderFilter(!sortOrderFilter)}
          >
            <button>
              <svg class="w-4 h-4" viewBox="0 0 20 20" fill="none">
                <path
                  d="M11.5166 5.70834L14.0499 8.24168"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M11.5166 14.2917V5.70834"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M8.48327 14.2917L5.94995 11.7583"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M8.48315 5.70834V14.2917"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M10.0001 18.3333C14.6025 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6025 1.66667 10.0001 1.66667C5.39771 1.66667 1.66675 5.39763 1.66675 10C1.66675 14.6024 5.39771 18.3333 10.0001 18.3333Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <span>Sort Order</span>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>
          {/* open category box */}
          {sortOrderFilter && (
            <CategoryBox
              itemOne="Most Popular"
              itemTwo="Best Rating"
              itemThree="Newest"
              itemFour="Price Low - Hight"
              itemFive="Price Hight - Low"
              itemSix="Price Low"
              itemSeven="Price Hight"
              itemEight="Price"
              className={style.orderBox}
            />
          )}
          {/* open category box */}
        </div>
      )}
      {/* category */}
      <div className="grid lg:grid-cols-4 lg:gap-12 md:grid-cols-2 md:gap-8 gap-6 grid-cols-1">
        {data.map((values) => {
          const { id, title, price, image, para } = values;
          return (
            <>
              <div>
                <div className={style.imgCartGreen} >
                  <div className={style.heartIcon} key={id}>
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
                  <img src={image} alt="blose" className={`md:w-[284px] md:h-[216px] w-full h-full ${style.images}`} />
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
  );
}

export default FilterProducts;
