import React, { useState } from 'react';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">ROBERT BOLGAR</div>
        
        {/* Desktop Navigation */}
        <div className="nav-links nav-links-desktop">
          <a href="#videos">Videos</a>
          <a href="#projects">Projects</a>
          <a href="#devlog">Devlog</a>
          <a href="#about">About</a>
        </div>
        
        {/* Desktop CTA */}
        <a href="#videos" className="nav-cta nav-cta-desktop">Follow the Build</a>
        
        {/* Mobile Hamburger Button */}
        <button 
          className="nav-hamburger" 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="nav-hamburger-line"></span>
          <span className="nav-hamburger-line"></span>
          <span className="nav-hamburger-line"></span>
        </button>
      </div>
      
      {/* Mobile Dropdown Menu */}
      <div className={`nav-mobile-menu ${isMobileMenuOpen ? 'nav-mobile-menu-open' : ''}`}>
        <a href="#videos" className="nav-mobile-link" onClick={closeMobileMenu}>Videos</a>
        <a href="#projects" className="nav-mobile-link" onClick={closeMobileMenu}>Projects</a>
        <a href="#devlog" className="nav-mobile-link" onClick={closeMobileMenu}>Devlog</a>
        <a href="#about" className="nav-mobile-link" onClick={closeMobileMenu}>About</a>
        <a href="#videos" className="nav-mobile-cta" onClick={closeMobileMenu}>Follow the Build</a>
      </div>
    </nav>
  );
};

export default Nav;
