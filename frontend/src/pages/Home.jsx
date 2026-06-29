import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'

const Home = () => {
  return (
    <div className="space-y-24">
      <Hero />
      <LatestCollection />
    </div>
  )
}

export default Home