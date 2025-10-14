import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a 3rd year Business Intelligence student passionate about web development, 
              artificial intelligence, and data exploitation. Currently seeking a 3-month 
              end-of-studies internship (PFE) to apply my skills in real-world projects.
            </p>
            
            <div className="education">
              <h3>Education</h3>
              <div className="education-item">
                <h4>ISGS (Institut Supérieur de Gestion de Sousse)</h4>
                <p>Bachelor in Business Intelligence • 2023 - Present</p>
              </div>
              <div className="education-item">
                <h4>Lycée Medjez El Beb</h4>
                <p>Baccalaureate in Mathematics • 2019 - 2023</p>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">2</span>
              <span className="stat-label">Internships</span>
            </div>
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;