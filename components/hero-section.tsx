"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Cpu, Shield, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-blue-950/30 via-purple-900/20 to-cyan-900/10">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
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
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"
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

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <motion.div
              className="inline-block px-4 py-1 mb-6 rounded-full bg-background/10 backdrop-blur-md border border-blue-500/20 text-sm font-medium text-blue-400"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              Next-Gen Computer Repair
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 text-transparent bg-clip-text">
              Tech Solutions <br />
              For The Future
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-md">
              Advanced diagnostics and repair by certified technicians. We solve complex tech problems with cutting-edge
              solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 border-none"
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
              <Button size="lg" variant="outline" asChild className="border-blue-500/30 hover:bg-blue-500/10">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4">
              <motion.div
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-2">
                  <Cpu className="h-5 w-5 text-blue-400" />
                </div>
                <p className="text-sm text-muted-foreground">Advanced Diagnostics</p>
              </motion.div>

              <motion.div
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mb-2">
                  <Shield className="h-5 w-5 text-purple-400" />
                </div>
                <p className="text-sm text-muted-foreground">Guaranteed Repairs</p>
              </motion.div>

              <motion.div
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center mb-2">
                  <Clock className="h-5 w-5 text-cyan-400" />
                </div>
                <p className="text-sm text-muted-foreground">Fast Turnaround</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Futuristic computer repair"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl"></div>

            {/* Tech circuit lines */}
            <svg
              className="absolute top-0 right-0 w-full h-full z-0 opacity-20"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="rgba(59,130,246,0.5)"
                strokeWidth="0.5"
                fill="none"
                d="M10,10 L50,10 L50,50 L90,50 L90,90 L130,90 L130,130 L170,130 L170,170"
              />
              <path
                stroke="rgba(139,92,246,0.5)"
                strokeWidth="0.5"
                fill="none"
                d="M30,10 L30,50 L70,50 L70,90 L110,90 L110,130 L150,130 L150,170"
              />
              <path
                stroke="rgba(6,182,212,0.5)"
                strokeWidth="0.5"
                fill="none"
                d="M10,30 L50,30 L50,70 L90,70 L90,110 L130,110 L130,150 L170,150"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
