import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";

const font = Fira_Sans({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: [{ url: "/logo.svg", href: "/logo.svg" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={font.className}>{children}</body>
        </html>
    );
}
