import React, { useState } from "react";
import MovieCard from "../components/MovieCard";

function Favorites({ favMovies, setFavMovies }) {
  const [isRandomMovie, setRandomMovie] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const getRandomMovie = () => {
    setLoading(true);
    const randomNumber = Math.floor(Math.random() * favMovies.length);
    console.log(favMovies[randomNumber]);
    setRandomMovie(favMovies[randomNumber]);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <section className=" mt-4">
      <div className="flex justify-between mb-2 items-center">
        <h1 className="text-xl text-zinc-700select-none">Favorites:</h1>
        <button
          className="bg-emerald-500 rounded-xl p-2 text-white"
          onClick={getRandomMovie}
        >
          Random
        </button>
      </div>

      {isRandomMovie ? (
        isLoading ? (
          <div className="flex flex-col items-center justify-center m-20">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-zinc-200 border-t-emerald-500"></div>
            <p className="text-xl mt-4 text-zinc-700 animate-pulse">
              Finding your perfect movie...
            </p>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center m-20">
            <h1 className="text-3xl mb-4">Film for today!</h1>
            <MovieCard
              key={isRandomMovie.imdbID}
              setFavMovies={setFavMovies}
              favMovies={favMovies}
              {...isRandomMovie}
            />
          </div>
        )
      ) : favMovies && favMovies.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {favMovies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              setFavMovies={setFavMovies}
              favMovies={favMovies}
              {...movie}
            />
          ))}
        </div>
      ) : (
        <p>No favorites</p>
      )}
    </section>
  );
}

export default Favorites;
