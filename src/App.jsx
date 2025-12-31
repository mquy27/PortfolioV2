import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Project from './components/Project'
import './index.css'
function App() {

  return (
    <>
      <div className="min-h-screen bg-noise">
        <NavBar />
        <Hero />
        <AboutMe />
        <Project />
      </div>
    </>
  )
}

export default App
