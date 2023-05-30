import React from "react";
import Logo from "../../Components/Logo/Logo";
import style from "../../styles/Footer.module.css"
import facebook from "../../assets/svg/facebook.svg";
import youtube from "../../assets/svg/youtube.svg";
import telegram from "../../assets/svg/telegram.svg";
import twitter from "../../assets/svg/twitter.svg";
import AppContext from "../Context/AppContext";

function Footer() {
  return (
    <AppContext.Consumer>
      {({ footerContent }) => (
        <div className={`md:px-20 px-10 py-20 ${style.footer}`}>
          <div className="lg:hidden flex items-center sm:justify-start justify-between mb-10">
            <Logo />
            <div className="flex items-center sm:ml-10">
              <div className={`${style} ${style.socialMedia}`}>
                <img src={facebook} alt="facebook" />
              </div>
              <div className={style.socialMedia}>
                <img src={youtube} alt="youtube" />
              </div>
              <div className={style.socialMedia}>
                <img src={telegram} alt="telegram" />
              </div>
              <div className={style.socialMedia}>
                <img src={twitter} alt="twitter" />
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 sm:gap-8 gap-4">
            <div className="hidden lg:block">
              <Logo />
              <div className={`${style.logoFooter} ${style.socialMedia}`}>
                <img src={facebook} alt="facebook" />
                <span>Facebook</span>
              </div>
              <div className={style.socialMedia}>
                <img src={youtube} alt="youtube" />
                <span>Youtube</span>
              </div>
              <div className={style.socialMedia}>
                <img src={telegram} alt="telegram" />
                <span>Telegram</span>
              </div>
              <div className={style.socialMedia}>
                <img src={twitter} alt="twitter" />
                <span>Twitter</span>
              </div>
            </div>
            <div className={style.headFooter}>
              <p>Getting started</p>
              <span>Release Notes</span>
              <span>Upgrade Guide</span>
              <span>Browser Support</span>
              <span>Dark Mode</span>
            </div>
            <div className={style.headFooter}>
              <p>Explore</p>
              <span>Prototyping</span>
              <span>Design systems</span>
              <span>Pricing</span>
              <span>Security</span>
            </div>
            <div className={style.headFooter}>
              <p>Resources</p>
              <span>Best practices</span>
              <span>Support</span>
              <span>Developers</span>
              <span>Learn design</span>
            </div>
            <div className={style.headFooter}>
              <p>Community</p>
              <span>Discussion Forums</span>
              <span>Codes of Conduct</span>
              <span>Contributing</span>
              <span>API Reference</span>
            </div>
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
}

export default Footer;
