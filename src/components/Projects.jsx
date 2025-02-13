export default function Projects({ projects }) {
    return (
      <section className="terminal-section">
        <h3 className="section-title">$ Projects</h3>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="code-card">
              <pre className="project-pre">
                <code>
                  {`{\n  title: "${project.title}",\n  tech: "${project.tech}",\n  desc: "${project.description}"\n}`}
                </code>
              </pre>
              <a href={project.github} className="github-link">
                &gt; git clone {project.github}
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }