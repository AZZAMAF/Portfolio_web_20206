import Navbar from './components/Navbar/index.js'
import Hero from './components/Hero/index.js'
import Marquee from './components/Marquee/index.js'
import About from './components/About/index.js'
import styles from './App.module.css'

// Temporary placeholder sections for remaining stages (service, certificates, experience, project, contact)
const placeholderSections = [
  'service',
  'certificates',
  'experience',
  'project',
  'contact',
]

function App() {
  return (
    <div className={styles.pageWrapper}>
      {/* Skip to main content link for keyboard accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      {/* STAGE 2: Navbar */}
      <Navbar />

      <main id="main-content">
        {/* STAGE 2: Hero (section id="home") and Marquee */}
        <Hero />
        <Marquee />

        {/* STAGE 3: About */}
        <About />

        {/* Temporary sections for upcoming stages */}
        {placeholderSections.map((id) => (
          <section key={id} id={id} className={styles.tempSection}>
            <h2>{id}</h2>
          </section>
        ))}
      </main>
    </div>
  )
}

export default App
