import React from 'react';
import style from "../../styles/Navbar.module.css";
import dogImage from "../../assets/images/dog.png";
import { Link } from 'react-router-dom';

function TemplateBox() {
    return (
        <div
            className={`${style.listTemplate}`}
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
    )
}

export default TemplateBox