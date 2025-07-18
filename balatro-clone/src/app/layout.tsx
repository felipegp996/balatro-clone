import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const balatroFont = localFont({
  src: "./fonts/balatro-font.otf.woff2",
})

export const metadata: Metadata = {
  title: {
    template: "%s | Balatro Clone",
    default: "Balatro Clone"
  },
  description: "Balatro clone made with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${balatroFont.className} antialiased tracking-wider`}
      >
        {children}
      </body>
    </html>
  );
}
