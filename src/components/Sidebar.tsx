import { profile } from '../data/profile'
import { DownloadCvButton } from './DownloadCvButton'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__top">
        <a href="#" className="sidebar__identity">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="sidebar__avatar"
            width={120}
            height={120}
          />
          <p className="sidebar__greeting">Hello, I&apos;m</p>
          <h1 className="sidebar__name">{profile.name}</h1>
          <p className="sidebar__title">{profile.title}</p>
          <p className="sidebar__location">{profile.location}</p>
        </a>

        <nav className="sidebar__nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="sidebar__link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="sidebar__links">
          <a href={`mailto:${profile.email}`} className="sidebar__external">
            {profile.email}
          </a>
          <a href={`tel:${profile.phone}`} className="sidebar__external">
            {profile.phone}
          </a>
          {profile.links.github && (
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar__external"
            >
              GitHub
            </a>
          )}
          {profile.links.linkedin && (
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar__external"
            >
              LinkedIn
            </a>
          )}
        </div>

        <DownloadCvButton variant="sidebar" label="Download CV" />
      </div>

      <footer className="sidebar__footer">
        <p>&copy; {new Date().getFullYear()} Mark Joseph</p>
      </footer>
    </aside>
  )
}
