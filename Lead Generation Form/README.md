# Next.js Request a Quote Form

A basic **Request a Quote Form** built with Next.js that submits project and contact details directly to a **SmartFormify endpoint**.

## Folder Structure

```text
request-a-quote/
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
- Service
- Estimated Budget
- Expected Timeline
- Project Name
- Project Description
- Additional Notes
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

Update `.env.local` with your SmartFormify endpoint:

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
Next.js Request a Quote Form
        ↓
.env.local
        ↓
SmartFormify Endpoint
        ↓
Form Submission
```

The form submits directly to SmartFormify using the standard HTML `POST` method.

No Next.js API route, server action, or additional backend is required.

## Environment Variable

`.env.example` contains:

```env
NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT=https://api.smartformify.com/YOUR_FORM_ENDPOINT
```

Use your actual endpoint in `.env.local`:

```env
NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT=https://api.smartformify.com/YOUR_ACTUAL_ENDPOINT
```

The form uses the environment variable:

```jsx
action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
```

The endpoint does not need to be hard-coded in `app/page.js`.

## Note

Keep `.env.local` private and do not commit it to your repository.

If SmartFormify domain restrictions are enabled, make sure the domain hosting this form is allowed by your endpoint settings.
