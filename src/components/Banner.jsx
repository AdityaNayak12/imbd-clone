import React, { useEffect, useState } from "react";
import axios from "axios";

function Banner() {
  const [movies, setMovies] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    async function fetchMovies() {
      const res = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
      );

      setMovies(res.data.results.slice(0, 5));
    }

    fetchMovies();
  }, []);

  useEffect(() => {
    if (movies.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % movies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [movies]);

  return (
    <section className="relative w-full h-[75vh] overflow-hidden text-white">

      {movies.map((movie, index) => (
        <img
          key={movie.id}
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {movies[current] && (
        <div className="relative z-10 max-w-2xl px-8 pt-48">
          <h1 className="text-5xl font-bold mb-4">
            {movies[current].title}
          </h1>

          <p className="text-gray-300 text-lg line-clamp-3">
            {movies[current].overview}
          </p>
        </div>
      )}
    </section>
  );
}

export default Banner;