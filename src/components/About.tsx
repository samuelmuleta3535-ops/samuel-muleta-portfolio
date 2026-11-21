
export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-blue-400 sm:text-sm sm:tracking-widest">
            GET TO KNOW ME
          </p>

          <h2
            id="about-heading"
            className="text-3xl font-bold text-white sm:text-4xl"
          >
            About <span className="text-blue-400">Me</span>
          </h2>
        </div>

        {/* Who I Am */}
        <div className="mb-12">
          <h3 className="mb-5 text-xl font-semibold text-white sm:text-2xl">
            Who I Am
          </h3>

          <p className="text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            I am a Computer Science student at Ambo University,
            passionate about technology, software development, and
            practical problem-solving. My primary interests include
            full-stack web development, computer networking, and
            mobile application development. I enjoy exploring new
            technologies, developing useful applications, and creating
            secure and reliable solutions to real-world challenges.
            I am committed to continuously improving my technical
            knowledge and developing the skills needed to become a
            professional technology developer.
          </p>
        </div>

        {/* Profile Information */}
        <div>
          <div className="rounded-xl border border-white/10 bg-[#101b32] p-5 transition duration-300 hover:border-blue-400/50 sm:p-7">
            <h3 className="mb-6 text-lg font-semibold text-blue-400">
              Personal Profile
            </h3>

            <dl className="grid grid-cols-1 gap-6 text-sm sm:grid-cols-2 sm:text-base lg:grid-cols-3">
              <div>
                <dt className="text-gray-500">Name</dt>
                <dd className="mt-1 font-medium text-gray-300">
                  Samuel Muleta
                </dd>
              </div>

              <div>
                <dt className="text-gray-500">Education</dt>
                <dd className="mt-1 font-medium text-gray-300">
                  B.Sc. in Computer Science
                </dd>
                <dd className="text-gray-400">
                  Ambo University
                </dd>
              </div>

              <div>
                <dt className="text-gray-500">Work Preference</dt>
                <dd className="mt-1 font-medium text-green-400">
                  Student & Developer
                </dd>
              </div>

              <div>
                <dt className="text-gray-500">Location</dt>
                <dd className="mt-1 font-medium text-gray-300">
                  Ethiopia
                </dd>
              </div>

              <div>
                <dt className="text-gray-500">Specialization</dt>
                <dd className="mt-1 font-medium text-gray-300">
                  Web Development
                </dd>
              </div>

              <div>
                <dt className="text-gray-500">Email Address</dt>
                <dd className="mt-1">
                  <a
                    href="mailto:samuelmuleta3535@gmail.com"
                    className="break-all font-medium text-blue-400 transition-colors hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    samuelmuleta3535@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
