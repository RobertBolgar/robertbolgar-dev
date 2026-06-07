import React from 'react';

const Devlog = () => {
  const entries = [
    'Started rebuilding robertbolgar.dev as the home base for the channel.',
    'Defined the site structure around videos, projects, and the build journey.',
    'Keeping V1 simple so the focus stays on shipping and storytelling.'
  ];

  return (
    <section id="devlog" className="devlog">
      <div className="section-container">
        <p className="section-eyebrow">DEVLOG</p>
        <h2 className="section-heading">Devlog</h2>
        <p className="section-copy">
          Short notes from the build: what changed, what broke, what I learned, and what comes next.
        </p>
        <div className="devlog-list">
          {entries.map((entry, index) => (
            <div key={index} className="devlog-entry">
              <span className="devlog-bullet">→</span>
              <p className="devlog-text">{entry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Devlog;
