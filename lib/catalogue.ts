export type Example = { slug: string; name: string; summary: string }
export const examples: Example[] = [
  { slug: 'contact-form', name: 'Contact form', summary: 'A straightforward message form.' },
  { slug: 'booking-request-form', name: 'Booking request', summary: 'Request a booking without claiming availability.' },
  { slug: 'quote-request-form', name: 'Quote request', summary: 'Collect scope and budget context.' },
  { slug: 'event-registration-form', name: 'Event registration', summary: 'Register interest, not an account.' },
  { slug: 'job-application-form', name: 'Job application', summary: 'Use portfolio and résumé URLs instead of uploads.' },
  { slug: 'bug-report-form', name: 'Bug report', summary: 'Capture reproducible technical reports.' },
  { slug: 'multi-step-lead-form', name: 'Multi-step lead form', summary: 'Validate contact, scope, and budget before one submission.' }
]
