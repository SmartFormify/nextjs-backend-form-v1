import "./globals.css";

export const metadata = {
    title: "Request a Quote",
    description: "Next.js Request a Quote Form using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}