"use client"

import { useState } from "react"
import { useActionState } from "react" // Updated import
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { submitContactForm, type FormState } from "../actions/contact-form"
import { useFormStatus } from "react-dom"

// Submit button with loading state
function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 border-none"
      disabled={pending}
    >
      {pending ? (
        <span className="flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          Submitting...
        </span>
      ) : (
        "Submit Request"
      )}
    </Button>
  )
}

export default function ContactPage() {
  // Updated to use useActionState instead of useFormState
  const [formState, formAction] = useActionState<FormState, FormData>(submitContactForm, {})
  const [selectedService, setSelectedService] = useState("")
  const [selectedUrgency, setSelectedUrgency] = useState("")

  // Reset form after successful submission
  const handleReset = () => {
    // Reset form state
    formAction(new FormData())
    setSelectedService("")
    setSelectedUrgency("")
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-950/30 via-purple-900/20 to-cyan-900/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>

        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground mb-0 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Get in touch with our team for fast and reliable computer repair services
          </motion.p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4 md:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-background to-background/80"></div>

        {/* Tech circuit lines */}
        <svg
          className="absolute inset-0 w-full h-full z-0 opacity-5"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="rgba(59,130,246,0.5)"
            strokeWidth="0.2"
            fill="none"
            d="M0,20 H100 M0,40 H100 M0,60 H100 M0,80 H100"
          />
          <path
            stroke="rgba(139,92,246,0.5)"
            strokeWidth="0.2"
            fill="none"
            d="M20,0 V100 M40,0 V100 M60,0 V100 M80,0 V100"
          />
        </svg>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Card className="overflow-hidden bg-background/50 backdrop-blur-sm border-border/40 relative">
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Book a Repair
                  </CardTitle>
                  <CardDescription>Fill out the form below to schedule a repair or consultation</CardDescription>
                </CardHeader>
                <CardContent>
                  <AnimatePresence mode="wait">
                    {formState.success ? (
                      <motion.div
                        className="text-center py-8"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="mb-6 flex justify-center">
                          <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                            <CheckCircle className="h-8 w-8 text-green-500" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                          Thank You!
                        </h3>
                        <p className="mb-6 text-muted-foreground">{formState.message}</p>
                        <Button
                          onClick={handleReset}
                          className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 border-none"
                        >
                          Submit Another Request
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.form
                        action={formAction}
                        className="space-y-6"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                      >
                        {formState.errors?._form && (
                          <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 flex items-start gap-2">
                            <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                            <div className="text-red-500 text-sm">{formState.errors._form}</div>
                          </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-foreground">
                              Full Name
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              className={`bg-background/50 border-border/60 focus:border-blue-500/50 focus:ring-blue-500/20 ${
                                formState.errors?.name
                                  ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20"
                                  : ""
                              }`}
                              required
                            />
                            {formState.errors?.name && (
                              <p className="text-red-500 text-xs mt-1">{formState.errors.name[0]}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-foreground">
                              Email
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              className={`bg-background/50 border-border/60 focus:border-blue-500/50 focus:ring-blue-500/20 ${
                                formState.errors?.email
                                  ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20"
                                  : ""
                              }`}
                              required
                            />
                            {formState.errors?.email && (
                              <p className="text-red-500 text-xs mt-1">{formState.errors.email[0]}</p>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-foreground">
                              Phone Number
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              className={`bg-background/50 border-border/60 focus:border-blue-500/50 focus:ring-blue-500/20 ${
                                formState.errors?.phone
                                  ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20"
                                  : ""
                              }`}
                              required
                            />
                            {formState.errors?.phone && (
                              <p className="text-red-500 text-xs mt-1">{formState.errors.phone[0]}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="service" className="text-foreground">
                              Service Needed
                            </Label>
                            <Select
                              name="service"
                              value={selectedService}
                              onValueChange={(value) => setSelectedService(value)}
                            >
                              <SelectTrigger
                                id="service"
                                className={`bg-background/50 border-border/60 focus:border-blue-500/50 focus:ring-blue-500/20 ${
                                  formState.errors?.service
                                    ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20"
                                    : ""
                                }`}
                              >
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="hardware-repair">Hardware Repair</SelectItem>
                                <SelectItem value="data-recovery">Data Recovery</SelectItem>
                                <SelectItem value="virus-removal">Virus Removal</SelectItem>
                                <SelectItem value="network-setup">Network Setup</SelectItem>
                                <SelectItem value="upgrades">Hardware/Software Upgrades</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            {formState.errors?.service && (
                              <p className="text-red-500 text-xs mt-1">{formState.errors.service[0]}</p>
                            )}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-foreground">How urgent is your request?</Label>
                          <RadioGroup
                            name="urgency"
                            value={selectedUrgency}
                            onValueChange={(value) => setSelectedUrgency(value)}
                            className="flex flex-col space-y-1"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="emergency" id="emergency" />
                              <Label htmlFor="emergency">Emergency (Same day)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="urgent" id="urgent" />
                              <Label htmlFor="urgent">Urgent (1-2 days)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="standard" id="standard" />
                              <Label htmlFor="standard">Standard (3-5 days)</Label>
                            </div>
                          </RadioGroup>
                          {formState.errors?.urgency && (
                            <p className="text-red-500 text-xs mt-1">{formState.errors.urgency[0]}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-foreground">
                            Describe the issue
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="bg-background/50 border-border/60 focus:border-blue-500/50 focus:ring-blue-500/20"
                          />
                          {formState.errors?.message && (
                            <p className="text-red-500 text-xs mt-1">{formState.errors.message[0]}</p>
                          )}
                        </div>

                        <SubmitButton />
                      </motion.form>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div>
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <motion.div
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Our Location</h3>
                      <p className="text-muted-foreground">
                        123 Tech Street
                        <br />
                        São Paulo, SP 01234-567
                        <br />
                        Brazil
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-muted-foreground">+55 (11) 9999-9999</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-muted-foreground">info@doutorbytes.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 7:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Our Location
                </h2>
                <div className="aspect-video bg-background/30 rounded-lg overflow-hidden border border-border/40 relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                        <MapPin className="h-8 w-8 text-blue-400" />
                      </div>
                      <p className="text-muted-foreground">Interactive map will be displayed here</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
