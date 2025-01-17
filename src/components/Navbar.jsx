import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import fetchMovies from "../api/movies";

function Navbar({ setSearch, searchValue, setMovies }) {
  const getMovies = async (movie) => {
    try {
      const data = await fetchMovies(movie);
      setMovies(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  return (
    <nav className="flex justify-between p-4 bg-emerald-900 rounded-3xl bg-opacity-90 select-none gap-4">
      {/* Logo */}
      <div className="flex items-center">
        <img src="logo.png" className="h-3" />
      </div>

      {/* Search */}
      <div className="relative">
        <Search
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-emerald-900"
          size={20}
        />
        <input
          className="bg-emerald-100 rounded-3xl p-1 pl-9"
          placeholder={searchValue}
          onChange={(e) => {
            setSearch(e.target.value);
            setMovies(getMovies(e.target.value));
          }}
        />
      </div>

      {/* Links */}
      <div className="flex gap-4 text-white text-md items-center">
        <Link to={"/"}>Home</Link>
        <Link to={"/fav"}>Fav</Link>
      </div>
    </nav>
  );
}

export default Navbar;
