'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Lura Frazier',
    role: 'Happy Client',
    image: '/team-member.jpg',
    quote:
      '“Maecenas eu accumsan libero. Fusce id imperdiet felis. Cras sed ex vel turpis ultricies blandit nec et massa. Pellentesque lectus turpis, vestibulum eu interdum vel.”',
  },
  {
    name: 'Lura Frazier',
    role: 'Happy Client',
    image: '/team-member.jpg',
    quote:
      '“Maecenas eu accumsan libero. Fusce id imperdiet felis. Cras sed ex vel turpis ultricies blandit nec et massa. Pellentesque lectus turpis, vestibulum eu interdum vel.”',
  },
  {
    name: 'Lura Frazier',
    role: 'Happy Client',
    image: '/team-member.jpg',
    quote:
      '“Maecenas eu accumsan libero. Fusce id imperdiet felis. Cras sed ex vel turpis ultricies blandit nec et massa. Pellentesque lectus turpis, vestibulum eu interdum vel.”',
  }
]

export default function Testimonial() {
  return (
    <section className="text-center  px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
        What Client Say <span className="text-orange-600">?</span>
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center space-y-6">
              <Image
                src={testimonial.image}
                width={64}
                height={64}
                alt={testimonial.name}
                className="rounded-full"
              />
              <p className="text-gray-700 max-w-2xl italic leading-relaxed px-4">
                {testimonial.quote}
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-medium">{testimonial.name}</span> &nbsp;–&nbsp;{' '}
                {testimonial.role}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
