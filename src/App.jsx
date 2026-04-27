import profilePic from "url:./assets/images/profile_pic.jpg";
import { useTheme } from "./theme/ThemeContext";

function Section({ title, children }) {
  return (
    <section className="section" id={title.toLowerCase().replace(/\s+/g, "-")}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function App({ data }) {
  const { theme, setTheme } = useTheme();
  const profilePicSrc =
    typeof profilePic === "string" ? profilePic : profilePic?.default || "";

  return (
    <main className="page">
      <nav className="menu">
        <div className="menu-links">
          <a href="#about">About me</a>
          <a href="#skills">My Skills</a>
          <a href="#work">My Work</a>
          <a href="#projects">My Projects</a>
          <a href="#contact">Contact me</a>
        </div>
        <div className="menu-actions">
          <label className="theme-label">
            <select
              className="theme-select"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              aria-label="Theme"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>
        </div>
      </nav>

      <header className="hero" id="about">
        <div className="hero-left">
          {/* <p className="eyebrow">Resume Portfolio</p> */}
          <h1>{data.name}</h1>
          <p className="hero-summary">{data.summary}</p>
        </div>
        <div className="hero-right">
          <img
            className="profile-pic"
            src={profilePicSrc}
            alt={`${data.name} profile`}
          />
        </div>
      </header>

      <Section title="Technical Skills">
        <div className="skills-grid" id="skills">
          {Object.entries(data.skills).map(([key, value]) => (
            <article className="skill-card" key={key}>
              <h3>{key}</h3>
              <p>{value}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section title="Work">
        <div id="work">
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
        </div>
      </Section>

      <Section title="Projects">
        <div id="projects">
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
        </div>
      </Section>

      <section className="split">
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
      </section>

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
    </main>
  );
}
