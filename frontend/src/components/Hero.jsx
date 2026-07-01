import React from 'react'
import { Link } from 'react-router-dom'
import {assets} from '../assets/frontend_assets/assets'

const Hero = () => {
  return (
    <section className="flex flex-col sm:flex-row min-h-[600px] border border-stone-200 rounded-xl overflow-hidden">

        {/* ===========================
            Left Content
        =========================== */}
        <div className="w-full sm:w-1/2 flex items-center justify-center px-8 lg:px-14 py-12">

            <div className="flex flex-col items-start">

                {/* Small Heading */}
                <div className="flex items-center gap-3 mb-5">
                    <span className="w-10 h-[2px] bg-stone-700"></span>

                    <p className="uppercase tracking-[4px] text-sm text-stone-600 font-medium">
                        Our Best Sellers
                    </p>
                </div>

                {/* Main Heading */}
                <h1 className="prata-regular text-4xl md:text-5xl lg:text-6xl text-stone-800 leading-tight mb-8">
                    Latest <br />
                    Arrivals
                </h1>

                {/* Shop Now */}
                <Link to="/collection" className="flex items-center gap-3 group">

                    <span className="font-semibold tracking-wide text-stone-700">
                        SHOP NOW
                    </span>

                    <span className="w-10 h-[2px] bg-stone-700 transition-all duration-300 group-hover:w-16"></span>

                </Link>

            </div>

        </div>

        {/* ===========================
            Hero Image
        =========================== */}
        <div className="w-full sm:w-1/2">

            <img
                src={assets.hero_img}
                alt="Latest Fashion Collection"
                className="w-full h-full object-cover"
            />

        </div>

    </section>
)
}

export default Hero
