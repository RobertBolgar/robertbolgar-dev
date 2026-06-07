import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <p className="hero-eyebrow">Building Publicly With AI</p>
        <h1 className="hero-headline">
          Robert Bolgar is building real internet products with AI tools — and documenting the entire journey.
        </h1>
        <p className="hero-subheadline">
          No guru act. No fake overnight success story. Just experiments, products, mistakes, pivots, launches, and lessons shared in public.
        </p>
        <div className="hero-buttons">
          <a href="#videos" className="btn btn-primary">Watch the Journey</a>
          <a href="#projects" className="btn btn-secondary">See What I'm Building</a>
        </div>
        <p className="hero-status">Currently building: robertbolgar.dev</p>
      </div>
    </section>
  );
};

export default Hero;
