import React, { useState, useEffect } from 'react'
import Navigation from './components/Navigation.jsx'
import Home from './pages/Home.jsx'
import Background from './pages/Background.jsx'
import Achievements from './pages/Achievements.jsx'
import Projects from './pages/Projects.jsx'
import References from './pages/References.jsx'
import './kerstein.css'
import { ThemeProvider } from "./context/ThemeContext.jsx";

function KersteinPortfolio() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <ThemeProvider>
      <div 
        className="app" 
        style={{ 
          '--mouse-x': `${mousePos.x}px`,
          '--mouse-y': `${mousePos.y}px`
        }}
      >
        <div className="cursor-gradient"></div>
        <Navigation />
        
        <div id="home">
          <Home mousePos={mousePos} />
        </div>
        
        <div id="background">
          <Background />
        </div>
        
        <div id="achievements">
          <Achievements />
        </div>
        
        <div id="projects">
          <Projects />
        </div>
        
        <div id="references">
          <References />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default KersteinPortfolio