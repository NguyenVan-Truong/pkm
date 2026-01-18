"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import type { Lang } from "@/lib/translations";
import { useLanguage } from "./LanguageProvider";

type Media = {
  id: string;
  type: "image";
  src: string;
  alt: Record<Lang, string>;
};

type CardBlock = {
  id: string;
  type: "card";
  title: Record<Lang, string>;
  badge: Record<Lang, string>;
};

type Row = {
  left: Media | CardBlock;
  right: Media | CardBlock;
};

const rows: Row[] = [
  {
    left: {
      id: "image-1",
      type: "image",
      src: "/assets/thumb-1.jpg",
      alt: {
        vi: "Toàn cảnh dự án công nghiệp",
        en: "Industrial project overview",
      },
    },
    right: {
      id: "card-1",
      type: "card",
      title: {
        vi: "Áp dụng công nghệ tiên tiến nhất",
        en: "Applying cutting-edge technology",
      },
      badge: { vi: "Công nghệ", en: "Technology" },
    },
  },
  {
    left: {
      id: "card-2",
      type: "card",
      title: {
        vi: "Cam kết về Chất Lượng, An toàn và Hiệu quả",
        en: "Commitment to quality, safety, and efficiency",
      },
      badge: { vi: "Cam kết", en: "Commitment" },
    },
    right: {
      id: "image-2",
      type: "image",
      src: "/assets/thumb-2.jpg",
      alt: {
        vi: "Kỹ sư trao đổi tại công trường",
        en: "Engineers collaborating onsite",
      },
    },
  },
  {
    left: {
      id: "image-3",
      type: "image",
      src: "/assets/thumb-3.jpg",
      alt: {
        vi: "Khách hàng trao đổi dự án",
        en: "Client discussing the project",
      },
    },
    right: {
      id: "card-3",
      type: "card",
      title: {
        vi: "Chuyên Gia Toàn Cầu cho Giải Pháp Tiên Phong",
        en: "Global experts for pioneering solutions",
      },
      badge: { vi: "Giải pháp", en: "Solutions" },
    },
  },
];

const copy = {
  heading: {
    vi: "Các dịch vụ của chúng tôi",
    en: "Our services",
  },
  badge: {
    vi: "Kajima Vietnam",
    en: "Kajima Vietnam",
  },
  cta: {
    vi: "Nhận phản hồi từ dịch vụ",
    en: "Get a service callback",
  },
  note: {
    vi: "Luôn cập nhật tiến độ, chú trọng an toàn và minh bạch chi phí trong từng bước triển khai.",
    en: "We keep progress transparent, safety-first, and costs clear at every step.",
  },
};

const services = [
  {
    title: { vi: "Xây Dựng", en: "Construction" },
    description: {
      vi: "Đội ngũ của chúng tôi kết hợp kinh nghiệm quốc tế và sự nghiêm túc trong từng hạng mục, đảm bảo tiến độ, an toàn và chất lượng vượt chuẩn. Chúng tôi đồng hành từ giai đoạn chuẩn bị đến vận hành, liên tục tối ưu để mỗi công trình đều bền vững và hiệu quả.",
      en: "Our team blends international experience with rigor on every package, ensuring schedule, safety, and quality above standard. From preparation to operations, we keep optimizing so every asset is durable and efficient.",
    },
  },
  {
    title: { vi: "Thiết Kế", en: "Design" },
    description: {
      vi: "Giải pháp thiết kế đồng bộ, sáng tạo và khả thi, tôn trọng quy chuẩn địa phương và tối ưu chi phí. Chúng tôi cân bằng thẩm mỹ, công năng và tính bền vững, giúp doanh nghiệp có nền tảng phát triển lâu dài.",
      en: "Integrated, creative, and feasible design solutions that respect local codes and optimize cost. We balance aesthetics, function, and sustainability to give businesses a long-term platform to grow.",
    },
  },
  {
    title: { vi: "Dịch vụ mở rộng", en: "Extended services" },
    description: {
      vi: "Tư vấn, vận hành, bảo trì và các dịch vụ bổ trợ nhằm bảo vệ giá trị tài sản. Với mạng lưới chuyên gia đa lĩnh vực, chúng tôi cung cấp giải pháp linh hoạt theo đúng nhu cầu của từng khách hàng.",
      en: "Advisory, operations, maintenance, and supporting services that safeguard asset value. With a multi-disciplinary expert network, we tailor flexible solutions to each client need.",
    },
  },
];

