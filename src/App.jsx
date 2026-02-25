import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Project from './components/Project'
import TechStack from './components/TechStack'
import TechStackV2 from './components/TechStackV2'
import ContactMe from './components/ContactMe'
import Timeline from './components/Timeline'
import './index.css'
function App() {

  return (
    <>
      <div className="min-h-screen bg-noise">
        <NavBar />
        <Hero />
        <AboutMe />
        <TechStackV2 />
        <Project />
        <Timeline />
        <ContactMe />
      </div>
    </>
  )
}

export default App
