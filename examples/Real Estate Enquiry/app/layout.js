import "./globals.css";

export const metadata = {
    title: "Real Estate Enquiry Form",
    description: "Next.js Real Estate Enquiry Form using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
