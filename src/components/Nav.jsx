import React from 'react';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">ROBERT BOLGAR</div>
        <div className="nav-links">
          <a href="#videos">Videos</a>
          <a href="#projects">Projects</a>
          <a href="#devlog">Devlog</a>
          <a href="#about">About</a>
        </div>
        <a href="#videos" className="nav-cta">Follow the Build</a>
      </div>
    </nav>
  );
};

export default Nav;
