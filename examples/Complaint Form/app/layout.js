import "./globals.css";

export const metadata = {
    title: "Complaint Form",
    description: "Next.js Complaint Form using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
