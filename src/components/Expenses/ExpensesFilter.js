import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  function yearSelectHandler(event) {
    props.selectedYearForFilter(event.target.value);
  }

  const getDropList = () => {
    // const year = new Date().getFullYear();
    const startingYear = 2000;
    return Array.from(new Array(30), (v, i) => (
      <option key={i} value={startingYear + i}>
        <span>{startingYear + i}</span>
      </option>
    ));
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearSelectHandler}>
          {/* <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option> */}
          
          {getDropList()}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
