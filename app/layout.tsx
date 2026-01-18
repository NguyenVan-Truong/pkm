import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "IDP Technology",
  description:
    "Công ty Cổ phần Giải pháp Công nghệ IDP - Chuyên triển khai ERP, HRM, CRM, E-commerce và các giải pháp tự động hóa doanh nghiệp. Đối tác Oracle, SAP, Microsoft tại Việt Nam.",
  keywords: [
    "IDP Technology",
    "ERP Việt Nam",
    "SAP S/4HANA",
    "Oracle ERP",
    "Microsoft Dynamics",
    "quản lý nhân sự HRM",
    "quản lý khách hàng CRM",
    "thương mại điện tử",
    "tự động hóa quy trình",
    "AI RPA",
    "Data Warehouse",
    "Business Intelligence",
    "ký số điện tử",
    "OCR AI",
    "tư vấn ERP",
    "triển khai hệ thống",
    "outsourcing IT",
    "hỗ trợ vận hành hệ thống",
  ],
  authors: [{ name: "IDP Technology Team" }],
  creator: "IDP Technology",
  publisher: "IDP Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("http://idps.vn"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "IDP Technology",
    description:
      "Công ty Cổ phần Giải pháp Công nghệ IDP - Chuyên triển khai ERP, HRM, CRM, E-commerce và các giải pháp tự động hóa doanh nghiệp.",
    url: "http://idps.vn",
    siteName: "IDP Technology",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IDP Technology - Giải pháp ERP, HRM, CRM và Tự động hóa Doanh nghiệp",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "IDP Technology - Giải pháp ERP, HRM, CRM và Tự động hóa Doanh nghiệp",
    description:
      "Chuyên triển khai ERP, HRM, CRM, E-commerce và các giải pháp tự động hóa doanh nghiệp.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CÔNG TY CỔ PHẦN GIẢI PHÁP CÔNG NGHỆ IDP",
    alternateName: "IDP Technology JSC",
    description:
      "Chuyên triển khai ERP, HRM, CRM, E-commerce và các giải pháp tự động hóa doanh nghiệp. Đối tác Oracle, SAP, Microsoft tại Việt Nam.",
    url: "http://idps.vn",
    logo: "http://idps.vn/logo.png",
    taxID: "0110621137",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+84-43-766-0007",
      contactType: "customer service",
      areaServed: "VN",
      availableLanguage: "Vietnamese",
      email: "contact@idps.com.vn",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nhà số 54, LK1, Phố Dọc Bún 1, Phường La Khê",
      addressLocality: "Quận Hà Đông",
      addressRegion: "Hà Nội",
      addressCountry: "VN",
    },
    sameAs: ["http://idps.vn", "http://www.idps.com.vn"],
    offers: [
      {
        "@type": "Offer",
        description:
          "Dịch vụ triển khai hệ thống phần mềm quản trị doanh nghiệp tổng thể ERP",
        category: "Software Services",
      },
      {
        "@type": "Offer",
        description:
          "Xây dựng, triển khai các hệ thống website bán hàng, thương mại điện tử",
        category: "E-commerce Solutions",
      },
      {
        "@type": "Offer",
        description:
          "Ứng dụng AI + RPA trong tự động hóa quy trình doanh nghiệp",
        category: "AI Automation",
      },
    ],
    knowsAbout: [
      "SAP S/4HANA",
      "Oracle ERP",
      "Microsoft Dynamics",
      "HRM Systems",
      "CRM Systems",
      "Data Warehouse",
      "Business Intelligence",
      "E-commerce",
      "AI RPA",
      "Digital Signature",
    ],
  };

  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          content="q3BJ4ewBAefxVstjiRY0wnZ8S1Nn_L0gdYBf_6wN3OM"
          name="google-site-verification"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
