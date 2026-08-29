# Next.js Multi-step Contact Form

A **Multi-step Contact Form** built with Next.js. The form collects contact information, enquiry details, and a message across three steps, then submits the complete form directly to a **SmartFormify endpoint**.

## Folder Structure

```text
multi-step-contact-form/
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

### Step 1 — Contact Information

- First Name
- Last Name
- Email Address
- Phone Number

### Step 2 — Contact Details

- Company / Organization
- Subject
- Reason for Contact

### Step 3 — Message

- Message
- Consent

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure SmartFormify

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Update `.env.local`:

```env
NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT=https://api.smartformify.com/YOUR_FORM_ENDPOINT
```

### 3. Start the Application

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## How It Works

```text
Step 1
Contact Information
        ↓
Step 2
Contact Details
        ↓
Step 3
Message & Consent
        ↓
SmartFormify Endpoint
        ↓
Form Submission
```

The form uses React state to move between steps. The final step submits the same HTML form with the collected fields using the standard `POST` method.

No Next.js API route, server action, or additional backend is required.

## Environment Variable

The endpoint is referenced in `app/page.js` using:

```jsx
action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
```

This keeps the endpoint out of the form markup and allows it to be configured through `.env.local`.

## Note

Keep `.env.local` private and do not commit it to your repository.

If SmartFormify domain restrictions are enabled, make sure the domain hosting this form is allowed by your endpoint settings.
