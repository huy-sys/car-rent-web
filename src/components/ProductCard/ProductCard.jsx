import React from "react";
import "./ProductCard.css";
import { images } from "../../constants";
import { icons } from "../../constants";

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-card-heading">
        <span>Koenigsegg</span>
        <button className="btn-like">
          <img src={icons.heartLike} alt="heartLike" />
        </button>
      </div>
      <span className="product-card-type">Sport</span>
      <div className="product-img">
        <img src={images.car1} alt="car1" />
        <div className="coating"></div>
      </div>
      <div className="specifications">
        <div className="specifications-item">
          <img src={icons.gasStation} alt="" />
          <span> 90L </span>
        </div>
        <div className="specifications-item">
          <img src={icons.manual} alt="" />
          <span> Manual </span>
        </div>
        <div className="specifications-item">
          <img src={icons.profile2User} alt="" />
          <span> 2 People </span>
        </div>
      </div>
      <div className="price-btn-rent">
        <div className="price-per-day">
          <span className="price"> $99.00</span> /{" "}
          <span className="timeType">day</span>
        </div>
        <button className="btn-rent">
            Rent Now
          </button>
      </div>
    </div>
  );
};

export default ProductCard;
