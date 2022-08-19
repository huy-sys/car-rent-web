import React from "react";

import "./Header.css";
import { images } from "../../../constants";
import { icons } from "../../../constants";
import { FilterCard } from "../../../components";

const Header = () => (
  <div className="app__header">
    <div className="app__header-trending">
      <div className="app__header-card">
        <div className="app__header-card-img">
          <img src={images.product1} alt="product1" />
        </div>
        <div className="app__header-card-content">
          <span className="app__header-card-content-heading">
            The Best Platform for Car Rental
          </span>
          <span className="app__header-card-content-title">
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </span>
          <button className="app__header-card-content-button">
            Rental Car
          </button>
        </div>
      </div>
      <div className="app__header-card">
        <div className="app__header-card-img">
          <img src={images.product2} alt="product2" />
        </div>
        <div className="app__header-card-content">
          <span className="app__header-card-content-heading">
            Easy way to rent a car at a low price
          </span>
          <span className="app__header-card-content-title">
            Providing cheap car rental services and safe and comfortable
            facilities.
          </span>
          <button className="app__header-card-content-button">
            Rental Car
          </button>
        </div>
      </div>
    </div>
    <div className="app__header-filter">
      <div className="app__header-filter-first">
        <div className="btn-radio">
          <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked/>
          <span>Pick-Up</span>
        </div>
        <FilterCard />
      </div>
      <button><img src={icons.swap} alt="swap" /></button>
      <div className="app__header-filter-first">
        <div className="btn-radio">
          <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autoComplete="off" />
          <span>Drop-Off</span>
        </div>
        <FilterCard />
      </div>
    </div>
  </div>
);

export default Header;
