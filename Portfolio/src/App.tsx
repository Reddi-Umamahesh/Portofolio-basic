import React from 'react'
import HeroSection from './components/HeroSection'
import Profile from './components/Profile'
import Skills from './components/Skills'

const App:React.FC = () => {
  return (
    <div>
      
      <HeroSection />
      <Profile />
      <Skills />
    </div>
  )
}

export default App