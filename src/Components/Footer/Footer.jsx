import React from "react";
import Logo from "../../Components/Logo/Logo";
import style from "../../styles/Footer.module.css"
import facebook from "../../assets/svg/facebook.svg";
import youtube from "../../assets/svg/youtube.svg";
import telegram from "../../assets/svg/telegram.svg";
import twitter from "../../assets/svg/twitter.svg";

function Footer() {
  return (
    <div className={style.footer}>
      <div className="lg:px-20 grid lg:grid-cols-5">
        <div>
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
  );
}

export default Footer;
