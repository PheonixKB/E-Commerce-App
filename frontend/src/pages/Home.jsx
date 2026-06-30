import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'

const Home = () => {
  return (
    <>
      <Hero />
      <div className="h-32"></div>
      <LatestCollection />
    </>
  )
}

export default Home