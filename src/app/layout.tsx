import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md Saiful Islam Emon | Full-Stack & Systems Developer",
  description: "Computer Science and Engineering student at East West University with hands-on experience in full-stack web development, database design, and machine learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="bg-[#0B0D17] text-gray-100 antialiased selection:bg-pink-500 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
