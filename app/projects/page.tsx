"use client";

import { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";

export default function AllProjectsPage() {
  const [activeTab, setActiveTab] = useState("web");
  const [currentPage, setCurrentPage] = useState(1);

  // Konfigurasi 12 data per halaman
  const itemsPerPage = 12;

  // 1. Filter data berdasarkan tab aktif
  const filteredProjects = projectsData.filter(
    (project) => project.category === activeTab,
  );

  // 2. Kalkulasi Pagination
  const totalPages =
    Math.ceil(filteredProjects.length / itemsPerPage) || 1;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProjects.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  // Fungsi pindah tab dengan reset halaman ke 1
  // Fix: Menambahkan tipe 'string' untuk menghindari error implicit any
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  /**
   * Variasi warna untuk tombol pagination aktif
   * Mengikuti palet warna Neobrutalism Anda
   */
  const getActiveColor = (page: number) => {
    const colors = [
      "bg-[#FFE394]",
      "bg-[#8BDFDD]",
      "bg-[#F48F68]",
      "bg-[#C3ACD0]",
      "bg-[#A7D397]",
    ];
    return colors[page % colors.length];
  };

  return (
    <main className="bg-[#FFF6DE] min-h-screen overflow-x-hidden pt-[20px]">
      <section className="px-5 lg:px-16 py-14 relative overflow-hidden min-h-screen">
        {/* BLUR BACKGROUND DECORATION */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#8BDFDD] rounded-full blur-3xl opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#F48F68] rounded-full blur-3xl opacity-20 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* HEADER & NAVIGATION */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-10">
            <div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border-[2px] border-black bg-[#FFE394] shadow-[3px_3px_0px_#111] text-xs font-bold text-black uppercase tracking-wider">
                My Projects
              </span>
              <h1 className="text-3xl lg:text-5xl font-bold text-black mt-4 leading-tight">
                All Creative Projects
              </h1>
            </div>

            <Link
              href="/"
              className="px-5 py-3 rounded-2xl border-[2px] border-black bg-[#8BDFDD] text-black text-sm font-bold shadow-[4px_4px_0px_#111] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#111] transition duration-200 text-center whitespace-nowrap">
              <i className="fa-solid fa-house mr-2"></i>
              Back To Home
            </Link>
          </div>

          {/* TAB FILTERS */}
          <div className="flex items-center justify-center gap-4 flex-wrap mb-10">
            <button
              onClick={() => handleTabChange("web")}
              className={`px-5 py-2.5 rounded-2xl border-[2px] border-black text-sm font-bold shadow-[4px_4px_0px_#111] transition duration-200 ${
                activeTab === "web"
                  ? "bg-[#8BDFDD] text-black translate-y-[-2px] shadow-[6px_6px_0px_#111]"
                  : "bg-[#FFF6DE] text-black hover:bg-[#8BDFDD] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#111]"
              }`}>
              Web Development
            </button>

            <button
              onClick={() => handleTabChange("ai")}
              className={`px-5 py-2.5 rounded-2xl border-[2px] border-black text-sm font-bold shadow-[4px_4px_0px_#111] transition duration-200 ${
                activeTab === "ai"
                  ? "bg-[#8BDFDD] text-black translate-y-[-2px] shadow-[6px_6px_0px_#111]"
                  : "bg-[#FFF6DE] text-black hover:bg-[#8BDFDD] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#111]"
              }`}>
              AI Engineer
            </button>
          </div>

          {/* PROJECTS GRID */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {currentItems.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${project.cardColor} border-[2px] md:border-[3px] border-black rounded-[16px] md:rounded-[24px] overflow-hidden shadow-[4px_4px_0px_#111] md:shadow-[6px_6px_0px_#111] hover:-translate-y-2 transition duration-300 flex flex-col group`}>
                {/* IMAGE CONTAINER - No Crop (Full Image) */}
                <div className="w-full bg-white/20 border-b-[2px] md:border-b-[3px] border-black flex items-center justify-center relative overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>

                {/* CONTENT AREA */}
                <div className="p-3 md:p-5 flex-grow flex flex-col relative">
                  <div className="flex items-start justify-between">
                    <span className="inline-flex px-2 py-1 md:px-3 rounded-full bg-[#FFF6DE] border-[1px] md:border-[2px] border-black text-black text-[10px] md:text-xs font-bold shadow-[1px_1px_0px_#111] md:shadow-[2px_2px_0px_#111]">
                      {project.tag}
                    </span>
                    <i className="fa-solid fa-arrow-up-right-from-square text-[10px] md:text-xs opacity-40 group-hover:opacity-100 transition-opacity"></i>
                  </div>

                  <h3 className="text-sm md:text-lg font-bold text-black mt-2 md:mt-4 line-clamp-2 group-hover:underline decoration-2">
                    {project.title}
                  </h3>

                  <p className="text-xs md:text-sm text-neutral-800 leading-5 md:leading-6 mt-1 md:mt-2 font-medium line-clamp-3">
                    {project.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* PAGINATION CONTROLS - Always Visible */}
          <div className="flex justify-center items-center gap-4 mt-14">
            <button
              disabled={currentPage === 1}
              onClick={() =>
                setCurrentPage((prev) => prev - 1)
              }
              className="w-10 h-10 flex items-center justify-center rounded-xl border-2 border-black bg-white shadow-[3px_3px_0px_#111] disabled:opacity-30 disabled:cursor-not-allowed hover:-translate-y-1 transition-all">
              <i className="fa-solid fa-chevron-left text-black"></i>
            </button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => {
                const pageNum = i + 1;
                const isActive = currentPage === pageNum;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 rounded-xl border-2 border-black font-bold shadow-[3px_3px_0px_#111] transition-all ${
                      isActive
                        ? `${getActiveColor(pageNum)} -translate-y-1`
                        : "bg-white hover:bg-neutral-100"
                    }`}>
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => prev + 1)
              }
              className="w-10 h-10 flex items-center justify-center rounded-xl border-2 border-black bg-white shadow-[3px_3px_0px_#111] disabled:opacity-30 disabled:cursor-not-allowed hover:-translate-y-1 transition-all">
              <i className="fa-solid fa-chevron-right text-black"></i>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
