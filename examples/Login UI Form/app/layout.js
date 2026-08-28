import "./globals.css";

export const metadata = {
    title: "Login UI Form",
    description: "Next.js Login UI Form using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}