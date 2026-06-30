import { profile } from '../data/profile'

export function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section__title">My Projects</h2>
      <p className="projects__intro">
        A selection of my recent work and personal projects.
      </p>
      <div className="projects">
        {profile.projects.map((project) => (
          <article key={project.name} className="project">
            <div className="project__header">
              <h3 className="project__name">{project.name}</h3>
              <span className={`project__badge project__badge--${project.category}`}>
                {project.category}
              </span>
            </div>
            <p className="project__desc">{project.description}</p>
            <p className="project__tech">{project.tech.join(' · ')}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
