import "./globals.css";

export const metadata = {
    title: "Consultation Form",
    description: "Next.js Consultation Form using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
