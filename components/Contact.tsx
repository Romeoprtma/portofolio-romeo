"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner"; // Import sonner untuk notifikasi cantik

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Notifikasi Sukses dengan gaya Neo-Brutalism
        toast.success("Pesan Terkirim!", {
          description:
            "Terima kasih, saya akan segera menghubungi Anda melalui email.",
          style: {
            border: "3px solid black",
            borderRadius: "16px",
            background: "#8BDFDD",
            color: "black",
            fontWeight: "bold",
          },
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error();
      }
    } catch (err) {
      // Notifikasi Gagal
      toast.error("Gagal Mengirim", {
        description:
          "Terjadi kesalahan teknis. Silakan coba lagi nanti.",
        style: {
          border: "3px solid black",
          borderRadius: "16px",
          background: "#F48F68",
          color: "black",
          fontWeight: "bold",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* SECTION CTA */}
      <section className="bg-[#8BDFDD] px-5 lg:px-16 py-14 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-52 h-52 bg-[#FFE394] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-52 h-52 bg-[#F48F68] rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div
            className="bg-[#FFF6DE] border-[3px] border-black rounded-[32px] p-8 lg:p-10 shadow-[8px_8px_0px_#111] text-center"
            data-aos="zoom-in">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border-[2px] border-black bg-[#FFE394] shadow-[3px_3px_0px_#111] text-xs font-bold text-black uppercase tracking-wider">
              Let’s Work Together
            </span>

            <h2 className="text-3xl lg:text-5xl font-bold text-black leading-tight mt-6 max-w-3xl mx-auto">
              Have an Idea? Let’s Build Something Amazing
              Together
            </h2>

            <p className="text-sm lg:text-base text-neutral-800 font-medium leading-7 mt-5 max-w-2xl mx-auto">
              Saya siap membantu membangun website modern,
              AI automation, dashboard system, dan solusi
              digital yang scalable serta impactful untuk
              bisnis Anda.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Link
                href="#contact"
                className="px-6 py-3 rounded-2xl border-[2px] border-black bg-[#F48F68] text-black text-sm font-bold shadow-[4px_4px_0px_#111] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#111] transition duration-200">
                Start a Project
              </Link>

              <Link
                href="#projects"
                className="px-6 py-3 rounded-2xl border-[2px] border-black bg-[#8BDFDD] text-black text-sm font-bold shadow-[4px_4px_0px_#111] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#111] transition duration-200">
                View My Projects
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {[
                "⚡ Fast Response",
                "🚀 Modern Tech Stack",
                "🤖 AI Integration",
              ].map((info, index) => (
                <div
                  key={info}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="px-4 py-2 rounded-full border-[2px] border-black bg-white shadow-[3px_3px_0px_#111] text-xs font-bold text-black">
                  {info}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION CONTACT */}
      <section
        id="contact"
        className="bg-[#FFF6DE] px-5 lg:px-16 py-14 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-44 h-44 bg-[#8BDFDD] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-44 h-44 bg-[#F48F68] rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div
            className="text-center mb-12"
            data-aos="fade-up">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border-[2px] border-black bg-[#FFE394] shadow-[3px_3px_0px_#111] text-xs font-bold text-black uppercase tracking-wider">
              Contact Me
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-black mt-4 leading-snug">
              Let’s Connect & Build Something Great
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-start">
            {/* LEFT: INFO */}
            <div
              className="bg-[#8BDFDD] border-[3px] border-black rounded-[28px] p-6 lg:p-8 shadow-[7px_7px_0px_#111]"
              data-aos="fade-right"
              data-aos-delay="100">
              <h3 className="text-2xl font-bold text-black">
                Get In Touch
              </h3>
              <p className="text-sm leading-7 text-neutral-800 mt-4 font-medium">
                Saya terbuka untuk freelance project,
                collaboration, internship, maupun full-time
                opportunity.
              </p>

              <div className="space-y-4 mt-8">
                {[
                  {
                    label: "Email",
                    val: "romeomuliap@gmail.com",
                    icon: "envelope",
                    bg: "bg-[#FFE394]",
                  },
                  {
                    label: "WhatsApp",
                    val: "+62 85156900719",
                    icon: "whatsapp",
                    bg: "bg-[#F48F68]",
                    brand: true,
                  },
                  {
                    label: "LinkedIn",
                    val: "linkedin.com/in/romeomuliap",
                    icon: "linkedin-in",
                    bg: "bg-[#8BDFDD]",
                    brand: true,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 bg-[#FFF6DE] border-[2px] border-black rounded-2xl p-4 shadow-[4px_4px_0px_#111] hover:-translate-y-1 transition-transform">
                    <div
                      className={`w-12 h-12 rounded-xl ${item.bg} border-[2px] border-black flex items-center justify-center shadow-[2px_2px_0px_#111]`}>
                      <i
                        className={`fa-${item.brand ? "brands" : "solid"} fa-${item.icon} text-black`}></i>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-700 font-bold uppercase tracking-wider">
                        {item.label}
                      </p>
                      <h4 className="text-sm font-bold text-black mt-0.5">
                        {item.val}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: FORM */}
            <div
              className="bg-[#8BDFDD] border-[3px] border-black rounded-[28px] p-6 lg:p-8 shadow-[7px_7px_0px_#111]"
              data-aos="fade-left"
              data-aos-delay="200">
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                suppressHydrationWarning>
                <div>
                  <label className="text-sm font-bold text-black block mb-2">
                    Full Name
                  </label>
                  <input
                    name="fullName"
                    type="text"
                    required
                    placeholder="Enter your name"
                    suppressHydrationWarning
                    className="w-full px-4 py-3 rounded-2xl border-[2px] border-black bg-[#FFF6DE] text-sm font-medium text-black placeholder-neutral-500 shadow-[3px_3px_0px_#111] outline-none focus:translate-y-[-2px] focus:shadow-[5px_5px_0px_#111] transition duration-200"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-black block mb-2">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    suppressHydrationWarning
                    className="w-full px-4 py-3 rounded-2xl border-[2px] border-black bg-[#FFF6DE] text-sm font-medium text-black placeholder-neutral-500 shadow-[3px_3px_0px_#111] outline-none focus:translate-y-[-2px] focus:shadow-[5px_5px_0px_#111] transition duration-200"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-black block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Write your message..."
                    suppressHydrationWarning
                    className="w-full px-4 py-3 rounded-2xl border-[2px] border-black bg-[#FFF6DE] text-sm font-medium text-black placeholder-neutral-500 shadow-[3px_3px_0px_#111] outline-none resize-none focus:translate-y-[-2px] focus:shadow-[5px_5px_0px_#111] transition duration-200"></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  suppressHydrationWarning
                  className={`w-full px-6 py-4 rounded-2xl border-[2px] border-black bg-[#FFE394] text-black text-sm font-black shadow-[4px_4px_0px_#111] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#111] transition duration-200 uppercase tracking-widest ${
                    isSubmitting
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}>
                  {isSubmitting
                    ? "Sending..."
                    : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
