import React from "react";

function Filter({ handleFilter }) {
  return (
    <div>
      <h4> Filter By Rating </h4>
      <select placeholder="Filter by average rating" onChange={handleFilter}>
        <option>No Filter</option>
        {[...Array(9)].map((_, i) => (
          <option key={i + 1} value={i + 1}>{i + 1}</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
