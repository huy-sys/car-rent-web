import React from "react";
import "./SideBar.css";
const SideBar = () => {
  return (
    <div className="app__sidebar">
      {/* type */}
      <span className="category-heading">type</span>
      <ul className="category-list form-check">
        <li className="d-flex category-list-item">
          <input type="checkbox" className="form-check-input" />
          &nbsp;
          <span>Sport (16)</span>
        </li>
        <li className="d-flex category-list-item">
          <input type="checkbox" className="form-check-input" />
          &nbsp;
          <span>SUV (16)</span>
        </li>
        <li className="d-flex category-list-item">
          <input type="checkbox" className="form-check-input" />
          &nbsp;
          <span>MVP (16)</span>
        </li>
        <li className="d-flex category-list-item">
          <input type="checkbox" className="form-check-input" />
          &nbsp;
          <span>Sedan (16)</span>
        </li>
        <li className="d-flex category-list-item">
          <input type="checkbox" className="form-check-input" />
          &nbsp;
          <span>Coupe (16)</span>
        </li>
        <li className="d-flex category-list-item">
          <input type="checkbox" className="form-check-input" />
          &nbsp;
          <span>Hatchback (16)</span>
        </li>
      </ul>
      {/* capacity */}
      <span className="category-heading">capacity</span>
      <ul className="category-list form-check">
        <li className="d-flex category-list-item">
          <input type="checkbox" className="form-check-input" />
          &nbsp;
          <span>2 Person (16)</span>
        </li>
        <li className="d-flex category-list-item">
          <input type="checkbox" className="form-check-input" />
          &nbsp;
          <span>4 Person (16)</span>
        </li>
        <li className="d-flex category-list-item">
          <input type="checkbox" className="form-check-input" />
          &nbsp;
          <span>6 Person (16)</span>
        </li>
        <li className="d-flex category-list-item">
          <input type="checkbox" className="form-check-input" />
          &nbsp;
          <span>8 Person (16)</span>
        </li>
      </ul>

      {/* price */}
      <div className="d-flex flex-column category-price">
        <span className="category-heading">price</span>
        <input
          type="range"
          className="form-check price-range-input"
          id="price"
          min="0"
          max="100"
          value="90"
          step="10"
        />
        <span>Max. $100.00</span>
      </div>
    </div>
  );
};

export default SideBar;
