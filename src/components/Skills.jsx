  export default function Skills() {
    const skillCategories = [
      {
        title: "Programming Languages",
        skills: [
          { name: 'JavaScript', logo: '/logos/javascript.svg' },
          { name: 'TypeScript', logo: '/logos/typescript.svg' },
          { name: 'Python', logo: '/logos/python.svg' },
          { name: 'Java', logo: '/logos/java.svg' },
          { name: 'C#', logo: '/logos/csharp.svg' },
          { name: 'HTML', logo: '/logos/html.svg' },
          { name: 'CSS', logo: '/logos/css.svg' },
        ]
      },
      {
        title: "Web Frameworks & Libraries",
        skills: [
          { name: 'React', logo: '/logos/react.svg' },
          { name: 'Node.js', logo: '/logos/nodejs.svg' },
          { name: 'PostgreSQL', logo: '/logos/postgresql.svg' },
        ]
      },
      {
        title: "Tools & Platforms",
        skills: [
          { name: 'Git', logo: '/logos/git.svg' },
          { name: 'Github', logo: '/logos/github.svg' },
          { name: 'AWS (Still learning)', logo: '/logos/aws.svg' },
          { name: 'Unity', logo: '/logos/unity.svg' },
        ]
      }
    ];
  
    return (
      <section className="terminal-section" id="skills">
        <h3 className="section-title">$ ls skills/</h3>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h4 className="category-title">
                &gt; {category.title}
              </h4>
              <div className="skills-grid">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-card">
                    <img 
                      src={skill.logo} 
                      alt={skill.name} 
                      className="skill-logo"
                      loading="lazy"
                    />
                    <p className="skill-name">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }