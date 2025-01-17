import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function Home({ movies, setMovies, favMovies, setFavMovies, searchValue }) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {}, []);

  if (!movies && !searchValue) {
    return;
  }

  return (
    <section className="h-max mt-4">
      {movies && movies.length > 0 ? (
        <>
          <h1 className="text-xl text-zinc-700 mb-2 select-none">
            Search results:
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                setFavMovies={setFavMovies}
                favMovies={favMovies}
                {...movie}
              />
            ))}
          </div>
        </>
      ) : (
        <p className="text-zinc-700">Not found</p>
      )}
    </section>
  );
}

export default Home;
