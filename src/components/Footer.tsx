
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060a14] px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-3">

          {/* Website Branding */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold text-white transition-colors hover:text-blue-400"
            >
              Samuel<span className="text-blue-400">.</span>
            </a>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              Computer Science Student & Developer
            </p>

            <p className="mt-2 text-sm leading-7 text-gray-500">
              Interested in Web Development, Computer Networking,
              and Mobile Application Development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#home" className="transition hover:text-blue-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="transition hover:text-blue-400">
                  About
                </a>
              </li>

              <li>
                <a href="#projects" className="transition hover:text-blue-400">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="transition hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-white">
              Contact Information
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="mailto:samuelmuleta3535@gmail.com"
                  className="break-all transition hover:text-blue-400"
                >
                  Email: samuelmuleta3535@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+251970390618"
                  className="transition hover:text-blue-400"
                >
                  Phone: 0970390618
                </a>
              </li>

              <li>
                <a
                  href="https://t.me/Samuel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-blue-400"
                >
                  Telegram: @Samuel
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center sm:flex-row">

          <p className="text-xs text-gray-500 sm:text-sm">
            © 2026 Samuel Muleta. All rights reserved.
          </p>

          <a
            href="#home"
            className="text-sm font-medium text-gray-400 transition-colors hover:text-blue-400"
          >
            Back to Top ↑
          </a>

        </div>

      </div>
    </footer>
  );
}
