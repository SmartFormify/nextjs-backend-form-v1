import "./globals.css";

export const metadata = {
    title: "Vendor Registration Form",
    description: "Next.js Vendor Registration Form using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
