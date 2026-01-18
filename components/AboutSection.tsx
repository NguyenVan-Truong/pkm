"use client";

import { ArrowRight } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/translations";

const statCards = [
  {
    key: "jp",
    containerClass: "bg-white text-[#c9001a]",
  },
  {
    key: "projects",
    containerClass:
      "bg-[#3b3b40] text-white bg-[url('https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center",
    overlay: "bg-black/40",
  },
  {
    key: "vn",
    containerClass: "bg-[#c9001a] text-white",
    span: "col-span-2",
  },
  {
    key: "employees",
    containerClass: "bg-[#fde9e9] text-[#c9001a]",
  },
  {
    key: "revenue",
    containerClass: "bg-white text-[#1f1f22]",
  },
];

export default function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-[1.05fr,1fr] gap-8 lg:gap-12 items-stretch">
          <div className="relative overflow-hidden rounded-3xl min-h-[520px] shadow-xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative h-full flex flex-col justify-between p-8 sm:p-10 lg:p-12 text-white">
              <div className="space-y-4">
                <p className="uppercase tracking-[0.35em] text-sm font-semibold text-white/80">
                  {t.badge}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  {t.title}
                </h2>
                <div className="space-y-3 text-lg leading-relaxed text-white/90 max-w-3xl">
                  {t.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-white/90">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <button className="group inline-flex items-center gap-3 w-fit px-6 py-3 border border-white/70 text-white text-sm font-semibold rounded-full backdrop-blur-sm bg-white/10 hover:bg-white/20 transition duration-200">
                {t.cta}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:gap-6 content-stretch">
            {statCards.map(({ key, containerClass, span, overlay }, index) => {
              const stat = t.stats[index];
              if (!stat) return null;
              return (
                <div
                  key={key}
                  className={`${span ?? ""} relative overflow-hidden rounded-3xl shadow-lg ${containerClass} flex flex-col justify-between min-h-[160px] p-6 sm:p-8`}
                >
                  {overlay ? (
                    <div className={`absolute inset-0 ${overlay}`} />
                  ) : null}
                  <div className="relative">
                    <div className="text-5xl lg:text-6xl font-bold mb-3 leading-none">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold leading-snug">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
