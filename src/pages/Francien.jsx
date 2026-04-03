import React, { useState, useEffect } from 'react'

export default function WildPortfolio() {
  const [activeSection, setActiveSection] = useState('hero')
  const [theme, setTheme] = useState('dark')
  const isDark = theme === 'dark'
  const [profilePic] = useState('/hkfrancien.jpeg')
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900)
  const [selectedImage, setSelectedImage] = useState(null);

  const themeStyles = {
    bodyBackground: isDark
      ? 'linear-gradient(135deg, #0f0a0f 0%, #1a0f1f 50%, #0f0a0f 100%)'
      : 'linear-gradient(135deg, #ece6dd 0%, #f0e9de 50%, #e7dfcd 100%)',
    bodyColor: isDark ? '#f0e8f0' : '#1a1a1a',
    bodyFontWeight: 500,
    surface: isDark ? 'rgba(34, 24, 40, 0.75)' : 'rgba(255, 255, 255, 0.9)',
    surfaceBorder: isDark ? 'rgba(218, 160, 48, 0.3)' : 'rgba(0, 0, 0, 0.15)',
    accent: isDark ? '#daa030' : '#994d00',
    muted: isDark ? '#b888b0' : '#4a4a4a',
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const achievements = [
    // ELEMENTARY
    { badge: '🥇', title: '1st Place District Level Script Writing - Radio Broadcasting - Filipino', org: 'Comembo Elementary School', year: '2017', level: 'Elementary' },
    { badge: '🥇', title: '1st Place Division Level Script Writing - Radio Broadcasting - Filipino', org: 'Comembo Elementary School', year: '2017', level: 'Elementary' }, 
    { badge: '🏅', title: '4th Place Best Group Technical Regional Press Conference - Filipino', org: 'Comembo Elementary School', year: '2017', level: 'Elementary' },

    // JUNIOR HIGH SCHOOL
    { badge: '🥉', title: '3rd Place – Sci Talk Contest', org: 'Benigno S. Aquino High School', year: '2019', level: 'Junior High' },
   
    // SENIOR HIGH SCHOOL
    { badge: '🏅', title: 'With High Honors – Grade 11', org: 'Arellano University – Andres Bonifacio Campus', year: '2022', level: 'Senior High' },
    { badge: '🏅', title: 'With High Honors – Grade 12', org: 'Arellano University – Andres Bonifacio Campus', year: '2024', level: 'Senior High' },
    
    // COLLEGE
    { badgeImage: '/rs.jpeg', title: 'Resource Specialist Module', org: 'Cisco Networking Academy', year: '2025', level: 'College', description: 'Learned how to properly allocate and manage network resources.' },
    { badgeImage: '/nd.jpeg', title: 'Network Defense Module', org: 'Cisco Networking Academy', year: '2025', level: 'College', description: 'Gained skills in monitoring networks and identifying security breaches.' },
    { badgeImage: '/cyad.jpeg', title: 'Cybersecurity Administration Module', org: 'Cisco Networking Academy', year: '2025', level: 'College', description: 'Studied system administration concepts and security policies.' },
    { badgeImage: '/threats.jpeg', title: 'Threat Analysis Module', org: 'Cisco Networking Academy', year: '2025', level: 'College', description: 'Practiced analyzing threat intelligence to protect systems.' },
    { badgeImage: '/ss.jpeg', title: 'System Safeguards Module', org: 'Cisco Networking Academy', year: '2025', level: 'College', description: 'Implemented security measures to safeguard endpoints and servers.' },
    { badgeImage: '/firstfour.jpeg', title: 'First Four', org: 'TryHackMe', year: '2025', level: 'College', description: 'Completing four rooms in your first week of joining!' },
    { badgeImage: '/cyber.jpeg', title: 'Cyber Ready', org: 'TryHackMe', year: '2025', level: 'College', description: 'Understanding the impact of training on teams.' },
    { badgeImage: '/3day.jpeg', title: '3 Day Streak', org: 'TryHackMe', year: '2025', level: 'College', description: 'Achieving a 3 day hacking streak.' },
    { badgeImage: '/7day.jpeg', title: '7 Day Streak', org: 'TryHackMe', year: '2025', level: 'College', description: 'Achieving a 7 day hacking streak.' },
    { badgeImage: '/catl.jpeg', title: 'cat linux.txt', org: 'TryHackMe', year: '2025', level: 'College', description: 'Being competent in Linux.' },
    { badgeImage: '/aoc-25.jpeg', title: 'Advent of Cyber 2025', org: 'TryHackMe', year: '2025', level: 'College', description: 'Completing Advent of Cyber 2025!' },
    { badgeImage: '/web.jpeg', title: 'Webbed', org: 'TryHackMe', year: '2025', level: 'College', description: 'Understands how the world wide web works.' },
    { badgeImage: '/wideweb.jpeg', title: 'World Wide Web', org: 'TryHackMe', year: '2025', level: 'College', description: "Completing the 'How The Web Works' module." },
    { badgeImage: '/bl.jpeg', title: 'Blue', org: 'TryHackMe', year: '2025', level: 'College', description: 'Hacking into Windows via EternalBlue.' },
    { badge: '🥈', title: '2nd Runner Up - Inhinyera Shirt Design', org: 'Inhinyera', year: '2025', level: 'College', description: 'Awarded 2nd Runner Up for creating a creative and technical shirt design representing women in engineering.' },
  ]
  const seminars = [
    { name: 'Cyber-Aware, Cyber-Safe: Strengthening Our Digital Defenses', date: 'October 8, 2024', org: 'COESS TIP Manila' },
    { name: 'Computer Engineering Elective Seminar', date: 'November 7, 2025', org: 'COESS TIP Manila' },
    { name: 'Cyberbullying Webinar', date: 'March 20, 2023', org: 'School-sponsored' },
    { name: 'Mental Health Webinar', date: 'November 10, 2023', org: 'School-sponsored' },
    { name: 'Building Self-Confidence', date: 'January 12, 2024', org: 'School-sponsored' },
    { name: 'Philippine Arena Seminar', date: 'April 11, 2024', org: 'School-sponsored' },
    { name: 'Good Citizenship Training', date: 'October 21, 2024', org: 'School-sponsored' },
    { name: 'Cybersecurity Awareness', date: 'October 14, 2025', org: 'COESS TIP Manila' },
  ]

  const certificates = [
    { title: 'With High Honors Certificate', issuer: 'Grade 11 · 2023', emoji: '🏅', proofLink: '/high11.pdf', imageUrl: '/high11.jpeg' },
    { title: 'With High Honors Certificate', issuer: 'Grade 12 · 2024', emoji: '🏅', proofLink: '/high12.pdf', imageUrl: '/high12.jpeg' },
    { title: 'Introduction to Cybersecurity', issuer: 'Completion · 2025', emoji: '🎓', proofLink: '/introcysec.pdf', imageUrl: '/introcysec-cert.jpeg' },
    { title: 'Advent of Cyber Completion', issuer: 'Completion · 2025', emoji: '🔐', proofLink: '/THM-AOC.pdf', imageUrl: '/aoc-au.jpeg' },
    { title: '2nd Runner Up - Inhinyera Shirt Design Competition', issuer: 'College · 2025', emoji: '🥈', proofLink: '/inhin2nd.pdf', imageUrl: '/inhin2nd.jpeg' },
  ]

  const education = [
    { period: '2024–Present', status: 'Ongoing', level: 'College', school: 'Technological Institute of the Philippines – Manila', course: 'BS Computer Engineering', details: 'Deep into Cybersecurity modules, circuits, and systems with practical lab work and research projects.' },
    { period: '2022–2024', status: 'Graduated', level: 'Senior High School', school: 'Arellano University – Andres Bonifacio Campus', course: 'STEM Track', details: 'Excelled academically with honors while building early engineering and systems thinking skills.' },
    { period: '2018–2022', status: 'Graduated', level: 'Junior High School', school: "Benigno 'Ninoy' S. Aquino High School (BNAHS)", course: '', details: 'Explored journalism, radio broadcasting, and problem-solving through school competitions.' },
    { period: '2013–2018', status: 'Graduated', level: 'Elementary', school: 'Comembo Elementary School', course: '', details: 'Built a strong foundation in STEM, computers, and collaboration.' },
    { period: '2012–2013', status: 'Completed', level: 'Elementary', school: 'East Rembo Elementary School', course: '', details: 'Started the early academic journey and gained confidence in learning.' },
  ]

  const skillData = [
    { category: 'TECHNICAL', items: ['Python', 'C++', 'Arduino', 'Circuit Design', 'Coding', 'Technology'] },
    { category: 'SECURITY', items: ['Cybersecurity Administration', 'Network Defense', 'Threat Analysis', 'System Safeguards'] },
    { category: 'SOFT SKILLS', items: ['Problem Solving', 'Script Writing', 'Journalism'] },
    { category: 'CREATIVE', items: ['Radio Broadcasting', 'Script Writing', 'Journalism'] },
  ]

  const hobbies = ['K-Pop (Blackpink, Aespa, Twice)', 'OPM & Pop Music', 'Gaming (Roblox, Call of Duty, Heartopia)', 'Exploring New Tech']

  const orgs = [
    { name: 'Computer Engineering Student Society (COESS)', level: 'College' },
    { name: 'Journalism Club- Epistles and the Clarion', level: 'Junior High School' },
  ]

  const projects = [
    {
      title: 'Simple Registration System',
      type: 'Console Application',
      year: '2024',
      status: 'Completed',
      desc: 'A text-based C++ console application that allows users to register names, display all records, and exit through a menu-driven interface. Built as a final exam output for Programming Logic and Design.',
      tools: ['C++', 'Console I/O', 'Arrays', 'Functions'],
      image: '/regis.jpeg',
      repoLink: 'https://github.com/MACK0820/Cpp-Game.git',
    },
    {
      title: 'Text-Based Detective Game',
      type: 'Console Game',
      year: '2024',
      status: 'Completed',
      desc: 'A text based C++ console application that simulates an interactive mystery game called "The Vanishing Diamond" where the player acts as a detective solving a case through choices and clues. Features branching storylines and multiple endings.',
      tools: ['C++', 'Switch Statement', 'Logic Design', 'Functions'],
      image: '/cppgame.jpeg',
      repoLink: 'https://github.com/MACK0820/Cpp-Game.git',    },
    {
      title: 'Guidance Counseling Appointment System',
      type: 'Console Application',
      year: '2025',
      status: 'Completed',
      desc: 'A text-based C++ console application that allows students to schedule, view, and manage appointments with a guidance counselor through a menu-driven interface.',
      tools: ['C++', 'Console I/O', 'Functions', 'Arrays'],
      image: '/appoint.jpeg',
      repoLink: 'https://github.com/MACK0820/guidance_cpp.git',
    },
    {
      title: 'Bullet Rush',
      type: '3D Game',
      year: '2025',
      status: 'Completed',
      desc: 'A simple 3D game where players control a character navigating through obstacles and enemies.',
      tools: ['Python', '3D Graphics', 'Game Engine'],
      image: '/bullet.jpeg',
      repoLink: 'https://github.com/MACK0820/Bullet-Rush.git',
    },
    {
      title: 'Skyline Analytics Login Interface',
      type: 'UI Design',
      year: '2026',
      status: 'Ongoing',
      desc: 'A modern login interface for the Skyline Analytics platform. Features a login form with input fields.',
      tools: ['HTML', 'CSS', 'JavaScript'],
      image: 'proj.jpeg',
      repoLink: 'https://github.com/MACK0820/project-gatekeeper-main.git',
      demoLink: 'https://mack0820.github.io/project-gatekeeper-main/'
    },
    {
      title: 'Enrollment Portal',
      type: 'UI Design',
      year: '2026',
      status: 'Completed',
      desc: 'A user-friendly interface for students to manage their enrollment process.',
      tools: ['HTML', 'CSS', 'JavaScript','Forms & Validation'],
      image: '/enroll.jpeg',
      repoLink: 'https://github.com/MACK0820/enrollment-ui-design-main.git',
      demoLink: 'https://enrollment-portal-ui.netlify.app/'
    },
    {
      title: 'Crypto Pulse Website',
      type: 'Web Design',
      year: '2026',
      status: 'Completed',
      desc: 'A modern website for the Crypto Pulse platform. Features a responsive design and interactive elements.',
      tools: ['HTML', 'CSS', 'JavaScript', 'Responsive Design','React.js'],
      image: '/crypto.jpeg',
      repoLink: 'https://github.com/MACK0820/crypto-pulse.git',
      demoLink: 'https://crypto-pulse-five-sigma.vercel.app/'
    },
    {
      title: 'Wedding Invitation Website',
      type: 'UI Design',
      year: '2026',
      status: 'Completed',
      desc: 'A digital wedding invitation that features RSVP functionality.',
      tools: ['HTML', 'CSS', 'JavaScript','React.js', 'Forms & Validation'],
      image: '/wed.jpeg',
      repoLink: 'https://github.com/MACK0820/wedding-invite-project.git',
      demoLink: 'https://wedding-invitation-project-olive.vercel.app/'
    },
    {
      title: 'Guidance Counseling Appointment System Website',
      type: 'UI Design',
      year: '2026',
      status: 'Ongoing',
      desc: 'A user-friendly interface for students to schedule and manage appointments with a guidance counselor.',
      tools: ['HTML', 'CSS', 'JavaScript','React.js', 'Forms & Validation'],
      image: '/guidance.jpeg',
      repoLink: 'https://github.com/MACK0820/Guidance-Counseling-Website.git',
    },
  ]

  const navigation = [
    { id: 'hero', label: 'START'},
    { id: 'about', label: 'ABOUT'},
    { id: 'journey', label: 'JOURNEY'},
    { id: 'achievements', label: 'ACHIEVEMENTS'},
    { id: 'extras', label: 'EXTRAS'},
    { id: 'projects', label: 'PROJECTS'},
    { id: 'connect', label: 'CONNECT'},
  ]

  const renderSection = () => {
    switch (activeSection) {
      case 'hero':
        return <HeroSection setActiveSection={setActiveSection} profilePic={profilePic} isMobile={isMobile} themeStyles={themeStyles} isDark={isDark} />
      case 'about':
        return <AboutSection isMobile={isMobile} themeStyles={themeStyles} />
      case 'journey':
        return <JourneySection education={education} isMobile={isMobile} themeStyles={themeStyles} />
      case 'achievements':
        return <AchievementsSection achievements={achievements} seminars={seminars} certificates={certificates} isMobile={isMobile} themeStyles={themeStyles} />
      case 'extras':
        return <ExtrasSection skillData={skillData} hobbies={hobbies} orgs={orgs} isMobile={isMobile} themeStyles={themeStyles} />
      case 'projects':
        return <ProjectsSection projects={projects} isMobile={isMobile} themeStyles={themeStyles} />
      case 'connect':
        return <ContactAndReferencesSection isMobile={isMobile} themeStyles={themeStyles} />
      default:
        return <HeroSection setActiveSection={setActiveSection} profilePic={profilePic} isMobile={isMobile} themeStyles={themeStyles} isDark={isDark} />
    }
  }

  return (
    <div style={{
      background: themeStyles.bodyBackground,
      color: themeStyles.bodyColor,
      fontWeight: themeStyles.bodyFontWeight,
      minHeight: '100vh',
      fontFamily: "'Syne', 'Inter', sans-serif",
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      width: '100%'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@300;400;600;700&family=Space+Grotesk:wght@600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { width: 100%; height: 100%; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(218, 160, 48, 0.4); border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(218, 160, 48, 0.7); }
        @keyframes pulse-big { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); } }
        @keyframes float-wild { 0%, 100% { transform: translateY(0px) rotate(0deg); } 33% { transform: translateY(-30px) rotate(1deg); } 66% { transform: translateY(-15px) rotate(-1deg); } }
        @keyframes slide-in-left { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slide-in-right { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fade-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* LEFT SIDE NAVIGATION PANEL */}
      <div style={{
        width: isMobile ? '100%' : '280px',
        background: themeStyles.surface,
        borderRight: isMobile ? 'none' : `2px solid ${themeStyles.surfaceBorder}`,
        borderBottom: isMobile ? `2px solid ${themeStyles.surfaceBorder}` : 'none',
        backdropFilter: 'blur(10px)',
        padding: isMobile ? '16px' : '40px 0',
        display: 'flex',
        flexDirection: isMobile ? 'row' : 'column',
        justifyContent: isMobile ? 'space-between' : 'flex-start',
        alignItems: isMobile ? 'center' : 'stretch',
        position: isMobile ? 'relative' : 'sticky',
        top: 0,
        overflowY: isMobile ? 'hidden' : 'auto',
        overflowX: isMobile ? 'auto' : 'hidden',
        zIndex: 100
      }}>
        {/* BRAND */}
        {!isMobile && (
          <div style={{ padding: '0 24px', marginBottom: '60px' }}>
            <div style={{ fontSize: '32px', fontWeight: 800, color: themeStyles.bodyColor, marginBottom: '4px', fontFamily: "'Space Grotesk', sans-serif" }}>
              PORTFOLIO
            </div>
            <div style={{ fontSize: '11px', color: themeStyles.accent, letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700 }}>
              × STUDENT
            </div>
          </div>
        )}

        {/* NAV BUTTONS */}
        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'row' : 'column', 
          gap: isMobile ? '8px' : '12px', 
          paddingRight: isMobile ? '16px' : '24px',
          overflowX: isMobile ? 'auto' : 'visible', 
          paddingBottom: isMobile ? '10px' : '0'
        }}>
          {navigation.map((nav) => (
            <button
              key={nav.id}
              onClick={() => setActiveSection(nav.id)}
              style={{
                padding: isMobile ? '10px 16px' : '16px 20px', 
                background: activeSection === nav.id 
                  ? 'linear-gradient(135deg, rgba(218, 160, 48, 0.3), rgba(218, 160, 48, 0.1))'
                  : 'transparent',
                border: activeSection === nav.id
                  ? '2px solid rgba(218, 160, 48, 0.6)'
                  : '2px solid rgba(218, 160, 48, 0.2)',
                borderRadius: '8px',
                color: activeSection === nav.id ? themeStyles.accent : themeStyles.muted,
                fontFamily: "'Syne', sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? '10px' : '13px', 
                letterSpacing: '1px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '8px', 
                marginLeft: isMobile ? '0' : '24px',
                animation: activeSection === nav.id ? 'pulse-big 2s ease-in-out infinite' : 'none',
                whiteSpace: 'nowrap', 
                flexShrink: 0
              }}
            >
              <span style={{ fontSize: isMobile ? '14px' : '18px' }}>{nav.symbol}</span>
              
              {/* REMOVED !isMobile so label always shows */}
              <span>{nav.label}</span> 
              
            </button>
          ))}
        </div>

        {/* THEME TOGGLE */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'flex-end' : 'center', gap: '10px', marginTop: isMobile ? '14px' : '28px', padding: isMobile ? '0 16px' : '0 24px' }}>
          <span style={{ fontSize: '12px', color: themeStyles.muted, letterSpacing: '1px' }}>
            {isDark ? 'Dark Mode' : 'Light Mode'}
          </span>
          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            style={{
              width: '46px',
              height: '24px',
              borderRadius: '999px',
              border: '1px solid rgba(218, 160, 48, 0.35)',
              background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(34,24,40,0.08)',
              color: themeStyles.bodyColor,
              cursor: 'pointer',
              position: 'relative',
              padding: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: isDark ? 'flex-start' : 'flex-end',
              transition: 'all 0.25s ease'
            }}
          >
            <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: themeStyles.accent, display: 'block' }} />
          </button>
        </div>

        {/* FOOTER TEXT IN NAV */}
        {!isMobile && (
          <div style={{ 
            marginTop: 'auto', 
            padding: '24px 24px 32px 24px', /* Added bottom padding so it doesn't hug the screen edge */
            borderTop: '1px solid rgba(218, 160, 48, 0.2)' 
          }}>
            <div style={{ 
              fontSize: '13px', /* Slightly smaller looks cleaner for a footer */
              color: themeStyles.muted, /* Using muted text makes it subtle and elegant */
              lineHeight: 1.6,
              letterSpacing: '1px',
              fontWeight: 600
            }}>
              <p style={{ margin: 0 }}>© 2026.</p>
            </div>
          </div>
        )}
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, overflow: 'auto', position: 'relative' }}>
        {renderSection()}
      </div>
    </div>
  )
}

function HeroSection({ setActiveSection, profilePic, isMobile, themeStyles, isDark }) {
  return (
    <div style={{
      minHeight: '100vh',
      display: isMobile ? 'flex' : 'grid',
      flexDirection: isMobile ? 'column' : 'row',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      alignItems: 'center',
      padding: isMobile ? '100px 24px 40px 24px' : '80px 120px',
      gap: isMobile ? '56px' : '110px',
      position: 'relative',
      overflow: 'hidden',
      animation: 'slide-in-left 0.8s ease-out'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 30% 50%, rgba(218, 160, 48, 0.05) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      {/* LEFT - TEXT SECTION (Order 2 on mobile to be below photo) */}
      <div style={{ 
        position: 'relative', 
        zIndex: 2, 
        order: isMobile ? 2 : 1,
        width: '100%' 
      }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{
            fontSize: isMobile ? '12px' : '14px',
            color: themeStyles.accent,
            fontWeight: 700,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            → Computer Engineer
          </div>
          <h1 style={{
            fontSize: isMobile ? '72px' : '118px',
            fontWeight: 800,
            lineHeight: 0.85,
            marginBottom: '32px',
            fontFamily: "'Space Grotesk', sans-serif",
            letterSpacing: '-2px',
            color: themeStyles.bodyColor 
          }}>
            FRANCIEN<br/>
            <span style={{
              backgroundImage: isDark 
                ? 'linear-gradient(90deg, #daa030, #f0c050)' 
                : 'linear-gradient(90deg, #b35900, #e67300)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent'
            }}>
              NICOLE
            </span>
          </h1>
        </div>

        <p style={{
          fontSize: isMobile ? '18px' : '22px',
          color: themeStyles.muted,
          lineHeight: 1.9,
          marginBottom: '48px',
          maxWidth: '620px'
        }}>
          Building systems. Writing code. Designing circuits. 2nd year Computer Engineering student at TIP-Manila exploring the intersection of software and hardware.
        </p>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '40px' }}>
          <button
            onClick={() => setActiveSection('about')}
            style={{
              padding: isMobile ? '18px 34px' : '22px 42px',
              background: 'linear-gradient(135deg, #daa030, #f0c050)',
              color: '#0f0a0f',
              border: 'none',
              borderRadius: '8px',
              fontSize: isMobile ? '15px' : '18px',
              fontWeight: 700,
              letterSpacing: '1.75px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 12px 36px rgba(218, 160, 48, 0.35)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(218, 160, 48, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(218, 160, 48, 0.3)'
            }}
          >
            EXPLORE →
          </button>
          <div style={{ fontSize: '12px', color: themeStyles.muted }}>
            or use the nav
          </div>
        </div>

        {/* QUICK STATS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '26px', marginTop: '100px', maxWidth: '640px' }}>
          <div style={{
            padding: isMobile ? '32px 22px' : '34px 24px',
            background: 'linear-gradient(135deg, rgba(218, 160, 48, 0.1), rgba(218, 160, 48, 0.05))',
            border: '2px solid rgba(218, 160, 48, 0.4)',
            borderRadius: '12px',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            boxShadow: '0 0 15px rgba(218, 160, 48, 0.2)',
            textAlign: 'center'
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(218, 160, 48, 0.8)'
              e.currentTarget.style.boxShadow = '0 0 30px rgba(218, 160, 48, 0.5), inset 0 0 20px rgba(218, 160, 48, 0.1)'
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(218, 160, 48, 0.2), rgba(218, 160, 48, 0.12))'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(218, 160, 48, 0.4)'
              e.currentTarget.style.boxShadow = '0 0 15px rgba(218, 160, 48, 0.2)'
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(218, 160, 48, 0.1), rgba(218, 160, 48, 0.05))'
            }}>
            <div style={{ fontSize: isMobile ? '46px' : '64px', fontWeight: 800, color: '#daa030', marginBottom: '8px' }}>20</div>
            <div style={{ fontSize: isMobile ? '13px' : '14px', color: themeStyles.muted, textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Years Old</div>
          </div>

          <div style={{
            padding: '28px 20px',
            background: 'linear-gradient(135deg, rgba(218, 160, 48, 0.1), rgba(218, 160, 48, 0.05))',
            border: '2px solid rgba(218, 160, 48, 0.4)',
            borderRadius: '12px',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            boxShadow: '0 0 15px rgba(218, 160, 48, 0.2)',
            textAlign: 'center'
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(218, 160, 48, 0.8)'
              e.currentTarget.style.boxShadow = '0 0 30px rgba(218, 160, 48, 0.5), inset 0 0 20px rgba(218, 160, 48, 0.1)'
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(218, 160, 48, 0.2), rgba(218, 160, 48, 0.12))'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(218, 160, 48, 0.4)'
              e.currentTarget.style.boxShadow = '0 0 15px rgba(218, 160, 48, 0.2)'
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(218, 160, 48, 0.1), rgba(218, 160, 48, 0.05))'
            }}>
            <div style={{ fontSize: isMobile ? '40px' : '56px', fontWeight: 800, color: '#daa030', marginBottom: '8px' }}>2nd</div>
            <div style={{ fontSize: '12px', color: themeStyles.muted, textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Year College</div>
          </div>

          <div style={{
            padding: '28px 20px',
            background: 'linear-gradient(135deg, rgba(218, 160, 48, 0.1), rgba(218, 160, 48, 0.05))',
            border: '2px solid rgba(218, 160, 48, 0.4)',
            borderRadius: '12px',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            boxShadow: '0 0 15px rgba(218, 160, 48, 0.2)',
            textAlign: 'center'
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(218, 160, 48, 0.8)'
              e.currentTarget.style.boxShadow = '0 0 30px rgba(218, 160, 48, 0.5), inset 0 0 20px rgba(218, 160, 48, 0.1)'
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(218, 160, 48, 0.2), rgba(218, 160, 48, 0.12))'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(218, 160, 48, 0.4)'
              e.currentTarget.style.boxShadow = '0 0 15px rgba(218, 160, 48, 0.2)'
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(218, 160, 48, 0.1), rgba(218, 160, 48, 0.05))'
            }}>
            <div style={{ fontSize: isMobile ? '40px' : '56px', fontWeight: 800, color: '#daa030', marginBottom: '8px' }}>9+</div>
            <div style={{ fontSize: '12px', color: themeStyles.muted, textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Awards & Recognition</div>
          </div>
        </div>
      </div>

      {/* RIGHT - WILD PHOTO DISPLAY (Order 1 on mobile to be on top) */}
        <div style={{
          flex: 1,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: isMobile ? '400px' : '750px', 
          animation: 'slide-in-right 0.8s ease-out',
          width: '100%',
          order: isMobile ? 1 : 2
        }}>
          <div style={{
            position: 'absolute',
            width: isMobile ? '320px' : '550px',
            height: isMobile ? '320px' : '550px',
            background: 'linear-gradient(135deg, rgba(218, 160, 48, 0.15), rgba(218, 160, 48, 0.05))',
            borderRadius: '20px',
            transform: 'rotate(15deg)',
            boxShadow: '0 0 60px rgba(132, 114, 80, 0.2)'
          }} />

          <div style={{
            position: 'absolute',
            width: isMobile ? '220px' : '380px',
            height: isMobile ? '220px' : '380px',
            background: 'linear-gradient(135deg, rgba(218, 160, 48, 0.1), transparent)',
            border: '2px solid rgba(218, 160, 48, 0.3)',
            borderRadius: '20px',
            transform: 'rotate(-10deg)',
          }} />

          {/* IMAGE FRAME */}
          <div style={{
            position: 'relative',
            width: isMobile ? '540px' : '480px',
            height: isMobile ? '540px' : '620px',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '3px solid rgba(218, 160, 48, 0.5)',
            boxShadow: '0 20px 60px rgba(218, 160, 48, 0.3), inset 0 0 30px rgba(218, 160, 48, 0.1)',
            background: 'linear-gradient(135deg, rgba(218, 160, 48, 0.2), rgba(218, 160, 48, 0.05))',
            animation: 'float-wild 4s ease-in-out infinite',
            zIndex: 10
          }}>
            <img
              src={profilePic}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease-out',
                transform: 'scale(1)',
                cursor: 'zoom-in'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.15)'
                e.currentTarget.style.cursor = 'zoom-out'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.cursor = 'zoom-in'
              }}
              alt="Francien"
            />

            {/* OVERLAY TEXT */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(15, 10, 15, 0.9), transparent)',
              padding: isMobile ? '16px' : '32px',
              color: themeStyles.bodyColor
            }}>
              <div style={{ fontSize: isMobile ? '14px' : '18px', fontWeight: 600 }}>Exploring the World</div>
            </div>
          </div>

          {/* ACCENT SHAPES */}
          <div style={{
            position: 'absolute',
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, #daa030, transparent)',
            borderRadius: '50%',
            bottom: '20px',
            right: isMobile ? '0px' : '-40px',
            opacity: 0.3
          }} />

          <div style={{
            position: 'absolute',
            width: '60px',
            height: '60px',
            border: '2px solid rgba(218, 160, 48, 0.4)',
            borderRadius: '50%',
            top: '20px',
            left: isMobile ? '0px' : '-30px'
          }} />
        </div>
    </div>
  )
}

function AboutSection({ isMobile, themeStyles }) {
  const isDark = themeStyles.accent === '#daa030';

  const timelineData = [
    {
      period: "The Beginning",
      title: "Discovering My Voice",
      text: [
        "I'm Francien Nicole Ausan, a 20-year-old Computer Engineering student at TIP-Manila, born on November 1, 2005, and currently living in Pasig City, Philippines. My educational journey began at East Rembo Elementary School before transferring to Comembo Elementary School in Grade 2, where I spent the rest of my grade school years slowly discovering my interests.",
        "Growing up, I was always eager to learn and try new things, which led me to join various school activities like storytelling, poem recitation, and Balagtasan. A truly memorable moment came in Grade 6 when my English teacher encouraged me to try radio broadcasting. I was fortunate enough to be part of a team that competed at the district and division levels, where we unexpectedly won first place. We even reached the regional level, placing 4th in the technical category for Filipino. That experience, along with receiving the Best in Filipino award at graduation, taught me the value of teamwork and gave me a quiet sense of confidence in my ability to communicate."
      ],
      icon: "🎙️"
    },
    {
      period: "Junior High",
      title: "Exploring & Building Resilience",
      text: [
        "For junior high, I attended Benigno 'Ninoy' S. Aquino High School (BNAHS). Wanting to continue my journey in journalism, I joined the school's journalism club, Epistles and The Clarion, and tried radio broadcasting again this time in English. It was a humbling experience; English wasn't my strongest subject, and we didn't win. However, the experience taught me resilience. I continued to explore my interests and later placed 3rd in the Sci Talk competition during Science Month, which kept my curiosity alive."
      ],
      icon: "🔬"
    },
    {
      period: "Senior High & The Pandemic",
      title: "Finding My Footing",
      text: [
        "Then, the pandemic happened. Like it did for many of us, the sudden shift to online classes took a toll on my momentum and self-confidence. The quiet isolation of those years made me a bit more hesitant and shy as I prepared for the next chapter of my education.",
        "Entering Senior High School at Arellano University – Andres Bonifacio Campus (STEM track) was about finding my footing again. I was blessed to meet supportive friends who are still by my side today. I simply focused on doing my best every day, and I was deeply grateful to graduate Grade 11 and 12 With High Honors. It was a gentle reminder that hard work still pays off, even in the moments when you doubt yourself."
      ],
      icon: "⭐"
    },
    {
      period: "College (Present)",
      title: "Building The Future",
      text: [
        "Today, I am in my 2nd year of taking up BS Computer Engineering at TIP-Manila, with a focus elective in Cybersecurity. I spend my time learning to build systems, write code, and complete Cisco modules slowly working toward becoming an engineer. I am still a work in progress, and I am still building my confidence, but every project, every challenge, and every late-night debugging session is a step forward in this journey."
      ],
      icon: "💻"
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      padding: isMobile ? '40px 20px' : '80px',
      display: 'flex',
      gap: '60px',
      position: 'relative',
      overflow: 'hidden' 
    }}>
      
      {/* --- ALL THE EPIC ANIMATIONS --- */}
      <style>
        {`
          @keyframes slideFadeIn {
            from { opacity: 0; transform: translateX(-40px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes glowPulseHover {
            0% { box-shadow: 0 0 10px rgba(218, 160, 48, 0.2); transform: scale(1); }
            50% { box-shadow: 0 0 25px ${themeStyles.accent}; transform: scale(1.3); }
            100% { box-shadow: 0 0 10px rgba(218, 160, 48, 0.2); transform: scale(1); }
          }
          @keyframes dotPulse {
            0% { box-shadow: 0 0 0 0 ${isDark ? 'rgba(218, 160, 48, 0.4)' : 'rgba(153, 77, 0, 0.3)'}; }
            70% { box-shadow: 0 0 0 10px rgba(218, 160, 48, 0); }
            100% { box-shadow: 0 0 0 0 rgba(218, 160, 48, 0); }
          }
          @keyframes floatOrb1 {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(50px, -100px) scale(1.2); }
            66% { transform: translate(-50px, 50px) scale(0.8); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          @keyframes floatOrb2 {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(-80px, 80px) scale(1.1); }
            66% { transform: translate(40px, -40px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          @keyframes tracerMove {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
          @keyframes floatBlock {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
          }
          @keyframes textShimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
        `}
      </style>

      {/* AMBIENT BACKGROUND ORBS */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '400px',
        height: '400px',
        background: isDark ? 'radial-gradient(circle, rgba(218, 160, 48, 0.15) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(230, 115, 0, 0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 0,
        animation: 'floatOrb1 20s infinite ease-in-out',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '20%',
        width: '350px',
        height: '350px',
        background: isDark ? 'radial-gradient(circle, rgba(184, 136, 176, 0.1) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(59, 89, 152, 0.1) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 0,
        animation: 'floatOrb2 25s infinite ease-in-out reverse',
        pointerEvents: 'none'
      }} />

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, maxWidth: '900px', zIndex: 1 }}>
        <h2 style={{
          fontSize: isMobile ? '42px' : '64px',
          fontWeight: 800,
          marginBottom: '40px',
          fontFamily: "'Space Grotesk', sans-serif",
          letterSpacing: '-1px',
          color: themeStyles.bodyColor,
          animation: 'slideFadeIn 0.8s ease-out forwards'
        }}>
          MY STORY
        </h2>

        {/* THE INTERACTIVE TIMELINE */}
        <div style={{ 
          position: 'relative', 
          paddingLeft: isMobile ? '20px' : '40px',
          borderLeft: `2px solid ${isDark ? 'rgba(218, 160, 48, 0.2)' : 'rgba(0,0,0,0.1)'}` 
        }}>
          
          {/* THE NEW GLOWING TRACER LINE */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '-2px', 
            width: '2px',
            height: '150px',
            background: `linear-gradient(to bottom, transparent, ${themeStyles.accent}, transparent)`,
            boxShadow: `0 0 10px ${themeStyles.accent}`,
            animation: 'tracerMove 4s cubic-bezier(0.4, 0, 0.2, 1) infinite',
            zIndex: 2,
            opacity: isDark ? 1 : 0.6
          }} />
          
          {timelineData.map((item, index) => (
            <div 
              key={index} 
              style={{
                position: 'relative',
                marginBottom: '40px',
                background: isDark ? 'rgba(34, 24, 40, 0.4)' : 'rgba(255, 255, 255, 0.5)', 
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`, 
                borderRadius: '20px',
                padding: isMobile ? '24px' : '36px',
                opacity: 0, 
                animation: `slideFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                animationDelay: `${index * 0.2}s`, 
                transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.border = `1px solid ${themeStyles.accent}`;
                e.currentTarget.style.boxShadow = `0 20px 40px ${isDark ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.1)'}, 0 0 20px ${isDark ? 'rgba(218, 160, 48, 0.15)' : 'rgba(153, 77, 0, 0.15)'}`;
                e.currentTarget.querySelector('.timeline-dot').style.animation = 'glowPulseHover 2s infinite';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.border = `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`;
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.querySelector('.timeline-dot').style.animation = 'dotPulse 2s infinite';
              }}
            >
              <div 
                className="timeline-dot"
                style={{
                  position: 'absolute',
                  left: isMobile ? '-31px' : '-51px', 
                  top: '40px',
                  width: '16px', 
                  height: '16px',
                  borderRadius: '50%',
                  background: themeStyles.accent,
                  border: `4px solid ${isDark ? '#1a0f1f' : '#f0e9de'}`, 
                  transition: 'all 0.3s ease',
                  zIndex: 3,
                  animation: 'dotPulse 2s infinite' 
                }} 
              />

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{ 
                  fontSize: '28px', 
                  background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)', 
                  padding: '12px', 
                  borderRadius: '12px',
                  border: `1px solid ${themeStyles.surfaceBorder}`
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: '13px', color: themeStyles.accent, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>
                    {item.period}
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: themeStyles.bodyColor, margin: '4px 0 0 0', fontFamily: "'Space Grotesk', sans-serif" }}>
                    {item.title}
                  </h3>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {item.text.map((paragraph, pIndex) => (
                  <p key={pIndex} style={{ color: themeStyles.muted, lineHeight: '1.9', fontSize: '16px', margin: 0 }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* OBJECTIVE BOX */}
          <div style={{
            position: 'relative',
            marginTop: '60px',
            marginBottom: '40px',
            padding: '36px',
            background: isDark ? 'linear-gradient(135deg, rgba(218, 160, 48, 0.1), rgba(218, 160, 48, 0.02))' : 'linear-gradient(135deg, rgba(153, 77, 0, 0.1), rgba(153, 77, 0, 0.02))',
            borderRadius: '0 20px 20px 20px',
            borderLeft: `4px solid ${themeStyles.accent}`,
            backdropFilter: 'blur(10px)',
            opacity: 0,
            animation: `slideFadeIn 0.8s ease-out forwards`,
            animationDelay: `0.8s`, 
          }}>
             {/* Final Timeline Dot */}
             <div style={{ 
               position: 'absolute', 
               left: isMobile ? '-31px' : '-51px',
               top: '-4px', 
               width: '20px', 
               height: '20px', 
               borderRadius: '50%', 
               background: isDark ? '#1a0f1f' : '#f0e9de', 
               border: `4px solid ${themeStyles.accent}`, 
               display: 'flex', 
               alignItems: 'center', 
               justifyContent: 'center',
               zIndex: 3,
               animation: 'dotPulse 2.5s infinite' 
             }}>
               <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: themeStyles.accent }} />
             </div>

            <div style={{ fontSize: '15px', color: themeStyles.accent, fontWeight: 800, marginBottom: '16px', letterSpacing: '3px', textTransform: 'uppercase', position: 'relative', zIndex: 1 }}>
              &lt; Core Objective /&gt;
            </div>
            
            {/* The Shimmering Text Effect */}
            <p style={{ 
              margin: 0, 
              fontStyle: 'italic', 
              fontWeight: 700, 
              fontSize: '20px',
              lineHeight: 1.8,
              position: 'relative',
              zIndex: 1,
              backgroundImage: `linear-gradient(90deg, ${themeStyles.bodyColor} 0%, ${themeStyles.accent} 50%, ${themeStyles.bodyColor} 100%)`,
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              animation: 'textShimmer 6s linear infinite'
            }}>
              To continuously learn and grow as a computer engineer, understand how to build secure systems, and contribute meaningfully to the tech community while encouraging others to pursue their passions despite their self-doubts.
            </p>
          </div>

        </div>
      </div>

      {/* RIGHT DECORATION PANEL */}
      {!isMobile && (
        <div style={{ width: '220px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '24px', paddingTop: '20px', paddingLeft: '40px', zIndex: 1 }}>
          <div style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontSize: '15px', letterSpacing: '6px', color: themeStyles.muted, textTransform: 'uppercase', alignSelf: 'flex-start', marginBottom: '12px' }}>
            Portfolio · 2026
          </div>
          
          {/* FLOATING STAT BLOCKS */}
          {[['20', 'Years Old'], ['2nd', 'Year CPE'], ['TIP', 'Manila'], ['STEM', 'Background']].map(([n, l], i) => (
            <div key={l} style={{ 
              padding: '20px', 
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`, 
              borderRadius: '16px', 
              background: isDark ? 'rgba(34, 24, 40, 0.4)' : 'rgba(255, 255, 255, 0.5)', 
              backdropFilter: 'blur(10px)',
              textAlign: 'center', 
              transition: 'all 0.3s',
              animation: `floatBlock 4s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
              onMouseEnter={e => { 
                e.currentTarget.style.borderColor = themeStyles.accent; 
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.animationPlayState = 'paused'; 
              }}
              onMouseLeave={e => { 
                e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'; 
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.animationPlayState = 'running';
              }}>
              <div style={{ fontSize: '32px', fontWeight: 800, color: themeStyles.accent, fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: '12px', color: themeStyles.muted, letterSpacing: '2px', textTransform: 'uppercase', marginTop: '10px', fontWeight: 700 }}>{l}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function JourneySection({ education, isMobile, themeStyles }) {
  const isDark = themeStyles.accent === '#daa030';

  return (
    <div style={{
      minHeight: '100vh',
      padding: isMobile ? '40px 20px' : '80px',
      display: 'flex',
      gap: '60px',
      position: 'relative',
      overflow: 'hidden'  
    }}>
      
      {/* --- ALL THE NEW ANIMATIONS --- */}
      <style>
        {`
          @keyframes slideFadeUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes floatSlow {
            0% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-30px) scale(1.1); }
            100% { transform: translateY(0px) scale(1); }
          }
          @keyframes pulseGlow {
            0% { box-shadow: 0 0 0 0 ${isDark ? 'rgba(218, 160, 48, 0.4)' : 'rgba(153, 77, 0, 0.3)'}; }
            70% { box-shadow: 0 0 0 10px rgba(218, 160, 48, 0); }
            100% { box-shadow: 0 0 0 0 rgba(218, 160, 48, 0); }
          }
          @keyframes energyFlow {
            0% { background-position: 0% -100%; }
            100% { background-position: 0% 200%; }
          }
          @keyframes textShimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
        `}
      </style>

      {/* AMBIENT BACKGROUND ORBS */}
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: isDark ? 'radial-gradient(circle, rgba(218, 160, 48, 0.08) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(153, 77, 0, 0.08) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 0,
        animation: 'floatSlow 12s infinite ease-in-out',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '500px',
        height: '500px',
        background: isDark ? 'radial-gradient(circle, rgba(184, 136, 176, 0.05) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(59, 89, 152, 0.08) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 0,
        animation: 'floatSlow 15s infinite ease-in-out reverse',
        pointerEvents: 'none'
      }} />

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, zIndex: 1 }}>
        <h2 style={{
          fontSize: isMobile ? '42px' : '64px',
          fontWeight: 800,
          marginBottom: '60px',
          fontFamily: "'Space Grotesk', sans-serif",
          letterSpacing: '-1px',
          backgroundImage: `linear-gradient(90deg, ${themeStyles.bodyColor} 0%, ${themeStyles.accent} 50%, ${themeStyles.bodyColor} 100%)`,
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
          animation: 'slideFadeUp 0.8s ease-out forwards, textShimmer 5s linear infinite'
        }}>
          MY JOURNEY
        </h2>

        <div style={{ display: 'grid', gap: '24px', maxWidth: isMobile ? '100%' : '900px' }}>
          {education.map((edu, i) => (
            <div
              key={i}
              style={{
                background: isDark 
                  ? 'linear-gradient(135deg, rgba(34, 24, 40, 0.8), rgba(20, 15, 25, 0.9))' 
                  : 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: isDark 
                  ? '2px solid rgba(218, 160, 48, 0.3)' 
                  : `2px solid ${themeStyles.surfaceBorder}`,
                borderRadius: '16px',
                padding: isMobile ? '24px' : '32px',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: isDark 
                  ? '0 0 15px rgba(218, 160, 48, 0.05)' 
                  : '0 4px 20px rgba(0,0,0,0.05)',
                opacity: 0,
                animation: `slideFadeUp 0.6s ease-out forwards`,
                animationDelay: `${0.2 + (i * 0.15)}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = isDark ? 'rgba(218, 160, 48, 0.8)' : themeStyles.accent;
                e.currentTarget.style.background = isDark 
                  ? 'linear-gradient(135deg, rgba(218, 160, 48, 0.15), rgba(34, 24, 40, 0.9))' 
                  : 'rgba(255, 255, 255, 0.9)';
                e.currentTarget.style.boxShadow = isDark 
                  ? '0 0 30px rgba(218, 160, 48, 0.3), inset 0 0 20px rgba(218, 160, 48, 0.1)' 
                  : '0 15px 35px rgba(0,0,0,0.1)';
                e.currentTarget.style.transform = isDark ? 'translateX(12px) translateY(-5px)' : 'translateY(-8px) scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = isDark ? 'rgba(218, 160, 48, 0.3)' : themeStyles.surfaceBorder;
                e.currentTarget.style.background = isDark 
                  ? 'linear-gradient(135deg, rgba(34, 24, 40, 0.8), rgba(20, 15, 25, 0.9))' 
                  : 'rgba(255, 255, 255, 0.6)';
                e.currentTarget.style.boxShadow = isDark ? '0 0 15px rgba(218, 160, 48, 0.05)' : '0 4px 20px rgba(0,0,0,0.05)';
                e.currentTarget.style.transform = 'translateX(0) translateY(0) scale(1)';
              }}
            >
              {/* PULSING BADGE IN THE UPPER RIGHT CORNER */}
              <div style={{ 
                position: 'absolute', 
                top: isMobile ? '20px' : '28px', 
                right: isMobile ? '20px' : '28px', 
                fontSize: '11px', 
                color: isDark ? themeStyles.muted : themeStyles.accent, 
                textTransform: 'uppercase', 
                letterSpacing: '2px', 
                fontWeight: 800,
                padding: '6px 14px', 
                background: isDark ? 'rgba(218, 160, 48, 0.12)' : 'rgba(153, 77, 0, 0.12)', 
                border: `1px solid ${isDark ? 'rgba(218, 160, 48, 0.3)' : 'rgba(153, 77, 0, 0.3)'}`,
                borderRadius: '999px',
                animation: 'pulseGlow 2.5s infinite' 
              }}>
                {edu.status}
              </div>

              <div style={{ fontSize: '12px', color: isDark ? '#daa030' : themeStyles.accent, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '10px' }}>
                {edu.period}
              </div>
              
              <div style={{ marginBottom: '12px', paddingRight: '100px' }}>
                <div style={{ fontSize: isMobile ? '20px' : '26px', fontWeight: 800, color: isDark ? themeStyles.accent : themeStyles.bodyColor, fontFamily: "'Space Grotesk', sans-serif" }}>
                  {edu.level}
                </div>
              </div>

              <div style={{ fontSize: isMobile ? '14px' : '16px', color: isDark ? themeStyles.muted : themeStyles.bodyColor, fontWeight: 600, lineHeight: 1.6, marginBottom: '8px' }}>
                {edu.school}
              </div>
              
              {edu.course && (
                <div style={{ fontSize: '14px', color: themeStyles.muted, marginBottom: '16px' }}>
                  {edu.course}
                </div>
              )}

              {edu.details && (
                <div style={{
                  fontSize: isMobile ? '13px' : '14px',
                  color: isDark ? '#daa030' : themeStyles.bodyColor,
                  fontStyle: 'italic',
                  fontWeight: 600,
                  padding: '14px',
                  background: isDark ? 'rgba(218, 160, 48, 0.08)' : 'rgba(153, 77, 0, 0.05)',
                  borderLeft: isDark ? '3px solid rgba(218, 160, 48, 0.6)' : `3px solid ${themeStyles.accent}`,
                  borderRadius: '4px',
                  marginTop: '16px'
                }}>
                  ✨ {edu.details}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT DECORATION PANEL */}
      {!isMobile && (
        <div style={{ width: '300px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '140px', borderLeft: isDark ? '1px solid rgba(218, 160, 48, 0.15)' : `1px solid ${themeStyles.surfaceBorder}`, paddingLeft: '32px', zIndex: 1 }}>
          <div style={{ fontSize: '25px', letterSpacing: '3px', color: isDark ? 'rgba(218,160,48,0.5)' : themeStyles.muted, textTransform: 'uppercase', marginBottom: '8px' }}>Timeline</div>
          
          {['Elementary', 'Junior High', 'Senior High', 'College'].map((stage, i) => (
            <div key={stage} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              opacity: 0,
              animation: 'slideFadeUp 0.6s ease-out forwards',
              animationDelay: `${0.8 + (i * 0.1)}s`
            }}>
              <div style={{ 
                width: '10px', 
                height: '10px', 
                borderRadius: '50%', 
                background: isDark ? themeStyles.accent : themeStyles.accent, 
                boxShadow: isDark ? `0 0 10px ${themeStyles.accent}` : 'none',
                opacity: isDark ? (0.4 + i * 0.2) : (0.3 + i * 0.2), 
                flexShrink: 0 
              }} />
              <div style={{ fontSize: '17px', fontWeight: 600, color: isDark ? 'rgba(218,160,48,0.7)' : themeStyles.bodyColor, letterSpacing: '1px' }}>{stage}</div>
            </div>
          ))}
          
          {/* FLOWING ENERGY TIMELINE TRACK */}
          <div style={{ 
            width: '2px', 
            height: '100px', 
            marginLeft: '4px', 
            borderRadius: '2px',
            background: isDark 
              ? `linear-gradient(to bottom, transparent, ${themeStyles.accent}, transparent)` 
              : `linear-gradient(to bottom, transparent, ${themeStyles.accent}, transparent)`,
            backgroundSize: '100% 200%',
            opacity: isDark ? 0.8 : 0.4,
            animation: 'energyFlow 3s linear infinite' 
          }} />
          
          {/* small quote */}
          <div style={{ padding: '16px', border: isDark ? '1px solid rgba(218,160,48,0.2)' : `1px solid ${themeStyles.surfaceBorder}`, borderRadius: '12px', background: isDark ? 'rgba(218,160,48,0.05)' : 'rgba(0,0,0,0.02)', marginTop: '12px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ fontSize: '15px', color: themeStyles.muted, lineHeight: 1.6, fontStyle: 'italic', position: 'relative', zIndex: 1 }}>"Every step was a lesson."</div>
          </div>
          
          {/* Dot grid */}
          {isDark && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginTop: '16px' }}>
              {Array(16).fill(0).map((_, i) => (
                <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: `rgba(218,160,48,${0.05 + (i % 4) * 0.08})`, margin: '0 auto' }} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function AchievementsSection({ achievements, seminars, certificates, isMobile, themeStyles }) {
  const groupedAchievements = {
    'Elementary': achievements.filter(a => a.level === 'Elementary'),
    'Junior High': achievements.filter(a => a.level === 'Junior High'),
    'Senior High': achievements.filter(a => a.level === 'Senior High'),
    'College': achievements.filter(a => a.level === 'College'),
    'Personal': achievements.filter(a => a.level === 'Personal'),
  }

  const orderedSeminars = [...seminars].sort((a, b) => new Date(a.date) - new Date(b.date))

  const levels = ['Elementary', 'Junior High', 'Senior High', 'College', 'Personal']
  const colors = {
    'Elementary': '#6b4a12',
    'Junior High': '#b8821e',
    'Senior High': '#daa030',
    'College': '#f0c050',
    'Personal': '#f0e8f0'
  }

  return (
    <div style={{
      minHeight: '100vh',
      padding: isMobile ? '40px 20px' : '80px',
      animation: 'slide-in-right 0.6s ease-out'
    }}>
      <h2 style={{
        fontSize: isMobile ? '42px' : '64px',
        fontWeight: 800,
        marginBottom: '60px',
        fontFamily: "'Space Grotesk', sans-serif",
        letterSpacing: '-1px',
        color: themeStyles.bodyColor 
      }}>
        AWARDS & RECOGNITION
      </h2>

      {levels.map((level) => (
        groupedAchievements[level].length > 0 && (
          <div key={level} style={{ marginBottom: '60px' }}>
            {/* LEVEL HEADER */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '32px',
              paddingBottom: '16px',
              borderBottom: `3px solid ${colors[level]}`
            }}>
              <div style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: colors[level],
                boxShadow: `0 0 15px ${colors[level]}80`
              }} />
              <h3 style={{
                fontSize: isMobile ? '24px' : '32px',
                fontWeight: 700,
                color: colors[level],
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: '-0.5px'
              }}>
                {level}
              </h3>
              <span style={{
                fontSize: '14px',
                color: themeStyles.muted,
                marginLeft: 'auto',
                fontWeight: 600
              }}>
                {groupedAchievements[level].length} {groupedAchievements[level].length === 1 ? 'achievement' : 'achievements'}
              </span>
            </div>

            {/* ACHIEVEMENTS GRID */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
              marginBottom: '20px'
            }}>
              {groupedAchievements[level].map((ach, i) => (
                <div
                  key={i}
                  style={{
                    background: 'linear-gradient(135deg, rgba(218, 160, 48, 0.1), rgba(218, 160, 48, 0.05))',
                    border: `2px solid ${colors[level]}40`,
                    borderRadius: '12px',
                    padding: isMobile ? '20px' : '24px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${colors[level]}99`
                    e.currentTarget.style.background = `linear-gradient(135deg, rgba(218, 160, 48, 0.2), rgba(218, 160, 48, 0.1))`
                    e.currentTarget.style.transform = 'translateY(-6px)'
                    e.currentTarget.style.boxShadow = `0 10px 30px ${colors[level]}40`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${colors[level]}40`
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(218, 160, 48, 0.1), rgba(218, 160, 48, 0.05))'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >

                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    fontSize: isMobile ? '28px' : '32px', 
                    marginBottom: '12px' 
                  }}>
                    {ach.badgeImage ? (
                      <img 
                        src={ach.badgeImage} 
                        alt={ach.title} 
                        style={{ 
                          width: '50px', 
                          height: 'auto',
                          objectFit: 'contain' 
                        }} 
                      />
                    ) : (
                      ach.badge
                    )}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    {/* 1. TITLE */}
                    <div style={{ fontWeight: 700, fontSize: '18px', color: themeStyles.bodyColor }}>
                      {ach.title}
                    </div>

                    {/* 2. ORGANIZATION (Clearly visible right under the title!) */}
                    {ach.org && (
                      <div style={{ fontSize: '15px', color: themeStyles.accent, marginTop: '6px', fontWeight: 600 }}>
                        {ach.org}
                      </div>
                    )}

                    {/* 3. DESCRIPTION (Below the org, before the date!) */}
                    {ach.description && (
                      <div style={{ 
                        fontSize: '15px', 
                        color: themeStyles.muted, 
                        marginTop: '8px',
                        marginBottom: '8px',
                        lineHeight: '1.5',
                        maxWidth: '90%'
                      }}>
                        {ach.description}
                      </div>
                    )}

                    {/* 4. YEAR (Safely at the bottom) */}
                    <div style={{ fontSize: '15px', color: themeStyles.muted, marginTop: '4px', opacity: 0.8 }}>
                      {ach.year}
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      ))}

      {/* ── SEMINARS ATTENDED ── */}
      <div style={{ marginBottom: '60px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '32px',
          paddingBottom: '16px',
          borderBottom: '3px solid rgba(218, 160, 48, 0.5)'
        }}>
          <div style={{
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            background: 'rgba(218, 160, 48, 0.7)',
            boxShadow: '0 0 15px rgba(218, 160, 48, 0.5)'
          }} />
          <h3 style={{
            fontSize: isMobile ? '24px' : '32px',
            fontWeight: 700,
            color: 'rgba(218, 160, 48, 0.9)',
            fontFamily: "'Space Grotesk', sans-serif",
            letterSpacing: '-0.5px'
          }}>
            Seminars Attended
          </h3>
          <span style={{ fontSize: '14px', color: themeStyles.muted, marginLeft: 'auto', fontWeight: 600 }}>
            {seminars.length} seminars
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {orderedSeminars.map((s, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '18px 24px',
              background: 'linear-gradient(135deg, rgba(218, 160, 48, 0.08), rgba(218, 160, 48, 0.02))',
              border: '2px solid rgba(218, 160, 48, 0.25)',
              borderRadius: '10px',
              transition: 'all 0.3s ease',
              cursor: 'default',
              opacity: 0,
              animation: 'fade-up 0.7s ease-out forwards',
              animationDelay: `${i * 0.08}s`,
              willChange: 'transform, opacity'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(218, 160, 48, 0.6)'
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(218, 160, 48, 0.15), rgba(218, 160, 48, 0.07))'
              e.currentTarget.style.transform = 'translateX(8px)'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(218, 160, 48, 0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(218, 160, 48, 0.25)'
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(218, 160, 48, 0.08), rgba(218, 160, 48, 0.02))'
              e.currentTarget.style.transform = 'translateX(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}>
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '24px',
                fontWeight: 800,
                color: 'rgba(218, 160, 48, 0.3)',
                lineHeight: 1,
                minWidth: '36px'
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: isMobile ? '15px' : '17px', fontWeight: 700, color: themeStyles.bodyColor, marginBottom: '3px' }}>
                  {s.name}
                </div>
                <div style={{ fontSize: '14px', color: themeStyles.muted }}>{s.org}</div>
              </div>
              <div style={{ fontSize: '14px', color: '#daa030', fontWeight: 600, letterSpacing: '1px', whiteSpace: 'nowrap' }}>
                {s.date}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CERTIFICATES ACQUIRED ── */}
      <div style={{ marginBottom: '60px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '32px',
          paddingBottom: '16px',
          borderBottom: '3px solid rgba(240, 192, 80, 0.5)'
        }}>
          <div style={{
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            background: '#f0c050',
            boxShadow: '0 0 15px rgba(240, 192, 80, 0.6)'
          }} />
          <h3 style={{
            fontSize: isMobile ? '24px' : '32px',
            fontWeight: 700,
            color: '#f0c050',
            fontFamily: "'Space Grotesk', sans-serif",
            letterSpacing: '-0.5px'
          }}>
            Certificates Acquired
          </h3>
          <span style={{ fontSize: '14px', color: themeStyles.muted, marginLeft: 'auto', fontWeight: 600 }}>
            {certificates.length} certificates
          </span>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px',
        }}>
          {certificates.map((c, i) => (
            <div key={i} style={{
              background: 'linear-gradient(135deg, rgba(240, 192, 80, 0.1), rgba(240, 192, 80, 0.03))',
              border: '2px solid rgba(240, 192, 80, 0.3)',
              borderRadius: '12px',
              padding: isMobile ? '20px' : '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'default',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(240, 192, 80, 0.7)'
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(240, 192, 80, 0.18), rgba(240, 192, 80, 0.08))'
              e.currentTarget.style.transform = 'translateY(-6px)'
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(240, 192, 80, 0.25)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(240, 192, 80, 0.3)'
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(240, 192, 80, 0.1), rgba(240, 192, 80, 0.03))'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(to right, rgba(218,160,48,0.5), rgba(240,192,80,0.8), rgba(218,160,48,0.5))' }} />
              <span style={{ fontSize: '32px' }}>{c.emoji}</span>
              <div style={{ width: '100%', height: '110px', borderRadius: '12px', overflow: 'hidden', background: 'rgba(255,255,255,0.06)', marginTop: '10px', marginBottom: '14px' }}>
                <img src={c.imageUrl} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ fontSize: isMobile ? '15px' : '17px', fontWeight: 700, color: themeStyles.bodyColor, lineHeight: 1.3 }}>
                {c.title}
              </div>
              <div style={{ fontSize: '14px', color: '#daa030', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 600, marginBottom: '14px' }}>
                {c.issuer}
              </div>
              {c.proofLink && (
                <a
                  href={c.proofLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '10px 16px',
                    borderRadius: '999px',
                    background: 'rgba(218, 160, 48, 0.18)',
                    color: themeStyles.bodyColor,
                    textDecoration: 'none',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    transition: 'all 0.25s ease'
                  }}
                >
                  View 
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

function ProjectsSection({ projects, isMobile, themeStyles }) {
  const isDark = themeStyles.accent === '#daa030';
  const accentRgb = isDark ? '218, 160, 48' : '153, 77, 0'; 
  
  const uiFont = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

  return (
    <div style={{
      minHeight: '100vh',
      padding: isMobile ? '40px 20px' : '80px',
      display: 'flex',
      gap: '64px', 
      position: 'relative'
    }}>
      
      <style>
        {`
          @keyframes slideUpFade {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(40px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          @keyframes scaleFadeIn {
            from { opacity: 0; transform: scale(0.96) translateY(24px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }

          @keyframes floatOrb1 {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(40px, -80px) scale(1.1); }
            66% { transform: translate(-40px, 40px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          
          @keyframes floatOrb2 {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(-60px, 60px) scale(1.1); }
            66% { transform: translate(30px, -30px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }

          @keyframes titleShimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }

          @keyframes glowPulse {
            0% { opacity: 0.6; box-shadow: 0 0 10px rgba(${accentRgb}, 0.2); }
            50% { opacity: 1; box-shadow: 0 0 20px rgba(${accentRgb}, 0.6); }
            100% { opacity: 0.6; box-shadow: 0 0 10px rgba(${accentRgb}, 0.2); }
          }

          @keyframes lineFlow {
            0% { background-position: 0% -100%; }
            100% { background-position: 0% 200%; }
          }

          .project-card:hover .project-img {
            transform: scale(1.04);
          }
          
          .project-card::after {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0));
            opacity: 0;
            transition: opacity 0.4s ease;
            pointer-events: none;
            z-index: 1;
          }
          
          .project-card:hover::after {
            opacity: 1;
          }
        `}
      </style>

      {/* BACKGROUND ORBS */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0
      }}>
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '480px',
          height: '480px',
          background: isDark ? 'radial-gradient(circle, rgba(218, 160, 48, 0.12) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(230, 115, 0, 0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'floatOrb1 24s infinite ease-in-out',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '20%',
          width: '400px',
          height: '400px',
          background: isDark ? 'radial-gradient(circle, rgba(184, 136, 176, 0.08) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(59, 89, 152, 0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'floatOrb2 20s infinite ease-in-out reverse',
        }} />
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, zIndex: 1 }}>
        <h2 style={{
          fontSize: isMobile ? '40px' : '64px',
          fontWeight: 800,
          marginBottom: '64px', 
          fontFamily: "'Space Grotesk', sans-serif",
          letterSpacing: '-1px',
          backgroundImage: `linear-gradient(90deg, ${themeStyles.bodyColor} 0%, ${themeStyles.accent} 50%, ${themeStyles.bodyColor} 100%)`,
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
          animation: 'slideUpFade 0.6s ease-out forwards, titleShimmer 6s linear infinite'
        }}>
          PROJECTS
        </h2>

        {/* 2-COLUMN GRID */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', 
          gap: '40px', 
          maxWidth: isMobile ? '100%' : '1100px' 
        }}>
          {projects.map((proj, i) => (
            <div key={i} className="project-card" style={{
              background: isDark ? 'linear-gradient(135deg, rgba(34, 24, 40, 0.6), rgba(20, 15, 25, 0.8))' : 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: `1px solid rgba(${accentRgb}, 0.24)`,
              borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.4)'}`,
              borderLeft: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.4)'}`,
              borderRadius: '20px',
              padding: isMobile ? '24px' : '32px',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              opacity: 0,
              animation: 'scaleFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              animationDelay: `${0.2 + (i * 0.1)}s`,
              boxShadow: isDark ? '0 16px 32px rgba(0,0,0,0.4)' : '0 12px 24px rgba(0,0,0,0.06)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%', 
              boxSizing: 'border-box'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `rgba(${accentRgb}, 0.8)`;
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = isDark 
                ? `0 24px 48px rgba(0,0,0,0.6), 0 0 24px rgba(${accentRgb}, 0.24)` 
                : `0 20px 40px rgba(0,0,0,0.12), 0 0 16px rgba(${accentRgb}, 0.16)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `rgba(${accentRgb}, 0.24)`;
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = isDark ? '0 16px 32px rgba(0,0,0,0.4)' : '0 12px 24px rgba(0,0,0,0.06)';
            }}>
              
              {/* STATUS BADGE */}
              <div style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '999px',
                background: isDark ? `rgba(0,0,0,0.4)` : '#ffffff',
                border: `1px solid rgba(${accentRgb}, ${isDark ? 0.3 : 0.6})`,
                color: themeStyles.bodyColor,
                fontFamily: uiFont,
                fontSize: '12px', 
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                zIndex: 10,
                boxShadow: isDark ? '0 4px 12px rgba(0,0,0,0.2)' : '0 4px 12px rgba(0,0,0,0.06)',
                backdropFilter: 'blur(4px)'
              }}>
                <span style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  background: proj.status.toLowerCase() === 'ongoing' ? '#4cc76b' : themeStyles.accent,
                  boxShadow: `0 0 8px ${proj.status.toLowerCase() === 'ongoing' ? '#4cc76b' : themeStyles.accent}`,
                  animation: proj.status.toLowerCase() === 'ongoing' ? 'glowPulse 2s infinite' : 'none'
                }} />
                {proj.status}
              </div>

              {/* CARD HEADER */}
              <div style={{ marginBottom: '24px', paddingRight: '120px', position: 'relative', zIndex: 2 }}>
                <div style={{ 
                  fontFamily: uiFont,
                  fontSize: '12px', 
                  color: themeStyles.accent, 
                  fontWeight: 800, 
                  letterSpacing: '2px', 
                  textTransform: 'uppercase', 
                  marginBottom: '8px' 
                }}>
                  &lt; {proj.type} · {proj.year} /&gt;
                </div>
                <h3 style={{ 
                  fontSize: isMobile ? '24px' : '28px', 
                  fontWeight: 800, 
                  margin: 0, 
                  fontFamily: "'Space Grotesk', sans-serif", 
                  color: themeStyles.bodyColor, 
                  lineHeight: 1.3 
                }}>
                  {proj.title}
                </h3>
              </div>

              {/* IMAGE CONTAINER */}
              <div style={{ 
                width: '100%', 
                height: isMobile ? '200px' : '240px', 
                borderRadius: '16px', 
                overflow: 'hidden', 
                marginBottom: '24px', 
                border: `1px solid rgba(${accentRgb}, 0.2)`,
                boxShadow: 'inset 0 0 16px rgba(0,0,0,0.2)',
                background: isDark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.04)',
                position: 'relative',
                zIndex: 2,
              }}>
                <img 
                  className="project-img" 
                  src={proj.image} 
                  alt={proj.title} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain',
                    objectPosition: 'center',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative',
                    zIndex: 1,
                  }} 
                />
              </div>

              {/* TEXT AND TECH STACK */}
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', flex: 1 }}>
                <p style={{ 
                  fontFamily: uiFont,
                  fontSize: isMobile ? '14px' : '16px', 
                  color: themeStyles.muted, 
                  lineHeight: 1.6, 
                  marginBottom: '24px' 
                }}>
                  {proj.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                  {proj.tools.map((tool, j) => (
                    <span key={j} style={{
                      padding: '6px 12px', 
                      background: isDark ? `rgba(${accentRgb}, 0.12)` : `rgba(${accentRgb}, 0.08)`,
                      border: `1px solid rgba(${accentRgb}, ${isDark ? 0.24 : 0.2})`,
                      borderRadius: '8px',
                      fontFamily: uiFont,
                      fontSize: '12px', 
                      color: isDark ? '#ffffff' : themeStyles.accent,
                      fontWeight: 600,
                      letterSpacing: '0.5px'
                    }}>
                      {tool}
                    </span>
                  ))}
                </div>

                {/* ACTION BUTTONS - Perfectly anchored to bottom */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: 'auto' }}>
                  {proj.repoLink && (
                    <a href={proj.repoLink} target="_blank" rel="noopener noreferrer" style={{ 
                      padding: '12px 24px', 
                      borderRadius: '10px', 
                      background: themeStyles.accent, 
                      color: '#ffffff', 
                      textDecoration: 'none', 
                      fontFamily: uiFont,
                      fontWeight: 700, 
                      fontSize: '14px', 
                      transition: 'all 0.3s ease',
                      display: 'flex', alignItems: 'center', gap: '8px',
                      boxShadow: `0 8px 16px rgba(${accentRgb}, ${isDark ? 0.24 : 0.16})`
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                      &lt;/&gt; Code
                    </a>
                  )}
                  {proj.demoLink && (
                    <a href={proj.demoLink} target="_blank" rel="noopener noreferrer" style={{ 
                      padding: '12px 24px', 
                      borderRadius: '10px', 
                      border: `2px solid ${themeStyles.accent}`, 
                      background: isDark ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.8)',
                      color: themeStyles.bodyColor, 
                      textDecoration: 'none', 
                      fontFamily: uiFont,
                      fontWeight: 700, 
                      fontSize: '14px',
                      transition: 'all 0.3s ease',
                      display: 'flex', alignItems: 'center', gap: '8px'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = isDark ? `rgba(${accentRgb}, 0.1)` : '#ffffff';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = `0 8px 16px rgba(0,0,0,0.08)`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = isDark ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.8)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = `none`;
                    }}>
                      👁️ Site
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* RIGHT DECORATION PANEL */}
      {!isMobile && (
        <div style={{ width: '320px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '128px', borderLeft: `1px solid rgba(${accentRgb}, 0.16)`, paddingLeft: '40px', zIndex: 1 }}>
          <div style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '4px', color: `rgba(${accentRgb}, 0.6)`, textTransform: 'uppercase', marginBottom: '8px', fontFamily: "'Space Grotesk', sans-serif" }}>Stack</div>
          
          {['C++', 'Python', 'Logic', 'Systems', 'Networks', 'Security'].map((tech, i) => (
            <div key={tech} style={{ 
              padding: '14px 24px', 
              border: `1px solid rgba(${accentRgb}, 0.24)`, 
              borderRadius: '12px', 
              background: `rgba(${accentRgb}, ${isDark ? 0.04 : 0.02})`, 
              fontFamily: uiFont,
              fontSize: '16px', 
              color: themeStyles.bodyColor, 
              fontWeight: 600,
              letterSpacing: '1px', 
              transition: 'all 0.3s ease',
              opacity: 0,
              animation: 'slideInRight 0.6s ease-out forwards',
              animationDelay: `${0.8 + (i * 0.08)}s`,
            }}
              onMouseEnter={e => { 
                e.currentTarget.style.borderColor = themeStyles.accent; 
                e.currentTarget.style.background = `rgba(${accentRgb}, ${isDark ? 0.12 : 0.08})`;
                e.currentTarget.style.transform = 'translateX(8px)';
              }}
              onMouseLeave={e => { 
                e.currentTarget.style.borderColor = `rgba(${accentRgb}, 0.24)`; 
                e.currentTarget.style.background = `rgba(${accentRgb}, ${isDark ? 0.04 : 0.02})`;
                e.currentTarget.style.transform = 'translateX(0)';
              }}>
                <span style={{color: themeStyles.accent, marginRight: '8px'}}>#</span> {tech}
            </div>
          ))}
          
          <div style={{ 
            width: '2px', 
            height: '96px', 
            borderRadius: '2px',
            background: `linear-gradient(to bottom, transparent, rgba(${accentRgb}, 0.6), rgba(${accentRgb}, 0.6), transparent)`,
            backgroundSize: '100% 200%',
            marginLeft: '8px', 
            opacity: 0.6,
            animation: 'lineFlow 4s linear infinite',
            marginTop: '8px'
          }} />
          
          <div style={{ padding: '24px', border: `1px solid rgba(${accentRgb}, 0.24)`, borderRadius: '16px', background: `rgba(${accentRgb}, 0.06)`, opacity: 0, animation: 'slideUpFade 0.6s ease-out forwards', animationDelay: '1.4s', position: 'relative' }}>
            <span style={{position: 'absolute', top: '12px', left: '12px', color: themeStyles.accent, fontSize: '32px', opacity: 0.2, fontFamily: 'serif'}}>“</span>
            <div style={{ fontFamily: uiFont, fontSize: '16px', color: themeStyles.muted, lineHeight: 1.6, fontStyle: 'italic', paddingLeft: '16px' }}>Code is where ideas become real.</div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginTop: '16px' }}>
            {Array(16).fill(0).map((_, i) => (
              <div key={i} style={{ 
                width: '8px', 
                height: '8px', 
                borderRadius: '50%', 
                background: `rgba(${accentRgb}, ${isDark ? 0.16 + (i % 4) * 0.1 : 0.08 + (i % 4) * 0.06})`, 
                margin: '0 auto',
                transition: 'all 0.2s ease',
                cursor: 'none'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = themeStyles.accent;
                e.currentTarget.style.transform = 'scale(2)';
                e.currentTarget.style.boxShadow = `0 0 12px ${themeStyles.accent}`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = `rgba(${accentRgb}, ${isDark ? 0.16 + (i % 4) * 0.1 : 0.08 + (i % 4) * 0.06})`;
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function ExtrasSection({ skillData, hobbies, orgs, isMobile, themeStyles }) {
  const isDark = themeStyles.accent === '#daa030';

  return (
    <div style={{
      minHeight: '100vh',
      padding: isMobile ? '40px 20px' : '80px',
      display: 'flex',
      gap: '60px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* --- EPIC CONTINUOUS ANIMATIONS --- */}
      <style>
        {`
          @keyframes slideFadeUp {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideInRightExt {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes floatOrb1 {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(40px, -60px) scale(1.1); }
            66% { transform: translate(-40px, 40px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          @keyframes floatOrb2 {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(-60px, 60px) scale(1.2); }
            66% { transform: translate(50px, -30px) scale(0.8); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          @keyframes badgeFloat {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-4px); }
            100% { transform: translateY(0px); }
          }
          @keyframes textShimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
        `}
      </style>

      {/* AMBIENT BACKGROUND ORBS */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '5%',
        width: '450px',
        height: '450px',
        background: isDark ? 'radial-gradient(circle, rgba(218, 160, 48, 0.1) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(153, 77, 0, 0.08) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 0,
        animation: 'floatOrb1 18s infinite ease-in-out',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '10%',
        width: '400px',
        height: '400px',
        background: isDark ? 'radial-gradient(circle, rgba(184, 136, 176, 0.08) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(59, 89, 152, 0.08) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 0,
        animation: 'floatOrb2 22s infinite ease-in-out reverse',
        pointerEvents: 'none'
      }} />

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, zIndex: 1 }}>
        <h2 style={{
          fontSize: isMobile ? '42px' : '64px',
          fontWeight: 800,
          marginBottom: '60px',
          fontFamily: "'Space Grotesk', sans-serif",
          letterSpacing: '-1px',
          backgroundImage: `linear-gradient(90deg, ${themeStyles.bodyColor} 0%, ${themeStyles.accent} 50%, ${themeStyles.bodyColor} 100%)`,
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
          animation: 'slideFadeUp 0.8s ease-out forwards, textShimmer 5s linear infinite'
        }}>
          SKILLS & AFFILIATIONS
        </h2>

        {/* SKILLS */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: isMobile ? '20px' : '40px', maxWidth: isMobile ? '100%' : '1000px', marginBottom: '40px' }}>
            {skillData.map((group, i) => (
              <div key={i} style={{
                background: isDark ? 'rgba(34, 24, 40, 0.6)' : 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: isDark ? '2px solid rgba(218, 160, 48, 0.3)' : `2px solid ${themeStyles.surfaceBorder}`,
                borderRadius: '16px',
                padding: isMobile ? '24px' : '36px',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                opacity: 0,
                animation: `slideFadeUp 0.8s ease-out forwards`,
                animationDelay: `${0.2 + (i * 0.15)}s`,
                boxShadow: isDark ? '0 10px 30px rgba(0,0,0,0.3)' : '0 10px 30px rgba(0,0,0,0.05)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = isDark ? 'rgba(218, 160, 48, 0.8)' : themeStyles.accent;
                e.currentTarget.style.background = isDark ? 'rgba(218, 160, 48, 0.1)' : 'rgba(255, 255, 255, 0.9)';
                e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                e.currentTarget.style.boxShadow = isDark ? '0 20px 40px rgba(218, 160, 48, 0.2)' : '0 20px 40px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = isDark ? 'rgba(218, 160, 48, 0.3)' : themeStyles.surfaceBorder;
                e.currentTarget.style.background = isDark ? 'rgba(34, 24, 40, 0.6)' : 'rgba(255, 255, 255, 0.7)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = isDark ? '0 10px 30px rgba(0,0,0,0.3)' : '0 10px 30px rgba(0,0,0,0.05)';
              }}>
                <div style={{ fontSize: '14px', color: isDark ? '#daa030' : themeStyles.accent, fontWeight: 800, letterSpacing: '3px', marginBottom: '24px', textTransform: 'uppercase' }}>
                  {group.category}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {group.items.map((skill, j) => (
                    <span key={j} style={{
                      padding: '10px 18px',
                      background: isDark ? 'rgba(218, 160, 48, 0.1)' : 'rgba(153, 77, 0, 0.08)',
                      border: isDark ? '1px solid rgba(218, 160, 48, 0.4)' : `1px solid rgba(153, 77, 0, 0.3)`,
                      borderRadius: '8px',
                      fontSize: '13px',
                      color: isDark ? '#daa030' : themeStyles.accent,
                      fontWeight: 700,
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      animation: `badgeFloat 3s ease-in-out infinite`,
                      animationDelay: `${(i * 0.2) + (j * 0.1)}s` 
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = isDark ? 'rgba(218, 160, 48, 0.4)' : themeStyles.accent;
                      e.currentTarget.style.color = isDark ? '#fff' : '#fff';
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.animationPlayState = 'paused';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = isDark ? 'rgba(218, 160, 48, 0.1)' : 'rgba(153, 77, 0, 0.08)';
                      e.currentTarget.style.color = isDark ? '#daa030' : themeStyles.accent;
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.animationPlayState = 'running';
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ORGANIZATIONS */}
        <div style={{ marginBottom: '80px', maxWidth: isMobile ? '100%' : '1000px' }}>
          <h3 style={{ fontSize: isMobile ? '24px' : '32px', fontWeight: 800, marginBottom: '32px', color: themeStyles.bodyColor, fontFamily: "'Space Grotesk', sans-serif" }}>
            ORGANIZATIONS
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {orgs.map((org, i) => (
              <div key={i} style={{
                background: isDark ? 'linear-gradient(135deg, rgba(218, 160, 48, 0.1), rgba(218, 160, 48, 0.02))' : 'rgba(255, 255, 255, 0.6)',
                border: isDark ? '1px solid rgba(218, 160, 48, 0.3)' : `1px solid ${themeStyles.surfaceBorder}`,
                borderRadius: '12px',
                padding: '24px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                opacity: 0,
                animation: `slideFadeUp 0.8s ease-out forwards`,
                animationDelay: `${0.6 + (i * 0.15)}s`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = isDark ? 'rgba(218, 160, 48, 0.8)' : themeStyles.accent;
                e.currentTarget.style.background = isDark ? 'linear-gradient(135deg, rgba(218, 160, 48, 0.2), rgba(218, 160, 48, 0.05))' : 'rgba(255, 255, 255, 0.9)';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = isDark ? '0 10px 20px rgba(218, 160, 48, 0.15)' : '0 10px 20px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = isDark ? 'rgba(218, 160, 48, 0.3)' : themeStyles.surfaceBorder;
                e.currentTarget.style.background = isDark ? 'linear-gradient(135deg, rgba(218, 160, 48, 0.1), rgba(218, 160, 48, 0.02))' : 'rgba(255, 255, 255, 0.6)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px', color: themeStyles.bodyColor }}>
                  {org.name}
                </div>
                <div style={{ fontSize: '13px', color: isDark ? '#daa030' : themeStyles.accent, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {org.level}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HOBBIES */}
        <div style={{ maxWidth: isMobile ? '100%' : '1000px', opacity: 0, animation: 'slideFadeUp 0.8s ease-out forwards', animationDelay: '1s' }}>
          <h3 style={{ fontSize: isMobile ? '24px' : '32px', fontWeight: 800, marginBottom: '32px', color: themeStyles.bodyColor, fontFamily: "'Space Grotesk', sans-serif" }}>
            THINGS I LOVE
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {hobbies.map((hobby, i) => (
              <div key={i} style={{
                padding: '16px 28px',
                background: isDark ? 'linear-gradient(135deg, rgba(184, 136, 176, 0.15), rgba(184, 136, 176, 0.05))' : 'rgba(255, 255, 255, 0.8)',
                border: isDark ? '1px solid rgba(184, 136, 176, 0.3)' : `1px solid ${themeStyles.surfaceBorder}`,
                borderRadius: '12px',
                fontSize: '15px',
                fontWeight: 600,
                color: isDark ? '#b888b0' : themeStyles.bodyColor,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = isDark ? 'linear-gradient(135deg, rgba(184, 136, 176, 0.3), rgba(184, 136, 176, 0.1))' : themeStyles.accent;
                e.currentTarget.style.borderColor = isDark ? 'rgba(184, 136, 176, 0.6)' : themeStyles.accent;
                e.currentTarget.style.color = isDark ? '#fff' : '#fff';
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.05)';
                e.currentTarget.style.boxShadow = isDark ? '0 10px 20px rgba(184, 136, 176, 0.2)' : '0 10px 20px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = isDark ? 'linear-gradient(135deg, rgba(184, 136, 176, 0.15), rgba(184, 136, 176, 0.05))' : 'rgba(255, 255, 255, 0.8)';
                e.currentTarget.style.borderColor = isDark ? 'rgba(184, 136, 176, 0.3)' : themeStyles.surfaceBorder;
                e.currentTarget.style.color = isDark ? '#b888b0' : themeStyles.bodyColor;
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                {hobby}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT DECORATION PANEL */}
      {!isMobile && (
        <div style={{ width: '300px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '140px', borderLeft: isDark ? '1px solid rgba(218, 160, 48, 0.15)' : `1px solid ${themeStyles.surfaceBorder}`, paddingLeft: '40px', zIndex: 1 }}>
          <div style={{ fontSize: '25px', letterSpacing: '3px', color: isDark ? 'rgba(218,160,48,0.5)' : themeStyles.muted, textTransform: 'uppercase', marginBottom: '8px' }}>Categories</div>
          
          {['Technical', 'Security', 'Creative', 'Soft Skills'].map((cat, i) => (
            <div key={cat} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              opacity: 0,
              animation: 'slideInRightExt 0.6s ease-out forwards',
              animationDelay: `${0.8 + (i * 0.1)}s`
            }}>
              <div style={{ 
                width: '10px', 
                height: '10px', 
                borderRadius: '3px', 
                background: isDark ? `rgba(218,160,48,${0.3 + i * 0.2})` : themeStyles.accent, 
                opacity: isDark ? 1 : 0.4 + (i * 0.2),
                flexShrink: 0,
                transform: 'rotate(45deg)' 
              }} />
              <div style={{ fontSize: '18px', fontWeight: 600, color: isDark ? 'rgba(218,160,48,0.7)' : themeStyles.bodyColor, letterSpacing: '1px' }}>{cat}</div>
            </div>
          ))}
          
          <div style={{ width: '2px', height: '80px', background: isDark ? 'linear-gradient(to bottom, rgba(218,160,48,0.4), transparent)' : `linear-gradient(to bottom, ${themeStyles.accent}, transparent)`, marginLeft: '4px', opacity: isDark ? 1 : 0.5 }} />
          
          <div style={{ padding: '20px', border: isDark ? '1px solid rgba(218,160,48,0.2)' : `1px solid ${themeStyles.surfaceBorder}`, borderRadius: '12px', background: isDark ? 'rgba(218,160,48,0.05)' : 'rgba(0,0,0,0.02)', marginTop: '8px' }}>
            <div style={{ fontSize: '16px', color: themeStyles.muted, lineHeight: 1.6, fontStyle: 'italic' }}>"Skills are built, not given."</div>
          </div>
          
          {/* dot grid fixed for both themes */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginTop: '16px' }}>
            {Array(16).fill(0).map((_, i) => (
              <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: isDark ? `rgba(218,160,48,${0.05 + (i % 4) * 0.08})` : `rgba(0,0,0,${0.05 + (i % 4) * 0.05})`, margin: '0 auto' }} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function ContactAndReferencesSection({ isMobile, themeStyles }) {
  const contacts = [
    { label: 'EMAIL', value: 'franciennicole.ausan11@gmail.com', icon: '✉️' },
    { label: 'LOCATION', value: 'Pasig City, Philippines', icon: '📍' },
    { label: 'SCHOOL', value: 'TIP - M', icon: '🏫' },
  ];

  const references = [
    {
      name: 'Dr. Jennifer B. Enriquez',
      title: 'Program Chair, Computer Engineering Department',
      relation: 'Academic Reference',
      company: 'Technological Institute of the Philippines - Manila',
      email: 'jennifer.enriquez@tip.edu.ph',
      profile: '/maamjen.jpg'
    },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      padding: isMobile ? '50px 20px' : '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'slide-in-right 0.6s ease-out'
    }}>
      <div style={{ maxWidth: isMobile ? '100%' : '1000px', width: '100%', textAlign: 'center' }}>
        
        {/* HEADING with a fade up */}
        <h2 style={{
          fontSize: isMobile ? '42px' : '64px',
          fontWeight: 800,
          marginBottom: '32px',
          fontFamily: "'Space Grotesk', sans-serif",
          letterSpacing: '-1px',
          color: themeStyles.bodyColor,
          animation: 'fade-up 0.6s ease-out backwards',
          animationDelay: '0.1s'
        }}>
          LET'S CONNECT
        </h2>

        {/* BIG OUTER BOX */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(218, 160, 48, 0.07), rgba(218, 160, 48, 0.02))',
          border: '2px solid rgba(218, 160, 48, 0.3)',
          borderRadius: '20px',
          padding: isMobile ? '28px 20px' : '48px',
          transition: 'border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease',
          animation: 'fade-up 0.8s ease-out backwards',
          animationDelay: '0.2s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(218, 160, 48, 0.55)';
          e.currentTarget.style.boxShadow = '0 10px 40px rgba(218, 160, 48, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(218, 160, 48, 0.3)';
          e.currentTarget.style.boxShadow = 'none';
        }}>

          {/* TOP LABEL (Animated pulsing dots) */}
          <div style={{ 
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '36px',
            animation: 'fade-up 0.6s ease-out backwards', animationDelay: '0.3s'
          }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#daa030', animation: 'pulse-big 2s infinite' }} />
            <span style={{ fontSize: '11px', color: '#daa030', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>Open to connect</span>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#daa030', animation: 'pulse-big 2s infinite', animationDelay: '1s' }} />
          </div>

          {/* CONTACT INFO GRID (Staggered load-in) */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '16px' : '24px', marginBottom: '32px' }}>
            {contacts.map((contact, i) => (
              <div key={i} style={{
                background: 'linear-gradient(135deg, rgba(218, 160, 48, 0.12), rgba(218, 160, 48, 0.05))',
                border: '2px solid rgba(218, 160, 48, 0.3)',
                borderRadius: '12px',
                padding: isMobile ? '20px' : '32px',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
                cursor: 'pointer',
                animation: 'fade-up 0.6s ease-out backwards',
                animationDelay: `${0.4 + (i * 0.1)}s` 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(218, 160, 48, 0.7)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(218, 160, 48, 0.2), rgba(218, 160, 48, 0.12))';
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(218, 160, 48, 0.3)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(218, 160, 48, 0.12), rgba(218, 160, 48, 0.05))';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}>
                <div style={{ fontSize: isMobile ? '32px' : '36px', marginBottom: '12px', transition: 'transform 0.3s ease' }} 
                     onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)'}
                     onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}>
                  {contact.icon}
                </div>
                <div style={{ fontSize: '11px', color: '#daa030', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>{contact.label}</div>
                <div style={{ fontSize: isMobile ? '12px' : '14px', color: themeStyles.bodyColor, fontWeight: 600, wordBreak: 'break-word' }}>{contact.value}</div>
              </div>
            ))}
          </div>

          {/* MESSAGE & SOCIALS STACKED */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
            
            {/* MESSAGE BOX */}
            <div style={{
              width: '100%',
              background: 'rgba(218, 160, 48, 0.1)',
              border: '2px solid rgba(218, 160, 48, 0.3)',
              borderRadius: '12px',
              padding: isMobile ? '20px' : '24px 32px',
              textAlign: 'center',
              animation: 'fade-up 0.6s ease-out backwards',
              animationDelay: '0.7s'
            }}>
              <p style={{ fontSize: isMobile ? '12px' : '14px', color: themeStyles.muted, lineHeight: 1.8, margin: 0 }}>
                <strong style={{ color: '#daa030' }}>Best way to reach me?</strong><br/>
                Email usually gets the fastest response. But honestly, I'll be excited to hear from you no matter the channel.
              </p>
            </div>

            {/* SOCIALS WRAPPER */}
            <div style={{ 
              display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center',
              animation: 'fade-up 0.6s ease-out backwards', animationDelay: '0.8s'
            }}>
              
              {/* GitHub */}
              <a href="https://github.com/MACK0820" target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px',
                  background: 'linear-gradient(135deg, rgba(218, 160, 48, 0.15), rgba(218, 160, 48, 0.08))',
                  border: '2px solid rgba(218, 160, 48, 0.4)', borderRadius: '12px', 
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = themeStyles.bodyColor;
                  e.currentTarget.style.background = `linear-gradient(135deg, rgba(218, 160, 48, 0.25), rgba(218, 160, 48, 0.15))`;
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.1)'; 
                  e.currentTarget.style.boxShadow = `0 15px 25px rgba(218, 160, 48, 0.2)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(218, 160, 48, 0.4)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(218, 160, 48, 0.15), rgba(218, 160, 48, 0.08))';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'transform 0.3s' }}
                     onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(-10deg)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}>
                  <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z" fill={themeStyles.bodyColor}/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/francien-nicole-ausan-79269833b/" target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px',
                  background: 'linear-gradient(135deg, rgba(218, 160, 48, 0.15), rgba(218, 160, 48, 0.08))',
                  border: '2px solid rgba(218, 160, 48, 0.4)', borderRadius: '12px', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 119, 181, 0.8)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 119, 181, 0.25), rgba(0, 119, 181, 0.15))';
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 15px 25px rgba(0, 119, 181, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(218, 160, 48, 0.4)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(218, 160, 48, 0.15), rgba(218, 160, 48, 0.08))';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'transform 0.3s' }}
                     onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(10deg)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.732-2.004 1.438-.103.25-.129.599-.129.949v5.418h-3.555V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.931-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.134-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" fill="#0077B5"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="https://web.facebook.com/franciennicole11.gmail/" target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px',
                  background: 'linear-gradient(135deg, rgba(218, 160, 48, 0.15), rgba(218, 160, 48, 0.08))',
                  border: '2px solid rgba(218, 160, 48, 0.4)', borderRadius: '12px', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(59, 89, 152, 0.8)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(59, 89, 152, 0.25), rgba(59, 89, 152, 0.15))';
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 15px 25px rgba(59, 89, 152, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(218, 160, 48, 0.4)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(218, 160, 48, 0.15), rgba(218, 160, 48, 0.08))';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'transform 0.3s' }}
                     onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(-10deg)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
                </svg>
              </a> 
            </div>
          </div>

          {/* DIVIDER */}
          <div style={{ 
            width: '100%', height: '1px', background: 'rgba(218, 160, 48, 0.2)', margin: isMobile ? '32px 0' : '48px 0',
            animation: 'fade-up 0.6s ease-out backwards', animationDelay: '0.9s'
          }} />

          {/* REFERENCES SECTION */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, minmax(0, 1fr))', 
            gap: '20px', 
            textAlign: 'left' 
          }}>
            {references.map((ref, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, rgba(218, 160, 48, 0.08), rgba(218, 160, 48, 0.02))',
                border: '2px solid rgba(218, 160, 48, 0.2)',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'row', 
                alignItems: 'center',
                gap: '16px',
                padding: isMobile ? '16px' : '20px', 
                maxWidth: isMobile ? '100%' : '480px', 
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
                animation: 'fade-up 0.6s ease-out backwards',
                animationDelay: `${1.1 + (index * 0.2)}s` 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(218, 160, 48, 0.6)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(218, 160, 48, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <img 
                  src={ref.profile} 
                  alt={ref.name} 
                  style={{ 
                    width: isMobile ? '70px' : '90px',  
                    height: isMobile ? '70px' : '90px', 
                    objectFit: 'contain',              
                    background: 'rgba(218, 160, 48, 0.05)',
                    borderRadius: '10px', 
                    flexShrink: 0 
                  }} 
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ fontSize: isMobile ? '14px' : '16px', fontWeight: 800, color: themeStyles.bodyColor }}>
                    {ref.name}
                  </div>
                  <div style={{ fontSize: '11px', color: '#daa030', fontWeight: 700, lineHeight: 1.2 }}>
                    {ref.title}
                  </div>
                  <div style={{ fontSize: '10px', color: themeStyles.muted, lineHeight: 1.3 }}>
                    {ref.company}
                  </div>
                  <div style={{ fontSize: '10px', color: themeStyles.bodyColor, marginTop: '4px', wordBreak: 'break-all' }}>
                    <strong>Email:</strong> {ref.email}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>{/* end big outer box */}
      </div>
    </div>
  );
}