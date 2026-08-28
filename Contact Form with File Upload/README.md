# Next.js Contact Form with File Upload

A basic **Contact Form with File Upload** built with Next.js that submits form data directly to a **SmartFormify endpoint**.

## Folder Structure

```text
Contact Form with File Upload/
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
- Subject
- Message
- Attachment
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

## File Upload

The form uses:

```html
enctype="multipart/form-data"
```

to submit the selected attachment along with the other form fields.

Accepted file types:

```text
PDF
DOC
DOCX
JPG
JPEG
PNG
```

The file input uses:

```text
attachment
```

as its field name.

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
