import "./globals.css";

export const metadata = {
    title: "Appointment Form",
    description: "Next.js Appointment Form using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}