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
  captcha: z.string().min(1, { message: "Please solve the captcha" }),
  captchaAnswer: z.string().min(1, { message: "Captcha answer is required" }),
})

export type FormState = {
  errors?: {
    name?: string[]
    email?: string[]
    phone?: string[]
    service?: string[]
    urgency?: string[]
    message?: string[]
    captcha?: string[]
    _form?: string[]
  }
  success?: boolean
  message?: string
  captchaQuestion?: string
}

// Generate a simple math captcha
function generateCaptcha() {
  const num1 = Math.floor(Math.random() * 10) + 1
  const num2 = Math.floor(Math.random() * 10) + 1
  const question = `${num1} + ${num2}`
  const answer = (num1 + num2).toString()
  return { question, answer }
}

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  // Generate new captcha for the form
  const captcha = generateCaptcha()
  
  // If this is the initial load or reset, return with captcha question
  if (!formData.get("name") && !formData.get("email")) {
    return {
      captchaQuestion: captcha.question,
    }
  }

  // Validate form data
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    service: formData.get("service"),
    urgency: formData.get("urgency"),
    message: formData.get("message"),
    captcha: formData.get("captcha"),
    captchaAnswer: formData.get("captchaAnswer"),
  })

  // Return errors if validation fails
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
      message: "Please fix the errors in the form.",
      captchaQuestion: captcha.question,
    }
  }

  // Validate captcha
  const userAnswer = validatedFields.data.captcha
  const correctAnswer = validatedFields.data.captchaAnswer
  
  if (userAnswer !== correctAnswer) {
    return {
      errors: {
        captcha: ["Incorrect answer. Please try again."],
      },
      success: false,
      message: "Please solve the captcha correctly.",
      captchaQuestion: captcha.question,
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
  } catch {
    // Return error state
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
      errors: {
        _form: ["Failed to submit the form. Please try again."],
      },
      captchaQuestion: captcha.question,
    }
  }
}
