import { profile } from '../data/profile'

export function Intro() {
  return (
    <section className="intro" aria-labelledby="intro-heading">
      <p id="intro-heading" className="intro__lead">
        {profile.tagline}
      </p>
    </section>
  )
}
