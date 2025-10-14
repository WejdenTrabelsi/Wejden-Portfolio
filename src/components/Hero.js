import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons'; // Added faCode

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Wejden Trabelsi</h1>
          <h2>Business Intelligence Student & Full-Stack Developer</h2>
          <p>Transforming data into strategic insights • Building innovative web solutions</p>
          
          <div className="hero-buttons">
            <button 
              className="btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <button 
              className="btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>

          <div className="social-links">
            <a href="mailto:trabelsiwejden911@gmail.com" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://linkedin.com/in/trabelsi-wejden" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/WejdenTrabelsi" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://leetcode.com/u/wejdentrabelsi/" aria-label="LeetCode">
              <FontAwesomeIcon icon={faCode} />
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          {/* Profile Photo Container */}
          <div className="profile-photo-container">
            <div className="profile-photo">
              <img src={require('../assets/profile.png')} alt="Wejden Trabelsi" />
            </div>
            {/* Floating Cards in a circle around the profile photo */}
            <div className="floating-card data-card">
              <span>📊</span>
              <p>Data</p>
            </div>
            <div className="floating-card web-card">
              <span>💻</span>
              <p>Web Dev</p>
            </div>
            <div className="floating-card ai-card">
              <span>🤖</span>
              <p>AI</p>
            </div>
            <div className="floating-card bi-card">
              <span>📈</span>
              <p>BI</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="arrow"></div>
      </div>
    </section>
  );
};

export default Hero;