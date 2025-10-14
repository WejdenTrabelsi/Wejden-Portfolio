import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Development Intern",
      company: "Elite Council Consulting",
      period: "June – July 2025",
      description: [
        "Development of an attendance management platform with React, Flask and MongoDB",
        "AI integration for automatic absence report generation"
      ],
      tags: ["React", "Flask", "MongoDB", "AI"],
      type: "internship"
    },
    {
      title: "Data Analysis Intern",
      company: "CodeAlpha",
      period: "April – May 2025",
      description: [
        "Web scraping of books from Goodreads with BeautifulSoup",
        "Power BI sales & finance dashboard",
        "Amazon sentiment analysis with NLP & ML"
      ],
      tags: ["Python", "BeautifulSoup", "Power BI", "NLP", "ML"],
      type: "internship"
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Professional Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <span className="period">{exp.period}</span>
                <ul>
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="tags">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;