"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhoneCall, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-16 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-cyan-900/90"></div>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Tech circuit lines */}
      <svg
        className="absolute inset-0 w-full h-full z-0 opacity-10"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke="rgba(59,130,246,0.5)"
          strokeWidth="0.2"
          fill="none"
          d="M0,20 H100 M0,40 H100 M0,60 H100 M0,80 H100"
        />
        <path
          stroke="rgba(139,92,246,0.5)"
          strokeWidth="0.2"
          fill="none"
          d="M20,0 V100 M40,0 V100 M60,0 V100 M80,0 V100"
        />
      </svg>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Fix Your Tech Problems?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-blue-100/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Don&apos;t let computer issues slow you down. Our expert technicians are ready to help you today.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 border-none"
              asChild
            >
              <Link href="/contact" className="flex items-center gap-2">
                Book a Repair
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-400/30 text-blue-100 hover:bg-blue-500/10"
              asChild
            >
              <Link href="tel:+123456789" className="flex items-center gap-2">
                <PhoneCall className="h-5 w-5" />
                Call Us Now
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
