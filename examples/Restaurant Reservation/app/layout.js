import "./globals.css";

export const metadata = {
    title: "Restaurant Reservation Form",
    description: "Next.js Restaurant Reservation Form using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}