
"use client";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMysql,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";

const skillCategories = [
  {
    id: "frontend",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    ],
  },
  {
    id: "backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    id: "tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Cisco Packet Tracer", icon: null, color: "" },
    ],
  },
] as const;

export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-blue-400 sm:text-sm sm:tracking-widest">
            {t.skills.subtitle}
          </p>

          <h2
            id="skills-heading"
            className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
          >
            {t.skills.title}{" "}
            {t.skills.titleAccent && (
              <span className="text-blue-600 dark:text-blue-400">
                {t.skills.titleAccent}
              </span>
            )}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base sm:leading-8">
            {t.skills.description}
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-10">
          {skillCategories.map((category) => {
            const categoryTranslation =
              t.skills.categories[category.id];

            return (
              <div key={category.id}>
                <div className="mb-5">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                    {categoryTranslation}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {t.skills.categories[
                      `${category.id}Description` as
                        | "frontendDescription"
                        | "backendDescription"
                        | "toolsDescription"
                    ]}
                  </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="group flex min-h-20 items-center justify-center gap-3 rounded-xl border border-gray-200 bg-gray-100 px-3 py-5 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-50 dark:border-white/10 dark:bg-[#101b32] dark:hover:bg-[#152440] sm:px-5 sm:py-6"
                      >
                        {Icon ? (
                          <Icon
                            size={27}
                            color={skill.color}
                            className="shrink-0 transition-transform duration-300 group-hover:scale-110"
                            aria-hidden="true"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="shrink-0 text-xs font-bold text-blue-600 dark:text-blue-400"
                          >
                            CPT
                          </span>
                        )}

                        <span className="text-sm font-semibold text-gray-700 transition-colors group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-blue-400 sm:text-base">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
