import { About } from './components/About'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Intro } from './components/Intro'
import { Projects } from './components/Projects'
import { Sidebar } from './components/Sidebar'
import { Skills } from './components/Skills'

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Intro />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
