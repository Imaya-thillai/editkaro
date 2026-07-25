'use client'

import { motion } from 'framer-motion'
import { Upload, Lightbulb, Edit3, CheckCircle, Download } from 'lucide-react'

const STEPS = [
  {
    icon: Upload,
    title: 'Send Footage',
    description: 'Share your raw footage and project details securely',
  },
  {
    icon: Lightbulb,
    title: 'Creative Planning',
    description: 'We brainstorm and plan the perfect narrative for your content',
  },
  {
    icon: Edit3,
    title: 'Editing',
    description: 'Professional editing with color grading, effects, and sound design',
  },
  {
    icon: CheckCircle,
    title: 'Review',
    description: 'You review the final cut with unlimited revisions included',
  },
  {
    icon: Download,
    title: 'Final Delivery',
    description: 'Receive optimized files for all platforms and formats',
  },
]

export function Process() {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-400 text-lg">Streamlined workflow from concept to delivery</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-purple origin-left hidden md:block"
          />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {STEPS.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  {/* Step Number */}
                  <motion.div
                    className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center mb-6 cursor-pointer relative z-10 group hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <Icon size={32} className="text-white" />
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-neon-purple opacity-0 group-hover:opacity-100"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, linear: true }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="glass rounded-2xl p-6 text-center">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>

                  {/* Arrow between steps */}
                  {index < STEPS.length - 1 && (
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      className="hidden md:flex justify-center mt-8 md:-mt-12 md:absolute md:bottom-0 md:left-1/2 md:transform md:translate-x-0 md:ml-8"
                    >
                      <div className="text-neon-purple text-2xl">↓</div>
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Ready to get started? Let's create something amazing together</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-blue rounded-2xl font-semibold hover:shadow-lg hover:shadow-neon-purple/50 transition-all duration-300"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
