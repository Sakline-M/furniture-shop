'use client'
import { motion } from 'framer-motion'
import OurTeam from "@/componets/OurTeam";
import Testimonial from "@/componets/Testimonial";
import { FaBolt, FaFeatherAlt, FaPlay } from "react-icons/fa";

const page = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-4 lg:py-20 space-y-16">
      {/* Top Section */}
      <div className="grid md:grid-cols-2  items-center">
      {/* Text Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          SAKI Beautiful ECommerce Online Store
        </h2>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          Praesent sed ex vel mauris eleifend mollis. Vestibulum dictum
          sodales ante, ac pulvinar urna sollicitudin in. Suspendisse sodales
          dolor nec mattis convallis. Quisque ut nulla viverra, posuere lorem
          eget, ultricies metus. Nulla facilisi. Duis aliquet, orci in auctor
          aliquam, tortor justo laoreet nisi, nec pulvinar lectus diam nec
          libero. Nullam sit amet Cras porta posuere lectus, vitae consectetur
          dolor elementum
        </p>
        <img
          src="/about-signature.webp"
          alt="Signature"
          className="h-16 mt-4"
        />
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <img
          src="/about-model.jpg"
          alt="Model"
          className="w-full object-cover"
        />
      </motion.div>
    </div>

      {/* Bottom Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left image with play button */}
        <div className="relative group">
          <img src="/onegirl.jpg" alt="Model" className="w-full object-cover" />
          <button className="absolute bottom-4 right-4 bg-white text-black rounded-full p-3 shadow-lg hover:scale-105 transition">
            <FaPlay />
          </button>
        </div>

        {/* Why Work With Us */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Why Work With Us ?
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Praesent sed ex vel mauris eleifend mollis. Vestibulum dictum
            sodales ante, ac pulvinar urna sollicitudin in. Suspendisse sodales
            dolor nec mattis convallis. Quisque ut nulla viverra, posuere lorem
            eget, ultricies metus.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <FaFeatherAlt className="mt-1 text-[#c4975b]" />
              <span>Praesent sed ex vel mauris ele.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <FaBolt className="mt-1 text-[#c4975b]" />
              <span>Nam vel luctus nulla, eget interdum metus</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <FaBolt className="mt-1 text-[#c4975b]" />
              <span>Nam vel luctus nulla, eget interdum metus</span>
            </li>
          </ul>
          <p className="text-sm text-gray-600 leading-relaxed">
            Suspendisse sodales dolor nec mattis convallis. Quisque ut nulla
            viverra, posuere lorem eget, ultricies metus euismod eu maximus
            neque feugiat magna pretium, euismod sagittis massa tincidunt.
          </p>
        </div>
      </div>
      <OurTeam />
      <Testimonial/>
    </section>
  );
};

export default page;
