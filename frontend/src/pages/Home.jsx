import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <>
    {/* Full-width Hero Banner */}
    <Hero />

    {/* Main Website Content */}
    <div className="max-w-7xl mx-auto mt-20 px-5 sm:px-6 lg:px-8 flex flex-col gap-20">

        {/* Latest Collection */}
        <section>
            <LatestCollection />
        </section>

        {/* Best Sellers */}
        <section>
            <BestSeller />
        </section>

        {/* Store Policies */}
        <section>
            <OurPolicy />
        </section>

        {/* Newsletter */}
        <section>
            <NewsletterBox />
        </section>

    </div>
</>
  )
}

export default Home
