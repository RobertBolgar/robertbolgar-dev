import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <p className="hero-eyebrow">BUILDING PUBLICLY WITH AI</p>
        <h1 className="hero-headline">
          <span>BUILDING REAL</span>
          <span>INTERNET PRODUCTS</span>
          <span className="hero-headline-accent">WITH AI</span>
        </h1>
        <p className="hero-subheadline">
          From idea to launch.
          <br />
          Follow along as I build real projects, share wins and failures, and document the entire journey publicly.
        </p>
        <p className="hero-tagline">Building in public. Sharing everything. Learning along the way.</p>
        <div className="hero-buttons">
          <a href="#videos" className="btn btn-primary">Watch the Journey</a>
          <a href="#projects" className="btn btn-secondary">Explore Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
