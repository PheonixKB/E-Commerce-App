import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'

const Home = () => {
  return (
    <>
      <Hero />
      <div className="h-32"></div>
      <LatestCollection />
      <div className="h-24"></div>
      <BestSeller/>
    </>
  )
}

export default Home