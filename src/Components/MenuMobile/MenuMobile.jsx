import React from 'react';
import facebook from "../../assets/svg/facebook.svg";
import twitter from "../../assets/svg/twitter.svg";
import youtube from "../../assets/svg/youtube.svg";
import telgram from "../../assets/svg/telegram.svg";
import { AiOutlineClose } from 'react-icons/ai';
import style from "../../styles/Navbar.module.css";
import Logo from "../Logo/Logo";

function MenuMobile({ handleNav }) {
    return (
        <>
            <div className={style.menuMobileRes}>
                <div className={style.closeMenu}>
                    <AiOutlineClose size={20} onClick={handleNav} />
                </div>
                <div>
                    <Logo />
                </div>
                <p className={style.textMenu}>Discover the most outstanding articles on all topics of life. Write your stories and share them</p>
                <div className={style.socialMedia}>
                    <div className={style.imgSocial}>
                        <img src={facebook} alt="facebook" />
                        <img src={twitter} alt="twitter" />
                        <img src={youtube} alt="youtube" />
                        <img src={telgram} alt="telgram" />
                    </div>
                    <div className={style.iconTheme}>
                        <button className={style.themeMenuMobile}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                        </button>
                        <button className={style.themeMenuMobile}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>
                        </button>
                    </div>
                </div>
                <div className={style.inputMenuMobile}>
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
                    <input type="text" placeholder="Type and press enter" />
                </div>
                <div className={style.itemsMenu}>
                    <p>MEN</p>
                    <p>WOMEN</p>
                    <p>BEAUTY</p>
                    <p>SPORT</p>
                    <div className={style.dropMenu}>
                        <span>TEMPLATES</span>
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
                    {/* dropdown template */}
                    <div className={style.itemsDropMenu}>
                        <div className={style.dropMenu}>
                            <span>Home Page</span>
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
                        <div className={style.dropMenuMobile}>
                            <p>Home 1</p>
                            <p>Home 2</p>
                            <p>Header 1</p>
                            <p>Header 2</p>
                            <p>Coming Soon</p>
                        </div>
                        <div className={style.dropMenu}>
                            <span>Shop Pages</span>
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
                        <div className={style.dropMenuMobile}>
                            <p>Category Page 1</p>
                            <p>Category Page 2</p>
                            <p>Product Page 1</p>
                            <p>Product Page 2</p>
                            <p>Cart Page</p>
                        </div>
                        <div className={style.dropMenu}>
                            <span>Other Pages</span>
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
                        <div className={style.dropMenuMobile}>
                            <p>Checkout Page</p>
                            <p>Search Page</p>
                            <p>Cart Page</p>
                            <p>Account Page</p>
                            <p>Order Page</p>
                        </div>
                        <div className={style.dropMenu}>
                            <span>Blog Page</span>
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
                        <div className={style.dropMenuMobile}>
                            <p>Blog Page</p>
                            <p>Blog Single</p>
                            <p>About Page</p>
                            <p>Contact Page</p>
                            <p>Login</p>
                            <p>Signup</p>
                        </div>
                    </div>
                    {/* dropdown template */}
                    <div className={style.dropMenu}>
                        <span>EXPLORE</span>
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
                    <div className={style.dropMenu}>
                        <span>Home Demo 1</span>
                    </div>
                    <div className={style.dropMenu}>
                        <span>Home Demo 2</span>
                    </div>
                    <div className={style.dropMenu}>
                        <span>Category Pages</span>
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
                    <div className={style.dropMenuMobile}>
                        <p>Category Page 1</p>
                        <p>Category Page 2</p>
                    </div>
                    <div className={style.dropMenu}>
                        <span>Product Pages</span>
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
                    <div className={style.dropMenuMobile}>
                        <p>Product detail 1</p>
                        <p>Product detail 2</p>
                    </div>
                    <div className={style.dropMenu}>
                        <span>Search Pages</span>
                    </div>
                    <div className={style.dropMenu}>
                        <span>Checkout Pages</span>
                    </div>
                    <div className={style.dropMenu}>
                        <span>Other Pages</span>
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
                    <div className={style.dropMenuMobile}>
                        <p>About</p>
                        <p>Contact us</p>
                        <p>Login</p>
                        <p>Signup</p>
                        <p>Subscription</p>
                    </div>
                    <div className={style.dropMenu}>
                        <span>Blog Pages</span>
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
                    <div className={style.dropMenuMobile}>
                        <p>Blog Page</p>
                        <p>Blog Single</p>
                    </div>
                </div>
                <div className={style.btnMenuMobile}>
                    <button>Buy this template</button>
                </div>
            </div>
        </>
    )
}

export default MenuMobile