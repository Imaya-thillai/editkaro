'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const STATS = [
  { value: 500, label: 'Projects Delivered', suffix: '+' },
  { value: 100, label: 'Happy Clients', suffix: '+' },
  { value: 10, label: 'Million+ Views Generated', suffix: 'M+' },
  { value: 8, label: 'Editing Categories', suffix: '+' },
]

function CountUpNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = value
    const duration = 2000
    const increment = end / (duration / 50)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 50)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <div ref={ref}>
      {count}
      {suffix}
    </div>
  )
}

export function Stats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Track Record</h2>
          <p className="text-gray-400 text-lg">Trusted by brands worldwide</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl p-8 text-center group cursor-pointer hover:glow-purple transition-all duration-300"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="text-5xl font-bold bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform"
              >
                <CountUpNumber value={stat.value} suffix={stat.suffix} />
              </motion.div>
              <p className="text-gray-300 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
