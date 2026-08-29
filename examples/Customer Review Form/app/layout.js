import "./globals.css";

export const metadata = {
    title: "Customer Review Form",
    description: "Next.js Customer Review Form using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
