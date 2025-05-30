"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Star,
  Quote,
  Play,
  ArrowRight,
  Heart,
  Users,
  Award,
  BookOpen,
  Smile,
  TrendingUp,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"

export default function TestimonialsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Stories", icon: Heart },
    { id: "parents", name: "Parents", icon: Users },
    { id: "students", name: "Students", icon: Smile },
    { id: "educators", name: "Educators", icon: BookOpen },
  ]

  const featuredTestimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Mother of Aarav (Age 7)",
      category: "parents",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100&query=indian+mother+smiling",
      quote:
        "The Wonder Minds has completely transformed my son's approach to learning. Aarav went from being reluctant about studies to eagerly waiting for his classes. The personalized attention and creative teaching methods have boosted his confidence tremendously.",
      program: "Wonder Kids Program",
      duration: "8 months",
      highlight: "Improved confidence and academic performance",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Father of Ananya (Age 12)",
      category: "parents",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100&query=indian+father+professional",
      quote:
        "My daughter was struggling with mathematics and science. The Young Innovators program not only helped her excel in these subjects but also sparked her interest in coding. She recently won a school science fair!",
      program: "Young Innovators",
      duration: "1 year",
      highlight: "Won school science fair",
    },
    {
      id: 3,
      name: "Meera Patel",
      role: "Primary School Teacher",
      category: "educators",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100&query=indian+teacher+woman",
      quote:
        "The educator training program at The Wonder Minds has revolutionized my teaching approach. The innovative methodologies I learned have made my classroom more engaging and effective. My students are more participative than ever.",
      program: "Educator Training",
      duration: "3 months",
      highlight: "Improved classroom engagement by 40%",
    },
  ]

  const videoTestimonials = [
    {
      id: 1,
      name: "Sunita & Arjun",
      role: "Parents of twins Maya & Arya",
      thumbnail: "/placeholder.svg?height=200&width=300&query=indian+family+with+twins",
      duration: "2:45",
      title: "How The Wonder Minds helped our twins discover their unique talents",
    },
    {
      id: 2,
      name: "Dr. Kavitha Reddy",
      role: "Child Psychologist",
      thumbnail: "/placeholder.svg?height=200&width=300&query=indian+woman+doctor",
      duration: "3:20",
      title: "Professional perspective on The Wonder Minds methodology",
    },
    {
      id: 3,
      name: "Ravi Gupta",
      role: "Father of Ishaan (Age 14)",
      thumbnail: "/placeholder.svg?height=200&width=300&query=indian+teenager+with+father",
      duration: "2:15",
      title: "From shy to confident: Ishaan's transformation story",
    },
  ]

  const successStories = [
    {
      id: 1,
      studentName: "Aadhya Singh",
      age: 10,
      program: "Creative Arts Studio",
      achievement: "Won State Level Art Competition",
      before: "Shy and hesitant to express creativity",
      after: "Confident artist with multiple awards",
      image: "/placeholder.svg?height=150&width=150&query=young+girl+with+art+supplies",
      parentQuote:
        "Aadhya's artistic journey with The Wonder Minds has been incredible. She's not just learned techniques but found her voice through art.",
      parentName: "Deepika Singh",
    },
    {
      id: 2,
      studentName: "Arjun Mehta",
      age: 13,
      program: "Young Innovators",
      achievement: "Developed a mobile app for local farmers",
      before: "Struggled with logical thinking",
      after: "Confident problem-solver and young entrepreneur",
      image: "/placeholder.svg?height=150&width=150&query=teenage+boy+with+laptop",
      parentQuote:
        "The coding and innovation skills Arjun learned have opened up a whole new world for him. He's already thinking like an entrepreneur!",
      parentName: "Neha Mehta",
    },
    {
      id: 3,
      studentName: "Kavya Nair",
      age: 6,
      program: "Little Explorers",
      achievement: "Reading at grade 3 level",
      before: "Difficulty with letter recognition",
      after: "Advanced reader with love for books",
      image: "/placeholder.svg?height=150&width=150&query=young+girl+reading+book",
      parentQuote:
        "Kavya's reading progress has been phenomenal. The Wonder Minds made learning fun and engaging for her.",
      parentName: "Preethi Nair",
    },
  ]

  const testimonials = [
    {
      id: 4,
      name: "Amit Joshi",
      role: "Father of Rohan (Age 9)",
      category: "parents",
      rating: 5,
      quote:
        "The parent workshops have been as beneficial for us as the programs have been for our son. We've learned so much about supporting Rohan's learning at home.",
      program: "Wonder Kids + Parent Workshop",
    },
    {
      id: 5,
      name: "Shreya Agarwal",
      role: "Age 15, Teen Leaders Program",
      category: "students",
      rating: 5,
      quote:
        "The Teen Leaders program helped me discover my passion for social work. I've organized three community service projects and feel more confident about my future.",
      program: "Teen Leaders",
    },
    {
      id: 6,
      name: "Vikram Singh",
      role: "High School Principal",
      category: "educators",
      rating: 5,
      quote:
        "We've partnered with The Wonder Minds for our teacher training, and the results have been outstanding. Our teachers are more innovative and students more engaged.",
      program: "Educator Training Partnership",
    },
    {
      id: 7,
      name: "Lakshmi Iyer",
      role: "Mother of Karthik (Age 5)",
      category: "parents",
      rating: 5,
      quote:
        "Karthik was very shy and wouldn't participate in group activities. The Little Explorers program has brought out his social side and he's made wonderful friends.",
      program: "Little Explorers",
    },
    {
      id: 8,
      name: "Aditya Sharma",
      role: "Age 12, Young Innovators",
      category: "students",
      rating: 5,
      quote:
        "I love the coding classes! I've built my own website and a simple game. My teachers here make everything so easy to understand.",
      program: "Young Innovators",
    },
  ]

  const filteredTestimonials =
    selectedCategory === "all"
      ? testimonials
      : testimonials.filter((testimonial) => testimonial.category === selectedCategory)

  const stats = [
    { number: "98%", label: "Parent Satisfaction", icon: Heart },
    { number: "5000+", label: "Happy Students", icon: Smile },
    { number: "95%", label: "Improved Performance", icon: TrendingUp },
    { number: "4.9/5", label: "Average Rating", icon: Star },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">Success Stories</Badge>
            <h1 className="text-5xl font-bold mb-6">Real Stories, Real Transformations</h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Discover how The Wonder Minds has transformed the lives of thousands of children, parents, and educators.
              These are their stories of growth, achievement, and joy in learning.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg card-hover">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-purple-600">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-600 mb-4">Featured Stories</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Voices of Our Community</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up delay-${index * 100}`}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <Quote className="h-8 w-8 text-purple-300 mb-4" />
                    <p className="text-gray-700 italic leading-relaxed">{testimonial.quote}</p>
                  </div>

                  <div className="space-y-2">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-600">
                      {testimonial.program}
                    </Badge>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Duration:</span> {testimonial.duration}
                    </div>
                    <div className="text-sm text-green-600 font-medium">✨ {testimonial.highlight}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-600 mb-4">Video Stories</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Hear It From Our Families</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <Card
                key={video.id}
                className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="lg"
                      className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                    >
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-bold text-gray-800">{video.name}</h3>
                  <p className="text-sm text-gray-600">{video.role}</p>
                  <p className="text-gray-700">{video.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-600 mb-4">Success Stories</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Student Transformations</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={story.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.studentName}
                    width={150}
                    height={150}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-green-400 to-emerald-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Success Story
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{story.studentName}</h3>
                    <p className="text-purple-600 font-medium">
                      Age {story.age} • {story.program}
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Award className="h-5 w-5 text-green-600" />
                      <span className="font-semibold text-green-800">Achievement</span>
                    </div>
                    <p className="text-green-700">{story.achievement}</p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-600">Before:</span>
                      <p className="text-sm text-gray-700">{story.before}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">After:</span>
                      <p className="text-sm text-gray-700">{story.after}</p>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <Quote className="h-4 w-4 text-purple-400 mb-2" />
                    <p className="text-sm text-purple-700 italic">{story.parentQuote}</p>
                    <p className="text-xs text-purple-600 mt-2">- {story.parentName}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">More Stories From Our Community</h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`btn-hover ${
                    selectedCategory === category.id
                      ? "bg-purple-600 text-white"
                      : "border-purple-200 text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  <category.icon className="mr-2 h-4 w-4" />
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <Quote className="h-6 w-6 text-purple-300 mb-3" />
                    <p className="text-gray-700 italic leading-relaxed">{testimonial.quote}</p>
                  </div>

                  <Badge variant="secondary" className="bg-purple-100 text-purple-600">
                    {testimonial.program}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Own Success Story?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join our community of learners and start your transformation journey today. Your success story could be
            next!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-semibold btn-hover">
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 btn-hover transition-all duration-300"
              >
                Share Your Story
                <MessageCircle className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
