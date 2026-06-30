import { profile } from '../data/profile'

export function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section__title">Experience</h2>
      <div className="experience-list">
        {profile.experience.map((job) => (
          <article key={`${job.company}-${job.period}`} className="experience-card">
            <div className="experience-card__header">
              <div>
                <h3 className="experience-card__role">{job.role}</h3>
                <p className="experience-card__company">{job.company}</p>
              </div>
              <div className="experience-card__dates">
                <time className="experience-card__period">{job.period}</time>
                <span className="experience-card__duration">{job.duration}</span>
              </div>
            </div>

            {job.duties.length > 0 && (
              <div className="experience-card__block">
                <h4 className="experience-card__label">Duties</h4>
                <ul className="experience-card__list">
                  {job.duties.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {job.accomplishments.length > 0 && (
              <div className="experience-card__block">
                <h4 className="experience-card__label">Accomplishments</h4>
                <ul className="experience-card__list experience-card__list--accent">
                  {job.accomplishments.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
