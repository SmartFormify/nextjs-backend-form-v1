# Next.js Appointment Form

A basic **Appointment Form** built with Next.js that submits appointment details directly to a **SmartFormify endpoint**.

## Folder Structure

```text
appointment-form/
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
- Appointment Type
- Preferred Date
- Preferred Time
- Preferred Contact Method
- Notes
- Consent

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
Next.js Appointment Form
        ↓
.env.local
        ↓
SmartFormify Endpoint
        ↓
Form Submission
```

The browser submits the form directly to SmartFormify using the standard HTML `POST` method.

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
