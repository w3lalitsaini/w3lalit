import React from "react";

const projectLogos = [
  { src: "/pro-img/Movie.png", alt: "Movie App Project" },
  { src: "/pro-img/1.png", alt: "E-commerce Project" },
  { src: "/pro-img/2.png", alt: "Blog Website Project" },
  { src: "/pro-img/3.png", alt: "Business Website Project" },
  { src: "/pro-img/4.png", alt: "Restaurant Project" },
  { src: "/pro-img/business.png", alt: "Business Portfolio Project" },
  { src: "/pro-img/Furnture.png", alt: "Furniture Store Project" },
  { src: "/pro-img/portfolio.png", alt: "Portfolio Website Project" },
  { src: "/pro-img/Toursim.png", alt: "Tourism Website Project" },
  { src: "/pro-img/Studio.png", alt: "Studio Website Project" },
];

const InfinityScrollBar2 = () => {
  return (
    <div className="overflow-hidden relative w-full max-w-7xl mx-auto px-4 mt-10">
      {/* Gradient overlays */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-32 sm:w-40 bg-gradient-to-r from-dark via-dark/90 to-transparent z-20"></div>
      <div className="pointer-events-none absolute top-0 right-0 h-full w-32 sm:w-40 bg-gradient-to-l from-dark via-dark/90 to-transparent z-20"></div>

      {/* Scrolling content */}
      <div className="flex animate-scroll-reverse whitespace-nowrap">
        {projectLogos.concat(projectLogos).map((logo, i) => (
          <div
            key={i}
            className="inline-block w-64 sm:w-72 md:w-80 lg:w-96 mx-4 md:mx-6 transform hover:scale-105 transition duration-300"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-44 sm:h-52 md:h-60 lg:h-64 object-cover rounded-lg border border-grayMid bg-grayMid/5 shadow-md hover:shadow-lg"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfinityScrollBar2;
