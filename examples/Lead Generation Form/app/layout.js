import "./globals.css";

export const metadata = {
    title: "Lead Generation Form",
    description: "Next.js Lead Generation Form using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}