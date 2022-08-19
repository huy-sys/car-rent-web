import React from "react";
import { Header, PopularCars, RecomendationCar } from "../container";

const Home = () => {
  return (
    <div className="app__content">
      <Header />
      <PopularCars />
      <RecomendationCar />
    </div>
  );
};

export default Home;
