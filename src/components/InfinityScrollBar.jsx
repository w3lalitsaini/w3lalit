import React from "react";

const logos = [
  "/logos/html-icon.svg",
  "/logos/css-icon.svg",
  "/logos/javascript.svg",
  "/logos/tailwind-css-icon.svg",
  "/logos/react-js-icon.svg",
  "/logos/node-js-icon.svg",
  "/logos/express-js-icon.svg",
  "/logos/mongodb-icon.svg",
  "/logos/nextjs-icon.svg",
  "/logos/github-white-icon.svg",
];

const InfinityScrollBar = () => {
  return (
    <div className="overflow-hidden relative w-full max-w-5xl mx-auto px-4 mt-6">
      {/* Blur Gradients */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-56 bg-gradient-to-r from-dark via-dark/90 to-transparent z-20"></div>
      <div className="pointer-events-none absolute top-0 right-0 h-full w-56 bg-gradient-to-l from-dark via-dark/90 to-transparent z-20"></div>

      {/* Logos */}
      <div className="flex animate-scroll whitespace-nowrap relative z-10">
        {logos.concat(logos).map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="logo"
            className="h-12 mx-12 inline-block duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default InfinityScrollBar;
