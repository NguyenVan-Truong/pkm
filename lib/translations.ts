export type Lang = "vi" | "en";

export type Translations = {
  header: {
    navigation: Array<{ name: string; href: string; hasDropdown?: boolean }>;
    searchLabel: string;
    searchPlaceholder: string;
    languageLabel: string;
  };
  about: {
    badge: string;
    title: string;
    paragraphs: string[];
    cta: string;
    stats: Array<{ value: string; label: string }>;
  };
  hero: {
    badge: string;
    slides: Array<{
      id: string;
      title: string;
      subtitle: string;
      description: string;
      ctaPrimary: string;
      ctaSecondary: string;
      image: string;
      thumbLabel: string;
    }>;
  };
};

export const translations: Record<Lang, Translations> = {
  vi: {
    header: {
      navigation: [
        { name: "Dự án", href: "#projects", hasDropdown: true },
        { name: "Về chúng tôi", href: "#about" },
        { name: "Dịch vụ", href: "#services", hasDropdown: true },
        { name: "Chuyên môn", href: "#expertise" },
        { name: "Tin tức", href: "#news" },
        { name: "Liên hệ", href: "#contact" },
        { name: "Tuyển dụng", href: "#careers" },
      ],
      searchLabel: "Tìm kiếm",
      searchPlaceholder: "Tìm kiếm bài viết, dự án, tuyển dụng...",
      languageLabel: "Ngôn ngữ",
    },
    about: {
      badge: "IDP Technology",
      title: "Qua những con số",
      paragraphs: [
        "Với bề dày sáng tạo và kinh nghiệm thành công, Kajima Corporation tại Nhật Bản cùng IDP Technology mang đến đội ngũ chuyên gia dày dạn trong mọi lĩnh vực.",
        "Với lịch sử dài đổi mới và sáng tạo cùng kinh nghiệm phong phú từ những thành công trước đây, Kajima Corporation tại Nhật Bản và IDP Technology có thể cung cấp đội ngũ chuyên gia giàu kinh nghiệm ở mọi lĩnh vực.",
      ],
      cta: "Tìm hiểu hành trình phát triển",
      stats: [
        { value: "180+", label: "Năm tại Nhật Bản" },
        { value: "50+", label: "Dự án đã hoàn thành" },
        { value: "30", label: "Năm tại Việt Nam" },
        { value: "200+", label: "Số lượng nhân viên" },
        { value: "$46M", label: "Doanh Thu" },
      ],
    },
    hero: {
      badge: "Dự án tiêu biểu",
      slides: [
        {
          id: "idp-technology-1",
          title: "IDP Technology",
          subtitle: "Mang công nghệ Nhật Bản đến Việt Nam.",
          description:
            "Mang lại chất lượng đáng tin cậy thông qua di sản của Kajima.",
          ctaPrimary: "Tất cả dự án",
          ctaSecondary: "Khám phá dịch vụ",
          image: "/assets/85034AEON-MALL-Ha-Dong20191125-0471-scaled-1.jpg",
          thumbLabel: "AEON Mall Hà Đông",
        },
        {
          id: "idp-technology-2",
          title: "IDP Technology",
          subtitle: "Giải pháp tiên phong cho vận hành hiện đại.",
          description:
            "Tối ưu hạ tầng và trải nghiệm với chuẩn Nhật Bản tại Việt Nam.",
          ctaPrimary: "Tất cả dự án",
          ctaSecondary: "Khám phá dịch vụ",
          image: "/assets/19507DSC_4342-2.jpg",
          thumbLabel: "Trung tâm thương mại",
        },
        {
          id: "idp-technology-3",
          title: "IDP Technology",
          subtitle: "Kiến tạo không gian bền vững.",
          description:
            "Thiết kế, thi công, vận hành với công nghệ và dữ liệu tập trung.",
          ctaPrimary: "Tất cả dự án",
          ctaSecondary: "Khám phá dịch vụ",
          image: "/assets/42896LEE09896-copy-2.jpg",
          thumbLabel: "Văn phòng hiện đại",
        },
        {
          id: "idp-technology-4",
          title: "IDP Technology",
          subtitle: "Chuỗi cung ứng thông minh.",
          description:
            "Hậu cần tự động hóa, an toàn, và hiệu quả vận hành 24/7.",
          ctaPrimary: "Tất cả dự án",
          ctaSecondary: "Khám phá dịch vụ",
          image: "/assets/Overview-3-1.jpg",
          thumbLabel: "Khu công nghiệp",
        },
        {
          id: "idp-technology-5",
          title: "IDP Technology",
          subtitle: "Không gian bán lẻ trải nghiệm.",
          description:
            "Thương mại và dịch vụ kết hợp cảnh quan xanh và tiện ích.",
          ctaPrimary: "Tất cả dự án",
          ctaSecondary: "Khám phá dịch vụ",
          image: "/assets/48548A-002-1-1.jpg",
          thumbLabel: "Khu phức hợp",
        },
        {
          id: "idp-technology-6",
          title: "IDP Technology",
          subtitle: "Hạ tầng logistics kết nối.",
          description:
            "Mạng lưới kho bãi và trung tâm phân phối vận hành liền mạch.",
          ctaPrimary: "Tất cả dự án",
          ctaSecondary: "Khám phá dịch vụ",
          image: "/assets/ATA-7-scaled.jpg",
          thumbLabel: "Trung tâm logistics",
        },
        {
          id: "idp-technology-7",
          title: "IDP Technology",
          subtitle: "Công nghệ cho sản xuất.",
          description:
            "Dây chuyền tối ưu hiệu suất, đảm bảo chất lượng và an toàn.",
          ctaPrimary: "Tất cả dự án",
          ctaSecondary: "Khám phá dịch vụ",
          image: "/assets/7152-Nippon.jpg",
          thumbLabel: "Nhà máy Nippon",
        },
        {
          id: "idp-technology-8",
          title: "IDP Technology",
          subtitle: "Khu phức hợp vận hành 24/7.",
          description:
            "Giải pháp tích hợp từ thiết kế, thi công đến quản lý dữ liệu.",
          ctaPrimary: "Tất cả dự án",
          ctaSecondary: "Khám phá dịch vụ",
          image: "/assets/35387KEN01376-copy-Copy.jpg",
          thumbLabel: "Tổ hợp hiện đại",
        },
      ],
    },
  },
  en: {
    header: {
      navigation: [
        { name: "Projects", href: "#projects", hasDropdown: true },
        { name: "About Us", href: "#about" },
        { name: "Services", href: "#services", hasDropdown: true },
        { name: "Expertise", href: "#expertise" },
        { name: "News", href: "#news" },
        { name: "Contact", href: "#contact" },
        { name: "Careers", href: "#careers" },
      ],
      searchLabel: "Search",
      searchPlaceholder: "Search articles, projects, careers...",
      languageLabel: "Language",
    },
    about: {
      badge: "IDP Technology",
      title: "By the numbers",
      paragraphs: [
        "With a legacy of creativity and successful delivery, Kajima Corporation in Japan and IDP Technology bring seasoned experts across every discipline.",
        "With our long history of innovative knowhow and creativity together with our rich experience from past successes, Kajima Corporation in Japan and IDP Technology are able to provide experienced specialists in every field.",
      ],
      cta: "Discover our journey",
      stats: [
        { value: "180+", label: "Years in Japan" },
        { value: "50+", label: "Completed projects" },
        { value: "30", label: "Years in Vietnam" },
        { value: "200+", label: "Employees" },
        { value: "$46M", label: "Revenue" },
      ],
    },
    hero: {
      badge: "Featured Projects",
      slides: [
        {
          id: "idp-technology-1",
          title: "IDP Technology",
          subtitle: "Bringing Japanese technology to Vietnam.",
          description: "Delivering trusted quality backed by Kajima heritage.",
          ctaPrimary: "All projects",
          ctaSecondary: "Explore services",
          image: "/assets/85034AEON-MALL-Ha-Dong20191125-0471-scaled-1.jpg",
          thumbLabel: "AEON Mall Ha Dong",
        },
        {
          id: "idp-technology-2",
          title: "IDP Technology",
          subtitle: "Pioneering solutions for modern operations.",
          description:
            "Optimizing infrastructure and experience with Japanese standards in Vietnam.",
          ctaPrimary: "All projects",
          ctaSecondary: "Explore services",
          image: "/assets/19507DSC_4342-2.jpg",
          thumbLabel: "Retail center",
        },
        {
          id: "idp-technology-3",
          title: "IDP Technology",
          subtitle: "Building sustainable spaces.",
          description:
            "Design, build, and operate with centralized technology and data.",
          ctaPrimary: "All projects",
          ctaSecondary: "Explore services",
          image: "/assets/42896LEE09896-copy-2.jpg",
          thumbLabel: "Modern office",
        },
        {
          id: "idp-technology-4",
          title: "IDP Technology",
          subtitle: "Smart supply chain.",
          description:
            "Automated logistics, safety, and 24/7 operational efficiency.",
          ctaPrimary: "All projects",
          ctaSecondary: "Explore services",
          image: "/assets/Overview-3-1.jpg",
          thumbLabel: "Industrial zone",
        },
        {
          id: "idp-technology-5",
          title: "IDP Technology",
          subtitle: "Experiential retail spaces.",
          description:
            "Commerce and services blended with green landscape and amenities.",
          ctaPrimary: "All projects",
          ctaSecondary: "Explore services",
          image: "/assets/48548A-002-1-1.jpg",
          thumbLabel: "Mixed-use complex",
        },
        {
          id: "idp-technology-6",
          title: "IDP Technology",
          subtitle: "Connected logistics infrastructure.",
          description: "Seamless warehouse and distribution center network.",
          ctaPrimary: "All projects",
          ctaSecondary: "Explore services",
          image: "/assets/ATA-7-scaled.jpg",
          thumbLabel: "Logistics hub",
        },
        {
          id: "idp-technology-7",
          title: "IDP Technology",
          subtitle: "Technology for manufacturing.",
          description: "Optimized lines for performance, quality, and safety.",
          ctaPrimary: "All projects",
          ctaSecondary: "Explore services",
          image: "/assets/7152-Nippon.jpg",
          thumbLabel: "Nippon factory",
        },
        {
          id: "idp-technology-8",
          title: "IDP Technology",
          subtitle: "24/7 integrated campus.",
          description:
            "End-to-end solutions from design and build to data-driven operations.",
          ctaPrimary: "All projects",
          ctaSecondary: "Explore services",
          image: "/assets/35387KEN01376-copy-Copy.jpg",
          thumbLabel: "Modern complex",
        },
      ],
    },
  },
};
