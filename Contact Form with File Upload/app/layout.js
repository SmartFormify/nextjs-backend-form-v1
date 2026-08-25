import "./globals.css";

export const metadata = {
    title: "Contact Form with File Upload",
    description: "Next.js Contact Form with File Upload using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}