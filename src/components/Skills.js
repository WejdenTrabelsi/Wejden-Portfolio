import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Development",
      skills: ["Java", "JavaScript", "Python", "HTML", "CSS", "PHP", "C"],
      icon: "💻"
    },
    {
      title: "Data Science & BI",
      skills: ["Power BI", "Tableau","Talend", "EViews", "Excel", "SPSS","R", "Pandas", "NumPy","Apache Superset","Cube.js","Grafana"],
      icon: "📊"
    },
    {
      title: "Frameworks & Web Dev",
      skills: ["React", "Node.js", "Flask", "Angular", "Bootstrap", "WordPress", "Odoo"],
      icon: "⚡"
    },
    {
      title: "Databases & SQL",
      skills: ["Oracle SQL", "PL/SQL", "MongoDB", "PostgreSQL"],
      icon: "🗄️"
    },
    {
      title: "DevOps",
      skills: ["Docker", "Git", "Jenkins", "GitLab CI/CD", "Bash scripting"],
      icon: "🛠️"
    },
    {
      title: "Modeling & Process",
      skills: ["UML", "BPMN", "BonitaSoft", "RSA", "Scrum"],
      icon: "📋"
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;