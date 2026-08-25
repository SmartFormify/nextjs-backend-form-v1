import "./globals.css";

export const metadata = {
    title: "Newsletter Signup",
    description: "Next.js Newsletter Signup Form using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}