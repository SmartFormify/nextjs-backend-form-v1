import "./globals.css";

export const metadata = {
    title: "Donation Enquiry Form",
    description: "Next.js Donation Enquiry Form using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
