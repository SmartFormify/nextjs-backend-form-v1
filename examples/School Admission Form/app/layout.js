import "./globals.css";

export const metadata = {
    title: "School Admission Form",
    description: "Next.js School Admission Form using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
