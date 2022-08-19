import React from "react";
import { ProductCard } from "../../../components";
import { data } from "../../../constants";
import "./PopularCars.css";

const PopularCars = () => {
  return (
    <div className="app__popular">
      <div className="app__popular-heading">
        <span>Popular Car</span>
        <button>
          <a href="/PopularCarPage">View all</a>
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
