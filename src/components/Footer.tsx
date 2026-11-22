
"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-10 transition-colors duration-300 dark:border-white/10 dark:bg-[#060a14] sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-3">
          {/* Website Branding */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold text-slate-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
            >
              Samuel<span className="text-blue-600 dark:text-blue-400">.</span>
            </a>

            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-gray-400">
              {t.role}
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-gray-400">
              {t.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-slate-900 dark:text-white">
              {t.quickLinks}
            </h3>

            <ul className="space-y-3 text-sm text-slate-600 dark:text-gray-400">
              <li>
                <a
                  href="#home"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {t.home}
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {t.about}
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {t.projects}
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {t.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-slate-900 dark:text-white">
              {t.contactInformation}
            </h3>

            <ul className="space-y-3 text-sm text-slate-600 dark:text-gray-400">
              <li>
                <a
                  href="mailto:samuelmuleta3535@gmail.com"
                  className="break-all transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {t.email}: samuelmuleta3535@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+251970390618"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {t.phone}: 0970390618
                </a>
              </li>

              <li>
                <a
                  href="https://t.me/Samuel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {t.telegram}: @Samuel
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-center transition-colors duration-300 dark:border-white/10 sm:flex-row">
          <p className="text-xs text-slate-500 dark:text-gray-500 sm:text-sm">
            © 2026 Samuel Muleta. {t.copyright}
          </p>

          <a
            href="#home"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          >
            {t.backToTop} ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
