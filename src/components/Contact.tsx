
"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type SocialIconName = "github" | "linkedin" | "email" | "telegram";

function SocialIcon({ name }: { name: SocialIconName }) {
  const common = {
    width: 23,
    height: 23,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: "social-icon",
    "aria-hidden": true as const,
  };

  switch (name) {
    case "github":
      return (
        <svg {...common}>
          <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.28-2.61 5.22-5.1 5.5.4.35.75 1.02.75 2.06V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      );

    case "linkedin":
      return (
        <svg {...common}>
          <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18H5.67V9.42h2.67ZM7 8.25a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1ZM18.33 18h-2.66v-4.17c0-.99-.02-2.26-1.38-2.26-1.38 0-1.59 1.08-1.59 2.19V18h-2.66V9.42h2.55v1.17h.04a2.8 2.8 0 0 1 2.51-1.38c2.69 0 3.19 1.77 3.19 4.07Z" />
        </svg>
      );

    case "email":
      return (
        <svg {...common}>
          <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5Z" />
        </svg>
      );

    case "telegram":
      return (
        <svg {...common}>
          <path d="M21.8 4.2 18.5 20c-.25 1.12-.91 1.4-1.85.87l-5.1-3.76-2.46 2.37c-.27.27-.5.5-1.03.5l.37-5.2 9.47-8.56c.41-.37-.09-.58-.64-.21L5.56 13.3.5 11.72c-1.1-.34-1.12-1.1.23-1.63L20.5 2.5c.91-.34 1.71.22 1.3 1.7Z" />
        </svg>
      );
  }
}

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [statusType, setStatusType] = useState<
    "success" | "error" | "info"
  >("info");

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitting) return;

    setSubmitting(true);
    setStatus(t.sendingStatus);
    setStatusType("info");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || t.sendError);
      }

      setStatus(t.successStatus);
      setStatusType("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : t.unexpectedError
      );
      setStatusType("error");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-white/10 dark:bg-[#080d1a] dark:text-white dark:placeholder:text-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400";

  const socialLinks: {
    name: SocialIconName;
    label: string;
    href: string;
  }[] = [
    {
      name: "github",
      label: "GitHub",
      href: "https://github.com/samuelmuleta3535-ops",
    },
    {
      name: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/your-username/",
    },
    {
      name: "email",
      label: "Email",
      href: "mailto:samuelmuleta3535@gmail.com",
    },
    {
      name: "telegram",
      label: "Telegram",
      href: "https://t.me/Samuel",
    },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-gray-200 px-4 py-16 sm:px-6 sm:py-20 md:py-24 dark:border-white/10"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-blue-600 sm:text-sm sm:tracking-widest dark:text-blue-400">
            {t.subtitle}
          </p>

          <h2
            id="contact-heading"
            className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white"
          >
            {t.title}{" "}
            <span className="text-blue-600 dark:text-blue-400">
              {t.titleAccent}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 dark:text-gray-400">
            {t.description}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Email */}
          <a
            href="mailto:samuelmuleta3535@gmail.com"
            className="group rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg dark:border-white/10 dark:bg-[#101b32] dark:hover:border-blue-400/50"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
              <SocialIcon name="email" />
            </div>

            <h3 className="text-lg font-semibold text-gray-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-300">
              {t.emailTitle}
            </h3>

            <p className="mt-3 break-all text-sm leading-6 text-gray-600 dark:text-gray-400">
              samuelmuleta3535@gmail.com
            </p>

            <p className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400">
              {t.emailAction} →
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:+251970390618"
            className="group rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg dark:border-white/10 dark:bg-[#101b32] dark:hover:border-blue-400/50"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
              ☎
            </div>

            <h3 className="text-lg font-semibold text-gray-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-300">
              {t.phoneTitle}
            </h3>

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              0970390618
            </p>

            <p className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400">
              {t.phoneAction} →
            </p>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/Samuelmuleta"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg dark:border-white/10 dark:bg-[#101b32] dark:hover:border-blue-400/50 sm:col-span-2 lg:col-span-1"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
              <SocialIcon name="telegram" />
            </div>

            <h3 className="text-lg font-semibold text-gray-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-300">
              {t.telegramTitle}
            </h3>

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              Samuelmuleta
            </p>

            <p className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400">
              {t.telegramAction} →
            </p>
          </a>
        </div>

        {/* Contact Form */}
        <div className="mt-12 rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:mt-16 sm:p-8 dark:border-white/10 dark:bg-[#101b32]">
          <div className="mb-7">
            <h3 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
              {t.formTitle}
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
              {t.formDescription}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name and Email */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {t.nameLabel}
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder={t.namePlaceholder}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  minLength={2}
                  maxLength={80}
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {t.emailLabel}
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={t.emailPlaceholder}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={254}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {t.subjectLabel}
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder={t.subjectPlaceholder}
                value={formData.subject}
                onChange={handleChange}
                required
                minLength={3}
                maxLength={120}
                className={inputClass}
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {t.messageLabel}
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder={t.messagePlaceholder}
                value={formData.message}
                onChange={handleChange}
                required
                minLength={10}
                maxLength={3000}
                className={`${inputClass} resize-y`}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 sm:w-auto dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              {submitting ? t.sendingButton : t.sendButton}
              <span aria-hidden="true">→</span>
            </button>

            {/* Status Message */}
            {status && (
              <p
                role="status"
                aria-live="polite"
                className={`text-sm font-medium ${
                  statusType === "success"
                    ? "text-green-600 dark:text-green-400"
                    : statusType === "error"
                      ? "text-red-600 dark:text-red-400"
                      : "text-blue-600 dark:text-blue-400"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>

        {/* Closing Message */}
        <div className="mt-10 text-center">
          <p className="text-sm leading-7 text-gray-600 sm:text-base dark:text-gray-400">
            {t.thankYou}
          </p>
        </div>

        {/* Follow Me */}
        <div className="mt-14 border-t border-gray-200 pt-8 dark:border-white/10">
          <h3 className="mb-5 text-center text-lg font-bold text-gray-900 dark:text-white">
            {t.followMe}
          </h3>

          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.name === "email" ? undefined : "_blank"}
                rel={
                  social.name === "email"
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label={social.label}
                title={social.label}
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-md transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 hover:shadow-lg dark:border-white/10 dark:bg-[#101b32] dark:text-gray-300 dark:hover:border-blue-400/50 dark:hover:bg-blue-400/10 dark:hover:text-blue-400 dark:hover:shadow-blue-500/10"
              >
                <SocialIcon name={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
