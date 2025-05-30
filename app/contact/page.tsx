"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Calendar, Users, LogIn } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    program: "",
    message: "",
    newsletter: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">Get in Touch</Badge>
            <h1 className="text-5xl font-bold mb-6">Let's Start Your Learning Journey</h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Have questions about our programs? Ready to enroll? We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: "+91 9625016784",
                    subtitle: "Mon-Fri 9AM-6PM",
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: "info@thewonderminds.com",
                    subtitle: "We'll respond within 24 hours",
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    content: "Roorkee, Uttrakhand",
                    subtitle: "India",
                  },
                  {
                    icon: Clock,
                    title: "Office Hours",
                    content: "Monday - Friday",
                    subtitle: "9:00 AM - 6:00 PM IST",
                  },
                ].map((item, index) => (
                  <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                        <p className="text-gray-700 font-medium">{item.content}</p>
                        <p className="text-gray-500 text-sm">{item.subtitle}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Quick Actions</h3>
                <div className="space-y-3">
                  <Button
                    className="w-full justify-start bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white btn-hover transition-all duration-300"
                    size="lg"
                  >
                    <Calendar className="mr-3 h-5 w-5" />
                    Schedule a Demo
                  </Button>
                  <Button
                    className="w-full justify-start bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white btn-hover transition-all duration-300"
                    size="lg"
                  >
                    <MessageCircle className="mr-3 h-5 w-5" />
                    Live Chat Support
                  </Button>
                  <Button
                    className="w-full justify-start bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white btn-hover transition-all duration-300"
                    size="lg"
                  >
                    <Users className="mr-3 h-5 w-5" />
                    Join Parent Community
                  </Button>
                </div>
              </div>
            </div>

            {/* 
            ====================================================================
                              MAIN CONTACT FORM SECTION
            ====================================================================
            This section contains the primary contact form where users can:
            - Submit their personal information (name, email, phone)
            - Select their interested program from dropdown
            - Provide subject and detailed message
            - Subscribe to newsletter
            - Submit the form to get in touch with The Wonder Minds
            ====================================================================
            */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Full Name *</label>
                        <Input
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="border-gray-300 focus:border-purple-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Email Address *</label>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="border-gray-300 focus:border-purple-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Phone Number</label>
                        <Input
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="border-gray-300 focus:border-purple-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Interested Program</label>
                        <Select onValueChange={(value) => setFormData({ ...formData, program: value })}>
                          <SelectTrigger className="border-gray-300 focus:border-purple-500">
                            <SelectValue placeholder="Select a program" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="little-explorers">Little Explorers (Ages 3-8)</SelectItem>
                            <SelectItem value="young-innovators">Young Innovators (Ages 9-16)</SelectItem>
                            <SelectItem value="parent-workshops">Parent Workshops</SelectItem>
                            <SelectItem value="educator-training">Educator Training</SelectItem>
                            <SelectItem value="corporate-programs">Corporate Programs</SelectItem>
                            <SelectItem value="summer-camps">Summer Camps</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Subject *</label>
                      <Input
                        type="text"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="border-gray-300 focus:border-purple-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Message *</label>
                      <Textarea
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="border-gray-300 focus:border-purple-500 min-h-[120px]"
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => setFormData({ ...formData, newsletter: checked as boolean })}
                      />
                      <label htmlFor="newsletter" className="text-sm text-gray-600">
                        Subscribe to our newsletter for updates on new programs and events
                      </label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>

                  {/* Existing User Login Section */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="text-center">
                      <p className="text-gray-600 mb-4">Already have an account with us?</p>
                      <Link href="/login">
                        <Button className="bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white btn-hover transition-all duration-300">
                          <LogIn className="mr-2 h-4 w-4" />
                          Login to Your Account
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-600 mb-4">FAQ</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What age groups do you serve?",
                answer: "We offer programs for children aged 3-16, as well as workshops for parents and educators.",
              },
              {
                question: "Do you offer online programs?",
                answer:
                  "Yes, we have both in-person and online programs to accommodate different learning preferences.",
              },
              {
                question: "How do I enroll my child?",
                answer: "You can enroll by filling out our contact form, calling us, or scheduling a demo session.",
              },
              {
                question: "What is your teaching methodology?",
                answer: "We use a blend of play-based learning, STEM education, and creative arts to engage children.",
              },
              {
                question: "Do you provide certificates?",
                answer: "Yes, we provide certificates of completion for all our programs and workshops.",
              },
              {
                question: "Can parents observe classes?",
                answer: "We encourage parent involvement and offer observation opportunities.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="space-y-3">
                  <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Us</h2>
            <p className="text-gray-600">Visit our learning center in Roorkee, Uttrakhand</p>
          </div>

          <Card className="border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="h-96 bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">The Wonder Minds Learning Center</h3>
                  <p className="text-gray-600">Roorkee, Uttrakhand, India</p>
                  <Button className="mt-4 bg-purple-600 hover:bg-purple-700">Get Directions</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
