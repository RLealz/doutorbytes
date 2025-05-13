import type { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import { Cpu } from "lucide-react"

export const metadata: Metadata = {
  title: "Hardware & Software Upgrade Services | DoutorBytes",
  description:
    "Professional computer upgrade services to improve performance and extend the life of your devices. RAM, storage, graphics card upgrades, and software optimization.",
  keywords:
    "computer upgrades, hardware upgrades, RAM upgrade, SSD upgrade, graphics card upgrade, software upgrade, performance optimization, São Paulo",
  openGraph: {
    title: "Hardware & Software Upgrade Services | DoutorBytes",
    description:
      "Professional computer upgrade services to improve performance and extend the life of your devices. RAM, storage, graphics card upgrades, and software optimization.",
    url: "https://doutorbytes.com/services/upgrades",
    siteName: "DoutorBytes",
    locale: "en_US",
    type: "website",
  },
}

export default function UpgradesPage() {
  return (
    <ServicePageLayout
      title="Hardware & Software Upgrades"
      description="Performance-enhancing hardware and software upgrades to extend the life of your devices and improve productivity."
      icon={<Cpu className="h-6 w-6 text-cyan-400" />}
      imageSrc="/placeholder.svg?height=600&width=800"
      benefits={[
        "Significant performance improvements at a fraction of the cost of a new device",
        "Extended lifespan for your existing computers and devices",
        "Customized upgrade recommendations based on your specific needs and budget",
        "Data migration and preservation during the upgrade process",
        "Compatible component selection with warranty",
        "Software optimization to complement hardware upgrades",
        "Improved multitasking capabilities and reduced loading times",
        "Enhanced graphics performance for gaming or design work",
      ]}
      process={[
        {
          title: "Assessment",
          description: "We evaluate your current system and identify upgrade opportunities",
        },
        {
          title: "Recommendation",
          description: "We provide customized upgrade options based on your needs and budget",
        },
        {
          title: "Implementation",
          description: "We perform the hardware and software upgrades with data preservation",
        },
        {
          title: "Optimization",
          description: "We fine-tune your system for maximum performance gains",
        },
      ]}
      faqs={[
        {
          question: "Which upgrades will give me the best performance improvement?",
          answer:
            "The most impactful upgrades typically include: 1) Upgrading from an HDD to an SSD, which dramatically improves boot and load times; 2) Increasing RAM, which enhances multitasking capabilities; 3) Upgrading the graphics card for better gaming or design work performance. The best upgrade path depends on your specific usage patterns and current configuration.",
        },
        {
          question: "Can any computer be upgraded?",
          answer:
            "Most desktop computers can be extensively upgraded. Laptops typically have more limited upgrade options, usually restricted to RAM and storage. Some ultra-thin laptops and certain brands have components that are soldered to the motherboard, limiting upgrade possibilities. We can assess your specific device and advise on available upgrade options.",
        },
        {
          question: "Will I lose my data during an upgrade?",
          answer:
            "We take extensive precautions to preserve your data during upgrades. For storage upgrades, we migrate all your data to the new drive. For other upgrades, we back up critical data before proceeding. However, we always recommend having a backup of your important files before any hardware service as a best practice.",
        },
        {
          question: "How much does it cost to upgrade my computer?",
          answer:
            "Upgrade costs vary widely depending on the components being upgraded and your specific device. Basic upgrades like doubling RAM or adding an SSD typically range from $100-300 including parts and labor. More extensive upgrades like graphics cards or processors can range from $200-600+. We provide detailed quotes before proceeding with any work.",
        },
        {
          question: "Is it worth upgrading my old computer or should I buy a new one?",
          answer:
            "This depends on several factors including the age of your computer, your performance requirements, and budget. As a general rule, if your computer is less than 5 years old, strategic upgrades can significantly extend its useful life at a fraction of the cost of a new system. We can evaluate your current system and provide honest recommendations based on cost-effectiveness.",
        },
      ]}
      relatedServices={[
        {
          title: "Hardware Repair",
          href: "/services/hardware-repair",
        },
        {
          title: "Virus Removal",
          href: "/services/virus-removal",
        },
        {
          title: "Data Recovery",
          href: "/services/data-recovery",
        },
      ]}
    />
  )
}
