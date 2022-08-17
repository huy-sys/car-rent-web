import React from "react";
import { Navbar } from "./components";
import "./App.css";
import { Footer, Header, PopularCars, RecomendationCar } from "./container";

const App = () => (
  <div className="App">
    <Navbar />
    <div className="app__content">
      <Header />
      <PopularCars />
      <RecomendationCar />
    </div>
    <Footer />
  </div>
);

export default App;
