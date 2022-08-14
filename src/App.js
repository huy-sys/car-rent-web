import React from "react";
import { Navbar } from "./components";
import "./App.css";
import { Footer, Header, PopularCar, RecomendationCar } from "./container";

const App = () => (
  <div className="App">
    <Navbar />
    <div className="app__content">
      <Header />
      <PopularCar />
      <RecomendationCar />
    </div>
    <Footer />
  </div>
);

export default App;
