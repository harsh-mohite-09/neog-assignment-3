// Given a list of movies as an array of objects with properties id, title, rating, year and category. Create a React component to list down all movies with rating and year. Create radio buttons to filter by category. Create a dropdown to filter by rating. Fake fetch has been provided.

import { useState } from "react";
import { useData } from "./useData";
import Filters from "./Filters";
import { getFilteredMovies } from "./helpers";

const Movies = () => {
  // Data is fetched from a custom hook useData()
  const { data: movies, error } = useData();

  // Filters state to maintain current active filters.
  // Initial filter values are set
  const [filters, setFilters] = useState({
    category: "All",
    rating: "All"
  });

  // Filters are applied to the movie list with this helper function
  const filteredMovies = getFilteredMovies(movies, filters);

  return !movies && !error ? (
    <h2>Loading Movies...</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <section>
      <div>
        <Filters setFilters={setFilters} filters={filters} />
        <h1>Movies List</h1>
        <ul style={{ listStyle: "none" }}>
          {filteredMovies.map(({ id, title, rating, year }) => {
            return (
              <li key={id}>
                <h2>{title}</h2>
                <p>
                  Rating: {rating} - Year: {year}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Movies;
