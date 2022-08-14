import React from "react";
import "./FilterCard.css"

const FilterCard = () => {
  return (
    <div className="filter-card">
      <div className="filter-item">
        <span>Locations</span>
        <select class="form-select" aria-label="Default select example">
          <option selected>Select your city</option>
          <option value="1">Hanoi</option>
          <option value="2">Danang</option>
          <option value="3">TP.HoChiMinh</option>
        </select>
      </div>
      <div className="dash" />
      <div className="filter-item">
        <span>Date</span>
        <input type="date" id="date" name="date" placeholder="Select your date"/>
      </div>
      <div className="dash" />
      <div className="filter-item">
        <span>Time</span>
        <input type="time" id="time" name="time" placeholder="Select your time"/>
      </div>
    </div>
  );
};

export default FilterCard;
