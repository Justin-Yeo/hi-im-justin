export default function Experience({ experience }) {
    return (
      <section className="terminal-section">
        <h3 className="section-title">$ Experience</h3>
        <div className="experience-grid">
          {experience.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <h4 className="experience-company">
                  &gt; {exp.company}
                </h4>
                <p className="experience-duration">
                  {exp.duration}
                </p>
              </div>
              <p className="experience-role">
                {exp.role}
              </p>
              <p className="experience-description">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }