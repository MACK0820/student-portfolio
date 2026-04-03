import React from 'react';
import './portfolio.css';

const Maryneil = () => {
  return (
    <div className="p-page" style={{ 
      width: '100%',
      minHeight: '100vh',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'var(--bg)',
      padding: '20px',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      <section className="p-hero" style={{ 
        border: 'none', 
        background: 'transparent', 
        minHeight: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div className="p-hero-inner" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          gridTemplateColumns: '1fr',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          
          <div style={{ 
            fontSize: 'clamp(50px, 10vw, 80px)', 
            marginBottom: '20px',
            filter: 'sepia(1) saturate(3)',
            opacity: 0.6,
            animation: 'float-wild 4s ease-in-out infinite'
          }}>
            📂
          </div>

          <div className="p-tag" style={{ marginBottom: '24px', letterSpacing: '4px' }}>
            OFFLINE · INITIALIZING
          </div>
          
          <h1 className="p-name" style={{ 
            fontSize: 'clamp(45px, 12vw, 110px)',
            lineHeight: 0.85, 
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            MARYNEIL<br/>
            <span className="p-name-stroke">CO</span>
          </h1>

          <p className="p-tagline" style={{ 
            maxWidth: '600px', 
            margin: '0 auto', 
            opacity: 0.8, 
            lineHeight: 1.6,
            fontSize: 'clamp(14px, 2vw, 18px)'
          }}>
            The architectural framework for this portfolio is currently being established. 
            Systems are expected to be fully operational soon. Please check back later for updates.
          </p>

          <div style={{ 
            marginTop: '5vh', 
            width: '100%', 
            maxWidth: '400px', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center' 
          }}>
            <div className="p-skill-track" style={{ 
              width: '100%', 
              height: '2px', 
              background: 'rgba(218, 160, 48, 0.1)',
              borderRadius: '10px'
            }}>
              <div className="p-skill-fill" style={{ 
                width: '40%', 
                background: '#daa030',
                boxShadow: '0 0 30px rgba(218, 160, 48, 0.5)',
                animation: 'pulse-big 2s infinite' 
              }} />
            </div>
            <span style={{ 
              marginTop: '15px', 
              fontSize: '10px', 
              letterSpacing: '5px', 
              color: 'rgba(218, 160, 48, 0.5)',
              fontWeight: 'bold'
            }}>
              LOADING DATA... 40%
            </span>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Maryneil;