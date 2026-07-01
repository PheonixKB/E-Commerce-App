import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-10 lg:gap-20 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">

      <div className="flex flex-col items-center max-w-xs mx-auto">
        <img
          src={assets.exchange_icon}
          className="w-14 m-auto mb-5"
          alt="Easy Exchange"
        />
        <p className="font-semibold mt-2">Easy Exchange Policy</p>
        <p className="text-gray-400 mt-2 leading-6">
          We offer hassle-free exchange policy.
        </p>
      </div>

      <div className="flex flex-col items-center max-w-xs mx-auto">
        <img
          src={assets.quality_icon}
          className="w-14 m-auto mb-5"
          alt="Quality"
        />
        <p className="font-semibold mt-2">7 Days Return Policy</p>
        <p className="text-gray-400 mt-2 leading-6">
          We provide a 7-day free return policy.
        </p>
      </div>

      <div className="flex flex-col items-center max-w-xs mx-auto">
        <img
          src={assets.support_img}
          className="w-14 m-auto mb-5"
          alt="Support"
        />
        <p className="font-semibold mt-2">Best Customer Support</p>
        <p className="text-gray-400 mt-2 leading-6">
          We're here to assist you 24/7.
        </p>
      </div>

    </div>
  )
}

export default OurPolicy