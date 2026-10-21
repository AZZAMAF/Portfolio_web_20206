import { about } from '../../data/content.js'
import SectionTitle from '../ui/SectionTitle/index.js'
import styles from './About.module.css'

function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className={styles.container}>
        <SectionTitle id="about-title" title={about.title} />
        <p className={styles.text}>{about.text}</p>
      </div>
    </section>
  )
}

export default About
