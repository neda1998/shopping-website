import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "../../styles/Navbar.module.css";   
import dogImage from "../../assets/images/dog.png";
import user from "../../assets/images/user.png";
import coatImage from "../../assets/images/coat.png";
import Logo from "../Logo/Logo";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [openTemplate, setOpenTemplate] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openPropUser, setPropUser] = useState(false);
  const [search, setSearch] = useState("");
  const [shoppingBox, setShoppingBox] = useState(false);

  // submit search
  const submitSearchHandler = (e) => {
    e.preventDefault();
    setOpenSearch(true);
    setSearch("");
  };

  //type on input search
  const changeInputHandler = (e) => {
    setSearch(e.target.value);
  };

  // click on search button
  const searchClickHandler = () => {
    setOpenSearch(!openSearch);
  };

  // close input search
  const closeSearchHandler = () => {
    setOpenSearch(false);
  };

  // click on user icon open the box user
  const boxUserHandler = () => {
    setPropUser(!openPropUser);
  };
  return (
    <header className={style.header}>
      <div className="container">
        <nav className={style.navbar}>
          <Logo />
          <div>
            <ul className={style.navItem}>
              <li>
                <Link className={style.link} to="/men">
                  Men
                </Link>
              </li>
              <li>
                <Link className={style.link} to="/women">
                  Women
                </Link>
              </li>
              <li>
                <Link className={style.link} to="/beauty">
                  Beauty
                </Link>
              </li>
              <li>
                <Link className={style.link} to="/sport">
                  Sport
                </Link>
              </li>
              <li
                className={style.listItem}
                onMouseLeave={() => setOpenTemplate(false)}
              >
                <Link to="/template" onMouseOver={() => setOpenTemplate(true)}>
                  Template
                </Link>
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
                <div
                  className={`adMenu ${style.listTemplate} ${
                    openTemplate ? "flex" : "hidden"
                  }`}
                >
                  <div className={style.menuContent}>
                    <div className={style.itemListHome}>
                      <p>Home Page</p>
                      <Link className={style.Link}>Home 1</Link>
                      <Link className={`${style.newBadge} ${style.Link}`}>
                        Home 2<span>New!</span>
                      </Link>
                      <Link className={style.Link}>Header 1</Link>
                      <Link className={`${style.newBadge} ${style.Link}`}>
                        Header 2<span>New!</span>
                      </Link>
                      <Link className={style.Link}>Coming Soon</Link>
                    </div>
                    <div className={style.itemListHome}>
                      <p>Shop Page</p>
                      <Link className={style.Link}>Category Page 1</Link>
                      <Link className={style.Link}>Category Page 2</Link>
                      <Link className={style.Link}>Product Page 1</Link>
                      <Link className={style.Link}>Product Page 2</Link>
                      <Link className={style.Link}>Cart Page</Link>
                      <Link className={style.Link}>Checkout Page</Link>
                    </div>
                    <div className={style.itemListHome}>
                      <p>Other Pages</p>
                      <Link className={style.Link}>Checkout Page</Link>
                      <Link className={style.Link}>Search Page</Link>
                      <Link className={style.Link}>Cart Page</Link>
                      <Link className={style.Link}>Acount Page</Link>
                      <Link className={style.Link}>Order Page</Link>
                      <Link className={style.Link}>Subscription</Link>
                    </div>
                    <div className={style.itemListHome}>
                      <p>Blog Page</p>
                      <Link className={style.Link}>Blog Page</Link>
                      <Link className={style.Link}>Blog Single</Link>
                      <Link className={style.Link}>About Page</Link>
                      <Link className={style.Link}>Contact Page</Link>
                      <Link className={style.Link}>Login</Link>
                      <Link className={style.Link}>Signup</Link>
                    </div>
                    <div className={style.boxDropdown}>
                      <div>
                        <p className={style.Link}>Sale collection</p>
                        <p className={style.textOff}>
                          Up to
                          <h6>80% off retail</h6>
                        </p>
                        <button>
                          <Link className={style.LinkShow}>Show me all</Link>
                        </button>
                      </div>
                      <div>
                        <img
                          src={dogImage}
                          alt="dogImage"
                          className={style.imageDog}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                className={style.listItem}
                onMouseLeave={() => setOpen(false)}
              >
                <Link to="/explore" onMouseOver={() => setOpen(true)}>
                  Explore
                </Link>
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
                <div
                  className={`${style.listDropdown} ${
                    open ? "block" : "hidden"
                  }`}
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
              </li>
            </ul>
          </div>
          <div className={style.svgHead}>
            <button
              onClick={searchClickHandler}
              className={`${style.btnHover} ${style.btnSearch}`}
            >
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
            {/* open search */}
            {openSearch && (
              <form onSubmit={submitSearchHandler} className={style.formNav}>
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
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  onChange={changeInputHandler}
                  value={search}
                  placeholder="Type and Press Enter"
                  className={style.inputNav}
                />
                <button
                  type="submit"
                  onClick={closeSearchHandler}
                  className={style.btnHover}
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </form>
            )}
            {/* open search */}
            <button
              onClick={boxUserHandler}
              className={`relative ${style.btnHover}`}
            >
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
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </button>
            {/* open box user */}
            {openPropUser && (
              <div className={style.userBox}>
                <div className={style.userImg}>
                  <img src={user} alt="user" className={style.user} />
                  <div className={style.propUser}>
                    <p>Eden Smith</p>
                    <span>Los Angles,CA</span>
                  </div>
                </div>
                <div className={style.itemUser}>
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
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>
                  <span>My Account</span>
                </div>
                <div className={style.itemUser}>
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
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                      />
                    </svg>
                  </button>
                  <span>My Order</span>
                </div>
                <div className={style.itemUser}>
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
                  <span>My Wishlist</span>
                </div>
                <div className={style.darkModeBox}>
                  <div className={style.itemUser}>
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
                          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                        />
                      </svg>
                    </button>
                    <span>Dark Theme</span>
                  </div>
                  <div className={style.itemUser}>
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
                          d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
                        />
                      </svg>
                    </button>
                    <span>Help</span>
                  </div>
                  <div className={style.itemUser}>
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
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                        />
                      </svg>
                    </button>
                    <span>Log out</span>
                  </div>
                </div>
              </div>
            )}
            {/* open box user */}
            <button
              className={`${style.btnHover} ${style.btn}`}
              onClick={() => setShoppingBox(!shoppingBox)}
            >
              <span>3</span>
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
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>
            {/* open shopping cart box */}
            {shoppingBox && (
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
            )}
            {/* open shopping cart box */}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
