import React from "react";
import style from "../../styles/FilterProducts.module.css";

function CategoryBox() {
  return (
    <div className={style.CategoryBox}>
      <div class={`${style.chooseItem} ${style.borderBottom}`}>
        <input
          id="helper-checkbox"
          aria-describedby="helper-checkbox-text"
          type="checkbox"
          value=""
          className="w-6 h-6"
        />
        <label for="helper-checkbox" className={style.inputCategory}>
          All Categories
        </label>
      </div>
      <div class={style.chooseItem}>
        <input
          id="helper-checkbox"
          aria-describedby="helper-checkbox-text"
          type="checkbox"
          value=""
          className="w-6 h-6"
        />
        <label for="helper-checkbox" className={style.inputCategory}>
          New Arrivals
        </label>
      </div>
      <div class={style.chooseItem}>
        <input
          id="helper-checkbox"
          aria-describedby="helper-checkbox-text"
          type="checkbox"
          value=""
          className="w-6 h-6"
        />
        <label for="helper-checkbox" className={style.inputCategory}>
          Sale
        </label>
      </div>
      <div class={style.chooseItem}>
        <input
          id="helper-checkbox"
          aria-describedby="helper-checkbox-text"
          type="checkbox"
          value=""
          className="w-6 h-6"
        />
        <label for="helper-checkbox" className={style.inputCategory}>
          Backpack
        </label>
      </div>
      <div class={style.chooseItem}>
        <input
          id="helper-checkbox"
          aria-describedby="helper-checkbox-text"
          type="checkbox"
          value=""
          className="w-6 h-6"
        />
        <label for="helper-checkbox" className={style.inputCategory}>
          Travel Bages
        </label>
      </div>
      <div class={style.chooseItem}>
        <input
          id="helper-checkbox"
          aria-describedby="helper-checkbox-text"
          type="checkbox"
          value=""
          className="w-6 h-6"
        />
        <label for="helper-checkbox" className={style.inputCategory}>
          Laptop Sleeves
        </label>
      </div>
      <div class={style.chooseItem}>
        <input
          id="helper-checkbox"
          aria-describedby="helper-checkbox-text"
          type="checkbox"
          value=""
          className="w-6 h-6"
        />
        <label for="helper-checkbox" className={style.inputCategory}>
          Organization
        </label>
      </div>
      <div class={style.chooseItem}>
        <input
          id="helper-checkbox"
          aria-describedby="helper-checkbox-text"
          type="checkbox"
          value=""
          className="w-6 h-6"
        />
        <label for="helper-checkbox" className={style.inputCategory}>
          Accessories
        </label>
      </div>
      <div className={style.btnClick}>
        <div className={style.clearBtn}>
          <button>Clear</button>
        </div>
        <div className={style.applyBtn}>
          <button>Apply</button>
        </div>
      </div>
    </div>
  );
}

export default CategoryBox;
