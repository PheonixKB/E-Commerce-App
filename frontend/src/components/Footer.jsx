import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <footer className="bg-stone-200">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[3fr_1fr_1fr_1.5fr] gap-12 my-16 text-sm">

            {/* Logo & Description */}
            <div>
                <img
                    src={assets.logo}
                    alt="Logo"
                    className="w-32 mb-5"
                    />

                <p className="max-w-md text-gray-600 leading-6">
                    Discover timeless fashion for men, women, and children. We bring
                    together quality, comfort, and style to help you look your best
                    every day.
                </p>
            </div>

            {/* Company */}
            <div>
                <h2 className="text-lg font-semibold mb-5 text-stone-800">
                    COMPANY
                </h2>

                <ul className="space-y-3 text-gray-600">
                    <li className="hover:text-stone-800 cursor-pointer transition">
                        About Us
                    </li>
                    <li className="hover:text-stone-800 cursor-pointer transition">
                        Careers
                    </li>
                    <li className="hover:text-stone-800 cursor-pointer transition">
                        Our Story
                    </li>
                    <li className="hover:text-stone-800 cursor-pointer transition">
                        Privacy Policy
                    </li>
                </ul>
            </div>

            {/* Quick Links */}
            <div>
                <h2 className="text-lg font-semibold mb-5 text-stone-800">
                    QUICK LINKS
                </h2>

                <ul className="space-y-3 text-gray-600">
                    <li className="hover:text-stone-800 cursor-pointer transition">
                        Home
                    </li>
                    <li className="hover:text-stone-800 cursor-pointer transition">
                        Collection
                    </li>
                    <li className="hover:text-stone-800 cursor-pointer transition">
                        Contact
                    </li>
                    <li className="hover:text-stone-800 cursor-pointer transition">
                        Track Order
                    </li>
                </ul>
            </div>

            {/* Contact */}
            <div>
                <h2 className="text-lg font-semibold mb-5 text-stone-800">
                    CONTACT US
                </h2>

                <ul className="space-y-3 text-gray-600">
                    <li>📞 +91 98765 43210</li>
                    <li>✉️ support@fashionhub.com</li>
                    <li>📍 Bharuch, Gujarat, India</li>
                    <li>Mon – Sat: 9:00 AM – 7:00 PM</li>
                </ul>
            </div>

        </div>
    </footer>
  )
}

export default Footer