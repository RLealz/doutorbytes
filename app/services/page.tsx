"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Cpu, HardDrive, Wifi, Shield, Wrench } from "lucide-react"
import { CTASection } from "@/components/cta-section"
import { motion } from "framer-motion"

export default function ServicesPage() {
  const services = [
    {
      icon: <Cpu className="h-10 w-10 text-blue-400" />,
      title: "Hardware Repair",
      description:
        "Comprehensive diagnostics and repair for desktops, laptops, and other devices. We fix motherboards, power supplies, and other components.",
      link: "/services/hardware-repair",
    },
    {
      icon: <HardDrive className="h-10 w-10 text-cyan-400" />,
      title: "Data Recovery",
      description:
        "Professional recovery of lost or corrupted data from any storage device. We can recover data from hard drives, SSDs, USB drives, and more.",
      link: "/services/data-recovery",
    },
    {
      icon: <Wifi className="h-10 w-10 text-blue-400" />,
      title: "Network Setup",
      description:
        "Home and business network installation and troubleshooting. We set up secure Wi-Fi networks, configure routers, and optimize performance.",
      link: "/services/network-setup",
    },
    {
      icon: <Shield className="h-10 w-10 text-green-400" />,
      title: "Virus Removal",
      description:
        "Complete virus and malware removal with system optimization. We clean your system and install protection to prevent future infections.",
      link: "/services/virus-removal",
    },
    {
      icon: <Wrench className="h-10 w-10 text-cyan-400" />,
      title: "Hardware & Software Upgrades",
      description:
        "Hardware and software upgrades to improve performance. We can upgrade RAM, storage, graphics cards, and install the latest software.",
      link: "/services/upgrades",
    },
  ]

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
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-950/30 via-purple-900/20 to-cyan-900/10 relative overflow-hidden">
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

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground mb-0 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Comprehensive computer repair and IT services for all your technology needs
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 md:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80"></div>

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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }}>
                <Card className="h-full overflow-hidden bg-background/50 backdrop-blur-sm border-border/40 relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                  <CardContent className="pt-6">
                    <motion.div
                      className="mb-4 flex justify-center"
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md">
                        {service.icon}
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-bold text-center mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-center mb-4">{service.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-center pb-6">
                    <Button
                      variant="outline"
                      asChild
                      className="border-blue-500/30 hover:bg-blue-500/10 hover:border-blue-500/50"
                    >
                      <Link href={service.link}>Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 md:px-6 bg-gradient-to-br from-blue-950/10 via-purple-900/5 to-cyan-900/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Repair Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a streamlined process to ensure efficient and effective repairs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Diagnostics
              </h3>
              <p className="text-muted-foreground">We thoroughly diagnose your device to identify all issues</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Quote
              </h3>
              <p className="text-muted-foreground">We provide a detailed quote with no hidden fees</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Repair
              </h3>
              <p className="text-muted-foreground">Our certified technicians perform the necessary repairs</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Quality Check
              </h3>
              <p className="text-muted-foreground">We test your device to ensure everything works perfectly</p>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
