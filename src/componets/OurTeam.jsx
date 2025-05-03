'use client'

import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

export default function OurTeam() {
  const team = [
    {
      name: 'Dollie Watts',
      role: 'CEO / Founder',
      image: '/team-member.jpg',
      desc: 'Pellentesque dignissim at ante sed euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sod.',
    },
    {
      name: 'Mitchell Bates',
      role: 'Art Director',
      image: '/team-member.jpg',
      desc: 'Pellentesque dignissim at ante sed euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sod.',
    },
    {
      name: 'Leona Bowman',
      role: 'Marketing Manager',
      image: '/team-member.jpg',
      desc: 'Pellentesque dignissim at ante sed euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sod.',
    },
  ]

  return (
    <section className="lg:py-16 px-4 text-center max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-2">Meet Our Team</h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Praesent sed ex vel mauris eleifend mollis. Vestibulum dictum sodales ante, ac pulvinar
        urna sollicitudin in. Suspendisse sodales
      </p>
      <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {team.map((member, idx) => (
          <div key={idx} className="text-center space-y-4 group">
            <div className="relative w-full overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={450}
                className="lg:w-full lg:h-[420px] object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
                <a href="#" className="text-white text-xl hover:text-pink-300">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-white text-xl hover:text-pink-300">
                  <FaTwitter />
                </a>
                <a href="#" className="text-white text-xl hover:text-pink-300">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <h3 className="text-lg font-medium">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
            <p className="text-sm text-gray-600 max-w-xs mx-auto">{member.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
