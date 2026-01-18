"use client";

import {
  Handshake,
  Globe,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function PartnersCommunity() {
  const { language } = useLanguage();

  const copy = {
    vi: {
      aria: "Đối tác công nghệ chiến lược",
      title: "ĐỐI TÁC CÔNG NGHỆ CHIẾN LƯỢC",
      paragraph1:
        "IDP Technology đồng hành cùng các tập đoàn công nghệ hàng đầu để mang đến những giải pháp hiện đại, bảo mật và bền vững cho doanh nghiệp. Mạng lưới đối tác chiến lược giúp chúng tôi kết hợp sức mạnh toàn cầu với sự am hiểu địa phương.",
      paragraph2:
        "Chúng tôi cam kết minh bạch, tận tâm và sáng tạo trong mọi dự án hợp tác, từ tư vấn, triển khai đến vận hành dài hạn. Khám phá hệ sinh thái đối tác và cách chúng tôi tạo ra giá trị cùng nhau.",
      ctaPrimary: "Liên hệ hợp tác",
      ctaSecondary: "Xem danh sách đối tác",
    },
    en: {
      aria: "Strategic technology partners",
      title: "STRATEGIC TECHNOLOGY PARTNERS",
      paragraph1:
        "IDP Technology partners with leading technology groups to deliver modern, secure, and sustainable solutions for enterprises. Our strategic network blends global strength with local insight.",
      paragraph2:
        "We commit to transparency, dedication, and creativity across every collaboration—from consulting and implementation to long-term operations. Explore our partner ecosystem and how we create shared value.",
      ctaPrimary: "Partner with us",
      ctaSecondary: "See partner list",
    },
  };

  const t = copy[language];
  const partners = [
    { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" },
    { name: "SAP", logo: "https://logo.clearbit.com/sap.com" },
    { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
    {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    },
    {
      name: "Amazon Web Services",
      logo: "https://logo.clearbit.com/aws.amazon.com",
    },
    { name: "Google Cloud", logo: "/partners/google-cloud.svg" },
  ];

  return (
    <section
      id="partners"
      className="section-padding bg-white relative overflow-hidden"
      aria-label={t.aria}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #f5f5f5 0, #f5f5f5 48px, transparent 48px, transparent 96px), repeating-linear-gradient(0deg, #f5f5f5 0, #f5f5f5 48px, transparent 48px, transparent 96px)",
          backgroundSize: "120px 120px",
        }}
        aria-hidden
      />

      <div className="container-max relative">
        <div className="mx-auto max-w-5xl px-6 md:px-10 py-14 md:py-16 flex flex-col items-center text-center space-y-6">
          <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 shadow-lg shadow-primary-200 ring-2 ring-primary-100">
            <div className="absolute inset-0 bg-white/10 blur-sm" aria-hidden />
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]"
              aria-hidden
            />
            <div className="relative flex h-full w-full flex-col items-center justify-center text-white text-[10px] font-extrabold leading-tight tracking-tight uppercase">
              <span className="text-[11px]">IDP</span>
              <span className="text-[10px]">Technology</span>
            </div>
          </div>

          <div className="space-y-3 max-w-4xl">
            <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-gray-800">
              {t.title}
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              {t.paragraph1}
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              {t.paragraph2}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full border border-primary-600 text-primary-600 text-sm font-semibold hover:bg-primary-600 hover:text-white transition-colors"
            >
              {t.ctaPrimary}
            </a>
            <a
              href="#all-partners"
              className="px-5 py-2.5 rounded-full border border-primary-600 text-primary-600 text-sm font-semibold hover:bg-primary-600 hover:text-white transition-colors"
            >
              {t.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
