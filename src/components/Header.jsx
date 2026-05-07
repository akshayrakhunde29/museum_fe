import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const navItems = [
  { path: '/', label: 'Home', end: true },
  { path: '/VisitRegistrationPage', label: 'Museum Visit' },
  { path: '/feelthejail', label: 'Feel the Jail' },
  { path: '/contact', label: 'Contact Us' },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = () => {
    setMenuOpen(false)
  }

  return (
    <header className="site-header glass-panel">
      <div className="brand-row">
        <div className="brand-block">
          <p className="brand-kicker">Government of Telangana</p>
          <h1 className="brand-title">Chanchalguda Jail Museum</h1>
        </div>
        <button
          type="button"
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav
        id="main-nav"
        className={`top-nav${menuOpen ? ' open' : ''}`}
        aria-label="Main navigation"
      >
        {navItems.map(({ path, label, end }) => (
          <NavLink
            key={path}
            to={path}
            end={end}
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            onClick={handleNavClick}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header
