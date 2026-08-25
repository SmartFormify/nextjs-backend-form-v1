import "./globals.css";

export const metadata = {
    title: "Contact Form",
    description: "Next.js Contact Form with SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}