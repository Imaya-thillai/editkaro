'use client'

import { motion } from 'framer-motion'
import {
  Sparkles,
  Film,
  Palette,
  Music,
  Zap,
  Gift,
  Heart,
  Clapperboard,
} from 'lucide-react'

const SERVICES = [
  {
    icon: Film,
    title: 'Video Editing',
    description: 'Professional editing with cinematic color grading and seamless transitions',
  },
  {
    icon: Sparkles,
    title: 'Motion Graphics',
    description: 'Eye-catching animations and visual effects that elevate your content',
  },
  {
    icon: Palette,
    title: 'Color Grading',
    description: 'Premium color correction to match your brand aesthetic perfectly',
  },
  {
    icon: Music,
    title: 'YouTube Editing',
    description: 'Optimized edits designed to keep viewers engaged throughout',
  },
  {
    icon: Zap,
    title: 'Instagram Reels',
    description: 'Fast-paced, scroll-stopping content for maximum reach and engagement',
  },
  {
    icon: Clapperboard,
    title: 'Commercial Ads',
    description: 'Persuasive video ads that convert viewers into customers',
  },
  {
    icon: Heart,
    title: 'Wedding Films',
    description: 'Emotional storytelling that captures your special moments forever',
  },
  {
    icon: Gift,
    title: 'Short-form Content',
    description: 'Viral-worthy clips optimized for TikTok, Reels, and Shorts',
  },
]

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 text-lg">Comprehensive video production solutions for every need</p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)',
                }}
                className="glass rounded-2xl p-8 group cursor-pointer transition-all duration-300 hover:border-neon-purple/50"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple/30 to-neon-blue/30 flex items-center justify-center mb-4 group-hover:from-neon-purple/50 group-hover:to-neon-blue/50 transition-colors"
                >
                  <Icon size={24} className="text-neon-purple" />
                </motion.div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-neon-purple transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>

                <motion.div
                  className="mt-4 w-8 h-8 rounded-full bg-neon-purple/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Background blur effect */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl -z-10" />
    </section>
  )
}
