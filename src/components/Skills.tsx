import { profile } from '../data/profile'

const skillGroups = [
  { title: 'Frontend', items: profile.skills.frontend },
  { title: 'Mobile', items: profile.skills.mobile },
  { title: 'Backend', items: profile.skills.backend },
  { title: 'DevOps & Deployment', items: profile.skills.devops },
  { title: 'Security', items: profile.skills.security },
  { title: 'Tools & Others', items: profile.skills.tools },
] as const

export function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section__title">My Skills</h2>

      <div className="skills__experience">
        <h3 className="skills__label">Technical Experience</h3>
        <ul className="skills__exp-list">
          {profile.technicalExperience.map((item) => (
            <li key={item.skill} className="skills__exp-item">
              <span className="skills__exp-skill">{item.skill}</span>
              <span className="skills__exp-years">{item.years}</span>
            </li>
          ))}
        </ul>
      </div>

      {skillGroups.map((group) => (
        <div key={group.title} className="skills__block">
          <h3 className="skills__label">{group.title}</h3>
          <ul className="skills__tags">
            {group.items.map((item) => (
              <li key={item} className="skills__tag">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
