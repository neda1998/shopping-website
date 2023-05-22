import React from 'react';
import style from "../../styles/Navbar.module.css";
import coatImage from "../../assets/images/coat.png";

function ShoppingBox() {
  return (
    <div className={style.shoppingCartBox}>
    <p className={style.shopText}>Shopping Cart</p>
    <div className={style.propShop}>
      <div className={style.imgShop}>
        <img src={coatImage} alt="coat" />
        <div className={style.textImgShop}>
          <p>rey Nylon Backpack</p>
          <span>Natural | XL</span>
          <h6>Qty 1</h6>
        </div>
      </div>
      <div className={style.btnPriceShop}>
        <div>
          <button className={style.btnPrice}>$74.00</button>
        </div>
        <div>
          <p>Remove</p>
        </div>
      </div>
    </div>
    <div className={style.textCheckout}>
      <div>
        <p>Subtotal</p>
        <span>Shipping and taxes calculated at checkout.</span>
      </div>
      <p>$299.00</p>
    </div>
    <div className={style.btnShopping}>
      <button className={style.cartBtn}>View cart</button>
      <button className={style.checkoutBtn}>Check out</button>
    </div>
  </div>
  )
}

export default ShoppingBox