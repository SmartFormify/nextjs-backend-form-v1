import "./globals.css";

export const metadata = {
    title: "Customer Support Form",
    description: "Next.js Customer Support Form using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}