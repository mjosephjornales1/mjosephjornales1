import { profile } from '../data/profile'

export function Intro() {
  return (
    <section className="intro" aria-labelledby="intro-heading">
      <p id="intro-heading" className="intro__lead">
        {profile.tagline}
      </p>
      {profile.links.github && (
        <a
          href={profile.links.github}
          className="intro__github"
          target="_blank"
          rel="noopener noreferrer"
        >
          {profile.links.github.replace(/^https:\/\//, '')}
        </a>
      )}
    </section>
  )
}
