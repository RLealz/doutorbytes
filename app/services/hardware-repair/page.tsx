import type { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import { Cpu } from "lucide-react"

export const metadata: Metadata = {
  title: "Hardware Repair Services | DoutorBytes",
  description:
    "Professional computer hardware repair services for desktops, laptops, and other devices. Fast diagnostics and reliable repairs by certified technicians.",
  keywords:
    "computer repair, hardware repair, laptop repair, desktop repair, motherboard repair, computer technician, São Paulo",
  openGraph: {
    title: "Hardware Repair Services | DoutorBytes",
    description:
      "Professional computer hardware repair services for desktops, laptops, and other devices. Fast diagnostics and reliable repairs by certified technicians.",
    url: "https://doutorbytes.com/services/hardware-repair",
    siteName: "DoutorBytes",
    locale: "en_US",
    type: "website",
  },
}

export default function HardwareRepairPage() {
  return (
    <ServicePageLayout
      title="Hardware Repair"
      description="Professional diagnostics and repair for desktops, laptops, and other devices by certified technicians."
      icon={<Cpu className="h-6 w-6 text-blue-400" />}
      imageSrc="/placeholder.svg?height=600&width=800"
      benefits={[
        "Expert diagnostics to identify the exact hardware issue",
        "Repairs for all major brands including Apple, Dell, HP, Lenovo, and more",
        "Fast turnaround with most repairs completed within 24-48 hours",
        "Quality replacement parts with warranty",
        "Data preservation during the repair process",
        "Post-repair testing to ensure everything works perfectly",
        "Transparent pricing with no hidden fees",
        "Free consultation and cost estimate before any work begins",
      ]}
      process={[
        {
          title: "Diagnostics",
          description: "We perform comprehensive testing to identify all hardware issues",
        },
        {
          title: "Quote",
          description: "We provide a detailed quote with transparent pricing",
        },
        {
          title: "Repair",
          description: "Our certified technicians perform the necessary repairs",
        },
        {
          title: "Quality Check",
          description: "We thoroughly test your device to ensure everything works perfectly",
        },
      ]}
      faqs={[
        {
          question: "How long does a typical hardware repair take?",
          answer:
            "Most hardware repairs are completed within 24-48 hours, depending on the complexity of the issue and the availability of parts. For common repairs like screen replacements or hard drive upgrades, we often offer same-day service.",
        },
        {
          question: "Do you provide warranty on hardware repairs?",
          answer:
            "Yes, all our hardware repairs come with a 90-day warranty covering both parts and labor. If the same issue recurs within the warranty period, we'll fix it at no additional cost.",
        },
        {
          question: "Can you repair water-damaged devices?",
          answer:
            "Yes, we specialize in water damage recovery. The success rate depends on the extent of the damage and how quickly you bring the device to us. We recommend turning off the device immediately and bringing it in as soon as possible for the best chance of recovery.",
        },
        {
          question: "Do I need to back up my data before bringing in my device?",
          answer:
            "While we take every precaution to preserve your data during repairs, we always recommend backing up your important files whenever possible. If you can't back up your data, let us know, and we can often perform a backup for you before beginning repairs.",
        },
        {
          question: "What brands do you repair?",
          answer:
            "We repair all major brands including Apple, Dell, HP, Lenovo, Asus, Acer, Microsoft Surface, Samsung, and many more. Our technicians are certified and experienced with a wide range of devices.",
        },
      ]}
      relatedServices={[
        {
          title: "Screen Replacement",
          href: "/services/screen-replacement",
        },
        {
          title: "Data Recovery",
          href: "/services/data-recovery",
        },
        {
          title: "Hardware & Software Upgrades",
          href: "/services/upgrades",
        },
      ]}
    />
  )
}
