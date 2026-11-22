
"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";

export default function Experience() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-blue-400 sm:text-sm sm:tracking-widest">
            {t.experience.subtitle}
          </p>

          <h2
            id="experience-heading"
            className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
          >
            {t.experience.title}{" "}
            <span className="text-blue-600 dark:text-blue-400">
              {t.experience.titleAccent}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base sm:leading-8">
            {t.experience.description}
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Web Development */}
          <article className="rounded-xl border border-gray-200 bg-gray-100 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400 dark:border-white/10 dark:bg-[#101b32] dark:hover:border-blue-400/50 sm:p-7">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="m8 8-4 4 4 4" />
                <path d="m16 8 4 4-4 4" />
                <path d="m14 4-4 16" />
              </svg>
            </div>

            <h3 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
              {t.experience.webTitle}
            </h3>

            <p className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-400">
              {t.experience.webSubtitle}
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
              {t.experience.webDescription}
            </p>
          </article>

          {/* OSTA Internship */}
          <article className="rounded-xl border border-gray-200 bg-gray-100 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400 dark:border-white/10 dark:bg-[#101b32] dark:hover:border-blue-400/50 sm:p-7">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
                <path d="m13 14 2 2 4-4" />
              </svg>
            </div>

            <h3 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
              {t.experience.ostaTitle}
            </h3>

            <p className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-400">
              {t.experience.ostaSubtitle}
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
              {t.experience.ostaDescription}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
