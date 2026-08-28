# Next.js Job Application Form

A basic **Job Application Form** built with Next.js that submits application data and a resume directly to a **SmartFormify endpoint**.

## Folder Structure

```text
job-application-form/
├── README.md
├── .env.example
├── package.json
├── next.config.js
└── app/
    ├── layout.js
    ├── page.js
    └── globals.css
```

## Form Fields

- First Name
- Last Name
- Email Address
- Phone Number
- Position
- Experience
- Portfolio / LinkedIn URL
- Cover Letter
- Resume / CV
- Consent

## File Upload

The form supports resume uploads using:

```text
multipart/form-data
```

Accepted file types:

```text
PDF
DOC
DOCX
```

The resume field is:

```text
resume
```

The example checks that the selected resume does not exceed 10 MB before submission.

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure the SmartFormify Endpoint

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Then update `.env.local` with your actual SmartFormify endpoint:

```env
NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT=https://api.smartformify.com/YOUR_FORM_ENDPOINT
```

### 3. Start Next.js

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## How It Works

```text
Next.js Job Application Form
        ↓
.env.local
        ↓
SmartFormify Endpoint
        ↓
Form Submission
```

The browser submits the application directly to SmartFormify using the standard HTML `POST` method.

The resume is submitted along with the other form fields using `multipart/form-data`.

No Next.js API route, server action, or additional backend is required.

## Environment Variable

The `.env.example` file contains the endpoint placeholder:

```env
NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT=https://api.smartformify.com/YOUR_FORM_ENDPOINT
```

Use your actual endpoint in `.env.local`:

```env
NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT=https://api.smartformify.com/YOUR_ACTUAL_ENDPOINT
```

The form references the endpoint using:

```jsx
action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
```

The endpoint does not need to be hard-coded in `app/page.js`.

## Note

Keep `.env.local` private and do not commit it to your repository.

Make sure the domain where the form is hosted is allowed by your SmartFormify endpoint settings if domain restrictions are enabled.
