# Next.js Contact Form

A basic **Contact Form** built with Next.js that submits form data directly to a **SmartFormify endpoint**.

## Folder Structure

```text
Contact Form/
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

- Full Name
- Email
- Phone
- Subject
- Message

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

### 3. Use the Endpoint in the Form

The form uses the environment variable:

```jsx
<form
    action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
    method="POST"
>
```

The endpoint does not need to be hard-coded in `page.js`.

### 4. Start Next.js

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## How It Works

```text
Next.js Contact Form
        ↓
.env.local
        ↓
SmartFormify Endpoint
        ↓
Form Submission
```

The browser submits the form directly to SmartFormify using the standard HTML `POST` method.

No Next.js API route, server action, or additional backend is required.

## Note

Keep `.env.local` private and do not commit it to your repository.

The `.env.example` file should contain only the placeholder:

```env
NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT=https://api.smartformify.com/YOUR_FORM_ENDPOINT
```

Make sure the domain where the form is hosted is allowed by your SmartFormify endpoint settings if domain restrictions are enabled.
