import React, { Component } from 'react'

function Banner() {
    return (
        <section className="relative w-full h-[85vh] flex items-center justify-center text-white overflow-hidden">


            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

            {/* Content */}
            <div className="relative z-10 max-w-4xl px-6 text-center">

                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Discover Movies That Match Your{" "}
                    <span className="text-blue-500">Mood</span>
                </h1>

                <p className="mt-6 text-lg md:text-xl text-gray-300">
                    Tell us how you feel, and we’ll recommend the perfect movie or
                    series for your vibe.
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium transition duration-300">
                        Explore Movies
                    </button>

                    <button className="px-6 py-3 border border-gray-400 hover:border-white rounded-lg text-lg font-medium transition duration-300">
                        Try Mood Selector
                    </button>
                </div>

            </div>
        </section>
    )

}

export default Banner