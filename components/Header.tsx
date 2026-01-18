"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/translations";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { language, toggleLanguage } = useLanguage();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const navigation = useMemo(
    () => translations[language].header.navigation,
    [language],
  );
  const searchLabel = translations[language].header.searchLabel;
  const searchPlaceholder = translations[language].header.searchPlaceholder;
  const languageLabel = translations[language].header.languageLabel;
  const clearSearchLabel =
    language === "vi" ? "Xóa nội dung tìm kiếm" : "Clear search";
  const closeSearchLabel = language === "vi" ? "Đóng tìm kiếm" : "Close search";

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsPinned(currentY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const textColor = isPinned ? "text-gray-900" : "text-white";
  const mutedText = isPinned ? "text-gray-600" : "text-white/70";
  const borderColor = isPinned ? "border-gray-200" : "border-white/30";
  const hoverBorder = isPinned
    ? "hover:border-gray-300"
    : "hover:border-white/50";
  const softBg = isPinned ? "bg-white/70" : "bg-white/5";
  const hoverBg = isPinned ? "hover:bg-white" : "hover:bg-white/10";
  const iconColor = isPinned ? "text-gray-800" : "text-white";

  const navLinkBase = `group inline-flex items-center gap-1 text-sm font-semibold tracking-wide transition ${textColor} ${isPinned ? "hover:text-gray-600" : "hover:text-white/70"}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-transform duration-300 translate-y-0">
      <div
        className={`backdrop-blur-sm transition-colors duration-300 ${isPinned ? "bg-white/90 shadow-lg" : "bg-gradient-to-b from-black/70 via-black/30 to-transparent"}`}
      >
        <div className="container-max">
          <div className="flex h-20 items-center justify-between px-4 lg:px-0">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563eb] font-black tracking-tight shadow-md shadow-blue-500/30">
                <span className="text-lg leading-none text-white">IDP</span>
              </div>
              <div className="leading-tight text-left">
                <div
                  className={`text-lg font-extrabold tracking-wide ${textColor}`}
                >
                  IDP Technology
                </div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className={navLinkBase}>
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform group-hover:translate-y-0.5 ${iconColor}`}
                      strokeWidth={2.5}
                    />
                  )}
                </a>
              ))}

              <button
                type="button"
                aria-label={searchLabel}
                onClick={() => {
                  setIsSearchOpen((prev) => !prev);
                  setIsMenuOpen(false);
                }}
                className={`flex h-10 w-10 items-center justify-center rounded-full border ${borderColor} ${softBg} transition ${hoverBorder} ${hoverBg}`}
                aria-expanded={isSearchOpen}
              >
                <Search className={`h-5 w-5 ${iconColor}`} />
              </button>

              <button
                type="button"
                onClick={toggleLanguage}
                className={`flex items-center gap-2 rounded-full border ${borderColor} ${softBg} px-4 py-2 text-sm font-semibold transition ${hoverBorder} ${hoverBg} ${textColor}`}
              >
                <span className={language === "en" ? textColor : mutedText}>
                  English
                </span>
                <span className={mutedText}>|</span>
                <span className={language === "vi" ? textColor : mutedText}>
                  Tiếng Việt
                </span>
              </button>
            </nav>

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={`inline-flex h-12 w-12 items-center justify-center rounded-full border ${borderColor} ${softBg} ${textColor} transition ${hoverBorder} ${hoverBg} lg:hidden`}
              aria-label="Mở menu"
            >
              {isMenuOpen ? (
                <X className={`h-6 w-6 ${iconColor}`} />
              ) : (
                <Menu className={`h-6 w-6 ${iconColor}`} />
              )}
            </button>
          </div>
        </div>

        {isSearchOpen && (
          <div
            className={`border-t ${isPinned ? "border-gray-200 bg-white/95" : "border-white/10 bg-black/70"} backdrop-blur-md`}
          >
            <div className="container-max px-4 py-3">
              <div
                className={`flex items-center gap-3 rounded-xl border px-4 py-3 shadow-sm ${isPinned ? "border-gray-200 bg-white text-gray-900" : "border-white/20 bg-white/10 text-white"}`}
              >
                <Search
                  className={`h-5 w-5 ${isPinned ? "text-gray-500" : "text-white/80"}`}
                  strokeWidth={2.5}
                />
                <input
                  ref={searchInputRef}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={searchPlaceholder}
                  className={`flex-1 bg-transparent text-sm outline-none ${isPinned ? "placeholder:text-gray-400 text-gray-900" : "placeholder:text-white/60 text-white"}`}
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className={`rounded-full p-2 transition ${isPinned ? "text-gray-500 hover:bg-gray-100" : "text-white/80 hover:bg-white/10"}`}
                    aria-label={clearSearchLabel}
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className={`rounded-full p-2 transition ${isPinned ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
                  aria-label={closeSearchLabel}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {isMenuOpen && (
          <div
            className={`lg:hidden border-t ${isPinned ? "border-gray-200 bg-white/95 text-gray-900" : "border-white/10 bg-black/70 text-white"} backdrop-blur-md`}
          >
            <div className="container-max px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center justify-between rounded-lg border px-4 py-3 text-base font-semibold transition ${isPinned ? "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 text-gray-900" : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10 text-white"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className={`h-4 w-4 ${iconColor}`} />
                  )}
                </a>
              ))}

              <div className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white">
                <span>{languageLabel}</span>
                <button
                  type="button"
                  onClick={toggleLanguage}
                  className={`flex items-center gap-2 rounded-full border px-3 py-1 transition ${isPinned ? "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 text-gray-900" : "border-white/30 bg-white/5 hover:border-white/50 hover:bg-white/10 text-white"}`}
                >
                  <span className={language === "en" ? textColor : mutedText}>
                    English
                  </span>
                  <span className={mutedText}>|</span>
                  <span className={language === "vi" ? textColor : mutedText}>
                    Tiếng Việt
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
