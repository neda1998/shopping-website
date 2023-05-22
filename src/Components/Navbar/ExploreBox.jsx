import React from 'react';
import { Link } from "react-router-dom";
import style from "../../styles/Navbar.module.css";

function ExploreBox() {
  return (
    <div
    className={`${style.listDropdown}`}
  >
    <div className={style.listMenu}>
      <Link className={style.homeNav}>Home Demo 1</Link>
      <Link className={style.LinkNav}>Home Demo 1</Link>
      <Link className={`relative ${style.dropNav} ${style.LinkNav}`}>
        Category Pages
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
      </Link>
      {/* drop down category */}
      <div className={style.ctegoryPage}>
        <Link className={style.LinkNav}>Category Page 1</Link>
        <Link className={style.LinkNav}>Category Page 2</Link>
      </div>
      {/* drop down category */}
      <Link className={`${style.dropNav} ${style.LinkNav}`}>
        Product Pages
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
      </Link>
      <Link className={style.LinkNav}>Cart Pages</Link>
      <Link className={style.LinkNav}>Checkout Pages</Link>
      <Link className={style.LinkNav}>Search Pages</Link>
      <Link className={style.LinkNav}>Account Pages</Link>
      <Link className={style.LinkNav}>Other Pages</Link>
      <Link className={style.LinkNav}>Blog Pages</Link>
    </div>
  </div>
  )
}

export default ExploreBox