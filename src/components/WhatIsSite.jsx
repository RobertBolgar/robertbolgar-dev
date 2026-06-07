import React from 'react';

const WhatIsSite = () => {
  return (
    <section id="what-is-site" className="what-is-site">
      <div className="section-container">
        <p className="section-eyebrow">ABOUT THIS SITE</p>
        <h2 className="section-heading">What Is RobertBolgar.dev?</h2>
        <p className="section-copy">
          RobertBolgar.dev is the public home base for Robert Bolgar's product-building journey.
        </p>
        <div className="what-is-content">
          <p className="what-is-text">
            The site documents videos, projects, experiments, launches, mistakes, lessons, and progress while building real internet products with modern AI tools.
          </p>
          <p className="what-is-text">
            Unlike coding tutorial channels or AI news sites, the focus is on documenting the complete process of creating and shipping products publicly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSite;
