import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import { Footer, Navbar } from "./components";
import { Header, PopularCars, RecomendationCar } from "./container";
import { Home } from "./pages";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={(<Home />)} />
      </Routes>
      <div className="footer">
        <Footer />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
