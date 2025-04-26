'use client'

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,
  FaInstagram,
} from 'react-icons/fa'

export default function SiteFooter() {
  return (
    <footer className="bg-white text-sm text-gray-600 px-4 pt-10 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-10 border-b">
        {/* Logo & Language */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">
            SAKI<span className="text-[#c4975b]">FURNITURE</span>
          </h2>
          <p className="text-gray-500">
            His verterem consectetuer consequat ne, no virtute atomorum usu
            molestie consul
          </p>
          <div className="flex gap-4 text-xs font-medium mt-2">
            <span className="hover:underline cursor-pointer">FIND STORE</span>
            <span>|</span>
            <span className="hover:underline cursor-pointer">ENGLISH</span>
          </div>
        </div>

        {/* Social Intro */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <FaInstagram />
            <span>Saki AIRIFURNITURE</span>
          </div>
          <p className="text-gray-500">
            Etiam imperdiet mauris lacus, id bibendum massa tincidunt nec
          </p>
        </div>

        {/* Company Links */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-semibold mb-3 uppercase">Company</h3>
            <ul className="space-y-2 text-xs text-gray-500">
              <li className="hover:underline cursor-pointer">About Us</li>
              <li className="hover:underline cursor-pointer">Our Studio</li>
              <li className="hover:underline cursor-pointer">Contact Us</li>
              <li className="hover:underline cursor-pointer">Work With Us</li>
              <li className="hover:underline cursor-pointer">Order Tracking</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-sm font-semibold mb-3 uppercase">Userfull</h3>
            <ul className="space-y-2 text-xs text-gray-500">
              <li className="hover:underline cursor-pointer">Help Center</li>
              <li className="hover:underline cursor-pointer">Affiliate Programs</li>
              <li className="hover:underline cursor-pointer">Services</li>
              <li className="hover:underline cursor-pointer">Terms & Conditions</li>
            </ul>
          </div>
        </div>

        {/* Newsletter + Socials */}
        <div>
          <h3 className="text-sm font-semibold mb-3 uppercase">
            Sign Up For The Latest News & Deal
          </h3>
          <form className="flex mb-4">
            <input
              type="email"
              placeholder="Enter Your Email Address.."
              className="border px-3 py-2 w-full text-xs focus:outline-none"
            />
            <button
              type="submit"
              className="bg-black text-white text-xs px-4 py-2 font-semibold"
            >
              SUBSCRIBE
            </button>
          </form>
          <div className="flex gap-3 text-gray-700 text-base">
            <FaFacebookF className="hover:text-black cursor-pointer" />
            <FaTwitter className="hover:text-black cursor-pointer" />
            <FaYoutube className="hover:text-black cursor-pointer" />
            <FaDribbble className="hover:text-black cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center py-4 text-xs text-gray-400 gap-2 max-w-7xl mx-auto px-4">
        <p>© 2019 AIRI All rights reserved</p>
        <div className="flex gap-4 items-center">
          <img src="/payment/paypal.png" alt="PayPal" className="h-5" />
          <img src="/payment/visa.png" alt="Visa" className="h-5" />
          <img src="/payment/payoneer.png" alt="Payoneer" className="h-5" />
          <img src="/payment/skrill.png" alt="Skrill" className="h-5" />
        </div>
      </div>
    </footer>
  )
}
