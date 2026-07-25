'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-20 w-72 h-72 bg-neon-purple rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 25, repeat: Infinity, delay: 5 }}
          className="absolute bottom-40 right-10 w-96 h-96 bg-neon-blue rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Content */}
        <div>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Creative Video Editing That{' '}
            <span className="bg-gradient-to-r from-neon-purple via-neon-blue to-neon-purple bg-clip-text text-transparent animate-pulse">
              Stops The Scroll
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 mb-8 leading-relaxed"
          >
            We help brands dominate social media with high-performing edits, cinematic storytelling, and engaging content that converts viewers into customers.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-blue rounded-2xl font-semibold hover:shadow-lg hover:shadow-neon-purple/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              View Portfolio
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 glass rounded-2xl font-semibold hover:glass-border border border-transparent hover:border-neon-purple/50 transition-all duration-300">
              Let&apos;s Work Together
            </button>
          </motion.div>
        </div>

        {/* Right Floating Video Preview */}
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="relative"
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden glass glow-purple">
            <div className="w-full h-full bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-neon-blue/10"
              />
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">
                  <Play size={32} className="fill-white" />
                </div>
                <p className="text-sm text-gray-300">Featured Project</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 text-sm"
      >
        <p className="mb-2">Scroll to explore</p>
        <div className="flex justify-center gap-1">
          <div className="w-1 h-6 bg-neon-purple rounded-full opacity-60" />
        </div>
      </motion.div>
    </section>
  )
}
