
"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-slate-200 px-4 py-16 transition-colors duration-300 dark:border-white/10 sm:px-6 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-blue-600 dark:text-blue-400 sm:text-sm sm:tracking-widest">
            {t.about.subtitle}
          </p>

          <h2
            id="about-heading"
            className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl"
          >
            {t.about.title}{" "}
            <span className="text-blue-600 dark:text-blue-400">
              {t.about.titleAccent}
            </span>
          </h2>
        </div>

        {/* Who I Am */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl">
            {t.about.whoIAm}
          </h3>

          <p className="text-sm leading-7 text-slate-600 dark:text-gray-400 sm:text-base sm:leading-8">
            {t.about.description}
          </p>
        </div>
      </div>
    </section>
  );
}
