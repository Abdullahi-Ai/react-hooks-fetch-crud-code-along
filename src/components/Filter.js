import React from "react";

function Filter({ category, onCategoryChange }) {
  return (
    <div className="Filter">
      <label htmlFor="category-filter">Filter by category:</label>
      <select
        id="category-filter"
        name="filter"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">Select a category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
