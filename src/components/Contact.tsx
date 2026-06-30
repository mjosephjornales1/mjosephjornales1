import { profile } from '../data/profile'

export function Contact() {
  return (
    <section id="contact" className="section section--last">
      <h2 className="section__title">Get In Touch</h2>
      <p className="contact__intro">
        Have a project in mind or want to discuss potential opportunities? I&apos;d love to
        hear from you!
      </p>
      <dl className="contact__details">
        <div className="contact__row">
          <dt>Address</dt>
          <dd>{profile.address}</dd>
        </div>
        <div className="contact__row">
          <dt>Email</dt>
          <dd>
            {profile.emails.map((email) => (
              <a key={email} href={`mailto:${email}`} className="contact__link-item">
                {email}
              </a>
            ))}
          </dd>
        </div>
        <div className="contact__row">
          <dt>Mobile</dt>
          <dd>
            {profile.phones.map((phone) => (
              <a key={phone} href={`tel:${phone}`} className="contact__link-item">
                {phone}
              </a>
            ))}
          </dd>
        </div>
        <div className="contact__row">
          <dt>Location</dt>
          <dd>{profile.location}</dd>
        </div>
      </dl>
      <p className="contact__message">{profile.availability}</p>
    </section>
  )
}
