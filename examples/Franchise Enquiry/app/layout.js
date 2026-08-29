import "./globals.css";

export const metadata = {
    title: "Franchise Enquiry Form",
    description: "Next.js Franchise Enquiry Form using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
