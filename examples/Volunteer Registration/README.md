# Next.js Volunteer Registration Form

A basic **Volunteer Registration Form** built with Next.js that submits volunteer registration details directly to a **SmartFormify endpoint**.

## Folder Structure

```text
volunteer-registration-form/
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
- Area of Interest
- Availability
- Preferred Hours
- Previous Volunteer Experience
- Skills / Interests
- Additional Notes
- Consent

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure SmartFormify

Copy `.env.example` to `.env.local` and update:

```env
NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT=https://api.smartformify.com/YOUR_FORM_ENDPOINT
```

### 3. Start the Application

```bash
npm run dev
```

Open `http://localhost:3000`.

## How It Works

```text
Next.js Volunteer Registration Form
        ↓
.env.local
        ↓
SmartFormify Endpoint
        ↓
Form Submission
```

The form submits directly to SmartFormify using the standard HTML `POST` method. No Next.js API route or additional backend is required.

## Environment Variable

The endpoint is referenced in `app/page.js` with:

```jsx
action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
```

Keep `.env.local` private and do not commit it to your repository.
