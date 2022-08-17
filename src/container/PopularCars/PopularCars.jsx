import React from "react";
import { ProductCard } from "../../components";
import { data } from "../../constants";
import "./PopularCars.css";

const PopularCars = () => {
  return (
    <div className="app__popular">
      <div className="app__popular-heading">
        <span>Popular Car</span>
        <button>
          <a href="/">View all</a>
        </button>
      </div>
      <div className="row ">
        {data.popularCars.map((popular) => (
          <div className="col-lg-3">
            <ProductCard popular={popular} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCars;
