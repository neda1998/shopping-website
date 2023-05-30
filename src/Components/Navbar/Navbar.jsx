import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "../../styles/Navbar.module.css";
import Logo from "../Logo/Logo";
import NavRight from "./NavRight";
import TemplateBox from "./TemplateBox";
import ExploreBox from "./ExploreBox";
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import MenuMobile from "../MenuMobile/MenuMobile";
import AppContext from "../Context/AppContext";

function Navbar() {
  //toggle icon menu mobile
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <AppContext.Consumer>
      {({headerContent}) => (
        <header className={`md:px-17 py-5 px-10 ${style.header}`}>
        <div className={style.headItem}>
          <nav className={style.navbar}>
            {/* menu mobile */}
            <div onClick={handleNav} className={`lg:hidden ${style.toggleMenuMobile}`}>
              {nav ? <AiOutlineClose size={22} /> : <HiOutlineMenuAlt4 size={22} />}
            </div>
            {/* menu mobile */}
            <Logo customWidth="142px"/>
            <div>
              <ul className={`${style.navItem} ${style.menuHeader} hidden lg:flex`}>
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
            {nav && (
              <div className={style.coverPage} onClick={handleNav}></div>
            )}
            {/* menu mobile */}
            {nav && (
            <MenuMobile handleNav={handleNav}/>
            )}
            {/* menu mobile */}
            <NavRight />
          </nav>
        </div>
      </header>
      )}
    </AppContext.Consumer>
  );
}

export default Navbar;
