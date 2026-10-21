import styles from './Button.module.css'

/**
 * Reusable Button component.
 * Renders an <a> tag when `href` is supplied, otherwise <button>.
 *
 * Props:
 *  - variant: 'primary' | 'outline' (default: 'primary')
 *  - href: string (optional)
 *  - download: boolean | string (optional)
 *  - children: ReactNode
 */
function Button({
  variant = 'primary',
  href,
  download,
  children,
  onClick,
  className = '',
  ...rest
}) {
  const combinedClassName = `${styles.btn} ${styles[variant]} ${className}`.trim()

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        download={download ? (typeof download === 'string' ? download : true) : undefined}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={combinedClassName}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
