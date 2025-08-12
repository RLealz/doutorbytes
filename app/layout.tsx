import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "DoutorBytes - Expert Computer Repair & IT Services",
  description:
    "Professional computer repair and IT services for individuals and businesses. Fast, reliable, and affordable solutions for all your tech problems.",
  generator: "v0.dev",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "DoutorBytes - Expert Computer Repair & IT Services",
    description:
      "Professional computer repair and IT services for individuals and businesses. Fast, reliable, and affordable solutions for all your tech problems.",
    images: [{ url: "/placeholder.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DoutorBytes - Expert Computer Repair & IT Services",
    description:
      "Professional computer repair and IT services for individuals and businesses. Fast, reliable, and affordable solutions for all your tech problems.",
    images: ["/placeholder.jpg"],
  },
  icons: {
    icon: "/placeholder-logo.png",
    shortcut: "/placeholder-logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-background to-background/90">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
