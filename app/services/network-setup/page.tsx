import type { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import { Wifi } from "lucide-react"

export const metadata: Metadata = {
  title: "Network Setup & Troubleshooting Services | DoutorBytes",
  description:
    "Professional network installation, configuration, and troubleshooting services for homes and businesses. Secure Wi-Fi setup, router configuration, and network optimization.",
  keywords:
    "network setup, wifi setup, router configuration, network troubleshooting, business network, home network, network security, São Paulo",
  openGraph: {
    title: "Network Setup & Troubleshooting Services | DoutorBytes",
    description:
      "Professional network installation, configuration, and troubleshooting services for homes and businesses. Secure Wi-Fi setup, router configuration, and network optimization.",
    url: "https://doutorbytes.com/services/network-setup",
    siteName: "DoutorBytes",
    locale: "en_US",
    type: "website",
  },
}

export default function NetworkSetupPage() {
  return (
    <ServicePageLayout
      title="Network Setup"
      description="Professional network installation, configuration, and troubleshooting for homes and businesses with security and performance optimization."
      icon={<Wifi className="h-6 w-6 text-blue-400" />}
      imageSrc="/placeholder.svg?height=600&width=800"
      benefits={[
        "Custom network design based on your specific needs and space",
        "Secure Wi-Fi configuration with strong encryption",
        "Elimination of dead zones with optimal access point placement",
        "Network performance optimization for maximum speed",
        "Firewall setup and security implementation",
        "Device integration including printers, smart home devices, and NAS",
        "Guest network setup for secure visitor access",
        "Detailed documentation of your network configuration",
      ]}
      process={[
        {
          title: "Assessment",
          description: "We evaluate your space and requirements for optimal network design",
        },
        {
          title: "Installation",
          description: "We install and configure all network equipment",
        },
        {
          title: "Security",
          description: "We implement security measures to protect your network",
        },
        {
          title: "Testing",
          description: "We thoroughly test all aspects of your network for reliability",
        },
      ]}
      faqs={[
        {
          question: "What's included in your network setup service?",
          answer:
            "Our network setup service includes network design, equipment installation, router and access point configuration, security implementation, device connection, performance optimization, and basic training on network management. We can also set up guest networks, VLANs, and specialized configurations based on your needs.",
        },
        {
          question: "Can you improve my existing Wi-Fi coverage?",
          answer:
            "Yes, we can optimize your existing network by repositioning equipment, adding access points to eliminate dead zones, upgrading to more powerful routers, implementing mesh systems, and configuring settings for optimal performance. We'll perform a site survey to identify the best solution for your space.",
        },
        {
          question: "Do you provide business network solutions?",
          answer:
            "Absolutely. We offer comprehensive business network solutions including secure VLANs, enterprise-grade equipment installation, WAN configuration, VPN setup, network monitoring, scalable designs for future growth, and custom solutions based on your business requirements.",
        },
        {
          question: "How do you ensure my network is secure?",
          answer:
            "We implement multiple security measures including strong WPA3 encryption, secure router configurations, regular firmware updates, guest network isolation, MAC address filtering, strong password policies, firewall configuration, and VPN setup when needed. We also provide guidance on ongoing security practices.",
        },
        {
          question: "Can you help with smart home device integration?",
          answer:
            "Yes, we specialize in integrating smart home devices into your network. This includes connecting and configuring smart speakers, thermostats, lighting, security cameras, door locks, and home automation hubs. We ensure these devices work reliably while maintaining network security.",
        },
      ]}
      relatedServices={[
        {
          title: "Hardware & Software Upgrades",
          href: "/services/upgrades",
        },
        {
          title: "Virus Removal",
          href: "/services/virus-removal",
        },
        {
          title: "Business IT Support",
          href: "/services/business-it-support",
        },
      ]}
    />
  )
}
