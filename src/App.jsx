function Section({ title, children }) {
  return (
    <section className="section" id={title.toLowerCase().replace(/\s+/g, "-")}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function App({ data }) {
  return (
    <main className="page">
      <nav className="menu">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#work">Work</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <header className="hero" id="about">
        <p className="eyebrow">Resume Portfolio</p>
        <h1>{data.name}</h1>
        <div className="about-pills">
          <span>Full-Stack Developer</span>
          <span>8+ Years Experience</span>
          <span>Open to Work</span>
        </div>
        <p className="hero-summary">{data.summary}</p>
      </header>

      <section className="split" id="skills">
        <Section title="Technical Skills">
          <div className="skills-grid">
            {Object.entries(data.skills).map(([key, value]) => (
              <article className="skill-card" key={key}>
                <h3>{key}</h3>
                <p>{value}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section title="Contact">
          <div className="contact-panel" id="contact">
            <p>
              <strong>Phone:</strong>{" "}
              <a href={`tel:${data.contact.phone}`}>{data.contact.phone}</a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a href={data.contact.linkedin} target="_blank" rel="noreferrer">
                {data.contact.linkedin}
              </a>
            </p>
          </div>
        </Section>
      </section>

      <Section title="Work" id="work">
        {data.experience.map((item) => (
          <article key={item.company} className="item">
            <p className="meta">{item.duration}</p>
            <h3>{item.role}</h3>
            <p className="meta">{item.company}</p>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </Section>

      <Section title="Projects">
        {data.projects.map((project) => (
          <article key={project.name} className="item">
            <h3>{project.name}</h3>
            <p className="meta">{project.stack}</p>
            <p>
              <a href={project.website} target="_blank" rel="noreferrer">
                Visit Website
              </a>
            </p>
            <ul>
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </Section>

      <Section title="Education">
        <p>{data.education}</p>
      </Section>

      <Section title="Achievements">
        <ul>
          {data.achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
