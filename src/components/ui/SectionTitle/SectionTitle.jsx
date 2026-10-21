import styles from './SectionTitle.module.css'

/**
 * Section heading with an optional kicker label above it.
 *
 * Props:
 *  - title: string (required) — rendered as an <h2>; uppercased by CSS so the
 *    data file keeps normal sentence case.
 *  - label: string (optional) — small uppercase kicker, e.g. "Career Path".
 *    The leading em dash is added by CSS, not by the data.
 *  - id: string (optional) — id applied to the <h2>, so a section can point
 *    aria-labelledby at it.
 *  - align: 'center' | 'left' (default: 'center')
 *  - className: string (optional)
 */
function SectionTitle({ title, label, id, align = 'center', className = '' }) {
  return (
    <div className={`${styles.wrap} ${styles[align]} ${className}`.trim()}>
      {label ? <p className={styles.label}>{label}</p> : null}
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
    </div>
  )
}

export default SectionTitle
