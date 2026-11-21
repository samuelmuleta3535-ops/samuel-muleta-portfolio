
"use client";

import { useState } from "react";

const certificates = [
  {
    title: "Programming Fundamentals",
    provider: "Udacity",
    date: "September 5, 2025",
    file: "/certificates/programming-fundamentals.pdf",
  },
  {
    title: "Android Developer Fundamentals",
    provider: "Udacity",
    date: "August 7, 2025",
    file: "/certificates/android-developer-fundamentals.pdf",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    provider: "Udacity",
    date: "February 7, 2026",
    file: "/certificates/artificial-intelligence-fundamentals.pdf",
  },
  {
    title: "2FA101 – Staying Safe with Two-Factor Authentication",
    provider: "e-SHE",
    date: "February 4, 2026",
    file: "/certificates/2fa101-staying-safe-with-two-factor-authentication.pdf",
  },
];

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<(typeof certificates)[number] | null>(null);

  return (
    <section
      id="certificates"
      className="scroll-mt-24 bg-gray-50 px-5 py-16 text-gray-900 transition-colors dark:bg-[#080d1a] dark:text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            My Certificates
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400">
            Certificates demonstrating my learning and technical skills.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.title}
              certificate={certificate}
              onView={() => setSelectedCertificate(certificate)}
            />
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={selectedCertificate.title}
        >
          <div className="flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl dark:bg-[#111827]">
            <div className="flex items-center justify-between gap-3 border-b border-gray-200 px-4 py-3 dark:border-white/10">
              <div className="min-w-0">
                <h3 className="truncate text-sm font-bold text-gray-900 dark:text-white">
                  {selectedCertificate.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {selectedCertificate.provider} · {selectedCertificate.date}
                </p>
              </div>

              <button
                onClick={() => setSelectedCertificate(null)}
                className="shrink-0 rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/10"
                aria-label="Close certificate"
              >
                ✕ Close
              </button>
            </div>

            <div className="min-h-0 flex-1 bg-gray-100 dark:bg-gray-900">
              <iframe
                key={selectedCertificate.file}
                src={`${selectedCertificate.file}#toolbar=0&navpanes=0`}
                title={selectedCertificate.title}
                className="h-full w-full border-0"
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
  onView,
}: {
  certificate: (typeof certificates)[number];
  onView: () => void;
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:border-blue-300 dark:border-white/10 dark:bg-[#0c1324] dark:hover:border-blue-500/50">
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-lg dark:bg-blue-500/15">
        🏆
      </div>

      <p className="mb-1 text-xs font-semibold text-blue-700 dark:text-blue-400">
        {certificate.provider}
      </p>

      <h4 className="mb-2 min-h-10 text-sm font-bold leading-5 text-gray-900 dark:text-white">
        {certificate.title}
      </h4>

      <p className="mb-4 text-xs text-gray-600 dark:text-gray-400">
        Issued: {certificate.date}
      </p>

      <button
        onClick={onView}
        className="rounded-md bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-[#0c1324]"
      >
        View Certificate ↗
      </button>
    </div>
  );
}
