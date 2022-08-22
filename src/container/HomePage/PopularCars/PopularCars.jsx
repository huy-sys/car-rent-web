import React from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../../../components";
import { data } from "../../../constants";
import "./PopularCars.css";

const PopularCars = () => {
  return (
    <div className="app__popular">
      <div className="app__popular-heading">
        <span>Popular Car</span>
        <button>
          <Link to="/popularCar"> View all </Link>
        </button>
      </div>
      <div className="row ">
        {data.popularCars.map(popularCar => (
          <div className="col-lg-3">
            <ProductCard popularCar={popularCar} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCars;
