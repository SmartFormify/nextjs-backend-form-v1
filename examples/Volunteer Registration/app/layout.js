import "./globals.css";

export const metadata = {
    title: "Volunteer Registration Form",
    description: "Next.js Volunteer Registration Form using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
