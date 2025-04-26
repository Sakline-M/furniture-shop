'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Preview = () => {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-center px-4 pt-8 lg:py-16 md:py-14 max-w-7xl mx-auto gap-10 sm:gap-20">
      
      {/* Left Image with Animation */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="w-full sm:w-1/2 relative h-[350px] sm:h-[400px]"
      >
        <Image
          src="/preview.jpg" 
          alt="Living Room"
          fill
          className="object-cover shadow-md"
        />
      </motion.div>

      {/* Right Text with Animation */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full sm:w-1/2 text-center sm:text-left"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-wide uppercase">
          Smart & Luxury Furniture
        </h2>

        <div className="w-10 h-1 bg-rose-300 my-4 mx-auto sm:mx-0 rounded" />

        <p className="text-gray-600 mb-6 leading-relaxed">
          Etiam imperdiet mauris lacus, id bibendum massa tincidunt nec.
          Praesent efficitur sagittis ullamcorper. Maecenas tempor porttitor euismod.
          Nullam at ornare nisl, vitae interdum magna. Vestibulum ante ipsum primis in faucibus.
        </p>

        <a
          href="#"
          className="inline-block text-sm font-bold uppercase tracking-wide text-gray-800 hover:text-rose-300 transition duration-300"
        >
          Check it out
          <div className="w-[110px] h-1 bg-rose-300  mx-auto sm:mx-0 rounded" />
        </a>
      </motion.div>
    </section>
  )
}

export default Preview
