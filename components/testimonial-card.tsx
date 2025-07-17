"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
}

export function TestimonialCard({ name, role, content }: TestimonialCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
      <Card className="overflow-hidden bg-background/50 backdrop-blur-sm border-border/40 relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <CardContent className="pt-6">
          <div className="flex flex-col text-center">
            <div className="relative mb-6">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <p className="text-muted-foreground italic relative z-10 text-lg leading-relaxed">&ldquo;{content}&rdquo;</p>
            </div>
            <div className="mt-auto">
              <p className="font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-lg">
                {name}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
