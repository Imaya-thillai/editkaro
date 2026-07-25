'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project turnaround depends on complexity. Short-form content (Reels, Shorts) typically takes 3-5 business days. Longer formats can take 1-2 weeks. We discuss timelines during the initial consultation.',
  },
  {
    question: 'Do you offer unlimited revisions?',
    answer: 'Yes! We include unlimited revisions until you&apos;re completely satisfied. Your satisfaction is our priority, and we won&apos;t consider the project complete until it exceeds your expectations.',
  },
  {
    question: 'What format files do you deliver?',
    answer: 'We deliver optimized files for all platforms: MP4 for web, H.264 for streaming, ProRes for professional work, and platform-specific formats for Instagram, YouTube, TikTok, etc.',
  },
  {
    question: 'Can you work with footage from different sources?',
    answer: 'Absolutely! We can work with footage from DSLRs, smartphones, drones, or any other source. We color grade and optimize regardless of the camera used.',
  },
  {
    question: 'Do you provide music and sound design?',
    answer: 'Yes, we handle everything including royalty-free music selection, sound design, and mixing. We ensure all audio is properly licensed and optimized for your platform.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'We offer flexible pricing based on project scope, length, and complexity. We provide custom quotes after understanding your needs. Most projects start at $500 for short-form content.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-lg">Everything you need to know about our services</p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
              >
                <span className="text-lg font-semibold pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown
                    size={24}
                    className={`${openIndex === index ? 'text-neon-purple' : 'text-gray-500'}`}
                  />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-white/10"
                  >
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="p-6 text-gray-300 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-6">Still have questions?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 glass rounded-2xl font-semibold hover:border-neon-purple/50 transition-all"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
