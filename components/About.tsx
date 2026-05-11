export default function About() {
  return (
    <section
      id="about"
      className="bg-[#8BDFDD] px-5 lg:px-16 py-12 relative overflow-hidden">
      {/* BLUR BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#FFE394] rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#F48F68] rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* TITLE (Animasi muncul ke atas) */}
        <div className="mb-8" data-aos="fade-up">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border-[2px] border-black bg-[#FFF6DE] shadow-[3px_3px_0px_#111] text-black text-xs font-bold uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-2xl lg:text-4xl font-bold text-black mt-4 leading-snug max-w-2xl">
            Creative Developer & AI Engineer Building Modern
            Digital Products
          </h2>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* LEFT: TEXT DESCRIPTIONS & STATS (Animasi muncul ke atas dengan sedikit delay) */}
          <div
            className="bg-[#FFF6DE] border-[3px] border-black rounded-[24px] p-5 lg:p-8 shadow-[7px_7px_0px_#111]"
            data-aos="fade-up"
            data-aos-delay="100">
            <p className="text-sm lg:text-base leading-7 text-neutral-800">
              Mahasiswa tingkat akhir Teknik Informatika dan
              Web Developer yang berpengalaman membangun
              platform B2B, e-commerce, serta aplikasi
              kustom. Berbekal keahlian Full-stack, saya
              merancang arsitektur digital end-to-end yang
              aman, berkinerja tinggi, dan berorientasi pada
              hasil bisnis.
            </p>

            <p className="text-sm lg:text-base leading-7 text-neutral-800 mt-4">
              Sebagai aspiring AI Engineer, saya
              mengintegrasikan Machine Learning dan sistem
              otomasi untuk menciptakan ekosistem web yang
              cerdas. Baik untuk proyek freelance maupun
              kolaborasi dalam tim teknologi, saya siap
              mengubah masalah kompleks menjadi solusi
              praktis dan efisien.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-[#FFE394] border-[2px] border-black rounded-2xl p-4 shadow-[4px_4px_0px_#111] hover:-translate-y-1 transition duration-300">
                <h3 className="text-2xl lg:text-3xl text-black font-black">
                  1+
                </h3>
                <p className="text-xs font-semibold mt-1 text-neutral-800 uppercase tracking-wide">
                  Years Experience
                </p>
              </div>

              <div className="bg-[#F48F68] border-[2px] border-black rounded-2xl p-4 shadow-[4px_4px_0px_#111] hover:-translate-y-1 transition duration-300">
                <h3 className="text-2xl lg:text-3xl text-black font-black">
                  10+
                </h3>
                <p className="text-xs font-semibold mt-1 text-black uppercase tracking-wide">
                  Projects Completed
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: FOCUS CARDS */}
          <div className="grid gap-4 h-full">
            {/* CARD 1: WEB DEV (Animasi masuk dari kanan) */}
            <div
              className="bg-[#FFF6DE] border-[3px] border-black rounded-[24px] p-5 lg:p-6 shadow-[6px_6px_0px_#111] hover:-translate-y-1 transition duration-300 h-full flex flex-col justify-center"
              data-aos="fade-left"
              data-aos-delay="200">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl border-[2px] border-black bg-[#FFE394] shadow-[3px_3px_0px_#111]">
                {/* SVG Icon for Code */}
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-lg lg:text-xl text-black font-bold mt-4">
                Modern Web Development
              </h3>
              <p className="text-sm text-neutral-700 leading-6 mt-2">
                Website modern, scalable, responsive, dan
                optimized untuk kebutuhan bisnis modern.
              </p>
            </div>

            {/* CARD 2: AI ENGINEERING (Animasi masuk dari kanan, delay lebih lama agar berurutan) */}
            <div
              className="bg-[#FFF6DE] border-[3px] border-black rounded-[24px] p-5 lg:p-6 shadow-[6px_6px_0px_#111] hover:-translate-y-1 transition duration-300 h-full flex flex-col justify-center"
              data-aos="fade-left"
              data-aos-delay="300">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl border-[2px] border-black bg-[#8BDFDD] shadow-[3px_3px_0px_#111]">
                {/* SVG Icon for Robot/AI */}
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg lg:text-xl text-black font-bold mt-4">
                AI Engineering
              </h3>
              <p className="text-sm text-neutral-700 leading-6 mt-2">
                AI chatbot, automation workflow, machine
                learning, dan intelligent business
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
