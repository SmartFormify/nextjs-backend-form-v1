# Next.js Restaurant Reservation Form

A basic **Restaurant Reservation Form** built with Next.js that submits reservation details directly to a **SmartFormify endpoint**.

## Folder Structure

```text
restaurant-reservation-form/
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
- Reservation Date
- Preferred Time
- Number of Guests
- Seating Preference
- Special Occasion
- Special Requests
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
Next.js Restaurant Reservation Form
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

The form references the endpoint using:

```jsx
action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
```

The endpoint does not need to be hard-coded in `app/page.js`.

## Form Submission

The form uses:

```html
method="POST"
```

and submits the following field names:

```text
first_name
last_name
email
phone
reservation_date
reservation_time
guests
seating_preference
occasion
message
consent
```

## SmartFormify Endpoint

Replace the placeholder endpoint in `.env.local` with the endpoint generated from your SmartFormify account.

Do not place your endpoint directly inside `app/page.js`.

## Development

Run the development server:

```bash
npm run dev
```

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Important Notes

- Keep `.env.local` private.
- Do not commit `.env.local` to your Git repository.
- Only commit `.env.example`.
- Make sure the domain hosting your form is allowed in your SmartFormify endpoint settings when domain restrictions are enabled.
- The form does not require a custom Next.js backend.
