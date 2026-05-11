"use client"; // Wajib karena halaman ini butuh interaksi tab filter

import { useState } from "react";
import Link from "next/link"; // Menggunakan Link bawaan Next.js untuk navigasi cepat
import { projectsData } from "@/data/projectsData";

export default function AllProjectsPage() {
  // State untuk filter yang aktif
  const [activeTab, setActiveTab] = useState("web");

  // Memfilter project berdasarkan tab yang dipilih
  const filteredProjects = projectsData.filter(
    (project) => project.category === activeTab,
  );

  return (
    <main className="bg-[#FFF6DE] min-h-screen overflow-x-hidden pt-[20px]">
      <section className="px-5 lg:px-16 py-14 relative overflow-hidden min-h-screen">
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#8BDFDD] rounded-full blur-3xl opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#F48F68] rounded-full blur-3xl opacity-20 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* HEADER & BACK BUTTON */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-10">
            <div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border-[2px] border-black bg-[#FFE394] shadow-[3px_3px_0px_#111] text-xs font-bold text-black uppercase tracking-wider">
                My Projects
              </span>
              <h1 className="text-3xl lg:text-5xl font-bold text-black mt-4 leading-tight">
                All Creative Projects
              </h1>
              <p className="text-sm lg:text-base text-neutral-700 mt-4 max-w-2xl leading-7 font-medium">
                Kumpulan project Web Development dan AI
                Engineering yang telah saya kerjakan.
              </p>
            </div>

            {/* Tombol Back to Home menggunakan <Link> Next.js */}
            <Link
              href="/"
              className="px-5 py-3 rounded-2xl border-[2px] border-black bg-[#8BDFDD] text-black text-sm font-bold shadow-[4px_4px_0px_#111] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#111] transition duration-200 text-center whitespace-nowrap">
              <i className="fa-solid fa-arrow-left mr-2"></i>{" "}
              Back To Home
            </Link>
          </div>

          {/* FILTER BUTTONS */}
          <div className="flex items-center justify-center gap-4 flex-wrap mb-10">
            <button
              onClick={() => setActiveTab("web")}
              className={`px-5 py-2.5 rounded-2xl border-[2px] border-black text-sm font-bold shadow-[4px_4px_0px_#111] transition duration-200 ${
                activeTab === "web"
                  ? "bg-[#8BDFDD] text-black translate-y-[-2px] shadow-[6px_6px_0px_#111]"
                  : "bg-[#FFF6DE] text-black hover:bg-[#8BDFDD] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#111]"
              }`}>
              Web Development
            </button>

            <button
              onClick={() => setActiveTab("ai")}
              className={`px-5 py-2.5 rounded-2xl border-[2px] border-black text-sm font-bold shadow-[4px_4px_0px_#111] transition duration-200 ${
                activeTab === "ai"
                  ? "bg-[#8BDFDD] text-black translate-y-[-2px] shadow-[6px_6px_0px_#111]"
                  : "bg-[#FFF6DE] text-black hover:bg-[#8BDFDD] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#111]"
              }`}>
              AI Engineer
            </button>
          </div>

          {/* PROJECTS GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`${project.cardColor} border-[3px] border-black rounded-[24px] overflow-hidden shadow-[6px_6px_0px_#111] hover:-translate-y-1 transition duration-300 flex flex-col`}>
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-44 object-cover border-b-[3px] border-black"
                  loading="lazy"
                />
                <div className="p-5 flex-grow">
                  <span className="inline-flex px-3 py-1 rounded-full bg-[#FFF6DE] border-[2px] border-black text-black text-xs font-bold shadow-[2px_2px_0px_#111]">
                    {project.tag}
                  </span>
                  <h3 className="text-lg font-bold text-black mt-4">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-800 leading-6 mt-2 font-medium">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
