import "./globals.css";

export const metadata = {
    title: "Testimonial Form",
    description: "Next.js Testimonial Form using SmartFormify",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
