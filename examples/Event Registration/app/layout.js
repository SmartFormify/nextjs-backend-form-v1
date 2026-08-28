import "./globals.css";

export const metadata = {
    title: "Event Registration Form",
    description: "Next.js Event Registration Form using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}