export default function Projects({ projects }) {
  return (
    <section id="projects" className="terminal-section">
      <h3 className="section-title">$ cat projects.json</h3>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="code-card">
            <div className="card-content">
              <h4 className="project-title">{project.title}</h4>
              <p className="project-tech">{project.tech}</p>
              <div className="project-description">
                <p>{project.description}</p>
              </div>
            </div>
            <div className="card-footer">
              <a href={project.github} 
              target="_blank"
              rel="noopener noreferrer"
              className="github-link">
                &gt; View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}