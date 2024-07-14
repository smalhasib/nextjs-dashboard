import {ReactNode} from "react";
import '@/styles/global.css';
import {inter} from "@/libs/fonts";

export default function RootLayout({children}: {
    children: ReactNode;
}) {
    return (
        <html lang="en">
        <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
