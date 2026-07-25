'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Play } from 'lucide-react'

const CATEGORIES = [
  'All',
  'Short Form',
  'Long Form',
  'Gaming',
  'Football',
  'eCommerce Ads',
  'Documentary',
  'Color Grading',
  'Anime',
  'Commercial Ads',
]

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'Instagram Reels Series',
    category: 'Short Form',
    duration: '0:30 - 1:00',
    height: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 2,
    title: 'YouTube Transformation',
    category: 'Long Form',
    duration: '10-15 min',
    height: 'md:col-span-2 md:row-span-1',
  },
  {
    id: 3,
    title: 'Gaming Montage 4K',
    category: 'Gaming',
    duration: '3:00 - 5:00',
    height: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 4,
    title: 'Football Highlights',
    category: 'Football',
    duration: '2:00 - 3:00',
    height: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 5,
    title: 'Amazon Product Ad',
    category: 'eCommerce Ads',
    duration: '0:30',
    height: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 6,
    title: 'Documentary Film',
    category: 'Documentary',
    duration: '25-30 min',
    height: 'md:col-span-2 md:row-span-1',
  },
  {
    id: 7,
    title: 'Color Grading Showcase',
    category: 'Color Grading',
    duration: '2:00',
    height: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 8,
    title: 'Anime Opening Tribute',
    category: 'Anime',
    duration: '1:30',
    height: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 9,
    title: 'Commercial Advertisement',
    category: 'Commercial Ads',
    duration: '0:45',
    height: 'md:col-span-2 md:row-span-1',
  },
]

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredItems = selectedCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-gray-400 text-lg">Explore our finest work across all categories</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12 md:mb-16"
        >
          {CATEGORIES.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-neon-purple to-neon-blue text-white glow-purple'
                  : 'glass hover:border-neon-purple/50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`${item.height} glass rounded-2xl overflow-hidden group cursor-pointer glow-purple`}
            >
              {/* Image Placeholder with Gradient */}
              <div className="w-full h-full bg-gradient-to-br from-neon-purple/20 via-neon-blue/20 to-neon-purple/20 relative overflow-hidden min-h-64">
                {/* Animated overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30"
                  >
                    <Play size={32} className="fill-white" />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="bg-neon-purple/80 text-white text-xs font-semibold px-3 py-1 rounded-full w-fit"
                  >
                    {item.category}
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.duration}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
