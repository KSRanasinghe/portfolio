import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";
import { Toaster } from "sonner";
import BackToTop from "@/components/ui/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Keshara Ranasinghe | Web Developer | Portfolio",
  description: "Passionate Web Developer with 1 year of industry experience in building high-performance, end-to-end web solutions. Currently seeking my next challenge as an Associate Software Engineer.",
  keywords: ["Web Developer", "Associate Software Engineer", "Next.js", "React", "Portfolio"],
  authors: [{ name: "Keshara Ranasinghe" }],
  openGraph: {
    title: "Keshara Ranasinghe | Web Developer | Portfolio",
    description: "Explore my work and experience in software engineering.",
    url: "https://ksranasinghe.github.io/portfolio/",
    siteName: "Keshara Ranasinghe",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`} >
        <CustomCursor />
        <Navbar />
        {children}
        <BackToTop />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