export default function TechnologyPlatform() {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(-1);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <section id="platform" className="section-padding bg-white">
      <div className="container-max space-y-14">
        <div className="space-y-6 md:space-y-8">
          {rows.map((row, rowIndex) => (
            <div
              key={`${row.left.id}-${row.right.id}`}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6"
            >
              {["left", "right"].map((side) => {
                const block = row[side as "left" | "right"];
                const isImage = block.type === "image";
                const colClass =
                  side === "left" ? "md:col-span-7" : "md:col-span-5";

                if (isImage) {
                  return (
                    <div
                      key={block.id}
                      className={`${colClass} relative overflow-hidden rounded-2xl shadow-lg min-h-[220px] md:min-h-[240px]`}
                    >
                      <Image
                        src={block.src}
                        alt={block.alt[language]}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={`object-cover transition-transform duration-500 ${
                          hoveredRow === rowIndex ? "scale-105" : "scale-100"
                        }`}
                        priority={block.id === "image-1"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-black/0" />
                    </div>
                  );
                }

                return (
                  <div
                    key={block.id}
                    className={`${colClass} group bg-[#c9001a] text-white rounded-2xl shadow-lg p-6 md:p-7 flex flex-col justify-between overflow-hidden`}
                    onMouseEnter={() => setHoveredRow(rowIndex)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <div className="space-y-3">
                      <p className="uppercase text-[11px] tracking-[0.26em] text-white/70 font-semibold">
                        {block.badge[language]}
                      </p>
                      <h3 className="text-lg md:text-xl font-bold leading-snug">
                        {block.title[language]}
                      </h3>
                    </div>
                    <div className="flex justify-end pt-4">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/12 group-hover:bg-white/20 transition-colors">
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-gray-100 shadow-xl bg-white">
          <div className="grid md:grid-cols-12">
            <div className="relative md:col-span-5 lg:col-span-4 bg-white md:border-r md:border-gray-100">
              <div className="relative h-full px-6 md:px-10 py-14 flex items-center md:items-center justify-center md:justify-start">
                <div className="space-y-3 text-left max-w-xs md:max-w-sm">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#c9001a] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#c9001a] shadow-sm bg-white">
                    IDP
                    <span className="h-2 w-2 rounded-full bg-[#c9001a]" />
                  </div>
                  <div className="text-4xl sm:text-[44px] md:text-[48px] lg:text-[56px] font-black leading-tight text-[#0f172a] drop-shadow-sm">
                    Technology
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-8 px-6 md:px-10 py-8 md:py-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-xs font-semibold tracking-[0.28em] uppercase text-[#c9001a]">
                    {copy.badge[language]}
                  </p>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    {copy.heading[language]}
                  </h2>
                </div>
                <button className="self-start inline-flex items-center gap-2 border border-[#c9001a] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#c9001a] hover:bg-[#c9001a] hover:text-white transition-colors">
                  {copy.cta[language]}
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-8 space-y-2">
                {services.map((service, index) => {
                  const isOpen = activeIndex === index;
                  const numberLabel = `${index + 1}`.padStart(2, "0");
                  return (
                    <div
                      key={service.title.vi}
                      className={`border-t border-gray-200 first:border-t-0 transition-all duration-200 ${
                        isOpen
                          ? "rounded-md bg-[#d8172e] text-white shadow-sm border border-transparent"
                          : "bg-white text-gray-800"
                      }`}
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(-1)}
                    >
                      <button
                        className="w-full flex items-start justify-between text-left px-3 py-4"
                        onClick={() => setActiveIndex(index)}
                        onFocus={() => setActiveIndex(index)}
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={`text-sm font-semibold tracking-[0.08em] ${
                              isOpen ? "text-white/80" : "text-gray-400"
                            }`}
                          >
                            {numberLabel}.
                          </span>
                          <div className="space-y-2">
                            <span
                              className={`block text-base md:text-lg font-semibold ${
                                isOpen ? "text-white" : "text-gray-800"
                              }`}
                            >
                              {service.title[language]}
                            </span>
                            {isOpen ? (
                              <p className="text-sm leading-relaxed text-white/90">
                                {service.description[language]}
                              </p>
                            ) : null}
                          </div>
                        </div>
                        <span
                          className={`mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border transition-colors ${
                            isOpen
                              ? "border-white text-white"
                              : "border-[#c9001a] text-[#c9001a]"
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="h-3 w-3" />
                          ) : (
                            <Plus className="h-3 w-3" />
                          )}
                        </span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
