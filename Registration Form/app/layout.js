import "./globals.css";

export const metadata = {
    title: "Registration Form",
    description: "Next.js Registration Form using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}