"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, ArrowLeft, Search, BookOpen, Users, Mail } from "lucide-react"
import Image from "next/image"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 floating-element">
          <div className="w-8 h-8 bg-yellow-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 floating-element">
          <div className="w-6 h-6 bg-pink-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 floating-element">
          <div className="w-10 h-10 bg-orange-400 rounded-full opacity-60"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 space-y-8">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-3 mb-8 animate-fade-in">
            <div className="w-16 h-16 bg-purple-950 rounded-xl flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-3 p-2">
              <Image
                src="/images/wonder-minds-logo-final.png"
                alt="The Wonder Minds Logo"
                width={56}
                height={56}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-900 font-sans tracking-wide">The Wonder Minds</div>
            </div>
          </div>

          {/* 404 Illustration */}
          <div className="relative animate-fade-in delay-100">
            <div className="text-9xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text animate-bounce-gentle">
              404
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 animate-pulse-glow"></div>
          </div>

          {/* Error Message */}
          <div className="space-y-4 animate-fade-in delay-200">
            <Badge className="bg-red-100 text-red-600 border-red-200 mb-4">Page Not Found</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              It looks like the page you're looking for has wandered off on its own learning adventure! Don't worry,
              we'll help you find your way back to discovering amazing educational content.
            </p>
          </div>

          {/* Illustration */}
          <div className="relative animate-fade-in delay-300">
            <Image
              src="/placeholder.svg?height=300&width=400&query=confused+child+with+question+marks+looking+for+something"
              alt="Lost child looking for something"
              width={400}
              height={300}
              className="mx-auto rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-400">
            <Link href="/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold btn-hover btn-glow"
              >
                <Home className="mr-2 h-5 w-5" />
                Back to Homepage
              </Button>
            </Link>
            <Button
              size="lg"
              onClick={() => window.history.back()}
              className="bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white btn-hover transition-all duration-300"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 animate-fade-in delay-500">
            {[
              {
                title: "Explore Programs",
                description: "Discover our educational programs for all ages",
                icon: BookOpen,
                href: "/programs",
                color: "from-blue-400 to-cyan-400",
              },
              {
                title: "Success Stories",
                description: "Read testimonials from our community",
                icon: Users,
                href: "/testimonials",
                color: "from-green-400 to-emerald-400",
              },
              {
                title: "Get in Touch",
                description: "Contact us for help or questions",
                icon: Mail,
                href: "/contact",
                color: "from-orange-400 to-red-400",
              },
            ].map((link, index) => (
              <Link key={index} href={link.href}>
                <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover cursor-pointer">
                  <CardContent className="p-6 text-center space-y-4">
                    <div
                      className={`mx-auto w-16 h-16 bg-gradient-to-br ${link.color} rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <link.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{link.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Search Suggestion */}
          <div className="mt-12 animate-fade-in delay-600">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-100 to-pink-100">
              <CardContent className="p-8 text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Looking for something specific?</h3>
                <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  Try searching our site or browse our popular sections. Our team is always here to help you find the
                  perfect learning experience for your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                  <Link href="/programs">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white btn-hover">Browse Programs</Button>
                  </Link>
                  <Link href="/contact">
                    <Button className="bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white btn-hover transition-all duration-300">
                      Contact Support
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Fun Fact */}
          <div className="mt-8 animate-fade-in delay-700">
            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-yellow-800 font-medium">
                💡 <strong>Did you know?</strong> Getting lost sometimes leads to the best discoveries! Just like
                learning, every wrong turn can teach us something new.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
