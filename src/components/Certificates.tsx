
"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";

type Certificate = {
  title: string;
  provider?: string;
  date?: string;
  file: string;
};

const certificates: Certificate[] = [
  {
    title: "Programming Fundamentals",
    provider: "Udacity",
    date: "September 5, 2025",
    file: "/certificates/programming-fundamentals.png",
  },
  {
    title: "Android Developer Fundamentals",
    provider: "Udacity",
    date: "August 7, 2025",
    file: "/certificates/android-developer-fundamentals.png",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    provider: "Udacity",
    date: "February 7, 2026",
    file: "/certificates/ai-fundamentals.png",
  },
  {
    title: "2FA101 – Staying Safe with Two-Factor Authentication",
    provider: "e-SHE",
    date: "February 4, 2026",
    file: "/certificates/two-factor-authentication.png",
  },
  {
    title: "Video Conferencing",
    file: "/certificates/Video-Conferencing.png",
  },
];

export default function Certificates() {
  const { language } = useLanguage();
  const t = translations[language].certificates;

  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  return (
    <section
      id="certificates"
      className="scroll-mt-24 bg-gray-50 px-5 py-16 text-gray-900 transition-colors dark:bg-[#080d1a] dark:text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            {t.title}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400">
            {t.description}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.file}
              certificate={certificate}
              issuedLabel={t.issued}
              viewButton={t.viewButton}
              onView={() => setSelectedCertificate(certificate)}
            />
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={selectedCertificate.title}
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative flex max-h-[95vh] w-full max-w-6xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl dark:bg-[#111827]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-gray-200 px-4 py-3 dark:border-white/10">
              <div className="min-w-0">
                <h3 className="truncate text-sm font-bold text-gray-900 dark:text-white">
                  {selectedCertificate.title}
                </h3>

                {selectedCertificate.provider && (
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {selectedCertificate.provider}
                    {selectedCertificate.date &&
                      ` · ${selectedCertificate.date}`}
                  </p>
                )}
              </div>

              <button
                onClick={() => setSelectedCertificate(null)}
                className="shrink-0 rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/10"
                aria-label={t.closeAria}
              >
                ✕ {t.closeButton}
              </button>
            </div>

            <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-gray-100 p-2 dark:bg-gray-900 sm:p-4">
              <Image
                src={selectedCertificate.file}
                alt={selectedCertificate.title}
                width={1600}
                height={1200}
                className="h-auto max-h-[80vh] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function CertificateCard({
  certificate,
  issuedLabel,
  viewButton,
  onView,
}: {
  certificate: Certificate;
  issuedLabel: string;
  viewButton: string;
  onView: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-white/10 dark:bg-[#0c1324] dark:hover:border-blue-500/50">
      <button
        type="button"
        onClick={onView}
        className="group block w-full text-left"
        aria-label={`${viewButton}: ${certificate.title}`}
      >
        <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gray-100 p-3 dark:bg-gray-900">
          <Image
            src={certificate.file}
            alt={certificate.title}
            width={600}
            height={420}
            className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/20">
            <span className="rounded-full bg-black/70 px-4 py-2 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
              {viewButton} ↗
            </span>
          </div>
        </div>

        <div className="p-4">
          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-lg dark:bg-blue-500/15">
            🏆
          </div>

          {certificate.provider && (
            <p className="mb-1 text-xs font-semibold text-blue-700 dark:text-blue-400">
              {certificate.provider}
            </p>
          )}

          <h4 className="mb-2 min-h-10 text-sm font-bold leading-5 text-gray-900 dark:text-white">
            {certificate.title}
          </h4>

          {certificate.date && (
            <p className="mb-4 text-xs text-gray-600 dark:text-gray-400">
              {issuedLabel} {certificate.date}
            </p>
          )}

          <span className="inline-flex rounded-md bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition group-hover:bg-blue-700">
            {viewButton} ↗
          </span>
        </div>
      </button>
    </div>
  );
}
