"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { MenuBar } from "./menu-bar"
import { motion } from "framer-motion"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-lg supports-[backdrop-filter]:bg-background/30">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.span
            className="font-bold text-xl md:text-2xl bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            DoutorBytes
          </motion.span>
        </Link>

        <div className="hidden md:flex">
          <MenuBar />
        </div>

        <div className="flex md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/80 backdrop-blur-xl border-border/40">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Home
                </Link>
                <Link href="/services" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Services
                </Link>
                <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  About
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Contact
                </Link>
                <Button
                  asChild
                  className="mt-4 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Book a Repair
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
