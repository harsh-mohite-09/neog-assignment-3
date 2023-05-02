import React from "react";

const Filters = ({ filters, setFilters }) => {
  const radioFilters = ["All", "Action", "Crime", "Drama"];
  const ratingFilters = ["8.0", "8.5", "9.0", "9.5"];

  const handleCategoryFilter = (e) => {
    setFilters({ ...filters, category: e.target.value });
  };

  const handleRatingFilter = (e) => {
    setFilters({ ...filters, rating: e.target.value });
  };

  return (
    <>
      <div>
        <span>Category Filter: </span>
        {radioFilters.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <input
                type="radio"
                name="category"
                value={item}
                id={item}
                onChange={handleCategoryFilter}
                checked={filters.category === item}
              />
              <label htmlFor={item}>{item}</label>
            </React.Fragment>
          );
        })}
      </div>

      <div>
        <label htmlFor="rating">Rating Filter</label>{" "}
        <select name="rating" id="rating" onChange={handleRatingFilter}>
          <option value="All">All</option>
          {ratingFilters.map((item, i) => {
            return (
              <option value={item} key={i}>
                {item}+
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default Filters;
