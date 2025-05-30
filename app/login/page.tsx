"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Eye, EyeOff, User, Lock, ArrowRight, Mail, Phone } from "lucide-react"
import Image from "next/image"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Login attempt:", formData)
    setIsLoading(false)

    // Here you would typically handle the actual login logic
    // For now, we'll just log the form data
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Branding & Info */}
        <div className="hidden lg:block space-y-8">
          <div className="text-center space-y-6">
            <Link href="/" className="flex items-center justify-center space-x-3 group">
              <div className="w-16 h-16 bg-purple-950 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 p-2">
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
            </Link>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-800">Welcome Back!</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Sign in to access your learning dashboard, track progress, and continue your educational journey with
                us.
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=500&query=children+learning+with+teacher+in+classroom"
              alt="Students learning"
              width={500}
              height={400}
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-3xl"></div>
          </div>

          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { number: "5000+", label: "Happy Students" },
              { number: "200+", label: "Expert Teachers" },
              { number: "98%", label: "Success Rate" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-2xl font-bold text-purple-600">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 
        ====================================================================
                              USER LOGIN FORM SECTION
        ====================================================================
        This section contains the main login form where users can:
        - Enter their username or email address
        - Enter their password with show/hide toggle
        - Choose to remember their login session
        - Access forgot password functionality
        - Submit login credentials for authentication
        - Navigate to account creation via contact page
        - Access support via email and phone tooltips
        ====================================================================
        */}
        <div className="w-full max-w-md mx-auto">
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center space-y-4 pb-8">
              {/* Mobile Logo */}
              <div className="lg:hidden flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-purple-950 rounded-xl flex items-center justify-center p-1">
                  <Image
                    src="/images/wonder-minds-logo-final.png"
                    alt="The Wonder Minds Logo"
                    width={44}
                    height={44}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xl font-bold text-purple-900 font-sans tracking-wide">The Wonder Minds</div>
              </div>

              <div>
                <CardTitle className="text-3xl font-bold text-gray-800">Sign In</CardTitle>
                <p className="text-gray-600 mt-2">Access your learning dashboard</p>
              </div>
              <Badge className="bg-purple-100 text-purple-600 border-purple-200">Student & Parent Portal</Badge>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Username Field */}
                <div className="space-y-2">
                  <label htmlFor="username" className="text-sm font-medium text-gray-700">
                    Username or Email
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="username"
                      type="text"
                      placeholder="Enter your username or email"
                      value={formData.username}
                      onChange={(e) => handleInputChange("username", e.target.value)}
                      className="pl-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="pl-10 pr-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="rememberMe"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) => handleInputChange("rememberMe", checked as boolean)}
                    />
                    <label htmlFor="rememberMe" className="text-sm text-gray-600">
                      Remember me
                    </label>
                  </div>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-purple-600 hover:text-purple-700 transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Login Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 btn-hover"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Signing In...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <span>Sign In</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </Button>
              </form>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Don't have an account?</span>
                </div>
              </div>

              {/* Sign Up Link */}
              <div className="text-center">
                <Link href="/contact">
                  <Button className="w-full bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white btn-hover transition-all duration-300">
                    Create New Account
                  </Button>
                </Link>
              </div>

              {/* Contact Support */}
              <div className="text-center space-y-3 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">Need help? Contact our support team</p>
                <div className="flex justify-center space-x-4">
                  <div className="relative group">
                    <a
                      href="mailto:info@thewonderminds.com"
                      className="flex items-center space-x-1 text-sm text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Email</span>
                    </a>
                    {/* Email Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                      info@thewonderminds.com
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                    </div>
                  </div>
                  <div className="relative group">
                    <a
                      href="tel:+919625016784"
                      className="flex items-center space-x-1 text-sm text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      <span>Call</span>
                    </a>
                    {/* Phone Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                      +91 96250 16784
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
