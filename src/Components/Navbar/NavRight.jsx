import { React, useState } from 'react';
import style from "../../styles/Navbar.module.css";
import ShoppingBox from "./ShoppingBox";
import UserBox from './UserBox';

function NavRight() {
    const [search, setSearch] = useState("");
    const [shoppingBox, setShoppingBox] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [openPropUser, setPropUser] = useState(false);

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
                <UserBox />
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
                <ShoppingBox />
            )}
            {/* open shopping cart box */}
        </div>
    )
}

export default NavRight