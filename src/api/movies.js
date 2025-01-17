const OMDB_API_KEY = "105edf88";
const OMDB_API_URL = "https://www.omdbapi.com";

async function fetchMovies(movieName) {
  const params = new URLSearchParams({
    apikey: OMDB_API_KEY,
    s: movieName,
  });
  const response = await fetch(`${OMDB_API_URL}/?${params.toString()}`);
  const movies = await response.json();
  return movies.Search;
}

export default fetchMovies;
