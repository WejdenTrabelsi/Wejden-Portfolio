import React, { useState } from 'react';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "CP-FSD Preparation Course",
      issuer: "Elite Council Consulting",
      description: "MVC Oriented DevOps",
      type: "professional",
      imageName: "1.png"
    },
    {
      id: 2,
      title: "DataCamp Certifications",
      issuer: "DataCamp",
      description: "Various data science and analytics courses (Python, Git ...)",
      type: "online",
    },
    {
      id: 3,
      title: "KodeKloud Certifications",
      issuer: "KodeKloud",
      description: "DevOps and containerization courses",
      type: "online",
      imageName: "3.png"
    },
    {
      id: 4,
      title: "Badges & Trophies",
      issuer: "LeetCode & MicrosoftLearn",
      description: "SQL50, 50 Days Badge 2025, Introduction to Pandas, Introduction to Microsoft Azure Data core data concepts",
      type: "online",
    }
  ];

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <h2>Certificates & Achievements</h2>
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className={`certificate-card ${cert.imageName ? 'clickable' : ''}`}
              onClick={() => cert.imageName && setSelectedCertificate(cert)} // Only clickable if imageName exists
            >
              <div className="certificate-icon">
                {cert.type === 'professional' ? '🏆' : '📜'}
              </div>
              <h3>{cert.title}</h3>
              <p className="issuer">{cert.issuer}</p>
              <p className="description">{cert.description}</p>
              {cert.imageName && (
                <div className="view-certificate">
                  <span>Click to view</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Certificate Modal - Only shown for certificates with imageName */}
        {selectedCertificate && (
          <div className="modal-overlay" onClick={() => setSelectedCertificate(null)}>
            <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="close-modal"
                onClick={() => setSelectedCertificate(null)}
              >
                ×
              </button>
              <div className="certificate-header">
                <h3>{selectedCertificate.title}</h3>
                <p><strong>Issuer:</strong> {selectedCertificate.issuer}</p>
                <p><strong>Description:</strong> {selectedCertificate.description}</p>
              </div>
              <div className="certificate-image-container">
                <img
                  src={require(`../assets/certificates/${selectedCertificate.imageName}`)}
                  alt={selectedCertificate.title}
                  className="certificate-full-image"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;