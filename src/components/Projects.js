import React, { useState } from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Rent Control Analysis",
      description: "Analysis of rent control via API, data cleaning and Power BI visualization",
      tech: ["Python", "Power BI", "API"],
      github: "https://github.com/WejdenTrabelsi/Encadrement-des-Loyers.git",
      category: "data"
    },
    {
      title: "Attendance Management Platform",
      description: "Full-stack development of attendance management platform with React, Flask, MongoDB and AI integration for automatic absence reports",
      tech: ["React", "Flask", "MongoDB", "AI"],
      demo: "https://drive.google.com/file/d/1sozw3rxDoj6aIA4Wm6vfDy4Aqi2C9Fy5/view?usp=drive_link",
      category: "web"
    },
    {
      title: "SmartJobMatcher",
      description: "Full-stack development of an AI-powered job and skill matching platform connecting candidates and recruiters through intelligent recommendations.",
      tech: ["React", "Node.js", "MongoDB", "NLP"],
      github: "https://github.com/WejdenTrabelsi/SmartJobMatcher.git",
      category: "web"
    },{
      title: "AI Research Paper Analyzer",
      description: "Developed a Python tool to analyze research papers using NLP for sentiment analysis, keyword extraction, summarization and AI-generated insights.",
      tech: ["Python"],
      github: "https://github.com/WejdenTrabelsi/AI-Research-Paper-Analyzer.git",
      category: "ai"
    },
    {
      title: "E-Commerce BI Pipeline Forecasting System",
      description: "Pipeline BI complet : ETL Python, DataWarehouse PostgreSQL avec cubes OLAP (Cube.js), prévision des ventes(scikit-learn) et visualisation KPIs sous Superset.",
      tech: ["Python","PostgreSQL","Cube.js","Superset"],
      github: "https://github.com/WejdenTrabelsi/E-Commerce-BI-Pipeline-Forecasting-System.git",
      category: "data"
    },
    {
      title: "Quiz Application",
      description: "Interactive quiz application with navigation, automatic score calculation and responsive interface",
      tech: ["Angular", "TypeScript"],
      github: "https://github.com/WejdenTrabelsi/QuizApp.git",
      category: "web"
    },
    {
      title: "Camping Management Website",
      description: "Camping management platform with reservations, multiple roles and dynamic dashboards",
      tech: ["HTML", "CSS", "JS", "PHP"],
      github: "https://github.com/WejdenTrabelsi/Camping-Management-Project.git",
      category: "web"
    },
    {
      title: "E-Commerce Data Integration & Analytics Pipeline",
      description: "Automation of a robust data integration process with Talend, transforming raw transactional data into reliable datasets ready for business intelligence analysis",
      tech: ["Talend", "PostgreSQL", "ETL", "Data Pipeline"],
      github: "https://github.com/WejdenTrabelsi/E-Commerce-Data-Integration-Analytics-Pipeline.git",
      category: "data"
    },
    {
      title: "Hotel Reviews Analysis",
      description: "Extracting insights and predicting hotel ratings from customer reviews using NLP",
      tech: ["Python", "NLP", "ML"],
      github: "https://github.com/WejdenTrabelsi/Hotel-Review-Score-Prediction-.git",
      category: "data"
    },
     {
      title: "Pong Game: AI vs Player",
      description: "Training an AI with NEAT algorithm to compete against human player in Pong",
      tech: ["Python", "AI", "NEAT"],
      github: "https://github.com/WejdenTrabelsi/Pong-AI-Neat.git",
      category: "ai"
    },
    {
      title: "E-learning Website",
      description: "E-learning site with student/teacher spaces, course tracking and content management",
      tech: ["WordPress"],
      demo: "https://drive.google.com/file/d/1tdcXJpbp2LPUVAsv91eCIGqXiMHmOtSR/view?usp=sharing",
      category: "web"
    },
    {
      title: "Inventory Analysis Dashboard",
      description: "Development of an interactive Power BI dashboard to analyze monthly inventory data using Power Query and DAX for cleaning, modeling and performance analysis",
      tech: ["Power BI", "Power Query", "DAX"],
      github: "https://github.com/WejdenTrabelsi/Inventory-Analysis-Dashboard-with-PowerBI.git",
      category: "data"
    },
    {
      title: "Citi Bike Analytics",
      description: "Development of an interactive Tableau dashboard analyzing Citi Bike usage trends, user demographics and station performance",
      tech: ["Tableau", "Data Analysis", "Visualization"],
      github: "https://github.com/WejdenTrabelsi/Citi-Bike-Analytics-Tableau.git",
      category: "data"
    },
    
    
    {
      title: "Goodreads Web Scraping",
      description: "Web scraping of books from Goodreads with BeautifulSoup for data analysis and insights extraction",
      tech: ["Python", "BeautifulSoup", "Web Scraping"],
      github: "https://github.com/WejdenTrabelsi/codealpha_WebScrapping_GoodReads.git",
      category: "data"
    },
    {
      title: "Sales & Finance Dashboard",
      description: "Comprehensive Power BI dashboard for sales and financial data analysis and visualization",
      tech: ["Power BI", "Data Visualization", "Business Intelligence"],
      github: "https://github.com/WejdenTrabelsi/codealpha_SalesReportPowerBI.git",
      category: "data"
    },
    {
      title: "Amazon Sentiment Analysis",
      description: "Sentiment analysis of Amazon reviews using Natural Language Processing and Machine Learning techniques",
      tech: ["Python", "NLP", "Machine Learning", "Sentiment Analysis"],
      github: "https://github.com/WejdenTrabelsi/codealpha_AmazonReviewsNLP.git",
      category: "ai"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const projectsPerPage = 6;
  const totalSlides = Math.ceil(projects.length / projectsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleProjects = () => {
    const startIndex = currentSlide * projectsPerPage;
    return projects.slice(startIndex, startIndex + projectsPerPage);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        
        <div className="projects-carousel">
          <button 
            className="carousel-arrow carousel-arrow-prev"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            ‹
          </button>
          
          <div className="projects-grid">
            {getVisibleProjects().map((project, index) => (
              <div key={index} className={`project-card ${project.category}`}>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.title === "E-learning Website" ? (
                      // Only Live Demo for E-learning Website
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    ) : project.title === "Attendance Management Platform" ? (
                      // Only View Project Document for Attendance Management Platform
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        View Project Document
                      </a>
                    ) : (
                      // Default: View on GitHub and Live Demo (if available)
                      <>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          View on GitHub
                        </a>
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            Live Demo
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className="carousel-arrow carousel-arrow-next"
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
          >
            ›
          </button>
        </div>

        <div className="carousel-indicators">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        <div className="project-counter">
          <span>
            Showing {currentSlide * projectsPerPage + 1}-{Math.min((currentSlide + 1) * projectsPerPage, projects.length)} of {projects.length} projects
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;