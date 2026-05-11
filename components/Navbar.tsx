"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Home",
    "About",
    "Journey",
    "Toolkit",
    "Projects",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      {/* PERBAIKAN UTAMA: 
        Wrapper ini sekarang menempel ke ujung layar (px-0 pt-0) saat di atas.
        Hanya memberi jarak (px-5 lg:px-16 pt-4) saat di-scroll ke bawah.
      */}
      <div
        className={`w-full pointer-events-auto transition-all duration-300 ${isScrolled ? "px-5 lg:px-16 pt-4" : "px-0 pt-0"}`}>
        <div
          className={`w-full bg-[#FFF6DE] border-black transition-all duration-300 mx-auto ${
            isScrolled
              ? "max-w-6xl rounded-[24px] border-[3px] shadow-[6px_6px_0px_#111] py-4 px-5" // Style Floating
              : "max-w-none border-b-[3px] py-4 px-5 lg:px-16" // Style Default Full Width
          }`}>
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            {/* LOGO */}
            <Link
              href="#home"
              className="text-xl font-black text-black hover:-translate-y-0.5 transition-transform">
              Meow
              <span className="text-[#F48F68]">Code</span>
            </Link>

            {/* MENU DESKTOP */}
            <div className="hidden lg:flex items-center gap-3">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 rounded-xl hover:bg-[#FFE394] text-sm font-bold text-black transition duration-200">
                  {item}
                </Link>
              ))}
              <Link
                href="#contact"
                className="px-5 py-2.5 rounded-xl border-[2px] border-black bg-[#F48F68] text-sm font-bold text-black shadow-[3px_3px_0px_#111] hover:-translate-y-1 transition duration-200">
                Contact Me
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-11 h-11 rounded-xl border-[2px] border-black bg-[#FFE394] flex items-center justify-center shadow-[3px_3px_0px_#111] hover:bg-[#F48F68] transition-colors"
              aria-label="Toggle Menu">
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE MENU PANEL */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:hidden max-w-6xl mx-auto mt-3 bg-[#FFF6DE] border-[3px] border-black rounded-[24px] p-5 shadow-[6px_6px_0px_#111] transition-all duration-300`}>
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 rounded-xl bg-[#8BDFDD] border-[2px] border-black text-sm font-bold hover:bg-[#FFE394] transition-colors">
                {item}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 rounded-xl bg-[#F48F68] border-[2px] border-black text-sm font-bold transition-transform hover:-translate-y-1">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
