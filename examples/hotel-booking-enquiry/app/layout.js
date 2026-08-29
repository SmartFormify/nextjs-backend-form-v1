import "./globals.css";

export const metadata = {
    title: "Hotel Booking Enquiry",
    description: "Next.js Hotel Booking Enquiry Form using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
