import React, { useState } from 'react'
import Dashboard from './components/Dashboard'
import students from './data/students'

import Maryneil from './pages/Maryneil.jsx'
import Francien from './pages/Francien.jsx'
import KersteinPortfolio from './Kerstein/KersteinPortfolio.jsx'

const PAGE_MAP = {
  s1: Francien,
  s2: Maryneil,
  s3: KersteinPortfolio
}

function App() {
  const [selected, setSelected] = useState(null)

  const handleSelect = (student) => {
    setSelected(student)
    window.scrollTo({ top: 0 })
  }

  const handleBack = () => {
    setSelected(null)
    window.scrollTo({ top: 0 })
  }

  if (selected) {
    const PageComponent = PAGE_MAP[selected.id]
    return (
      <div className="portfolio">
        {/* Nav bar */}
        <nav className="port-nav">
          <button className="back-btn" onClick={handleBack}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Dashboard
          </button>
          <span className="nav-slash">/</span>
          <span className="nav-crumb">
            Portfolio — <span>{selected.name}</span>
          </span>
        </nav>
        {/* Member's own page */}
        <PageComponent />
      </div>
    )
  }

  return <Dashboard students={students} onSelect={handleSelect} />
}

export default App
