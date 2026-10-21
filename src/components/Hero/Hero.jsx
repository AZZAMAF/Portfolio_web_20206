import { site } from '../../data/content.js'
import Button from '../ui/Button/index.js'
import StarIcon from '../ui/StarIcon/index.js'
import heroPhoto from '../../assets/hero-photo.png'
import heroCircle from '../../assets/hero-circle.svg'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section id="home" className={styles.hero} aria-label="Hero">
      <div className={styles.container}>
        {/* ── Layers 1 + 2: decorative circle behind the portrait.
               Wrapped together so the pair can be absolutely positioned on
               desktop and flow-positioned (order: 4) on mobile/tablet. ── */}
        <div className={styles.portrait}>
          <img
            src={heroCircle}
            alt=""
            aria-hidden="true"
            className={styles.circle}
            width="560"
            height="560"
          />

          <img
            src={heroPhoto}
            alt="Portrait of Abdullah Azzam Firdaus"
            className={styles.photo}
            width="411"
            height="829"
            loading="eager"
            fetchpriority="high"
          />
        </div>

        {/* ── Layer 3: Headings and interactive content ── */}

        {/* Semantic h1: contains "I'm" and "Azzam" as spans */}
        <h1 className={styles.heroHeading}>
          <span className={styles.im}>I'm</span>
          <span className={styles.azzam}>{site.shortName}</span>
        </h1>

        {/* 3a: Under "I'm" -> line and tagline */}
        <div className={styles.taglineBlock}>
          <span className={styles.divider} aria-hidden="true" />
          <p className={styles.tagline}>{site.heroTagline}</p>
        </div>

        {/* 3b: Under "Azzam" -> right-aligned experience badge */}
        <div
          className={styles.badge}
          aria-label={`${site.heroBadge.years} ${site.heroBadge.label}`}
        >
          <span className={styles.badgeYears}>{site.heroBadge.years}</span>
          <span className={styles.badgeLabel}>{site.heroBadge.label}</span>
        </div>

        {/* 3c: Maroon StarIcons to the upper right of the head */}
        <div className={styles.starCluster} aria-hidden="true">
          <StarIcon size={70} color="var(--color-primary)" className={styles.starLarge} />
          <StarIcon size={20} color="var(--color-primary)" className={styles.starSmall} />
        </div>

        {/* 3d: Bottom left of the photo -> CTA buttons */}
        <div className={styles.ctaGroup}>
          <Button href={site.cvFile} download variant="primary">
            Download CV
          </Button>
          <Button href="#contact" variant="outline">
            Let's Talk
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
