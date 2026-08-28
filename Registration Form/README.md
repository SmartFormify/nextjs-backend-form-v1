# Next.js Registration Form

A basic **Registration Form** built with Next.js that submits form data directly to a **SmartFormify endpoint**.

## Folder Structure

```text
Registration Form/
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
- Account Type
- Password
- Confirm Password
- Terms & Conditions

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
Next.js Registration Form
        ↓
.env.local
        ↓
SmartFormify Endpoint
        ↓
Form Submission
```

The form submits directly to SmartFormify using the standard HTML `POST` method.

No Next.js API route, server action, or additional backend is required.

## Note

Keep `.env.local` private and do not commit it to your repository.

The `.env.example` file should contain only the placeholder:

```env
NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT=https://api.smartformify.com/YOUR_FORM_ENDPOINT
```

**Security note:** This example includes password fields for demonstration purposes. Do not use SmartFormify as a password-storage or authentication system. For a real registration system, handle passwords through a dedicated authentication backend with secure password hashing.

Make sure the domain where the form is hosted is allowed by your SmartFormify endpoint settings if domain restrictions are enabled.
