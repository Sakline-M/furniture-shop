import Map from '@/componets/Map'
import React from 'react'
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaYoutube, FaInstagram } from 'react-icons/fa'

const ContactPage = () => {
  return (
    <div>
    <div className="max-w-7xl mx-auto px-4 py-6 lg:py-16 grid md:grid-cols-2 gap-10">
      {/* Left - Contact Form */}
      <div>
        <h2 className="text-3xl font-light mb-8">Get In Touch</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name*"
            className="w-full border border-gray-300 px-4 py-3 outline-none"
          />
          <input
            type="email"
            placeholder="Email Address*"
            className="w-full border border-gray-300 px-4 py-3 outline-none"
          />
          <input
            type="text"
            placeholder="Your Phone*"
            className="w-full border border-gray-300 px-4 py-3 outline-none"
          />
          <textarea
            placeholder="Message*"
            rows={5}
            className="w-full border border-gray-300 px-4 py-3 outline-none resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 mt-4 hover:bg-gray-800 transition"
          >
            Send
          </button>
        </form>
      </div>

      {/* Right - Contact Info */}
      <div>
        <h2 className="text-3xl font-light mb-8">Contact Info</h2>

        <div className="mb-6">
          <h4 className="font-semibold">Postal Address</h4>
          <p>PO Box 16122 Collins Street West<br />Victoria 8007 Australia</p>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold">Airi HQ</h4>
          <p>Postal Address<br />PO Box 16122 Collins Street West<br />Victoria 8007 Australia</p>
        </div>

        <div className="grid grid-cols-2 mb-6">
          <div>
            <h4 className="font-semibold">Business Phone</h4>
            <p>+61 3 8376 6284</p>
          </div>
          <div>
            <h4 className="font-semibold">Say Hello</h4>
            <p>demo@example.com</p>
          </div>
        </div>

        <div className="flex space-x-4 text-xl text-gray-600">
          <FaTwitter className="hover:text-black cursor-pointer" />
          <FaGooglePlusG className="hover:text-black cursor-pointer" />
          <FaFacebookF className="hover:text-black cursor-pointer" />
          <FaYoutube className="hover:text-black cursor-pointer" />
          <FaInstagram className="hover:text-black cursor-pointer" />
        </div>
      </div>



    </div>
    <Map/>
    </div>

      
  )
}

export default ContactPage
