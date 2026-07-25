'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    company: 'TechVision Inc',
    text: 'Editkaro transformed our social media presence. Our engagement rates increased by 300% within just two months!',
    stars: 5,
    role: 'Marketing Director',
  },
  {
    name: 'Alex Chen',
    company: 'Beauty Brands Co',
    text: 'The creativity and professionalism of the team is unmatched. Every video they delivered exceeded our expectations.',
    stars: 5,
    role: 'Content Creator',
  },
  {
    name: 'Michael Rodriguez',
    company: 'Fashion Forward',
    text: 'Working with Editkaro was a game-changer for our e-commerce business. Sales increased dramatically after our first video campaign.',
    stars: 5,
    role: 'Business Owner',
  },
  {
    name: 'Emily Watson',
    company: 'Digital Nomad Hub',
    text: 'Exceptional quality, fast turnaround, and amazing communication. Highly recommend to anyone needing video content!',
    stars: 5,
    role: 'Community Manager',
  },
  {
    name: 'James Park',
    company: 'Gaming Pro League',
    text: 'Their gaming montage editing is absolutely insane. The best in the industry. Already booked them for our next season!',
    stars: 5,
    role: 'Event Manager',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
    setAutoPlay(false)
  }

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-400 text-lg">Join 100+ satisfied brands worldwide</p>
        </motion.div>

        {/* Carousel */}
        <div className="relative h-auto">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: -current * 100 + '%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="flex"
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="w-full flex-shrink-0"
                  initial={false}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="glass rounded-3xl p-8 md:p-12 mx-auto max-w-2xl"
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * i }}
                        >
                          <Star size={20} className="fill-neon-purple text-neon-purple" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Quote */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-xl md:text-2xl font-light mb-8 text-gray-100 italic"
                    >
                      &quot;{testimonial.text}&quot;
                    </motion.p>

                    {/* Author */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <p className="font-bold text-lg">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center">
                        <span className="text-white font-bold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="p-3 glass rounded-full hover:border-neon-purple/50 transition-all"
            >
              <ChevronLeft size={24} />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setCurrent(index)
                    setAutoPlay(false)
                  }}
                  animate={{
                    scale: current === index ? 1.2 : 1,
                    opacity: current === index ? 1 : 0.5,
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    current === index ? 'bg-neon-purple' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="p-3 glass rounded-full hover:border-neon-purple/50 transition-all"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
