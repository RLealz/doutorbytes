"use client"

import { MapPin } from "lucide-react"

interface InteractiveMapProps {
  className?: string
}

export function InteractiveMap({ className }: InteractiveMapProps) {
  // Google Maps embed URL for Campo Grande, Lisboa, Portugal
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.8!2d-9.1549!3d38.7569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQ1JzI0LjgiTiA5wrAwOScxNy42Ilc!5e0!3m2!1sen!2spt!4v1642000000000!5m2!1sen!2spt"

  return (
    <div className={`relative ${className}`}>
      <iframe
        src={googleMapsUrl}
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: "0.5rem" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="DoutorBytes Location - Campo Grande, Lisboa, Portugal"
        className="w-full h-full rounded-lg"
      />
      
      {/* Overlay with location info on hover */}
      <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
        <div className="text-center text-white p-4">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-3">
            <MapPin className="h-6 w-6 text-blue-400" />
          </div>
          <h3 className="font-semibold text-lg mb-2">DoutorBytes</h3>
          <p className="text-sm opacity-90">Campo Grande Lisboa Portugal</p>
          <p className="text-sm opacity-90">1700-094</p>
          <div className="mt-3 space-y-1">
            <p className="text-sm">
              <a href="tel:+351939427390" className="text-blue-400 hover:text-blue-300 pointer-events-auto">
                +351 939 427 390
              </a>
            </p>
            <p className="text-sm">
              <a href="mailto:geral.doutorbytes.pt@outlook.com" className="text-blue-400 hover:text-blue-300 pointer-events-auto">
                geral.doutorbytes.pt@outlook.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}