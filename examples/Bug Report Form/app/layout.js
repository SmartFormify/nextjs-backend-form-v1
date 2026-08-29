import "./globals.css";

export const metadata = {
    title: "Bug Report Form",
    description: "Next.js Bug Report Form using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
