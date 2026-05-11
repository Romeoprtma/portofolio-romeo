export default function Toolkit() {
  // Data array untuk toolkit agar kode lebih DRY (Don't Repeat Yourself)
  const tools = [
    {
      id: 1,
      name: "WordPress",
      desc: "CMS modern untuk company profile, landing page, dan website bisnis.",
      iconClass: "devicon-wordpress-plain",
      bgColor: "bg-[#8BDFDD]",
    },
    {
      id: 2,
      name: "Laravel",
      desc: "Backend framework untuk dashboard, API, dan web application modern.",
      iconClass: "devicon-laravel-plain",
      bgColor: "bg-[#F48F68]",
    },
    {
      id: 3,
      name: "Next.js",
      desc: "Frontend modern framework untuk website cepat dan scalable.",
      iconClass: "devicon-nextjs-plain",
      bgColor: "bg-[#FFE394]",
    },
    {
      id: 4,
      name: "Python",
      desc: "Digunakan untuk AI engineering, automation, dan machine learning.",
      iconClass: "devicon-python-plain",
      bgColor: "bg-[#8BDFDD]",
    },
  ];

  return (
    <section
      id="toolkit"
      className="bg-[#8BDFDD] px-5 lg:px-16 py-14 relative overflow-hidden">
      {/* BLUR BACKGROUND */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFE394] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#F48F68] rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER (Muncul dari bawah) */}
        <div
          className="text-center mb-12"
          data-aos="fade-up">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border-[2px] border-black bg-[#FFF6DE] shadow-[3px_3px_0px_#111] text-xs font-bold text-black uppercase tracking-wider">
            My Toolkit
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-black mt-4 leading-snug">
            Technologies & Tools I Use
          </h2>
          <p className="text-sm lg:text-base text-neutral-800 mt-4 max-w-2xl mx-auto leading-7">
            Tools dan teknologi yang saya gunakan untuk
            membangun website modern, scalable, dan solusi
            digital berbasis AI.
          </p>
        </div>

        {/* TOOLKIT GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Tambahkan parameter index di sini */}
          {tools.map((tool, index) => (
            <div
              key={tool.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100} // Kartu ke-1 delay 0ms, ke-2 delay 100ms, dst.
              className="bg-[#FFF6DE] border-[3px] border-black rounded-[24px] p-5 shadow-[6px_6px_0px_#111] hover:-translate-y-1 transition duration-300">
              <div
                className={`w-14 h-14 rounded-2xl ${tool.bgColor} border-[2px] border-black shadow-[3px_3px_0px_#111] flex items-center justify-center`}>
                {/* ICON MENGGUNAKAN DEVICON */}
                <i
                  className={`${tool.iconClass} text-3xl text-black`}></i>
              </div>
              <h3 className="text-lg font-bold text-black mt-5">
                {tool.name}
              </h3>
              <p className="text-sm text-neutral-800 leading-6 mt-2 font-medium">
                {tool.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
