import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import { useState, useEffect } from "react";

function App() {
  const [search, setSearch] = useState(null);
  const [movies, setMovies] = useState(null);
  const [favMovies, setFavMovies] = useState(() => {
    // Initialize favorites from localStorage
    const saved = localStorage.getItem("favoriteMovies");
    return saved ? JSON.parse(saved) : [];
  });

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favMovies));
  }, [favMovies]);

  return (
    <>
      <ParticlesBackground />
      <main className="relative z-10 h-full p-4 mx-auto lg:w-1/2 rounded-b-xl shadow-2xl">
        <Router>
          <Navbar
            setSearch={setSearch}
            searchValue={search}
            setMovies={setMovies}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  movies={movies}
                  setMovies={setMovies}
                  favMovies={favMovies}
                  setFavMovies={setFavMovies}
                  searchValue={search}
                />
              }
            />
            <Route
              path="/fav"
              element={
                <Favorites favMovies={favMovies} setFavMovies={setFavMovies} />
              }
            />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
