import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";

export const metadata = {
  title: "Portofolio - Romeo Mulia Pratama",
  description: "Web Developer & AI Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* FontAwesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />

        {/* Devicon CDN*/}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="google-site-verification"
          content="13-KDoSFmJMAhe0mLWPxZ6ifqRC6Z2qx-y1dosVjL1U"
        />
      </head>
      <body className="font-['Space_Grotesk'] antialiased bg-[#FFF6DE]">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
