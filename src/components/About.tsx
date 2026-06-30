import { profile } from '../data/profile'

export function About() {
  return (
    <section id="about" className="section">
      <h2 className="section__title">About Me</h2>
      <p className="about__headline">{profile.aboutHeadline}</p>
      {profile.summary.map((paragraph) => (
        <p key={paragraph} className="about__text">
          {paragraph}
        </p>
      ))}
      <blockquote className="about__quote">&ldquo;{profile.quote}&rdquo;</blockquote>
    </section>
  )
}
