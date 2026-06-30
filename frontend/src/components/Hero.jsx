import React from 'react'
import {assets} from '../assets/frontend_assets/assets'

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row min-h-[500px] border border-stone-300">

        {/* Left Side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center px-8 sm:px-12 py-10">

            <div className="flex flex-col items-start">

                {/* Small Heading */}
                <div className="flex items-center gap-3 mb-4">
                    <p className="w-10 h-[2px] bg-stone-700"></p>
                    <p className="uppercase tracking-[4px] text-sm text-stone-600 font-medium">
                        Our Best Sellers
                    </p>
                </div>

                {/* Main Heading */}
                <h1 className="prata-regular text-4xl lg:text-6xl text-stone-800 leading-tight mb-6">
                    Latest <br />
                    Arrivals
                </h1>

                {/* Shop Now */}
                <div className="flex items-center gap-3 cursor-pointer group">
                    <p className="font-semibold text-stone-700 tracking-wide">
                        SHOP NOW
                    </p>

                    <span className="w-10 h-[2px] bg-stone-700 transition-all duration-300 group-hover:w-16"></span>
                </div>

            </div>

        </div>

        {/* Right Side */}
        <div className="w-full sm:w-1/2">
            <img
                src={assets.hero_img}
                alt="Hero"
                className="w-full h-full object-cover"
            />
        </div>

    </div>
  )
}

export default Hero