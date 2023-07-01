import React from 'react';
import facebook from "../../assets/svg/facebook.svg";
import twitter from "../../assets/svg/twitter.svg";
import youtube from "../../assets/svg/youtube.svg";
import telgram from "../../assets/svg/telegram.svg";
import { AiOutlineClose } from 'react-icons/ai';
import style from "../../styles/Navbar.module.css";
import Logo from "../Logo/Logo";
import DropdownMobile from '../Dropdown/Dropdown';
import Theme from "../../Theme/Theme";
import { Link } from 'react-router-dom';

function MenuMobile({ handleNav }) {
    return (
        <>
            <div className={`w-[380px] sm:w-[500px] ${style.menuMobileRes}`}>
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
                    <Theme />
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
                    <Link to="/men">MEN</Link>
                    <Link to="/women">WOMEN</Link>
                   <Link to="/beauty">BEAUTY</Link>
                    <Link to="/sport">SPORT</Link>
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