
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Samuel Muleta | Computer Science Student & Developer",
    template: "%s | Samuel Muleta",
  },

  description:
    "Explore the portfolio of Samuel Muleta, a Computer Science student at Ambo University with interests in web development, software development, and computer networking.",

  keywords: [
    "Samuel Muleta",
    "Computer Science Student",
    "Web Developer",
    "Ambo University",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MySQL",
    "PHP",
    "Computer Networking",
    "Portfolio",
  ],

  authors: [{ name: "Samuel Muleta" }],

  openGraph: {
    title: "Samuel Muleta | Computer Science Student & Developer",
    description:
      "Discover my projects, technical skills, and experience in web development and computer networking.",
    type: "website",
    siteName: "Samuel Muleta Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Samuel Muleta | Computer Science Student & Developer",
    description:
      "Explore my projects, technical skills, and development journey.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
