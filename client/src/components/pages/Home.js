import InfoCard from '../InfoCard'
import React from 'react'
import '../../App.css'
import Cards from '../Cards'
import Footer from '../Footer'
import HeroSection from '../HeroSection'

const Home = () => {
  return (
    <>
        <HeroSection />
        <Cards></Cards>
        <Footer />
    </>
  )
}

export default Home