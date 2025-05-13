"use server"

import { z } from "zod"

// Define the form schema with Zod for validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(8, { message: "Please enter a valid phone number" }),
  service: z.string().min(1, { message: "Please select a service" }),
  urgency: z.string().min(1, { message: "Please select urgency level" }),
  message: z.string().optional(),
})

export type FormState = {
  errors?: {
    name?: string[]
    email?: string[]
    phone?: string[]
    service?: string[]
    urgency?: string[]
    message?: string[]
    _form?: string[]
  }
  success?: boolean
  message?: string
}

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  // Validate form data
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    service: formData.get("service"),
    urgency: formData.get("urgency"),
    message: formData.get("message"),
  })

  // Return errors if validation fails
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
      message: "Please fix the errors in the form.",
    }
  }

  // Simulate server delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  try {
    // In a real application, you would send this data to your backend or API
    // For now, we'll just simulate a successful submission
    console.log("Form submitted:", validatedFields.data)

    // Return success state
    return {
      success: true,
      message: "Your request has been submitted successfully. We'll contact you shortly.",
    }
  } catch (error) {
    // Return error state
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
      errors: {
        _form: ["Failed to submit the form. Please try again."],
      },
    }
  }
}
