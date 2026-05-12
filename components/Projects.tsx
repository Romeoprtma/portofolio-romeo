"use client";

import { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("web");

  const filteredProjects = projectsData.filter(
    (project) => project.category === activeFilter,
  );

  const displayProjects = filteredProjects.slice(0, 6);

  return (
    <section
      id="projects"
      className="bg-[#FFF6DE] px-5 lg:px-16 py-14 relative overflow-hidden">
      {/* BLUR BACKGROUND */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#8BDFDD] rounded-full blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#F48F68] rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <div
          className="text-center mb-10"
          data-aos="fade-up">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border-[2px] border-black bg-[#FFE394] shadow-[3px_3px_0px_#111] text-xs font-bold text-black uppercase tracking-wider">
            My Projects
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-black mt-4 leading-snug">
            Selected Projects & Digital Experiences
          </h2>
          <p className="text-sm lg:text-base text-neutral-700 mt-4 max-w-2xl mx-auto leading-7">
            Kumpulan project web development dan AI
            engineering yang telah saya kerjakan menggunakan
            teknologi modern.
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div
          className="flex items-center justify-center gap-4 flex-wrap mb-10"
          data-aos="fade-up"
          data-aos-delay="100">
          <button
            onClick={() => setActiveFilter("web")}
            className={`px-5 py-2.5 rounded-2xl border-[2px] border-black text-sm font-bold shadow-[4px_4px_0px_#111] transition duration-200 ${
              activeFilter === "web"
                ? "bg-white text-black translate-y-[-2px] shadow-[6px_6px_0px_#111]"
                : "bg-[#FFF6DE] text-black hover:bg-white hover:-translate-y-1 hover:shadow-[6px_6px_0px_#111]"
            }`}>
            Web Development
          </button>

          <button
            onClick={() => setActiveFilter("ai")}
            className={`px-5 py-2.5 rounded-2xl border-[2px] border-black text-sm font-bold shadow-[4px_4px_0px_#111] transition duration-200 ${
              activeFilter === "ai"
                ? "bg-white text-black translate-y-[-2px] shadow-[6px_6px_0px_#111]"
                : "bg-[#FFF6DE] text-black hover:bg-white hover:-translate-y-1 hover:shadow-[6px_6px_0px_#111]"
            }`}>
            AI Engineer
          </button>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
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
              <div className="p-4 md:p-6 flex-grow flex flex-col relative">
                <div className="flex items-start justify-between">
                  <span className="inline-flex px-2 py-1 md:px-3 rounded-full bg-[#FFF6DE] border-[1px] md:border-[2px] border-black text-black text-[10px] md:text-xs font-bold shadow-[1px_1px_0px_#111] md:shadow-[2px_2px_0px_#111]">
                    {project.tag}
                  </span>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px] md:text-xs opacity-40 group-hover:opacity-100 transition-opacity"></i>
                </div>

                <h3 className="text-base md:text-xl font-bold text-black mt-3 md:mt-4 line-clamp-2 group-hover:underline decoration-2">
                  {project.title}
                </h3>

                <p className="text-xs md:text-sm text-neutral-800 font-medium leading-relaxed mt-2 line-clamp-3">
                  {project.desc}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* SHOW MORE BUTTON - Tetap Muncul */}
        <div
          className="flex justify-center mt-12"
          data-aos="zoom-in">
          <Link
            href="/projects"
            className="px-8 py-3 rounded-2xl border-[2px] border-black bg-[#FFE394] text-black text-sm font-bold shadow-[4px_4px_0px_#111] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#111] transition duration-200">
            Show More Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
