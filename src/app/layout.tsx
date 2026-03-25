import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const interDisplay = Inter({
  variable: "--font-inter-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Prva Izbira",
  description: "We help you stay future-ready with expert leadership advisory services.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interDisplay.variable} ${interTight.variable} antialiased`}>
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
