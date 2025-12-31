import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import './index.css'
function App() {

  return (
    <>
      <div className="min-h-screen bg-noise">
        <NavBar />
        <Hero />
        <AboutMe />
      </div>
    </>
  )
}

export default App
