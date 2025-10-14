import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span>WT</span>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('skills')}>Skills</button>
          <button onClick={() => scrollToSection('experience')}>Experience</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('certificates')}>Certificates</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </div>
    </header>
  );
};

export default Header;