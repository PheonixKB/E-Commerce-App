import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <footer className="bg-stone-50 border-t border-stone-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[3fr_1fr_1fr_1.5fr] gap-16 text-sm">
          <div>
            <img
              src={assets.logo}
              alt="Forever Logo"
              className="w-32 mb-6"
            />

            <p className="max-w-md text-gray-600 leading-7">
              Discover timeless fashion for men, women, and children. We bring
              together quality, comfort, and style to help you look your best
              every day.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-7">COMPANY</h2>

            <ul className="space-y-4 text-gray-600">
              <li>
                <Link to="/about" className="inline-block hover:text-stone-800 hover:translate-x-1 transition-all">
                  About Us
                </Link>
              </li>
              <li>Careers</li>
              <li>Our Story</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-7">QUICK LINKS</h2>

            <ul className="space-y-4 text-gray-600">
              <li>
                <Link to="/" className="inline-block hover:text-stone-800 hover:translate-x-1 transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/collection" className="inline-block hover:text-stone-800 hover:translate-x-1 transition-all">
                  Collection
                </Link>
              </li>
              <li>
                <Link to="/contact" className="inline-block hover:text-stone-800 hover:translate-x-1 transition-all">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/orders" className="inline-block hover:text-stone-800 hover:translate-x-1 transition-all">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-7">CONTACT US</h2>

            <ul className="space-y-4 text-gray-600">
              <li>Phone: +91 98765 43210</li>
              <li>Email: support@fashionhub.com</li>
              <li>Location: Bharuch, Gujarat, India</li>
              <li>Mon - Sat: 9:00 AM - 7:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-300 mt-16 pt-6">
          <p className="text-center text-gray-500 text-sm">
            Copyright 2026 Forever. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
