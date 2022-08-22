import React from "react";

import "./Navbar.css";
import { images } from "../../constants";
import { icons } from "../../constants";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="app__navbar">
    <div className="app__navbar-left">
      <div className="app__navbar-logo">
        <a href="/">
          <img src={images.logo} alt="app logo" />
        </a>
      </div>
      
      <div className="app__navbar-search">
        <button className="app__navbar-left-icon">
          <img src={icons.searchNormal} alt="searchBtn" />
        </button>
        <input type="text" placeholder="Search something here" />
        <button className="app__navbar-left-icon">
          <img src={icons.filter} alt="filter" />
        </button>
      </div>
    </div>
    <div className="app__navbar-right">
      <button className="icon">
        <img src={icons.heartGray} alt="heart" />
      </button>
      <button className="icon">
        <img src={icons.notification} alt="notification" />
        <span className="badge"></span>
      </button>
      <button className="icon">
        <img src={icons.setting} alt="setting" />
      </button>
      <button className="profile">
        <img src={images.Profil} alt="Profil" />
      </button>
    </div>
  </div>
);

export default Navbar;
