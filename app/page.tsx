import React from 'react'
import Hero from './components/organism/Hero'
import VisitedPlaces from './components/organism/VisitedPlaces'
import Objectives from './components/organism/Objectives'
import Footer from './components/molecules/Footer'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <VisitedPlaces />
      <Objectives />
      <Footer />
    </div>
  )
}

export default HomePage
