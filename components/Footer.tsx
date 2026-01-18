"use client";
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { language } = useLanguage();

  const copy = {
    vi: {
      brand: "IDP Technology",
      description:
        "Công ty Cổ phần Giải pháp Công nghệ IDP - Chuyên triển khai ERP, HRM, CRM, E-commerce và các giải pháp tự động hóa doanh nghiệp tại Việt Nam.",
      address:
        "Nhà số 54, LK1, Phố Dọc Bún 1, Phường La Khê, Quận Hà Đông, Hà Nội",
      quickLinksTitle: "Liên kết nhanh",
      quickLinks: [
        { name: "Giới thiệu", href: "#about" },
        { name: "Chính sách bảo mật", href: "#privacy" },
        { name: "Điều khoản sử dụng", href: "#terms" },
        { name: "Blog", href: "#blog" },
        { name: "Tuyển dụng", href: "#careers" },
      ],
      connectTitle: "Kết nối với chúng tôi",
      phoneLabel: "043 766 0007",
      emailLabel: "contact@idps.com.vn",
      rights:
        "Công ty Cổ phần Giải pháp Công nghệ IDP. Tất cả quyền được bảo lưu.",
      privacy: "Chính sách bảo mật",
      terms: "Điều khoản sử dụng",
    },
    en: {
      brand: "IDP Technology",
      description:
        "IDP Technology JSC — implementing ERP, HRM, CRM, e-commerce, and automation solutions in Vietnam.",
      address:
        "No. 54, LK1, Pho Doc Bun 1, La Khe Ward, Ha Dong District, Hanoi",
      quickLinksTitle: "Quick links",
      quickLinks: [
        { name: "About", href: "#about" },
        { name: "Privacy policy", href: "#privacy" },
        { name: "Terms of use", href: "#terms" },
        { name: "Blog", href: "#blog" },
        { name: "Careers", href: "#careers" },
      ],
      connectTitle: "Connect with us",
      phoneLabel: "043 766 0007",
      emailLabel: "contact@idps.com.vn",
      rights: "IDP Technology JSC. All rights reserved.",
      privacy: "Privacy policy",
      terms: "Terms of use",
    },
  };

  const t = copy[language];
  const quickLinks = t.quickLinks;

  const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IDP</span>
              </div>
              <span className="ml-2 text-xl font-bold">{t.brand}</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">{t.description}</p>

            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-primary-400" />
                <span>{t.address}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-primary-400" />
                <span>{t.phoneLabel}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-primary-400" />
                <span>{t.emailLabel}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t.quickLinksTitle}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t.connectTitle}</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-gray-800 hover:bg-primary-600 p-3 rounded-lg transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {t.rights}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#privacy"
                className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200"
              >
                {t.privacy}
              </a>
              <a
                href="#terms"
                className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200"
              >
                {t.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
