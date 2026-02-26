import React from "react";
import Banner from "./Banner";

function MovieCard() {
    return (
        <div className="bg-slate-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 cursor-pointer">

            {/* Image Placeholder */}
            <div className="h-64 bg-slate-800 flex items-center justify-center text-gray-500">
                Poster
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                    Random Movie Title
                </h3>

                <p className="text-sm text-gray-400 mt-2">
                    Some short description about this movie. Just placeholder text for now.
                </p>

                <div className="mt-3 text-xs text-blue-400 font-medium">
                    Action • Drama
                </div>
            </div>
        </div>
    )
}

function Movies() {
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

                    {/* Temporary static cards */}
                    {Array.from({ length: 10 }).map((_, index) => (
                        <MovieCard key={index} />
                    ))}

                </div>
            </div>
        </>

    )
}

export default Movies