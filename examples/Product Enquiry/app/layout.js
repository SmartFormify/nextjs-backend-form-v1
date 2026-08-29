import "./globals.css";

export const metadata = {
    title: "Product Enquiry Form",
    description: "Next.js Product Enquiry Form using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
