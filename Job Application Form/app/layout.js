import "./globals.css";

export const metadata = {
    title: "Job Application Form",
    description: "Next.js Job Application Form using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}