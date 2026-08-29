# Next.js School Admission Form

A basic School Admission Form built with Next.js that submits admission enquiries directly to a SmartFormify endpoint.

## Folder Structure

```text
school-admission-form/
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
- Date of Birth
- Gender
- Grade / Class
- Academic Year
- Previous School
- Parent / Guardian Name
- Relationship
- Email Address
- Phone Number
- Address
- Additional Information
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

Open `http://localhost:3000`.

## How It Works

The form submits directly to the SmartFormify endpoint using the standard HTML `POST` method. No Next.js API route, server action, or additional backend is required.

The form references the endpoint using:

```jsx
action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
```

## Note

Keep `.env.local` private and do not commit it to your repository. If SmartFormify domain restrictions are enabled, make sure the domain hosting this form is allowed by your endpoint settings.
