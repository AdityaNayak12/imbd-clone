import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import axios from "axios"

function MovieCard({ movieTitle, movieDescription, imageUrl, genreIds, genreMap }) { 
    const genres = genreIds
        ?.slice(0, 2)
        .map(id => genreMap[id])
        .filter(Boolean)
        .join(" • ");

    return (
        <div className="bg-slate-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 cursor-pointer">

            <div className="w-full aspect-[2/3] overflow-hidden">
                <img
                    src={`https://image.tmdb.org/t/p/w500${imageUrl}`}
                    alt={movieTitle}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                    {movieTitle}
                </h3>

                <p className="text-sm text-gray-400 mt-2">
                    {movieDescription}
                </p>

                <div className="mt-3 text-xs text-blue-400 font-medium">
                    {genres}
                </div>
            </div>
        </div>
    )
}

function Movies() {

    const [movies, setMovies] = useState([]);
    const [genreMap, setGenreMap] = useState({});

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {

        async function getMovie() {
            let res = await axios.get(
                `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=${page}`);

            setMovies(res.data.results);
            setTotalPages(res.data.total_pages);

            window.scrollTo({ top: 0, behavior: "smooth" });
        }

        async function getGenres() {
            let res = await axios.get(
                `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
            );

            const map = {};
            res.data.genres.forEach((g) => {
                map[g.id] = g.name;
            });

            setGenreMap(map);
        }

        getMovie();
        getGenres();

    }, [page])

    return (
        <>
            <Banner />

            <div className="bg-slate-950 min-h-screen px-8 py-12">
                <h2 className="text-2xl font-semibold text-white mb-8">
                    Popular Movies
                </h2>

                {/* Grid Layout */}
                <div className="grid gap-8 
                        grid-cols-1 
                        sm:grid-cols-2 
                        md:grid-cols-3 
                        lg:grid-cols-4 
                        xl:grid-cols-5">

                    {movies.map((movie) => {
                        return (
                            <MovieCard
                                key={movie.id} 
                                movieTitle={movie.title}
                                movieDescription={movie.overview}
                                imageUrl={movie.poster_path}
                                genreIds={movie.genre_ids} 
                                genreMap={genreMap}
                            />
                        )
                    })}

                </div>
                <div className="flex justify-center items-center gap-6 mt-12">
                    <button
                        onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                        disabled={page === 1}
                        className="px-4 py-2 bg-slate-800 text-white rounded-lg disabled:opacity-40 hover:bg-slate-700 transition"
                    >
                        Previous
                    </button>

                    <span className="text-white font-medium">
                        Page {page}
                    </span>
                    <button
                        onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={page === totalPages}
                        className="px-4 py-2 bg-slate-800 text-white rounded-lg disabled:opacity-40 hover:bg-slate-700 transition"
                    >
                        Next
                    </button>

                </div>
            </div>
        </>
    )
}

export default Movies