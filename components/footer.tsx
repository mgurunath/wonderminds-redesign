import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Heart, ArrowRight, Send } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-950 to-purple-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-purple-800 to-pink-800">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold mb-2">Join Our Newsletter</h3>
              <p className="text-purple-200">
                Stay updated with our latest programs, events, and educational resources.
              </p>
            </div>
            <div className="w-full max-w-md">
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/80 focus:border-white"
                />
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-semibold">
                  <Send className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-950 rounded-xl flex items-center justify-center p-1">
                <Image
                  src="/images/wonder-minds-logo-final.png"
                  alt="The Wonder Minds Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-xl font-bold text-white font-sans tracking-wide">The Wonder Minds</div>
                <div className="text-xs text-purple-300">Where Wonder Meets Wisdom</div>
              </div>
            </Link>
            <p className="text-purple-200 leading-relaxed">
              Empowering children, parents, and educators through innovative learning experiences that spark creativity
              and unlock infinite potential.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/The-Wonder-Minds/61563776111198/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/thewondermindss"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/wonder-minds-7a739b323/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold border-b border-purple-700 pb-2">Quick Links</h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Programs", href: "/programs" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Events", href: "/events" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-purple-200 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold border-b border-purple-700 pb-2">Our Programs</h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                { name: "Little Explorers (Ages 3-8)", href: "/programs?category=early-childhood" },
                { name: "Young Innovators (Ages 9-16)", href: "/programs?category=elementary" },
                { name: "Teen Leaders", href: "/programs?category=teen" },
                { name: "Parent Workshops", href: "/programs?category=adult" },
                { name: "Educator Training", href: "/programs?category=adult" },
                { name: "Summer Camps", href: "/events" },
              ].map((program) => (
                <Link
                  key={program.name}
                  href={program.href}
                  className="text-purple-200 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                  {program.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Location */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold border-b border-purple-700 pb-2">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-300" />
                <a href="tel:+919625016784" className="text-purple-200 hover:text-white transition-colors duration-300">
                  +91 9625016784
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-300" />
                <a
                  href="mailto:info@thewonderminds.com"
                  className="text-purple-200 hover:text-white transition-colors duration-300"
                >
                  info@thewonderminds.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-300 mt-1" />
                <address className="text-purple-200 not-italic">Roorkee, Uttrakhand, India</address>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-full">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-purple-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-purple-300 text-sm">
              © {new Date().getFullYear()} The Wonder Minds. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy-policy"
                className="text-purple-300 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-purple-300 hover:text-white text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <div className="flex items-center space-x-1 text-purple-300 text-sm">
                <span>Made with</span>
                <Heart className="h-3 w-3 text-pink-400 fill-current" />
                <span>for curious minds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
