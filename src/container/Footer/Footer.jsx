import React from "react";

import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer">
    <div className="app__footer-top">
      <div className="app__footer-top-logo-slogan">
        <img src={images.logo} alt="logo" />
        <p className="slogan">
          Our vision is to provide convenience and help increase your sales
          business.
        </p>
      </div>
      <div className="app__footer-top-link">
        <div className="app__footer-top-link-about">
          <span className="app__footer-top-link-about-heading">About</span>
          <div className="app__footer-top-link-about-item">
            <a href="/">How it works</a>
            <a href="/">Featured</a>
            <a href="/">Partnership</a>
            <a href="/">Bussiness Relation</a>
          </div>
        </div>
        <div className="app__footer-top-link-about">
          <span className="app__footer-top-link-about-heading">Community</span>
          <div className="app__footer-top-link-about-item">
            <a href="/">Events</a>
            <a href="/">Blog</a>
            <a href="/">Podcast</a>
            <a href="/">Invite a friend</a>
          </div>
        </div>
        <div className="app__footer-top-link-about">
          <span className="app__footer-top-link-about-heading">Socials</span>
          <div className="app__footer-top-link-about-item">
            <a href="/">Discord</a>
            <a href="/">Instagram</a>
            <a href="/">Twitter</a>
            <a href="/">Facebook</a>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div className="app__footer-bottom">
      <span className="createby">©2022 MORENT. All rights reserved</span>
      <div className="certification">
        <span>Privacy {"&"} Policy</span>
        <span>Terms {"&"} Condition</span>
      </div>
    </div>
  </div>
);

export default Footer;
