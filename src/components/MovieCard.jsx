import React from "react";
import { Heart } from "lucide-react";

const MovieCard = (props) => {
  const addToFav = () => {
    props.setFavMovies((prevFavMovies) => {
      // Check if movie is already in favorites
      const isAlreadyFavorite = prevFavMovies.some(
        (movie) => movie.imdbID === props.imdbID
      );

      if (isAlreadyFavorite) {
        // Remove from favorites if already exists
        return prevFavMovies.filter((movie) => movie.imdbID !== props.imdbID);
      } else {
        // Add to favorites if not exists
        return [
          ...prevFavMovies,
          {
            Title: props.Title,
            Poster: props.Poster,
            Year: props.Year,
            imdbID: props.imdbID,
          },
        ];
      }
    });
  };

  const isFavorite =
    Array.isArray(props.favMovies) &&
    props.favMovies.some((movie) => movie.imdbID === props.imdbID);

  return (
    <>
      <div className="flex flex-col rounded-xl shadow-xl p-2 bg-emerald-50">
        <img src={props.Poster} className="rounded-xl" />
        <div className="flex justify-between">
          <h3 className="text-md mt-2">{props.Title}</h3>

          <button onClick={addToFav} className="mt-2 transition-transform">
            <Heart
              className={
                isFavorite ? "text-red-600 fill-red-600" : "text-zinc-600"
              }
              size={20}
            />
          </button>
        </div>
        <p className="text-xs text-zinc-600">{props.Year}</p>
      </div>
    </>
  );
};

export default MovieCard;
