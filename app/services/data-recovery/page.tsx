import type { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import { HardDrive } from "lucide-react"

export const metadata: Metadata = {
  title: "Data Recovery Services | DoutorBytes",
  description:
    "Professional data recovery services for all storage devices. We recover lost, deleted, or corrupted data from hard drives, SSDs, USB drives, and more.",
  keywords:
    "data recovery, hard drive recovery, SSD recovery, file recovery, deleted files, corrupted data, data loss, São Paulo",
  openGraph: {
    title: "Data Recovery Services | DoutorBytes",
    description:
      "Professional data recovery services for all storage devices. We recover lost, deleted, or corrupted data from hard drives, SSDs, USB drives, and more.",
    url: "https://doutorbytes.com/services/data-recovery",
    siteName: "DoutorBytes",
    locale: "en_US",
    type: "website",
  },
}

export default function DataRecoveryPage() {
  return (
    <ServicePageLayout
      title="Data Recovery"
      description="Professional recovery of lost, deleted, or corrupted data from any storage device with high success rates."
      icon={<HardDrive className="h-6 w-6 text-purple-400" />}
      imageSrc="/placeholder.svg?height=600&width=800"
      benefits={[
        "Recovery from all types of storage media including HDDs, SSDs, USB drives, memory cards, and RAID arrays",
        "High success rate even with severely damaged storage devices",
        "Clean room facilities for physical recovery when necessary",
        "Confidential and secure handling of your sensitive data",
        "No recovery, no fee policy - you only pay if we recover your data",
        "Fast emergency recovery options available",
        "Detailed reporting on recovered files",
        "Secure data transfer after recovery",
      ]}
      process={[
        {
          title: "Evaluation",
          description: "We assess your storage device and determine the recovery method",
        },
        {
          title: "Quote",
          description: "We provide a detailed quote based on the complexity of recovery",
        },
        {
          title: "Recovery",
          description: "Our specialists perform the data recovery process",
        },
        {
          title: "Verification",
          description: "We verify the recovered data and provide a detailed report",
        },
      ]}
      faqs={[
        {
          question: "Can you recover data from a physically damaged hard drive?",
          answer:
            "Yes, we can recover data from physically damaged hard drives in many cases. We have specialized equipment and clean room facilities to safely open drives and recover data from damaged platters. The success rate depends on the extent of the damage.",
        },
        {
          question: "How much does data recovery cost?",
          answer:
            "Data recovery costs vary based on the type of storage device, the extent of damage, and the complexity of the recovery process. We provide a free evaluation and quote before proceeding with any recovery work. Our pricing is transparent with no hidden fees.",
        },
        {
          question: "How long does data recovery take?",
          answer:
            "Standard data recovery typically takes 2-5 business days, depending on the complexity. We also offer emergency recovery services that can be completed within 24-48 hours for critical situations, though this service comes at a premium rate.",
        },
        {
          question: "What types of data can you recover?",
          answer:
            "We can recover virtually all types of files including documents, photos, videos, emails, databases, financial records, and more. Our specialized software can recognize and recover hundreds of file formats from all operating systems.",
        },
        {
          question: "Is my data kept confidential during the recovery process?",
          answer:
            "Absolutely. We maintain strict confidentiality protocols. All our staff sign NDAs, and we have secure facilities. We never access the content of your files unless specifically requested to verify recovery success. After recovery, we securely erase all your data from our systems.",
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
          title: "Cloud Services",
          href: "/services/cloud-services",
        },
      ]}
    />
  )
}
