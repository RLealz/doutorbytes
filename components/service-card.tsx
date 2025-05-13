"use client"

import { Card, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
      <Card className="overflow-hidden bg-background/50 backdrop-blur-sm border-border/40 relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <CardContent className="pt-6">
          <motion.div
            className="mb-4 flex justify-center"
            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md">
              {icon}
            </div>
          </motion.div>
          <h3 className="text-xl font-bold text-center mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-muted-foreground text-center">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
