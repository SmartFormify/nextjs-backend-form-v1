import "./globals.css";

export const metadata = {
    title: "Survey Form",
    description: "Next.js Survey Form using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}