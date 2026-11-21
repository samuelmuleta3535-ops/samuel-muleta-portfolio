
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-2 md:gap-10 md:py-24"
    >
      {/* Hero Text */}
      <div className="order-2 text-center md:order-1 md:text-left">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 sm:text-sm sm:tracking-[0.3em]">
          Welcome to my portfolio
        </p>

        <h1
          id="hero-title"
          className="text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Hi, I&apos;m{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Samuel Muleta
          </span>
        </h1>

        <h2 className="mt-5 text-lg font-medium text-gray-700 dark:text-gray-300 sm:text-xl md:text-2xl">
          Computer Science Student &amp; Developer
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base sm:leading-8 md:mx-0">
          I am a Computer Science student interested in web development and
          software engineering. I enjoy building useful applications and
          continuously improving my programming skills.
        </p>

        {/* Action Links */}
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
          {/* Explore My Work */}
          <a
            href="#projects"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-blue-700 bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-blue-400 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-600 dark:focus-visible:ring-offset-[#080d1a]"
          >
            Explore My Work
          </a>

          {/* Contact Me */}
          <a
            href="#contact"


className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-blue-700 bg-blue-600 px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-800 hover:bg-blue-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-blue-400 dark:bg-blue-500 dark:text-white dark:hover:border-blue-300 dark:hover:bg-blue-600 dark:hover:text-white dark:focus-visible:ring-offset-[#080d1a]"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="order-1 flex justify-center md:order-2">
        <div className="relative h-52 w-52 overflow-hidden rounded-full border-4 border-blue-400/40 shadow-2xl shadow-blue-500/20 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80">
          <Image
            src="/images/profile.jpg"
            alt="Portrait of Samuel Muleta"
            fill
            priority
            sizes="(max-width: 640px) 208px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
