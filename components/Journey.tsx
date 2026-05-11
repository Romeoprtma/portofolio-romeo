export default function Journey() {
  return (
    <section
      id="journey"
      className="bg-[#FFF6DE] px-5 lg:px-16 py-14 relative overflow-hidden">
      {/* BLUR BACKGROUND */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#8BDFDD] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#F48F68] rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* HEADER (Muncul dari bawah ke atas) */}
        <div
          className="text-center mb-12"
          data-aos="fade-up">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border-[2px] border-black bg-[#FFE394] shadow-[3px_3px_0px_#111] text-xs font-bold text-black uppercase tracking-wider">
            My Journey
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-black mt-4 leading-snug">
            My Professional Experience as Web Developer
          </h2>
          <p className="text-sm lg:text-base text-neutral-700 mt-4 max-w-2xl mx-auto leading-7">
            Perjalanan profesional saya dalam membangun
            pengalaman sebagai Web Developer melalui
            internship dan pengembangan produk digital
            modern.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* LINE CONNECTOR (Muncul memudar bersamaan) */}
          <div
            className="absolute left-5 top-0 w-[3px] h-full bg-black"
            data-aos="fade"
            data-aos-delay="100"></div>

          <div className="space-y-8">
            {/* ITEM 1 (Kartu pertama muncul setelah header) */}
            <div
              className="relative pl-16 group"
              data-aos="fade-up"
              data-aos-delay="100">
              {/* DOT ICON */}
              <div className="absolute left-0 top-2 w-10 h-10 rounded-full border-[3px] border-black bg-[#F48F68] shadow-[3px_3px_0px_#111] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {/* SVG Icon: Laptop/Code */}
                <svg
                  className="w-5 h-5 text-black"
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

              {/* CARD */}
              <div className="bg-[#8BDFDD] border-[3px] border-black rounded-[24px] p-5 lg:p-7 shadow-[6px_6px_0px_#111] hover:-translate-y-1 transition duration-300">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#FFF6DE] border-[2px] border-black text-black text-xs font-bold shadow-[2px_2px_0px_#111]">
                    Sep 2025 - Feb 2026
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FFE394] border-[2px] border-black text-black text-xs font-bold shadow-[2px_2px_0px_#111]">
                    Internship
                  </span>
                </div>

                <h3 className="text-xl font-bold text-black">
                  PT Inhands Solusi Digital
                </h3>
                <p className="text-sm font-medium text-neutral-800 mt-1">
                  Web Developer
                </p>

                <p className="text-sm leading-7 text-neutral-800 mt-4">
                  Mengembangkan aplikasi web dan dashboard
                  berbasis modern web technology. Berfokus
                  pada pembuatan UI interaktif, integrasi
                  API, optimasi user experience, serta
                  pengembangan sistem digital untuk
                  kebutuhan bisnis.
                </p>
              </div>
            </div>

            {/* ITEM 2 (Kartu kedua muncul menyusul kartu pertama) */}
            <div
              className="relative pl-16 group"
              data-aos="fade-up"
              data-aos-delay="300">
              {/* DOT ICON */}
              <div className="absolute left-0 top-2 w-10 h-10 rounded-full border-[3px] border-black bg-[#FFE394] shadow-[3px_3px_0px_#111] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {/* SVG Icon: Briefcase */}
                <svg
                  className="w-5 h-5 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              {/* CARD */}
              <div className="bg-[#8BDFDD] border-[3px] border-black rounded-[24px] p-5 lg:p-7 shadow-[6px_6px_0px_#111] hover:-translate-y-1 transition duration-300">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#FFF6DE] border-[2px] border-black text-black text-xs font-bold shadow-[2px_2px_0px_#111]">
                    Sep 2024 - Sep 2025
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F48F68] border-[2px] border-black text-black text-xs font-bold text-black shadow-[2px_2px_0px_#111]">
                    Internship
                  </span>
                </div>

                <h3 className="text-xl font-bold text-black">
                  Universitas Mercu Buana
                </h3>
                <p className="text-sm font-medium text-neutral-800 mt-1">
                  Web Developer
                </p>

                <p className="text-sm leading-7 text-neutral-800 mt-4">
                  Mengembangkan dan maintenance website
                  modern menggunakan teknologi frontend dan
                  backend. Berkontribusi dalam pengembangan
                  fitur, optimasi tampilan responsive, serta
                  peningkatan performa website perusahaan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
