import { useState, useEffect } from 'react'
import { navItems, site } from '../../data/content.js'
import styles from './Navbar.module.css'

// Map each section ID to its corresponding navigation item href.
// 'certificates' has no nav item of its own, so it highlights 'About'.
const SECTION_NAV_MAP = {
  home: '#home',
  about: '#about',
  service: '#service',
  certificates: '#about',
  experience: '#experience',
  project: '#project',
  contact: '#contact',
}

const SECTION_IDS = ['home', 'about', 'service', 'certificates', 'experience', 'project', 'contact']

function Navbar() {
  const [activeHref, setActiveHref] = useState('#home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // Keep track of observed entries
    const entriesMap = new Map()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entriesMap.set(entry.target.id, entry)
        })

        // Pick intersecting entries
        const intersecting = Array.from(entriesMap.values()).filter((e) => e.isIntersecting)

        if (intersecting.length > 0) {
          // Sort by proximity to top of the viewport
          intersecting.sort(
            (a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top)
          )
          const activeId = intersecting[0].target.id
          if (SECTION_NAV_MAP[activeId]) {
            setActiveHref(SECTION_NAV_MAP[activeId])
          }
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -50% 0px',
        threshold: [0, 0.2, 0.5],
      }
    )

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    // Reset to #home when scrolled to top
    const handleScroll = () => {
      if (window.scrollY < 120) {
        setActiveHref('#home')
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Close the mobile dropdown on Escape, and whenever the viewport grows past
  // the mobile breakpoint, so it can never linger over the desktop navbar.
  useEffect(() => {
    if (!menuOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    const desktopQuery = window.matchMedia('(min-width: 768px)')
    const handleQueryChange = (event) => {
      if (event.matches) setMenuOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    desktopQuery.addEventListener('change', handleQueryChange)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      desktopQuery.removeEventListener('change', handleQueryChange)
    }
  }, [menuOpen])

  const handleNavClick = (href) => {
    setActiveHref(href)
    setMenuOpen(false)
  }

  // Split navItems: first 3 on the left, last 3 on the right
  const leftItems = navItems.slice(0, 3)
  const rightItems = navItems.slice(3)

  return (
    <header className={styles.header}>
      <div className={styles.pillWrap}>
        <nav className={styles.pill} aria-label="Main">
          {/* Left items: Home, About, Service */}
          <ul className={styles.navList}>
            {leftItems.map((item) => {
              const isActive = activeHref === item.href
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                    aria-current={isActive ? 'true' : undefined}
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Center brand: Azzam [AAF Logo Badge] Firdaus */}
          <a
            href="#home"
            className={styles.brand}
            aria-label={`${site.shortName} ${site.lastName}`}
            onClick={() => handleNavClick('#home')}
          >
            <span className={styles.brandText}>{site.shortName}</span>

            {/* TODO: logo-aaf.svg is missing from src/assets/. Rendering temporary white circle with 'AAF' in maroon text. */}
            <span className={styles.logoBadge} aria-hidden="true">
              {site.logoText}
            </span>

            <span className={styles.brandText}>{site.lastName}</span>
          </a>

          {/* Right items: Project, Experience, Contact */}
          <ul className={`${styles.navList} ${styles.navListRight}`}>
            {rightItems.map((item) => {
              const isActive = activeHref === item.href
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                    aria-current={isActive ? 'true' : undefined}
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Mobile only: hamburger toggle for the dropdown below */}
          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={styles.menuIcon} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </nav>

        {/* Mobile only: full-width dropdown. Always in the DOM (hidden while
            closed) so aria-controls always resolves to a real element. */}
        <div id="mobile-nav-menu" className={styles.mobileMenu} hidden={!menuOpen}>
          <ul className={styles.mobileList}>
            {navItems.map((item) => {
              const isActive = activeHref === item.href
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`}
                    aria-current={isActive ? 'true' : undefined}
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
