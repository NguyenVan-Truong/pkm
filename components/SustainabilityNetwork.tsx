"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import type { Lang } from "@/lib/translations";
import { useLanguage } from "./LanguageProvider";

type Project = {
  title: Record<Lang, string>;
  badge: Record<Lang, string>;
  city: Record<Lang, string>;
  size: string;
  year: string;
  delivery: Record<Lang, string>;
  image: string;
  alt: string;
};

const copy = {
  badge: {
    vi: "Các dự án của IDP Technology",
    en: "Projects of IDP Technology",
  },
  heading: {
    vi: "Chúng tôi thể hiện sự xuất sắc trong từng công trình",
    en: "We demonstrate excellence in every project",
  },
};

const projects: Project[] = [
  {
    title: { vi: "Logistics Campus", en: "Logistics Campus" },
    badge: { vi: "Logistics", en: "Logistics" },
    city: { vi: "Bắc Ninh", en: "Bac Ninh" },
    size: "22,000 m2",
    year: "2023",
    delivery: { vi: "EPC", en: "EPC" },
    image: "/assets/48548A-002-1-1.jpg",
    alt: "Logistics campus overview",
  },
  {
    title: { vi: "Innovation Center", en: "Innovation Center" },
    badge: { vi: "Văn phòng", en: "Office" },
    city: { vi: "Hà Nội", en: "Hanoi" },
    size: "15,000 m2",
    year: "2022",
    delivery: { vi: "Fit-out", en: "Fit-out" },
    image: "/assets/ATA-7-scaled.jpg",
    alt: "Innovation center atrium",
  },
  {
    title: { vi: "Waterfront Complex", en: "Waterfront Complex" },
    badge: { vi: "Hỗn hợp", en: "Mixed-use" },
    city: { vi: "TP.HCM", en: "HCMC" },
    size: "35,000 m2",
    year: "2025",
    delivery: { vi: "Thi công", en: "Construction" },
    image: "/assets/Overview-3-1.jpg",
    alt: "Waterfront complex at night",
  },
  {
    title: { vi: "Panasonic", en: "Panasonic" },
    badge: { vi: "Công nghiệp", en: "Industrial" },
    city: { vi: "Bình Dương", en: "Binh Duong" },
    size: "12,000 m2",
    year: "2024",
    delivery: { vi: "Design & Build", en: "Design & Build" },
    image: "/assets/7152-Nippon.jpg",
    alt: "Panasonic industrial facility exterior",
  },
  {
    title: { vi: "Wink Da Nang Riverside", en: "Wink Da Nang Riverside" },
    badge: { vi: "Khách sạn", en: "Hotel" },
    city: { vi: "Đà Nẵng", en: "Da Nang" },
    size: "10,000 m2",
    year: "2023",
    delivery: { vi: "Fit-out", en: "Fit-out" },
    image: "/assets/35387KEN01376-copy-Copy.jpg",
    alt: "Wink Da Nang Riverside at night",
  },
  {
    title: { vi: "Wink Da Nang Center", en: "Wink Da Nang Center" },
    badge: { vi: "Khách sạn", en: "Hotel" },
    city: { vi: "Đà Nẵng", en: "Da Nang" },
    size: "13,000 m2",
    year: "2022",
    delivery: { vi: "Design & Build", en: "Design & Build" },
    image: "/assets/42896LEE09896-copy-2.jpg",
    alt: "Wink Da Nang Center skyline view",
  },
  {
    title: { vi: "Aeon Tân An", en: "Aeon Tan An" },
    badge: { vi: "Bán lẻ", en: "Retail" },
    city: { vi: "Tây Ninh", en: "Tay Ninh" },
    size: "30,000 m2",
    year: "2025",
    delivery: { vi: "Thi công", en: "Construction" },
    image: "/assets/85034AEON-MALL-Ha-Dong20191125-0471-scaled-1.jpg",
    alt: "Aeon mall aerial view",
  },
  {
    title: { vi: "Industrial Hub", en: "Industrial Hub" },
    badge: { vi: "Công nghiệp", en: "Industrial" },
    city: { vi: "Hải Phòng", en: "Hai Phong" },
    size: "18,000 m2",
    year: "2024",
    delivery: { vi: "Design & Build", en: "Design & Build" },
    image: "/assets/19507DSC_4342-2.jpg",
    alt: "Industrial hub panoramic",
  },
];

export default function SustainabilityNetwork() {
  const { language } = useLanguage();
  const [active, setActive] = useState(0);
  const [step, setStep] = useState(100);

  const slides = useMemo(() => [...projects, ...projects], []);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w >= 1280) setStep(25);
      else if (w >= 1024) setStep(33.3333);
      else if (w >= 768) setStep(50);
      else setStep(100);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((v) => v + 1);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (active >= projects.length) {
      const id = requestAnimationFrame(() => setActive(0));
      return () => cancelAnimationFrame(id);
    }
  }, [active]);

  return (
    <section id="projects" className="bg-[#262626] text-white py-14 md:py-20">
      <div className="container-max px-4 md:px-8 space-y-8">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.32em] text-[#e53945] font-semibold">
            {copy.badge[language]}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold">
            {copy.heading[language]}
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#1f1f1f]">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${active * step}%)` }}
          >
            {slides.map((project, index) => (
              <div
                key={`${project.title.en}-${index}`}
                className="min-w-full md:min-w-[50%] lg:min-w-[33.3333%] xl:min-w-[25%] p-3"
              >
                <div className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg border border-white/5 h-full">
                  <div className="relative h-52 md:h-56">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                    <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-[#e53945] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em]">
                      {project.badge[language]}
                    </span>
                  </div>
                  <div className="p-4 space-y-3">
                    <h3 className="text-lg font-semibold text-white">
                      {project.title[language]}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-xs text-white/70">
                      <span className="inline-flex items-center gap-1">
                        <span aria-hidden>\u25cf</span>
                        {project.city[language]}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <span aria-hidden>\u25a0</span>
                        {project.size}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <span aria-hidden>\u23f3</span>
                        {project.year}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <span aria-hidden>\u2692</span>
                        {project.delivery[language]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
