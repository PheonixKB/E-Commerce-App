import React from 'react'
import {assets} from '../assets/frontend_assets/assets'

const Hero = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row min-h-[500px] border border-stone-300 mb-24">
        {/* Left Side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center px-10 py-8">

            <div>

                {/* Small Heading */}
                <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-[2px] bg-stone-700"></div>
                    <p className="uppercase tracking-widest text-stone-600 font-medium">
                        Our Best Sellers
                    </p>
                </div>

                {/* Main Heading */}
                <h1 className="prata-regular text-5xl font-bold text-stone-800 leading-tight">
                    Latest <br />
                    Arrivals
                </h1>

                {/* Shop Now */}
                <div className="flex items-center gap-3 mt-8 cursor-pointer">
                    <p className="font-semibold text-stone-700">
                        SHOP NOW
                    </p>
                    <div className="w-10 h-[2px] bg-stone-700"></div>
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