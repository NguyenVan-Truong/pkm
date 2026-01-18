"use client";

import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { translations } from "@/lib/translations";
import { useLanguage } from "./LanguageProvider";

export default function HeroSection() {
  const { language } = useLanguage();
  const slides = translations[language].hero.slides;
  const badge = translations[language].hero.badge;
  const [active, setActive] = useState(0);

  const totalSlides = useMemo(() => slides.length, [slides.length]);

  useEffect(() => {
    if (totalSlides <= 1) return undefined;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  useEffect(() => {
    setActive(0);
  }, [language]);

  const current = slides[active];

  const handlePrev = () =>
    setActive((prev) => (prev - 1 + totalSlides) % totalSlides);
  const handleNext = () => setActive((prev) => (prev + 1) % totalSlides);

  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === active ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/25" />
          </div>
        ))}
      </div>

      <div className="relative z-10 h-full">
        <div className="container-max h-full section-padding flex flex-col">
          <div className="flex-1 flex items-center">
            <div className="max-w-3xl space-y-6 text-white">
              <p className="text-sm uppercase tracking-[0.3em] text-white/80">
                {badge}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
                {current.title}
              </h1>
              <div className="space-y-4 text-lg sm:text-xl text-white/85 leading-relaxed">
                <p>{current.subtitle}</p>
                <p>{current.description}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="flex items-center justify-center rounded-xl bg-red-500 px-6 py-3 font-semibold text-white shadow-lg shadow-red-500/30 transition hover:bg-red-600"
                >
                  {current.ctaPrimary}
                </a>
                <a
                  href="#services"
                  className="flex items-center justify-center rounded-xl border border-white/60 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  <Play className="mr-2 h-5 w-5" />
                  {current.ctaSecondary}
                </a>
              </div>
            </div>
          </div>

          {totalSlides > 1 && (
            <>
              <div className="mt-24 flex justify-center">
                <div className="w-full max-w-[1200px] rounded-2xl p-5 backdrop-blur-xl shadow-lg shadow-black/30">
                  <div className="grid grid-flow-col auto-cols-[220px] gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/60 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-white/10">
                    {slides.map((slide, index) => (
                      <button
                        key={slide.id}
                        onClick={() => setActive(index)}
                        className={`group relative flex h-full snap-start flex-col overflow-hidden rounded-xl border transition ${
                          index === active
                            ? "border-red-400/70 ring-2 ring-red-400/30"
                            : "border-white/10 hover:border-white/30"
                        }`}
                        aria-label={`Chọn ${slide.thumbLabel}`}
                      >
                        <div className="relative h-28 w-full overflow-hidden">
                          <img
                            src={slide.image}
                            alt={slide.title}
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent ${index === active ? "" : "opacity-70"}`}
                          />
                        </div>
                        <div className="absolute inset-0" aria-hidden="true" />
                        {index === active && (
                          <div
                            className="absolute inset-0 ring-2 ring-red-400/60"
                            aria-hidden="true"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                  <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-red-400 to-red-500 shadow-[0_0_12px_rgba(239,68,68,0.35)] transition-all duration-500"
                      style={{
                        width: `${((active + 1) / totalSlides) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
