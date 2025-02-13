import { useState } from 'react';

export default function Experience({ experience }) {
  return (
    <section className="terminal-section" id="experience">
      <h3 className="section-title">My Experience</h3>
      <div className="experience-grid">
        {experience.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({ exp }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`experience-card ${isExpanded ? 'expanded' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="experience-header">
        <h4 className="experience-company">
          {exp.company}
        </h4>
        <p className="experience-role">
          {exp.role}
        </p>
      </div>
      
      {isExpanded && (
        <div className="experience-details">
          <p className="experience-duration">
            {exp.duration}
          </p>
          <p className="experience-description">
            {exp.description}
          </p>
        </div>
      )}
      
      <div className="expand-icon">
        {isExpanded ? '▲' : '▼'}
      </div>
    </div>
  );
}