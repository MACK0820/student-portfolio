import React from 'react'
import { IconArrowLeft, getContactIcon } from './Icons'

function Portfolio({ student, onBack }) {
  return (
    <div className="portfolio">
      {/* Nav */}
      <nav className="port-nav">
        <button className="back-btn" onClick={onBack}>
          <IconArrowLeft />
          Back
        </button>
        <span className="nav-slash">/</span>
        <span className="nav-crumb">
          Portfolio — <span>{student.name}</span>
        </span>
      </nav>

      {/* Hero Band */}
      <div className="port-band">
        <div className="port-avatar-big">{student.initials}</div>

        <div>
          <div className="port-tag">{student.year}</div>
          <div className="port-name-big">{student.name}</div>
          <div className="port-course-label">{student.course}</div>
          <p className="port-bio-text">{student.bio}</p>
        </div>

        <div className="port-contacts-col">
          {student.contacts.map((c) => (
            <div key={c.text} className="contact-row">
              {getContactIcon(c.icon)}
              <span>{c.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Body */}
      <div className="port-body">
        {/* Left */}
        <div className="port-left">
          <div className="s-head">Featured Projects</div>
          <div className="projects-grid">
            {student.projects.map((p) => (
              <div key={p.title} className="proj">
                <div className="proj-head">
                  <div className="proj-title">{p.title}</div>
                  <div className="proj-type">{p.type}</div>
                </div>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-tools">
                  {p.tools.map((t) => (
                    <span key={t} className="ptool">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="s-head">Core Skills</div>
          <div className="skills-block">
            {student.skills.map((sk) => (
              <div key={sk.name}>
                <div className="sk-meta">
                  <span className="sk-name">{sk.name}</span>
                  <span className="sk-pct">{sk.pct}</span>
                </div>
                <div className="sk-track">
                  <div className="sk-fill" style={{ width: `${sk.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="port-right">
          <div className="info-block">
            <div className="s-head">Academic</div>
            {student.academic.map((a) => (
              <div key={a.label} className="info-row">
                <span className="info-row-label">{a.label}</span>
                <span className={`info-row-val${a.label === 'GWA' ? ' highlight-val' : ''}`}>
                  {a.val}
                </span>
              </div>
            ))}
          </div>

          <div className="info-block">
            <div className="s-head">Tools</div>
            <div className="tools-wrap">
              {student.tools.map((t) => (
                <div key={t} className="t-badge">
                  <div className="t-dot" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
