import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#FFF6DE] px-5 lg:px-16 py-[3rem] overflow-hidden flex items-center relative">
      {/* BLUR BACKGROUND */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-[#8BDFDD] rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#F48F68] rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-center w-full relative z-10">
        {/* KIRI */}
        <div
          className="text-center lg:text-left"
          data-aos="fade-right">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border-[2px] border-black bg-[#FFE394] shadow-[3px_3px_0px_#111] text-xs text-black font-bold">
            Web Developer • Aspiring AI Engineer
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mt-5 text-black max-w-xl mx-auto lg:mx-0">
            Building Modern Web Integrating Smart AI.
          </h1>
          <p className="mt-4 text-sm lg:text-base leading-7 text-neutral-700 max-w-lg mx-auto lg:mx-0">
            Menciptakan website modern berkinerja tinggi
            dengan integrasi AI. Memadukan keahlian
            Full-stack Development dan Machine Learning.
            Menghadirkan infrastruktur solid untuk solusi
            digital yang efisien.
          </p>

          <div className="flex flex-wrap gap-4 mt-7 justify-center lg:justify-start">
            <a
              href="#projects"
              className="px-5 py-3 rounded-xl border-[2px] border-black bg-[#F48F68] text-white text-sm font-bold shadow-[4px_4px_0px_#111] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#111] transition duration-200">
              View Projects
            </a>

            <a
              href="/CV_Romeo_Mulia_Pratama.pdf"
              download="CV_Romeo_Mulia_Pratama.pdf"
              className="px-5 py-3 rounded-xl border-[2px] border-black bg-[#8BDFDD] text-black text-sm font-bold shadow-[4px_4px_0px_#111] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#111] transition duration-200">
              My Resume
            </a>
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-3 mt-7 justify-center lg:justify-start">
            {[
              "Wordpress",
              "Next.js",
              "Laravel",
              "Python",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full border-[2px] border-black bg-white text-black text-xs font-semibold shadow-[3px_3px_0px_#111]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* KANAN */}
        <div
          className="relative flex justify-center"
          data-aos="fade-left"
          data-aos-delay="200">
          <div className="relative hover:-translate-y-1 transition duration-300">
            <Image
              src="/img/foto_hero.jpg"
              alt="Foto Profil Romeo"
              width={720}
              height={662}
              className="w-full max-w-[150px] lg:max-w-[720px] rounded-[28px] border-[3px] border-black shadow-[10px_10px_0px_#111] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
