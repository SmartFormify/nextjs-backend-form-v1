'use server'

import { z } from 'zod'

const contactSchema = z.object({ name: z.string().trim().min(1, 'Enter your name'), email: z.email('Enter a valid email'), message: z.string().trim().min(10, 'Use at least 10 characters') })
export type ContactActionState = { success: boolean; message: string; errors?: Record<string, string[]> }
export const initialContactState: ContactActionState = { success: false, message: '' }

export async function submitContact(_: ContactActionState, formData: FormData): Promise<ContactActionState> {
  const parsed = contactSchema.safeParse(Object.fromEntries(formData))
  if (!parsed.success) return { success: false, message: 'Correct the highlighted fields.', errors: z.flattenError(parsed.error).fieldErrors }
  const endpoint = process.env.SMARTFORMIFY_ENDPOINT
  if (!endpoint) return { success: false, message: 'Set SMARTFORMIFY_ENDPOINT on the server.' }
  try {
    const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ data: parsed.data }) })
    const result: { success?: boolean; message?: string } = await response.json()
    return response.ok && result.success ? { success: true, message: result.message ?? 'Message sent.' } : { success: false, message: result.message ?? 'The endpoint did not accept the message.' }
  } catch { return { success: false, message: 'Network error. Your message was not sent.' } }
}
