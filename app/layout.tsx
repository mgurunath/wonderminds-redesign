import type React from "react"
import type { Metadata } from "next"
import { Inter, Fredoka } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka" })

export const metadata: Metadata = {
  title: "The Wonder Minds - Where Wonder Meets Wisdom",
  description:
    "Empowering children, parents, and educators through innovative learning experiences that spark creativity, build confidence, and unlock infinite potential.",
  keywords: "education, children learning, creative education, STEM, early childhood, parenting, educational programs",
  authors: [{ name: "The Wonder Minds Team" }],
  creator: "The Wonder Minds",
  publisher: "The Wonder Minds",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://thewonderminds.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Wonder Minds - Where Wonder Meets Wisdom",
    description:
      "Empowering children, parents, and educators through innovative learning experiences that spark creativity, build confidence, and unlock infinite potential.",
    url: "https://thewonderminds.com",
    siteName: "The Wonder Minds",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/wonder-minds-og-image.png",
        width: 1200,
        height: 630,
        alt: "The Wonder Minds - Innovative Learning for Children",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Wonder Minds - Where Wonder Meets Wisdom",
    description: "Empowering children, parents, and educators through innovative learning experiences",
    images: ["/images/wonder-minds-og-image.png"],
    creator: "@thewonderminds",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#7e22ce" },
  ],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fredoka.variable} font-sans`}>
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
