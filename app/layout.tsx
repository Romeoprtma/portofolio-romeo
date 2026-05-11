import "./globals.css";
import Navbar from "@/components/Navbar"; // Import Navbar komponen

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
      {/* FontAwesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        precedence="default"
      />

      {/* Devicon CDN*/}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        precedence="default"
      />

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
        rel="stylesheet"
        precedence="default"
      />
      <body className="font-['Space_Grotesk'] antialiased bg-[#FFF6DE]">
        {/* Navbar akan selalu ada di atas semua halaman */}
        <Navbar />

        {/* Konten utama dari page.tsx akan masuk ke sini */}
        <main className="pt-19">
          {/* pt-[76px] memberi ruang agar konten teratas tidak tertutup Navbar fixed */}
          {children}
        </main>
      </body>
    </html>
  );
}
