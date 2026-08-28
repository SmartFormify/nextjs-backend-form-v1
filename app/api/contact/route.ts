import { z } from 'zod'
const schema = z.object({ name: z.string().min(1), email: z.email(), message: z.string().min(10) })
export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json())
  if (!parsed.success) return Response.json({ success: false, message: 'Invalid form data.' }, { status: 400 })
  const endpoint = process.env.SMARTFORMIFY_ENDPOINT
  if (!endpoint) return Response.json({ success: false, message: 'Server endpoint is not configured.' }, { status: 500 })
  const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ data: parsed.data }) })
  return new Response(await response.text(), { status: response.status, headers: { 'Content-Type': 'application/json' } })
}
