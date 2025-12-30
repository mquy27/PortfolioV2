import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import './index.css'
function App() {

  return (
    <>
      <div className="h-screen bg-noise">
        <NavBar />
        <Hero />
      </div>
    </>
  )
}

export default App
