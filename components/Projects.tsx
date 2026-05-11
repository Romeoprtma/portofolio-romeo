"use client";

import { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("web");

  const filteredProjects = projectsData.filter(
    (project) => project.category === activeFilter,
  );

  return (
    <section
      id="projects"
      className="bg-[#FFF6DE] px-5 lg:px-16 py-14 relative overflow-hidden">
      {/* BLUR BACKGROUND */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#8BDFDD] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#F48F68] rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER (Muncul ke atas) */}
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

        {/* FILTER BUTTONS (Muncul ke atas dengan sedikit delay) */}
        <div
          className="flex items-center justify-center gap-4 flex-wrap mb-10"
          data-aos="fade-up"
          data-aos-delay="100">
          <button
            onClick={() => setActiveFilter("web")}
            className={`px-5 py-2.5 rounded-2xl border-[2px] border-black text-sm font-bold shadow-[4px_4px_0px_#111] transition duration-200 ${
              activeFilter === "web"
                ? "bg-[#8BDFDD] text-black translate-y-[-2px] shadow-[6px_6px_0px_#111]"
                : "bg-[#FFF6DE] text-black hover:bg-[#8BDFDD] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#111]"
            }`}>
            Web Development
          </button>

          <button
            onClick={() => setActiveFilter("ai")}
            className={`px-5 py-2.5 rounded-2xl border-[2px] border-black text-sm font-bold shadow-[4px_4px_0px_#111] transition duration-200 ${
              activeFilter === "ai"
                ? "bg-[#8BDFDD] text-black translate-y-[-2px] shadow-[6px_6px_0px_#111]"
                : "bg-[#FFF6DE] text-black hover:bg-[#8BDFDD] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#111]"
            }`}>
            AI Engineer
          </button>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`${project.cardColor} border-[3px] border-black rounded-[24px] overflow-hidden shadow-[6px_6px_0px_#111] hover:-translate-y-1 transition duration-300 flex flex-col`}>
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-44 object-cover border-b-[3px] border-black"
                loading="lazy"
              />
              <div className="p-5 flex-grow bg-opacity-90">
                <span className="inline-flex px-3 py-1 rounded-full bg-[#FFF6DE] border-[2px] border-black text-black text-xs font-bold shadow-[2px_2px_0px_#111]">
                  {project.tag}
                </span>
                <h3 className="text-lg font-bold text-black mt-4">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-800 font-medium leading-6 mt-2">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SHOW MORE BUTTON (Muncul zoom-in di akhir) */}
        <div
          className="flex justify-center mt-12"
          data-aos="zoom-in">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-2xl border-[2px] border-black bg-[#FFE394] text-black text-sm font-bold shadow-[4px_4px_0px_#111] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#111] transition duration-200">
            Show More Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
