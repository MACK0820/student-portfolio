import React from 'react'
import './portfolio.css'

function Rafael() {
  const skills = [
    { name: 'Python Programming',   pct: 94 },
    { name: 'Machine Learning',     pct: 88 },
    { name: 'Data Engineering',     pct: 82 },
    { name: 'Data Visualization',   pct: 78 },
    { name: 'Cloud Infrastructure', pct: 72 },
  ]

  const projects = [
    {
      title: 'GradePredict ML',
      type: 'Machine Learning', year: '2024',
      desc: 'Predictive model achieving 89% accuracy forecasting student GWA using attendance logs and early assessment data.',
      tools: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter'],
    },
    {
      title: 'UniNet Monitor',
      type: 'Network Tool', year: '2024',
      desc: 'Live university network analyzer with anomaly detection, dashboard reporting, and automated email alerts.',
      tools: ['Python', 'Flask', 'Wireshark API', 'Chart.js'],
    },
    {
      title: 'DataPH Pipeline',
      type: 'Data Engineering', year: '2023',
      desc: 'Open government dataset ETL pipeline processing 4M+ Philippine records with automated scheduling.',
      tools: ['Airflow', 'BigQuery', 'dbt', 'Looker'],
    },
  ]

  return (
    <div className="p-page">

      <section className="p-hero">
        <div className="p-hero-inner">
          <div className="p-hero-left">
            <div className="p-tag">Data Engineer · ML Practitioner</div>
            <h1 className="p-name">
              RAFAEL
              <span className="p-name-stroke">CRUZ</span>
            </h1>
            <p className="p-course-line">BS Information Technology · 4th Year · PUP Manila</p>
            <p className="p-tagline">
              I turn complex, messy real-world data into clean, actionable intelligence —
              building the pipelines and models that make decisions smarter.
            </p>
            <div className="p-hero-chips">
              {['Python', 'TensorFlow', 'SQL', 'Airflow', 'BigQuery'].map(c => (
                <span key={c} className="p-chip">{c}</span>
              ))}
            </div>
          </div>
          <div className="p-hero-right">
            <div className="p-avatar-frame">
              <div className="p-avatar-initials">RD</div>
            </div>
            <div className="p-contact-card">
              <div className="p-contact-item">
                <span className="p-contact-label">Email</span>
                <span className="p-contact-val">rafael.cruz@uni.edu.ph</span>
              </div>
              <div className="p-contact-item">
                <span className="p-contact-label">Phone</span>
                <span className="p-contact-val">+63 918 234 5678</span>
              </div>
              <div className="p-contact-item">
                <span className="p-contact-label">Website</span>
                <span className="p-contact-val">rafaelcruz.io</span>
              </div>
              <div className="p-contact-item">
                <span className="p-contact-label">GWA</span>
                <span className="p-contact-val p-gwa">1.38</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-section">
        <div className="p-section-inner">
          <div className="p-section-label">About</div>
          <div className="p-about-grid">
            <p className="p-about-text">
              Data engineer and machine learning practitioner focused on building scalable AI systems.
              I enjoy turning messy real-world data into clean, actionable insights. Currently writing
              my thesis on predictive modeling for student academic performance using behavioral and
              engagement data.
            </p>
            <div className="p-stat-col">
              <div className="p-stat">
                <span className="p-stat-n">4th</span>
                <span className="p-stat-l">Year Level</span>
              </div>
              <div className="p-stat">
                <span className="p-stat-n">4M+</span>
                <span className="p-stat-l">Records Processed</span>
              </div>
              <div className="p-stat">
                <span className="p-stat-n">Thesis</span>
                <span className="p-stat-l">Stage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-section p-section-dark">
        <div className="p-section-inner">
          <div className="p-section-label">Projects</div>
          <div className="p-projects-grid">
            {projects.map((p, i) => (
              <div key={p.title} className="p-proj-card">
                <div className="p-proj-top">
                  <span className="p-proj-num">0{i + 1}</span>
                  <span className="p-proj-type">{p.type}</span>
                  <span className="p-proj-year">{p.year}</span>
                </div>
                <h3 className="p-proj-title">{p.title}</h3>
                <p className="p-proj-desc">{p.desc}</p>
                <div className="p-proj-tools">
                  {p.tools.map(t => <span key={t} className="p-tool">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="p-section">
        <div className="p-section-inner">
          <div className="p-section-label">Skills</div>
          <div className="p-skills-grid">
            {skills.map(sk => (
              <div key={sk.name}>
                <div className="p-skill-meta">
                  <span className="p-skill-name">{sk.name}</span>
                  <span className="p-skill-pct">{sk.pct}%</span>
                </div>
                <div className="p-skill-track">
                  <div className="p-skill-fill" style={{ width: `${sk.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Rafael
