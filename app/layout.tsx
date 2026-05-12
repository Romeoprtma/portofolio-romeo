import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Portofolio - Romeo Mulia Pratama",
  description: "Web Developer & AI Engineer Portfolio",
  verification: {
    google: "13-KDoSFmJMAhe0mLWPxZ6ifqRC6Z2qx-y1dosVjL1U",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* FontAwesome & Devicon tetap di sini jika tidak ingin pakai npm package */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className={`${spaceGrotesk.className} antialiased bg-[#FFF6DE]`}>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
