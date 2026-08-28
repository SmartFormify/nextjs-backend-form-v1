import "./globals.css";

export const metadata = {
    title: "Feedback Form",
    description: "Next.js Feedback Form using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}