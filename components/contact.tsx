'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Short-form',
    budget: '$500-$1000',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let&apos;s Create Magic</h2>
          <p className="text-gray-400 text-lg">Ready to bring your vision to life?</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple/30 to-neon-blue/30 flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-neon-purple" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-400">contact@editkaro.in</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple/30 to-neon-blue/30 flex items-center justify-center flex-shrink-0">
                <Phone size={24} className="text-neon-purple" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-gray-400">+91 (800) 123-4567</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple/30 to-neon-blue/30 flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-neon-purple" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-gray-400">Mumbai, India</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400 mb-4">Follow us on social media</p>
              <div className="flex gap-4">
                {['Instagram', 'YouTube', 'Twitter', 'LinkedIn'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-10 h-10 glass rounded-full flex items-center justify-center hover:border-neon-purple/50"
                  >
                    {social.charAt(0)}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            onSubmit={handleSubmit}
            className="md:col-span-2 glass rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-purple/50 transition-colors"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-purple/50 transition-colors"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-purple/50 transition-colors"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-2">Project Type</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-purple/50 transition-colors"
                >
                  <option>Short-form</option>
                  <option>Long-form</option>
                  <option>Commercial</option>
                  <option>Other</option>
                </select>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="mb-6">
              <label className="block text-sm font-medium mb-2">Budget</label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-purple/50 transition-colors"
              >
                <option>$500-$1000</option>
                <option>$1000-$2500</option>
                <option>$2500-$5000</option>
                <option>$5000+</option>
              </select>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6">
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-purple/50 transition-colors resize-none"
                required
              />
            </motion.div>

            <motion.button
              variants={itemVariants}
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 bg-gradient-to-r from-neon-purple to-neon-blue rounded-xl font-semibold hover:shadow-lg hover:shadow-neon-purple/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              {submitted ? 'Message Sent! 🎉' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* Background blur */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl -z-10" />
    </section>
  )
}
