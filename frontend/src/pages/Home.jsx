import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'

const Home = () => {
  return (
    <>
      <Hero />
      <div className="h-32"></div>
      <LatestCollection />
      <div className="h-24"></div>
      <BestSeller/>
      <div className="h-24"></div>
      <OurPolicy/>
    </>
  )
}

export default Home