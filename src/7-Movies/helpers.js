const filterByCatogory = (arr, filters) => {
  return filters.category !== "All"
    ? arr.filter(({ category }) => category === filters.category)
    : arr;
};

const filterByRating = (arr, filters) => {
  return filters.rating !== "All"
    ? arr.filter(({ rating }) => rating >= filters.rating)
    : arr;
};

export const getFilteredMovies = (movies, filters) => {
  const filterFunctions = [filterByCatogory, filterByRating];

  // reduce is used to apply all the selected filters to the movie list
  return filterFunctions.reduce((acc, f) => f(acc, filters), movies);
};
