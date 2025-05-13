import type { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import { Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Virus & Malware Removal Services | DoutorBytes",
  description:
    "Professional virus and malware removal services. We clean your system, remove all threats, and implement protection to prevent future infections.",
  keywords:
    "virus removal, malware removal, spyware removal, ransomware removal, computer security, antivirus, cybersecurity, São Paulo",
  openGraph: {
    title: "Virus & Malware Removal Services | DoutorBytes",
    description:
      "Professional virus and malware removal services. We clean your system, remove all threats, and implement protection to prevent future infections.",
    url: "https://doutorbytes.com/services/virus-removal",
    siteName: "DoutorBytes",
    locale: "en_US",
    type: "website",
  },
}

export default function VirusRemovalPage() {
  return (
    <ServicePageLayout
      title="Virus Removal"
      description="Complete virus and malware removal with system optimization and security implementation to prevent future infections."
      icon={<Shield className="h-6 w-6 text-green-400" />}
      imageSrc="/placeholder.svg?height=600&width=800"
      benefits={[
        "Thorough scanning and removal of all viruses, malware, spyware, and ransomware",
        "Data preservation during the cleaning process",
        "System optimization to restore performance",
        "Implementation of robust security measures to prevent future infections",
        "Removal of browser hijackers and unwanted extensions",
        "Cleanup of startup programs and background processes",
        "Security best practices education",
        "Follow-up scan to ensure complete removal",
      ]}
      process={[
        {
          title: "Diagnosis",
          description: "We identify all malicious software and security vulnerabilities",
        },
        {
          title: "Removal",
          description: "We safely remove all viruses and malware while preserving your data",
        },
        {
          title: "Protection",
          description: "We implement security measures to protect against future threats",
        },
        {
          title: "Optimization",
          description: "We optimize your system for improved performance and security",
        },
      ]}
      faqs={[
        {
          question: "How can I tell if my computer has a virus?",
          answer:
            "Common signs include unexpected slowdowns, frequent crashes, pop-up ads, browser redirects, unfamiliar programs starting automatically, unusual network activity, or missing files. If you notice any of these symptoms, it's best to have your system checked by professionals.",
        },
        {
          question: "Can you remove ransomware and recover my files?",
          answer:
            "We can remove the ransomware infection from your system. File recovery depends on the specific ransomware variant and whether you have backups. In some cases, we can use specialized tools to decrypt files, but this isn't always possible. We recommend maintaining regular backups to protect against ransomware.",
        },
        {
          question: "How long does virus removal take?",
          answer:
            "A standard virus removal service typically takes 24-48 hours. This includes thorough scanning, removal of all threats, system optimization, and implementation of security measures. For severe infections or if data recovery is needed, the process may take longer.",
        },
        {
          question: "Will I lose my data during virus removal?",
          answer:
            "We make every effort to preserve all your data during the virus removal process. In most cases, no data is lost. However, some aggressive malware can damage files before removal. We recommend backing up important files whenever possible before any service.",
        },
        {
          question: "What security measures do you implement to prevent future infections?",
          answer:
            "We install reputable antivirus/anti-malware software, configure firewalls, update all software and operating systems, remove vulnerable plugins, secure browsers, implement ad-blockers, and provide education on safe browsing practices and how to recognize phishing attempts.",
        },
      ]}
      relatedServices={[
        {
          title: "Data Recovery",
          href: "/services/data-recovery",
        },
        {
          title: "Hardware & Software Upgrades",
          href: "/services/upgrades",
        },
        {
          title: "Network Setup",
          href: "/services/network-setup",
        },
      ]}
    />
  )
}
