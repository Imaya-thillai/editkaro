'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export function Footer() {
  const footerLinks = [
    {
      title: 'Services',
      links: ['Video Editing', 'Motion Graphics', 'Color Grading', 'YouTube Editing'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Our Team', 'Careers', 'Blog'],
    },
    {
      title: 'Resources',
      links: ['Portfolio', 'Case Studies', 'Client Stories', 'FAQ'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Contact', 'Sitemap'],
    },
  ]

  return (
    <footer className="bg-black/50 backdrop-blur border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent mb-4">
              Editkaro
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Creative video editing and social media content that stops the scroll.
            </p>
            <div className="flex gap-3">
              {['Instagram', 'YouTube', 'LinkedIn', 'Twitter'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-xs font-semibold hover:border-neon-purple/50 transition-all"
                >
                  {social.charAt(0)}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-neon-purple transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
        >
          <p>
            © 2024 Editkaro. All rights reserved. | Made with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block"
            >
              <Heart size={16} className="inline text-neon-purple fill-neon-purple" />
            </motion.span>
            {' '}for creators
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-neon-purple transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-neon-purple transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>

      {/* Background gradient */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl -z-10" />
    </footer>
  )
}
