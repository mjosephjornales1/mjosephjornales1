import { profile } from '../data/profile'

export function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section__title">Education</h2>
      <div className="education-list">
        {profile.education.map((entry) => (
          <article key={`${entry.school}-${entry.period}`} className="education-card">
            <div className="education-card__header">
              <div>
                <span className="education-card__level">{entry.level}</span>
                <h3 className="education-card__school">{entry.school}</h3>
                {'degree' in entry && entry.degree && (
                  <p className="education-card__degree">{entry.degree}</p>
                )}
              </div>
              <time className="education-card__period">{entry.period}</time>
            </div>
            <p className="education-card__location">{entry.location}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
