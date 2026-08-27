# troubleshooting

Next.js 16 App Router guide for hosted form endpoints. A normal POST or browser Fetch request can submit to `/fe/{submit_key}`. JSON requests wrap fields in `data`; a successful JSON response may contain a redirect URL or thank-you content.

## Safety

The submit URL is intentionally browser-visible. `NEXT_PUBLIC_*` variables are not secret; use SmartFormify domain restrictions. Do not send passwords, API keys, payment data, or unsupported file uploads.

## Choosing an architecture

Use direct submission for the smallest integration. Use a Server Action or Route Handler for server-only transformation, validation, or coordination with another service—not to pretend that the endpoint URL is private.
