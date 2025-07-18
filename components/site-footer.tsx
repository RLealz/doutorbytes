"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>

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

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <motion.h3
              className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              DoutorBytes
            </motion.h3>
            <p className="mb-4 text-gray-400">
              Advanced computer repair and IT services for individuals and businesses. Cutting-edge solutions for all
              your tech problems.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/hardware-repair" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Hardware Repair
                </Link>
              </li>
              <li>
                <Link href="/services/data-recovery" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Data Recovery
                </Link>
              </li>
              <li>
                <Link href="/services/virus-removal" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Virus Removal
                </Link>
              </li>
              <li>
                <Link href="/services/network-setup" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Network Setup
                </Link>
              </li>
              <li>
                <Link href="/services/upgrades" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Hardware & Software Upgrades
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-400">Campo Grande Lisboa Portugal 1700-094</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-400" />
                <Link href="tel:+351939427390" className="text-gray-400 hover:text-blue-400 transition-colors">
                  +351 939 427 390
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                <Link
                  href="mailto:geral.doutorbytes.pt@outlook.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  geral.doutorbytes.pt@outlook.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DoutorBytes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
