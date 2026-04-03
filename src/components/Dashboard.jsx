import React, { useState, useEffect } from 'react'
import StudentCard from './StudentCard'

function Dashboard({ students, onSelect }) {
  const [isLightMode, setIsLightMode] = useState(false)

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }, [isLightMode])

  return (
    <div className="dashboard">
      {/* 🚀 NEW: Floating Background Particles */}
      <div className="bg-particles">
        <div className="particle p1"></div>
        <div className="particle p2"></div>
        <div className="particle p3"></div>
      </div>

      {/* Minimal nav */}
      <header className="dash-header nav-slide-down">
        <nav>
          <span className="active">Portfolio</span>
          <div className="nav-divider" />
          <span>2026</span>
        </nav>

        {/* THEME TOGGLE BUTTON - EMOJI ONLY */}
        <button 
          className="theme-toggle" 
          onClick={() => setIsLightMode(!isLightMode)}
          title={isLightMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
        >
          {isLightMode ? '🌙' : '☀️'}
        </button>
      </header>

      {/* Hero */}
      <section className="dash-hero">
        <div className="hero-orb" />
        {/* 🚀 NEW: Secondary ambient orb for complex lighting */}
        <div className="hero-orb orb-2" />

        <div className="hero-top fade-up-stagger">
          <span className="hero-mono">Group 4 </span>
        </div>

        <div className="hero-title-block">
          <div className="hero-pre fade-up-stagger delay-1">Select a member</div>
          <h1 className="hero-h1">
            {/* 🚀 NEW: Masked text reveal animations */}
            <span className="reveal-text" style={{ fontSize: '0.4em' }}>
              <span className="reveal-inner">OUR</span>
            </span>
            <span className="stroke reveal-text delay-reveal">
              <span className="reveal-inner">TEAM</span>
            </span>
          </h1>
        </div>

        {/* 🚀 NEW: Animated Scroll Indicator */}
        <div className="scroll-indicator fade-up-stagger delay-2">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span className="scroll-text">Scroll to explore</span>
        </div>
      </section>

      {/* Cards */}
      <section className="cards-section">
        <div className="cards-grid">
          {students.map((student, index) => (
            /* 🚀 NEW: Staggered entrance based on index */
            <div 
              key={student.id} 
              className="card-anim-wrapper"
              style={{ animationDelay: `${0.2 + (index * 0.15)}s` }}
            >
              <StudentCard student={student} onSelect={onSelect} />
            </div>
          ))}
        </div>

        {/* Featured Special Project Envelope */}
        <div className="envelope-wrapper pulse-entrance">
          <div className="envelope-info">
            <span className="envelope-badge">Featured Project</span>
            <h2 className="envelope-title">Digital Wedding Invitation</h2>
            <p className="envelope-desc">
              Experience our beautifully crafted, interactive digital wedding invitation. 
              Click the envelope to view the live project!
            </p>
          </div>

          <a 
            href="https://wedding-invitation-project-olive.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="big-envelope-link"
            title="View Wedding Invitation Project"
          >
            <div className="env-visual">
              <div className="env-back"></div>
              <div className="env-letter">
                <span className="env-letter-text">RSVP</span>
              </div>
              <div className="env-front">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 6l10 8 10-8" />
                </svg>
              </div>
              <div className="env-wax-seal"></div>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Dashboard