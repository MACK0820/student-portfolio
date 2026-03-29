import React from 'react'

function StudentCard({ student, onSelect }) {
  return (
    <div className="student-card" onClick={() => onSelect(student)}>
      <div className="card-glow-ring" />

      <div className="card-top">
        <span className="card-num">{student.number}</span>
        <span className="card-arrow">↗</span>
      </div>

      <div className="card-avatar-area">
        <div className="card-avatar">{student.initials}</div>
        <div>
          <div className="card-name">{student.name}</div>
          <div className="card-course-tag">{student.course}</div>
        </div>
      </div>

      <p className="card-bio">{student.bio}</p>

      <div className="card-skills">
        {student.chips.map((chip) => (
          <span key={chip} className="skill-chip">{chip}</span>
        ))}
      </div>

      <div className="card-bottom">
        <span className="card-year-badge">{student.year}</span>
        <button className="card-view-btn">
          View Portfolio
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default StudentCard
