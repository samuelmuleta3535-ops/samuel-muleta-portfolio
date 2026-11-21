
type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string | null;
  documentationUrl?: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Academic Staff Evaluation System (ASES)",
    category: "Web Application",
    description:
      "A web-based academic staff evaluation system designed to manage evaluation activities at an educational institution. It supports role-based access, evaluation forms, course assignments, result management, and communication between relevant users.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    githubUrl:
      "https://github.com/samuelmuleta3535-ops/Academic-Staff-Evaluation-System",
  },
  {
    number: "02",
    title: "Undergraduate Project Management System",
    category: "Web Application",
    description:
      "A web-based system designed to organize and manage undergraduate student projects. Its intended functionality includes project submission, supervisor assignment, progress monitoring, and project information management.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    githubUrl:
      "https://github.com/samuelmuleta3535-ops/UnderGraduate_managmnt",
  },
  {
    number: "03",
    title: "Campus Network Design and Implementation",
    category: "Computer Networking",
    description:
      "An enterprise campus network design for multiple G+7 buildings using a hierarchical network architecture. The design incorporates VLAN segmentation, core and distribution switching, routing, IP addressing, and network security configurations.",
    technologies: [
      "Cisco Packet Tracer",
      "VLAN",
      "Routing",
      "Switching",
    ],
    githubUrl: null,
    documentationUrl:
      "/documents/OSTA-intern-documentation.pdf",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-blue-400 sm:text-sm sm:tracking-widest">
            MY RECENT WORK
          </p>

          <h2
            id="projects-heading"
            className="text-3xl font-bold text-white sm:text-4xl"
          >
            My <span className="text-blue-400">Projects</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base sm:leading-8">
            Explore some of my academic and practical projects,
            demonstrating my interests and developing skills
            in software development and computer networking.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              aria-labelledby={`project-${project.number}`}
              className="group flex h-full flex-col rounded-xl border border-white/10 bg-[#101b32] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/5 sm:p-6 md:hover:-translate-y-2"
            >
              {/* Project Number and Category */}
              <div className="mb-5 flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-400/70">
                  {project.number}
                </span>

                <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-300">
                  {project.category}
                </span>
              </div>

              {/* Project Title */}
              <h3
                id={`project-${project.number}`}
                className="text-lg font-bold leading-7 text-white transition-colors group-hover:text-blue-300 sm:text-xl"
              >
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="mt-4 flex-1 text-sm leading-7 text-gray-400 sm:text-base">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-7 border-t border-white/10 pt-5">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Technologies & Tools
                </h4>

                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-xs font-medium text-blue-300"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>

              {/* GitHub Repository Link */}
              {project.githubUrl && (
                <div className="mt-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-blue-700 bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:border-blue-800 hover:bg-blue-700 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:border-blue-400 dark:bg-blue-500 dark:text-white dark:hover:border-blue-300 dark:hover:bg-blue-600"                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.05c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.62 5.23-5.11 5.51.4.35.75 1.02.75 2.06V22c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z" />
                    </svg>

                    View on GitHub
                  </a>
                </div>
              )}

              {/* PDF Documentation Link */}
              {project.documentationUrl && (
                <div className="mt-6">
                  <a
                    href={project.documentationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View or download ${project.title} documentation`}
className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-blue-700 bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:border-blue-800 hover:bg-blue-700 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:border-blue-400 dark:bg-blue-500 dark:text-white dark:hover:border-blue-300 dark:hover:bg-blue-600"                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6M8 13h8M8 17h8" />
                    </svg>

                    View / Download Documentation
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
