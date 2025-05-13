"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Monitor, HardDrive, Wifi, Clock, Award, Phone } from "lucide-react"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { HeroSection } from "@/components/hero-section"
import { CTASection } from "@/components/cta-section"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Services Section */}
      <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>

        {/* Animated background elements */}
        <motion.div
          className="absolute top-40 left-20 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"
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
          className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"
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

        <div className="container mx-auto relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional computer repair and IT services for individuals and businesses
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <ServiceCard
                icon={<Cpu className="h-10 w-10 text-blue-400" />}
                title="Hardware Repair"
                description="Diagnostics and repair for desktops, laptops, and other devices"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ServiceCard
                icon={<Monitor className="h-10 w-10 text-purple-400" />}
                title="Screen Replacement"
                description="Fast and reliable screen replacement for laptops and monitors"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ServiceCard
                icon={<HardDrive className="h-10 w-10 text-cyan-400" />}
                title="Data Recovery"
                description="Professional recovery of lost or corrupted data from any storage device"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ServiceCard
                icon={<Wifi className="h-10 w-10 text-blue-400" />}
                title="Network Setup"
                description="Home and business network installation and troubleshooting"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ServiceCard
                icon={<Monitor className="h-10 w-10 text-purple-400" />}
                title="Virus Removal"
                description="Complete virus and malware removal with system optimization"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ServiceCard
                icon={<Cpu className="h-10 w-10 text-cyan-400" />}
                title="Upgrades"
                description="Hardware and software upgrades to improve performance"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 border-none"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/10 via-purple-900/5 to-cyan-900/10"></div>

        <div className="container mx-auto relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Why Choose DoutorBytes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide reliable, fast, and affordable computer repair services
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden bg-background/50 backdrop-blur-sm border-border/40 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                <CardContent className="pt-6 text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="mx-auto mb-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto">
                      <Clock className="h-8 w-8 text-blue-400" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Fast Turnaround
                  </h3>
                  <p className="text-muted-foreground">
                    Most repairs completed within 24-48 hours, with same-day service available
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden bg-background/50 backdrop-blur-sm border-border/40 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                <CardContent className="pt-6 text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="mx-auto mb-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto">
                      <Award className="h-8 w-8 text-purple-400" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Certified Technicians
                  </h3>
                  <p className="text-muted-foreground">
                    Our team consists of certified professionals with years of experience
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden bg-background/50 backdrop-blur-sm border-border/40 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
                <CardContent className="pt-6 text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="mx-auto mb-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto">
                      <Phone className="h-8 w-8 text-cyan-400" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Free Diagnostics
                  </h3>
                  <p className="text-muted-foreground">
                    We offer free diagnostics and only charge for the repairs you approve
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>

        {/* Animated background elements */}
        <motion.div
          className="absolute top-40 right-20 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <div className="container mx-auto relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <TestimonialCard
                name="Carlos Silva"
                role="Small Business Owner"
                content="DoutorBytes saved my business when our server crashed. They recovered all our data and had us back up and running in no time. Highly recommended!"
                avatarSrc="/placeholder.svg?height=80&width=80"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <TestimonialCard
                name="Ana Ferreira"
                role="Graphic Designer"
                content="My laptop screen cracked right before a big deadline. The team at DoutorBytes replaced it the same day and saved my project. Amazing service!"
                avatarSrc="/placeholder.svg?height=80&width=80"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <TestimonialCard
                name="Ricardo Mendes"
                role="Student"
                content="As a student, I couldn't afford to lose my thesis data. DoutorBytes not only recovered everything but also upgraded my laptop to prevent future issues."
                avatarSrc="/placeholder.svg?height=80&width=80"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
