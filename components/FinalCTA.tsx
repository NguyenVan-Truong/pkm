"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import {
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function FinalCTA() {
  const { language } = useLanguage();
  const [startIndex, setStartIndex] = useState(0);

  const newsCopy = {
    vi: {
      title: "Tin tức",
      viewAll: "Xem tất cả tin tức",
      readMore: "Đọc thêm",
    },
    en: {
      title: "News",
      viewAll: "View all news",
      readMore: "Read more",
    },
  };

  const newsItemsByLang = {
    vi: [
      {
        title:
          "Đội hỗ trợ Nhật Bản thuộc JCC đẩy nhanh tiến độ dự án logistics",
        date: "24.04.2024",
        category: "Hoạt động dự án",
        summary:
          "Chương trình kiểm thử tại kho miền Bắc hoàn tất, sẵn sàng chuyển giao cho khách hàng giai đoạn 2.",
        image:
          "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Lễ bàn giao thành công dự án Logistics Nam Thuận",
        date: "15.04.2024",
        category: "Dự án mới",
        summary:
          "Giải pháp quản lý kho và vận tải được vận hành chính thức, tối ưu 18% chi phí vận hành.",
        image:
          "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Lễ thông cầu nối chuỗi cung ứng Tây Nguyên",
        date: "28.03.2024",
        category: "Sự kiện nội bộ",
        summary:
          "Đội triển khai phối hợp địa phương hoàn thành hạng mục hạ tầng, đảm bảo lưu thông hàng hóa an toàn.",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Khai trương trung tâm dữ liệu mới tại Hà Nội",
        date: "12.03.2024",
        category: "Công nghệ",
        summary:
          "Hạ tầng đạt chuẩn Tier III với khả năng mở rộng gấp đôi, phục vụ các dự án ERP và AI.",
        image:
          "https://images.unsplash.com/photo-1587202372775-98927f6fbf81?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Hợp tác chiến lược cùng đối tác Nhật Bản về e-sign",
        date: "01.03.2024",
        category: "Hợp tác",
        summary:
          "Hai bên cùng nghiên cứu giải pháp ký số đa nền tảng, đảm bảo chuẩn bảo mật quốc tế.",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "IDP đạt chứng nhận an toàn thông tin ISO 27001:2024",
        date: "22.02.2024",
        category: "Chứng nhận",
        summary:
          "Hệ thống quản lý bảo mật được đánh giá độc lập, nâng cao niềm tin của khách hàng doanh nghiệp.",
        image:
          "https://images.unsplash.com/photo-1510511744793-5cc1c9af1c84?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Ra mắt trợ lý AI Phường Xá hỗ trợ điều hành",
        date: "10.02.2024",
        category: "Sản phẩm",
        summary:
          "Ứng dụng AI giúp xử lý yêu cầu hành chính nhanh hơn 35%, tích hợp đa kênh giao tiếp.",
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "ERP 2.0 được triển khai đồng loạt cho chuỗi 12 nhà máy",
        date: "28.01.2024",
        category: "Chuyển đổi số",
        summary:
          "Bản nâng cấp tập trung vào tối ưu tồn kho, hỗ trợ dashboard thời gian thực cho lãnh đạo.",
        image:
          "https://images.unsplash.com/photo-1484981138541-3d074aa97716?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Chương trình tình nguyện kết nối cộng đồng miền Trung",
        date: "12.01.2024",
        category: "Cộng đồng",
        summary:
          "Hơn 120 nhân sự tham gia, trao tặng thiết bị học tập và tập huấn kỹ năng số cho trường địa phương.",
        image:
          "https://images.unsplash.com/photo-1521737604893-ff3b1d7e6cfc?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Hội thảo chuyển đổi số ngành bán lẻ 2024",
        date: "05.01.2024",
        category: "Hội thảo",
        summary:
          "Chia sẻ kinh nghiệm triển khai omnichannel, quản trị tồn kho và trải nghiệm khách hàng liền mạch.",
        image:
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    en: [
      {
        title: "JCC Japan support team accelerates logistics project",
        date: "24.04.2024",
        category: "Project update",
        summary:
          "Testing at the northern warehouse is complete and ready for phase-two handover to the client.",
        image:
          "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Successful handover of Nam Thuan Logistics project",
        date: "15.04.2024",
        category: "New project",
        summary:
          "Warehouse and transport solution goes live, cutting operating costs by 18%.",
        image:
          "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Bridge opening connects Central Highlands supply chain",
        date: "28.03.2024",
        category: "Internal event",
        summary:
          "Deployment team and local partners finish infrastructure works, ensuring safe goods flow.",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "New data center opens in Hanoi",
        date: "12.03.2024",
        category: "Technology",
        summary:
          "Tier III-grade facility doubles capacity, serving ERP and AI projects.",
        image:
          "https://images.unsplash.com/photo-1587202372775-98927f6fbf81?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Strategic e-sign partnership with Japanese ally",
        date: "01.03.2024",
        category: "Partnership",
        summary:
          "Joint research on multi-platform digital signing aligned with global security standards.",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "IDP earns ISO 27001:2024 security certification",
        date: "22.02.2024",
        category: "Certification",
        summary:
          "Independent audit validates our security management, boosting enterprise trust.",
        image:
          "https://images.unsplash.com/photo-1510511744793-5cc1c9af1c84?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Launch of AI Assistant Phuong Xa for operations",
        date: "10.02.2024",
        category: "Product",
        summary:
          "AI app handles administrative requests 35% faster, integrating multi-channel comms.",
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "ERP 2.0 rolled out across 12 factories",
        date: "28.01.2024",
        category: "Digital transformation",
        summary:
          "Upgrade focuses on inventory optimization and real-time leadership dashboards.",
        image:
          "https://images.unsplash.com/photo-1484981138541-3d074aa97716?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Community program connects Central Vietnam",
        date: "12.01.2024",
        category: "Community",
        summary:
          "120+ staff donate learning devices and deliver digital skills workshops locally.",
        image:
          "https://images.unsplash.com/photo-1521737604893-ff3b1d7e6cfc?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Retail digital transformation seminar 2024",
        date: "05.01.2024",
        category: "Seminar",
        summary:
          "Sharing omnichannel rollout lessons, inventory governance, and seamless CX.",
        image:
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  };

  const newsItems = newsItemsByLang[language];
  const newsText = newsCopy[language];

  const visibleCount = 3;
  const totalNews = newsItems.length;
  const totalPages = Math.ceil(totalNews / visibleCount);

  const displayedNews = useMemo(
    () =>
      Array.from(
        { length: visibleCount },
        (_, idx) => newsItems[(startIndex + idx) % totalNews],
      ),
    [newsItems, startIndex, totalNews],
  );

  const currentPage = Math.floor(startIndex / visibleCount) + 1;
  const formattedCurrent = String(currentPage).padStart(2, "0");
  const formattedTotal = String(totalPages).padStart(2, "0");
  const progressPercent = (currentPage / totalPages) * 100;

  const goPrev = () =>
    setStartIndex((prev) => (prev - visibleCount + totalNews) % totalNews);
  const goNext = () =>
    setStartIndex((prev) => (prev + visibleCount) % totalNews);

  const contactMethods = [
    {
      icon: Phone,
      title: "Gọi điện thoại",
      description: "Liên hệ trực tiếp với chuyên gia tư vấn",
      action: "Gọi ngay",
      href: "tel:+84437660007",
      primary: true,
    },
    {
      icon: MessageCircle,
      title: "Chat trực tuyến",
      description: "Nhận hỗ trợ tức thì qua chat",
      action: "Bắt đầu chat",
      href: "#chat",
      primary: false,
    },
    {
      icon: Mail,
      title: "Gửi email",
      description: "Gửi yêu cầu chi tiết qua email",
      action: "Gửi email",
      href: "mailto:contact@idps.com.vn",
      primary: false,
    },
    {
      icon: Calendar,
      title: "Đặt lịch hẹn",
      description: "Đặt lịch tư vấn miễn phí",
      action: "Đặt lịch",
      href: "#schedule",
      primary: false,
    },
  ];

  const benefits = [
    "Tư vấn miễn phí và không ràng buộc",
    "Demo trực tiếp giải pháp phù hợp",
    "Báo giá chi tiết trong 24h",
    "Hỗ trợ triển khai và đào tạo",
    "Bảo hành và hỗ trợ lâu dài",
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-br text-white"
    >
      <div className="container-max space-y-16">
        <div className="bg-white text-gray-900 rounded-3xl shadow-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-gray-900">
              {newsText.title}
            </h2>
            <a
              href="#news"
              className="inline-flex items-center justify-center rounded-full border border-red-500 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors"
            >
              {newsText.viewAll}
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayedNews.map((item, idx) => (
              <article
                key={`${item.title}-${idx}`}
                className="group border border-gray-100 rounded-2xl overflow-hidden shadow-sm bg-white hover:shadow-lg transition-all duration-200"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] font-semibold">
                    <span className="text-red-600 uppercase tracking-[0.08em]">
                      {item.category}
                    </span>
                    <span className="text-gray-400">{item.date}</span>
                  </div>
                  <h3
                    className="text-lg font-semibold text-gray-900 leading-tight group-hover:text-primary-700 transition-colors"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm text-gray-600"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {item.summary}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary-700">
                    <span>{newsText.readMore}</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center text-sm font-semibold">
              <span className="text-primary-700">{formattedCurrent}</span>
              <span className="text-gray-400"> / {formattedTotal}</span>
            </div>
            <div className="relative hidden sm:block flex-1 h-px bg-gray-200">
              <span
                className="absolute left-0 top-0 h-px bg-red-500 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="ml-auto flex items-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:border-primary-500 hover:text-primary-700 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:border-primary-500 hover:text-primary-700 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
