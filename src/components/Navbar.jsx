import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        
        <div className="flex items-center gap-3 cursor-pointer group">
        
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300">
            <span className="text-white text-lg">🎬</span>
          </div>

          <h1 className="text-xl font-semibold tracking-tight text-white">
            Cine<span className="text-blue-500">Match</span>
          </h1>
        </div>

        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="relative text-sm font-medium text-slate-300 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Movies
          </Link>

          <Link
            to="/watchlist"
            className="relative text-sm font-medium text-slate-300 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Watchlist
          </Link>

          <Link
            to="/mood"
            className="relative text-sm font-medium text-slate-300 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Mood Selector
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
