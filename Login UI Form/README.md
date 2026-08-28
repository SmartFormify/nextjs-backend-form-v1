# Next.js Login UI Form

A basic **Login UI Form** built with Next.js that submits form data directly to a **SmartFormify endpoint**.

## Folder Structure

```text
Login UI Form/
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

- Email Address
- Password
- Remember Me

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
Next.js Login Form
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

The **Forgot password?** and **Create an account** links are UI placeholders and are not submitted as form fields.

**Security note:** This is a UI/form-submission example. Do not use SmartFormify as an authentication or password-storage system. For a real login system, credentials should be processed by a dedicated authentication backend.

Make sure the domain where the form is hosted is allowed by your SmartFormify endpoint settings if domain restrictions are enabled.
