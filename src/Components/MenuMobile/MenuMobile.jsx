import React, { useState } from 'react';
import facebook from "../../assets/svg/facebook.svg";
import twitter from "../../assets/svg/twitter.svg";
import youtube from "../../assets/svg/youtube.svg";
import telgram from "../../assets/svg/telegram.svg";
import { AiOutlineClose } from 'react-icons/ai';
import style from "../../styles/Navbar.module.css";
import Logo from "../Logo/Logo";
import DropdownMobile from '../Dropdown/Dropdown';


function MenuMobile({ handleNav }) {
    const [mobileTheme, setMobileTheme] = useState(false);
    return (
        <>
            <div className={`w-[290px] sm:w-[500px] ${style.menuMobileRes}`}>
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
                    <div className={style.iconTheme} onClick={() => setMobileTheme(!mobileTheme)}>
                        {mobileTheme ? (<button className={style.themeMenuMobile}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                        </button>) : (<button className={style.themeMenuMobile}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>
                        </button>)}
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
                    <DropdownMobile />
                </div>
                <div className={style.btnMenuMobile}>
                    <button>Buy this template</button>
                </div>
            </div>
        </>
    )
}

export default MenuMobile