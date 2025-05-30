"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Header() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Track active section based on scroll position
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = [
        { id: "home", element: document.getElementById("home") },
        { id: "about", element: document.getElementById("about") },
        { id: "programs", element: document.getElementById("programs") },
        { id: "resources", element: document.getElementById("resources") },
        { id: "contact", element: document.getElementById("contact") },
      ]

      const scrollPosition = window.scrollY + 200 // Offset for header height

      // Find the current section
      let currentSection = ""

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element) {
          const sectionTop = section.element.offsetTop
          if (scrollPosition >= sectionTop) {
            currentSection = section.id
            break
          }
        }
      }

      // If we're at the very top, default to home
      if (window.scrollY < 100) {
        currentSection = "home"
      }

      setActiveSection(currentSection)
    }

    // Initial check
    handleScrollSpy()

    window.addEventListener("scroll", handleScrollSpy, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScrollSpy)
    }
  }, [])

  // Handle keyboard navigation and escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleKeyDown)
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  const navigation = [
    { name: "Home", href: "/", sectionId: "home" },
    { name: "About Us", href: "/about", sectionId: "about" },
    { name: "Programs", href: "/programs", sectionId: "programs" },
    { name: "Testimonials", href: "/testimonials", sectionId: "resources" },
    { name: "Events", href: "/events", sectionId: "resources" },
    { name: "Contact", href: "/contact", sectionId: "contact" },
  ]

  const handleNavClick = (href: string, sectionId: string) => {
    if (pathname === "/" && sectionId !== "home") {
      // If we're on homepage and clicking a section, scroll to it
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
        return
      }
    }

    if (pathname === href) {
      // Same page - trigger smooth scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  }

  const isLinkActive = (href: string, sectionId: string) => {
    // If we're on homepage, use scroll-based active section
    if (pathname === "/") {
      return activeSection === sectionId
    }
    // Otherwise, use pathname matching
    return pathname === href
  }

  return (
    <header className="bg-purple-950 shadow-lg border-b border-purple-900 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-purple-900 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 transition-opacity duration-300 hover:opacity-80">
              <Phone className="h-4 w-4" />
              <span>+91 9625016784</span>
            </div>
            <div className="flex items-center space-x-2 transition-opacity duration-300 hover:opacity-80">
              <Mail className="h-4 w-4" />
              <span>info@thewonderminds.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2 transition-opacity duration-300 hover:opacity-80">
            <MapPin className="h-4 w-4" />
            <span>Roorkee, Uttrakhand</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" onClick={() => handleNavClick("/", "home")}>
            {/* Logo with matching navbar background */}
            <div className="w-12 h-12 bg-purple-950 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 p-1">
              <Image
                src="/images/wonder-minds-logo-final.png"
                alt="The Wonder Minds Logo"
                width={44}
                height={44}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-2xl font-bold text-white font-sans tracking-wide transition-transform duration-300 group-hover:scale-105">
                The Wonder Minds
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Shows all items when there's space */}
          <nav className="hidden xl:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href, item.sectionId)
                }}
                className={`font-medium transition-all duration-300 relative group ${
                  isLinkActive(item.href, item.sectionId)
                    ? "text-blue-400 font-bold"
                    : "text-purple-200 hover:text-blue-400"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                    isLinkActive(item.href, item.sectionId) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Large Screen Navigation - Shows first 4 items + More dropdown */}
          <nav className="hidden lg:xl:hidden lg:flex items-center space-x-6">
            {navigation.slice(0, 4).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href, item.sectionId)
                }}
                className={`font-medium transition-all duration-300 relative group text-sm ${
                  isLinkActive(item.href, item.sectionId)
                    ? "text-blue-400 font-bold"
                    : "text-purple-200 hover:text-blue-400"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                    isLinkActive(item.href, item.sectionId) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
            {/* More dropdown for remaining items */}
            <div className="relative group">
              <button className="text-purple-200 hover:text-blue-400 font-medium transition-all duration-300 text-sm">
                More
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-purple-950 border border-purple-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[200]">
                {navigation.slice(4).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href, item.sectionId)
                    }}
                    className={`block px-4 py-2 transition-colors duration-300 ${
                      isLinkActive(item.href, item.sectionId)
                        ? "text-blue-400 font-bold bg-purple-800"
                        : "text-purple-200 hover:text-blue-400 hover:bg-purple-800"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Right side container for CTA buttons and overflow menu */}
          <div className="flex items-center space-x-4">
            {/* CTA Buttons - Shows when there's space */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/login">
                <Button className="bg-transparent border-2 border-purple-300 text-purple-300 hover:bg-purple-300 hover:text-purple-900 btn-hover transition-all duration-300">
                  Login
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white btn-hover btn-glow">
                  Join Us Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:bg-purple-800 transition-transform duration-300 hover:scale-110"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle navigation menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-purple-950 border-l border-purple-800 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-purple-800">
          <h2 id="mobile-menu-title" className="text-lg font-semibold text-white">
            Navigation
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:bg-purple-800"
            aria-label="Close navigation menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex flex-col h-full">
          {/* Navigation Links */}
          <nav className="flex-1 px-4 py-6 space-y-2" role="navigation" aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  setMobileMenuOpen(false)
                  handleNavClick(item.href, item.sectionId)
                }}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-purple-950 ${
                  isLinkActive(item.href, item.sectionId)
                    ? "text-blue-400 font-bold bg-purple-800"
                    : "text-purple-200 hover:text-blue-400 hover:bg-purple-800"
                }`}
                tabIndex={mobileMenuOpen ? 0 : -1}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA Buttons */}
          <div className="p-4 border-t border-purple-800 space-y-3">
            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button
                className="w-full bg-transparent border-2 border-purple-300 text-purple-300 hover:bg-purple-300 hover:text-purple-900 btn-hover transition-all duration-300 focus:ring-2 focus:ring-blue-400"
                tabIndex={mobileMenuOpen ? 0 : -1}
              >
                Login
              </Button>
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white btn-hover btn-glow focus:ring-2 focus:ring-blue-400"
                tabIndex={mobileMenuOpen ? 0 : -1}
              >
                Join Us Now
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="p-4 border-t border-purple-800 bg-purple-900">
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-purple-200">
                <Phone className="h-4 w-4" />
                <span>+91 9625016784</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-200">
                <Mail className="h-4 w-4" />
                <span>info@thewonderminds.com</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-200">
                <MapPin className="h-4 w-4" />
                <span>Roorkee, Uttrakhand</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nurturing Statement Bar */}
      <div className="bg-purple-800 text-white py-2 text-sm border-t border-purple-700">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span className="text-purple-200">✨ Nurturing Young Minds Since 2020</span>
          </div>
        </div>
      </div>
    </header>
  )
}
