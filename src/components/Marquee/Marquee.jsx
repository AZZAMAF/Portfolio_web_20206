import { marqueeItems } from '../../data/content.js'
import StarIcon from '../ui/StarIcon/index.js'
import styles from './Marquee.module.css'

function Marquee() {
  // Repeat items twice per group to ensure dense coverage across wide viewports
  const repeatedItems = [...marqueeItems, ...marqueeItems]

  return (
    <div className={styles.marqueeSection} aria-label="Services highlights">
      <div className={styles.band}>
        <div className={styles.track}>
          {/* Primary loop group */}
          <div className={styles.group}>
            {repeatedItems.map((item, idx) => (
              <span key={`a-${idx}`} className={styles.itemWrapper}>
                <span className={styles.text}>{item}</span>
                <StarIcon size={20} color="#FFFFFF" className={styles.star} />
              </span>
            ))}
          </div>

          {/* Duplicate loop group for seamless continuous loop */}
          <div className={styles.group} aria-hidden="true">
            {repeatedItems.map((item, idx) => (
              <span key={`b-${idx}`} className={styles.itemWrapper}>
                <span className={styles.text}>{item}</span>
                <StarIcon size={20} color="#FFFFFF" className={styles.star} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Marquee
