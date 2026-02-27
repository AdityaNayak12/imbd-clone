import React from "react";

function Banner() {
  return (
    <section className="relative w-full h-[75vh] flex items-center justify-center overflow-hidden">

      {/* Image */}
      <img
        src="https://w0.peakpx.com/wallpaper/731/134/HD-wallpaper-movie-shutter-island.jpg"
        alt="Featured Movie"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Optional Dark Overlay (Recommended) */}
      <div className="absolute inset-0 bg-black/50" />

    </section>
  );
}

export default Banner;
