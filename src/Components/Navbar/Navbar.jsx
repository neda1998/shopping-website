import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "../../styles/Navbar.module.css";
import Logo from "../Logo/Logo";
import NavRight from "./NavRight";
import TemplateBox from "./TemplateBox";
import ExploreBox from "./ExploreBox";
import facebook from "../../assets/svg/facebook.svg";
import twitter from "../../assets/svg/twitter.svg";
import youtube from "../../assets/svg/youtube.svg";
import telgram from "../../assets/svg/telegram.svg";
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

function Navbar() {
  //toggle icon menu mobile
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <header className={style.header}>
      <div className={style.headItem}>
        <nav className={style.navbar}>
          {/* menu mobile */}
          <div onClick={handleNav} className={`md:hidden ${style.toggleMenuMobile}`}>
            {nav ? <AiOutlineClose size={22} /> : <HiOutlineMenuAlt4 size={22} />}
          </div>
          {/* menu mobile */}
          <Logo className={""} />
          <div>
            <ul className={`${style.navItem} ${style.menuHeader} md:flex`}>
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
              >
                <Link to="/template">
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
                <TemplateBox />
              </li>
              <li
                className={style.listItem}
              >
                <Link to="/explore">
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
                <ExploreBox />
              </li>
            </ul>
          </div>
          {/* menu mobile */}
          <div>
            <div>
              <AiOutlineClose size={20} />
            </div>
            <div>
              <Logo />
            </div>
            <p>Discover the most outstanding articles on all topics of life. Write your stories and share them</p>
            <div>
             <div>
             <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
              <img src={youtube} alt="youtube" />
              <img src={telgram} alt="telgram" />
             </div>
             <div>
              {/* theme */}
             </div>
            </div>
            <div>
              <button>  <svg
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
                </svg></button>
              <input type="text" placeholder="Type and press enter"/>
            </div>
            <p>MEN</p>
            <p>WOMEN</p>
            <p>BEAUTY</p>
            <p>SPORT</p>
            <div>
              <div>TEMPLATES</div>
              <div><button>
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
                </button></div>
            </div>
            <div>
              <div>EXPLORE</div>
              <div><button>
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
                </button></div>
            </div>
            <div>
              <button>Buy this template</button>
            </div>
          </div>
          {/* menu mobile */}
          <NavRight />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
