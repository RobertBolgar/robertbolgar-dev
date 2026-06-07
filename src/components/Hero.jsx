import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <p className="hero-eyebrow">Building Publicly With AI</p>
        <h1 className="hero-headline">
          <span>Ideas.</span>
          <span>Products.</span>
          <span className="hero-headline-accent">Journey.</span>
        </h1>
        <p className="hero-subheadline">
          Building modern internet products using AI-assisted workflows.
          <br />
          Exploring ideas, improving systems, and sharing the journey publicly.
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
