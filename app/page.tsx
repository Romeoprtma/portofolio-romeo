"use client"; // Wajib ditambahkan karena kita butuh useEffect untuk menyalakan AOS

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS bawaan AOS

// Import komponen-komponen Anda
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Toolkit from "@/components/Toolkit";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Journey />
      <Toolkit />
      <Projects />
      <Contact />
    </>
  );
}
