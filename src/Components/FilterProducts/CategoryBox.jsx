import React from "react";
import style from "../../styles/FilterProducts.module.css";

function CategoryBox({itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix, itemSeven, itemEight, className}) {
  return (
    <div className={className}>
      <div class={`${style.chooseItem} ${style.borderBottom}`}>
        <input
          id="helper-checkbox"
          aria-describedby="helper-checkbox-text"
          type="checkbox"
          value=""
          className="w-6 h-6"
        />
        <label for="helper-checkbox" className={style.inputCategory}>
          {itemOne}
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
         {itemTwo}
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
          {itemThree}
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
          {itemFour}
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
          {itemFive}
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
          {itemSix}
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
          {itemSeven}
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
          {itemEight}
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
