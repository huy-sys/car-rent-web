import React from "react";
import { ProductCard } from "../../../components";
import "./RecomendationCar.css";

const RecomendationCar = () => {
  return (
    <div className="app__recomendation">
      <div className="app__recomendation-heading">
        <span>Recomendation Car</span>
        <span className="numberCars">120 car</span>
      </div>
      <div className="app__recomendation-listItem">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="app__recomendation-footer">
        <button>Show more car</button>
      </div>
    </div>
  );
};

export default RecomendationCar;
