import "./globals.css";

export const metadata = {
    title: "Course Registration Form",
    description: "Next.js Course Registration Form using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
