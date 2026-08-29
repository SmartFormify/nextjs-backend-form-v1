import "./globals.css";

export const metadata = {
    title: "Multi-step Contact Form",
    description: "Next.js Multi-step Contact Form using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
