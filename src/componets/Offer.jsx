'use client'

import React from 'react'
import { motion } from 'framer-motion'

const brandLogos = [
  '/removelogo.png',
  '/removelogo.png',
  '/removelogo.png',
  '/removelogo.png',
  '/removelogo.png',
  '/removelogo.png'
]

const Offer = () => {
  return (
    <div className="w-full lg:pt-8 md:pt-8">
      
      {/* Brand Logos Section */}
      <div className="bg-gray-100 py-10 px-8">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-10 justify-items-center items-center max-w-7xl mx-auto">
          {brandLogos.map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`brand-${idx}`}
              className="opacity-50 hover:opacity-100 transition duration-300 h-16 sm:h-20 object-cover"
            />
          ))}
        </div>
      </div>

      {/* Sale Offer Section */}
      <div className="bg-[#e9f6e9] px-10 flex flex-col md:flex-row items-center justify-center lg:gap-10 py-12">
        
        {/* Image with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false }}
          className="flex-shrink-0"
        >
          <img
            src="/bgchair.png"
            alt="Modern Sofa"
            className="max-w-[300px] sm:max-w-[400px] md:max-w-[500px] w-full h-auto"
          />
        </motion.div>

        {/* Content */}
        <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: false }} className="text-center md:text-left space-y-1 lg:space-y-4 md:space-y-4 mb-3 lg:flex flex-col items-center">
          <p className="text-[12px] lg:text-sm md:text-sm font-bold tracking-wide text-gray-600 uppercase">
            Modern Sofa for Living Room
          </p>
          <h2 className="lg:text-6xl md:text-5xl text-xl font-bold text-gray-800">
            SALE OFF 30%
          </h2>
          <button className="text-sm font-semibold underline underline-offset-4 hover:text-gray-700 transition">
            Shop Now
          </button>
          </motion.div>
      </div>

    </div>
  )
}

export default Offer
