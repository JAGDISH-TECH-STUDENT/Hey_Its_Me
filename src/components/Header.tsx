import React, { useState } from 'react';
import { FaSun, FaMoon, FaGlobe, FaBars, FaTimes, FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const { dark, toggleDark } = useTheme();
  const { lang, t, toggleLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#experience', label: t.nav.experience },
    { href: '#projects', label: t.nav.projects },
    { href: '#blog', label: t.nav.blog },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <span>JD</span>
        </div>

        <ul className="nav-links">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                style={{
                  color: 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: '500',
                  transition: 'all 0.2s ease',
                  padding: '8px 4px',
                  position: 'relative',
                  display: 'block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <button
              onClick={toggleDark}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-text-secondary)',
              fontSize: '18px',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '8px',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-bg-tertiary)';
              e.currentTarget.style.color = 'var(--color-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--color-text-secondary)';
            }}
            >
              {dark ? <FaSun /> : <FaMoon />}
            </button>
          </li>

          <li>
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-text-secondary)',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              padding: '8px 12px',
              borderRadius: '8px',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-bg-tertiary)';
              e.currentTarget.style.color = 'var(--color-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--color-text-secondary)';
            }}
            >
              <FaGlobe size={14} />
              {lang === 'en' ? 'EN' : 'HI'}
            </button>
          </li>
        </ul>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            color: 'var(--color-text)',
            cursor: 'pointer'
          }}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {mobileOpen && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          background: dark ? 'var(--color-bg)' : '#ffffff',
          borderBottom: `2px solid var(--color-border)`,
          padding: '24px',
          gap: '16px'
        }}>
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                color: 'var(--color-text-secondary)',
                textDecoration: 'none',
                fontSize: '16px',
                padding: '12px',
                borderRadius: '8px',
                transition: 'background 0.2s',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-bg-tertiary)';
                e.currentTarget.style.color = 'var(--color-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--color-text-secondary)';
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '8px' }}>
            <button onClick={toggleDark} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: 'var(--color-text-secondary)' }}>
              {dark ? <FaSun style={{ color: '#fbbf24' }} /> : <FaMoon style={{ color: '#6366f1' }} />}
            </button>
            <button onClick={toggleLang} style={{ background: 'none', border: 'none', fontSize: '16px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-text-secondary)' }}>
              <FaGlobe size={14} /> {lang === 'en' ? 'EN' : 'HI'}
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .nav-links {
            display: none;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
