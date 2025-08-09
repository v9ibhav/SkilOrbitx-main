import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkillOrbitX | Learn, Launch & Grow",
   icons: {
    icon: "/images/img.png", 
  },
  description:
    "SkillOrbitX – Empowering future innovators through real-world learning programs. Join us to enhance your skills, gain practical experience, and launch your career with our innovative platforms like LaunchDeck, LearnLab, Path Mentor, and PRYSM.",
  keywords: [
    "SkillOrbitX",
    "LearnLab",
    "LaunchDeck",
    "PathMentor",
    "PRYSM",
    "skill development",
    "internship",
  ],
  openGraph: {
    title: "SkillOrbitX",
    description:
      "Empowering innovators through real-world learning programs.",
    url: "https://www.skillorbitx.com",
    siteName: "SkillOrbitX",
    images: [
      {
        url: "/img.png",
        width: 1200,
        height: 630,
        alt: "SkillOrbitX Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  themeColor: "#0F172A",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Bootstrap CSS CDN */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
     

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          async
        ></script>
      </body>
    </html>
  );
}
