/**
 * Inline SVG four-point star (concave sides).
 *
 * Props:
 *  - size: number | string (default: 24)
 *  - color: string (default: 'currentColor')
 *  - className: string (optional)
 */
function StarIcon({ size = 24, color = 'currentColor', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M 25 1 Q 25 25 49 25 Q 25 25 25 49 Q 25 25 1 25 Q 25 25 25 1 Z" />
    </svg>
  )
}

export default StarIcon
