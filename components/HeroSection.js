import React from "react";

const HeroSection = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("/carpet_cleaning_banner.jpg")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Pro Carpet Cleaner </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary text-2xl">Call +1 8579205252</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
