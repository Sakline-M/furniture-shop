'use client'
import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const SiteNavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="w-full bg-gray-100 text-gray-800 shadow-md">
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-3 sm:py-4 gap-2 sm:gap-0 transition-all duration-500">
        
        {/* Top Row (Logo + Search on small screens) */}
        <div className="w-full flex items-center justify-between sm:justify-start sm:w-auto sm:mr-8">
          {/* Logo */}
          <div className="text-xl font-bold text-rose-500 tracking-tight sm:text-3xl">
            SAKIfurniture
          </div>

          {/* Search (hidden on sm and above) */}
          <div className="sm:hidden w-1/2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-2 py-1 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-rose-400"
            />
          </div>

          {/* Hamburger Menu */}
          <button onClick={toggleMenu} className="sm:hidden text-2xl text-gray-700">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Center: Search Bar (only for sm and up) */}
        <div className="hidden sm:block w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400 transition duration-300"
          />
        </div>

        {/* Right: Nav Links */}
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } sm:flex flex-col sm:flex-row gap-4 sm:gap-6 text-lg font-semibold mt-3 sm:mt-0`}
        >
          <a
            href="/"
            className="text-gray-700 hover:text-rose-500 hover:underline transition duration-300 transform hover:-translate-y-1"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-gray-700 hover:text-rose-500 hover:underline transition duration-300 transform hover:-translate-y-1"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-gray-700 hover:text-rose-500 hover:underline transition duration-300 transform hover:-translate-y-1"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default SiteNavBar
