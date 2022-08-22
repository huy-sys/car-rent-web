import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import { Footer, Navbar } from "./components";
import { Home, PopularCarPage } from "./pages";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={(<Home />)} />
        <Route path="/popularCar" element={(<PopularCarPage />)} />
      </Routes>
      <div className="footer">
        <Footer />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
