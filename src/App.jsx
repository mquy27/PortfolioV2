import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Project from './components/Project'
import TechStack from './components/TechStack'
import ContactMe from './components/ContactMe'
import './index.css'
function App() {

  return (
    <>
      <div className="min-h-screen bg-noise">
        <NavBar />
        <Hero />
        <AboutMe />
        <Project />
        <TechStack />
        <ContactMe />
      </div>
    </>
  )
}

export default App
