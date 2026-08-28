import "./globals.css";

export const metadata = {
    title: "Booking Form",
    description: "Next.js Booking Form using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}