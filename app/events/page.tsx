"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowRight,
  Star,
  Ticket,
  Globe,
  Video,
  BookOpen,
  Heart,
  Award,
  Music,
  Code,
  Microscope,
  Gamepad2,
} from "lucide-react"
import Image from "next/image"

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedType, setSelectedType] = useState("all")

  const categories = [
    { id: "all", name: "All Events", icon: Globe },
    { id: "workshops", name: "Workshops", icon: BookOpen },
    { id: "camps", name: "Camps", icon: Users },
    { id: "competitions", name: "Competitions", icon: Award },
    { id: "webinars", name: "Webinars", icon: Video },
  ]

  const eventTypes = [
    { id: "all", name: "All Types" },
    { id: "upcoming", name: "Upcoming" },
    { id: "ongoing", name: "Ongoing" },
    { id: "past", name: "Past Events" },
  ]

  const featuredEvents = [
    {
      id: 1,
      title: "Summer Innovation Camp 2024",
      subtitle: "Week-long intensive STEM learning experience",
      category: "camps",
      type: "upcoming",
      date: "June 15-21, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "The Wonder Minds Campus, Roorkee",
      price: "₹15,000",
      ageGroup: "Ages 8-14",
      capacity: "30 students",
      registered: "18 students",
      image: "/placeholder.svg?height=300&width=500&query=children+summer+camp+activities",
      description:
        "An exciting week of hands-on learning featuring robotics, coding, science experiments, and creative projects. Students will work in teams to solve real-world challenges.",
      highlights: [
        "Build and program robots",
        "Create mobile apps",
        "Science experiments lab",
        "Team building activities",
        "Final project showcase",
        "Certificate of completion",
      ],
      instructor: "Dr. Rajesh Kumar & Team",
      featured: true,
      color: "from-orange-400 to-red-400",
    },
    {
      id: 2,
      title: "Parent-Child Coding Workshop",
      subtitle: "Learn programming together as a family",
      category: "workshops",
      type: "upcoming",
      date: "May 25, 2024",
      time: "10:00 AM - 1:00 PM",
      location: "Online via Zoom",
      price: "₹1,500 per family",
      ageGroup: "Ages 6+ with parents",
      capacity: "20 families",
      registered: "12 families",
      image: "/placeholder.svg?height=300&width=500&query=parent+child+coding+together",
      description:
        "A fun introduction to programming where parents and children learn together. No prior experience needed!",
      highlights: [
        "Scratch programming basics",
        "Create simple games",
        "Family bonding activity",
        "Take-home projects",
        "Resource materials included",
      ],
      instructor: "Anita Verma",
      featured: true,
      color: "from-blue-400 to-purple-400",
    },
    {
      id: 3,
      title: "Young Artists Exhibition",
      subtitle: "Showcase of student artwork and creativity",
      category: "competitions",
      type: "upcoming",
      date: "June 8, 2024",
      time: "4:00 PM - 7:00 PM",
      location: "Wonder Minds Gallery",
      price: "Free Entry",
      ageGroup: "All ages welcome",
      capacity: "Open event",
      registered: "50+ artworks",
      image: "/placeholder.svg?height=300&width=500&query=children+art+exhibition",
      description:
        "Celebrate creativity with our annual art exhibition featuring paintings, sculptures, and digital art by our young artists.",
      highlights: [
        "Student artwork display",
        "Live art demonstrations",
        "Meet the artists",
        "Art supply vendors",
        "Refreshments provided",
      ],
      instructor: "Creative Arts Team",
      featured: true,
      color: "from-pink-400 to-rose-400",
    },
  ]

  const upcomingEvents = [
    {
      id: 4,
      title: "Robotics Competition Prep",
      category: "workshops",
      type: "upcoming",
      date: "May 30, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "STEM Lab",
      price: "₹2,000",
      ageGroup: "Ages 10-16",
      icon: Gamepad2,
      color: "from-green-400 to-emerald-400",
    },
    {
      id: 5,
      title: "Creative Writing Workshop",
      category: "workshops",
      type: "upcoming",
      date: "June 2, 2024",
      time: "10:00 AM - 12:00 PM",
      location: "Online",
      price: "₹800",
      ageGroup: "Ages 8-14",
      icon: BookOpen,
      color: "from-purple-400 to-violet-400",
    },
    {
      id: 6,
      title: "Science Fair 2024",
      category: "competitions",
      type: "upcoming",
      date: "June 12, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "Main Campus",
      price: "Free",
      ageGroup: "Ages 6-16",
      icon: Microscope,
      color: "from-cyan-400 to-blue-400",
    },
    {
      id: 7,
      title: "Music & Movement Session",
      category: "workshops",
      type: "upcoming",
      date: "June 5, 2024",
      time: "4:00 PM - 5:30 PM",
      location: "Music Room",
      price: "₹600",
      ageGroup: "Ages 3-8",
      icon: Music,
      color: "from-yellow-400 to-orange-400",
    },
  ]

  const ongoingEvents = [
    {
      id: 8,
      title: "Monthly Parent Support Group",
      category: "webinars",
      type: "ongoing",
      schedule: "Every 2nd Saturday",
      time: "7:00 PM - 8:30 PM",
      location: "Online",
      price: "Free",
      description: "Monthly discussions on parenting challenges and solutions",
      icon: Heart,
      color: "from-pink-400 to-rose-400",
    },
    {
      id: 9,
      title: "Weekly Coding Club",
      category: "workshops",
      type: "ongoing",
      schedule: "Every Wednesday",
      time: "4:00 PM - 5:30 PM",
      location: "Computer Lab",
      price: "₹500/session",
      description: "Regular coding practice and project development",
      icon: Code,
      color: "from-indigo-400 to-purple-400",
    },
  ]

  const pastEvents = [
    {
      id: 10,
      title: "Spring Science Festival",
      date: "March 15, 2024",
      participants: "200+ students",
      image: "/placeholder.svg?height=200&width=300&query=science+festival+children",
      description: "Amazing science demonstrations and experiments",
      highlights: ["50+ experiments", "Guest scientists", "Awards ceremony"],
    },
    {
      id: 11,
      title: "Winter Art Workshop Series",
      date: "January 2024",
      participants: "150+ families",
      image: "/placeholder.svg?height=200&width=300&query=winter+art+workshop",
      description: "Month-long series of creative workshops",
      highlights: ["5 different art forms", "Family participation", "Exhibition"],
    },
    {
      id: 12,
      title: "Coding Bootcamp 2023",
      date: "December 2023",
      participants: "80+ teens",
      image: "/placeholder.svg?height=200&width=300&query=coding+bootcamp+teenagers",
      description: "Intensive coding program for teenagers",
      highlights: ["Web development", "Mobile apps", "Final presentations"],
    },
  ]

  const filteredEvents = featuredEvents.concat(upcomingEvents).filter((event) => {
    const categoryMatch = selectedCategory === "all" || event.category === selectedCategory
    const typeMatch = selectedType === "all" || event.type === selectedType
    return categoryMatch && typeMatch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">Events & Workshops</Badge>
            <h1 className="text-5xl font-bold mb-6">Learning Never Stops</h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Join our exciting events, workshops, and competitions designed to inspire, educate, and bring our learning
              community together. From hands-on workshops to creative competitions, there's something for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Event Filters */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Event Categories</h3>
              <div className="flex flex-wrap gap-4">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`btn-hover ${
                      selectedCategory === category.id
                        ? "bg-purple-600 text-white"
                        : "bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
                    }`}
                  >
                    <category.icon className="mr-2 h-4 w-4" />
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Event Status</h3>
              <div className="flex flex-wrap gap-4">
                {eventTypes.map((type) => (
                  <Button
                    key={type.id}
                    variant={selectedType === type.id ? "default" : "outline"}
                    onClick={() => setSelectedType(type.id)}
                    className={`btn-hover ${
                      selectedType === type.id
                        ? "bg-purple-600 text-white"
                        : "bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
                    }`}
                  >
                    {type.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-600 mb-4">Featured Events</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Don't Miss These Amazing Events</h2>
          </div>

          <div className="space-y-12">
            {featuredEvents.map((event, index) => (
              <Card
                key={event.id}
                className={`border-0 shadow-2xl overflow-hidden animate-fade-in-up delay-${index * 100}`}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute top-4 left-4 px-4 py-2 bg-gradient-to-r ${event.color} text-white rounded-full font-semibold`}
                    >
                      Featured Event
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-purple-900">
                      {event.price}
                    </div>
                  </div>

                  <CardContent className="p-8 space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">{event.title}</h3>
                      <p className="text-purple-600 font-medium text-lg mb-4">{event.subtitle}</p>
                      <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Calendar className="h-5 w-5 text-purple-500" />
                          <span className="text-gray-700">{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-purple-500" />
                          <span className="text-gray-700">{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-5 w-5 text-purple-500" />
                          <span className="text-gray-700">{event.location}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Users className="h-5 w-5 text-purple-500" />
                          <span className="text-gray-700">{event.ageGroup}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Ticket className="h-5 w-5 text-purple-500" />
                          <span className="text-gray-700">{event.capacity}</span>
                        </div>
                        <div className="text-sm text-green-600 font-medium">✅ {event.registered} registered</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Event Highlights:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {event.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Star className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <p className="text-sm text-gray-600">Instructor:</p>
                        <p className="font-medium text-gray-800">{event.instructor}</p>
                      </div>
                      <div className="flex gap-3">
                        <Button className="bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white btn-hover transition-all duration-300">
                          Learn More
                        </Button>
                        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 btn-hover">
                          Register Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-600 mb-4">Coming Soon</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card
                key={event.id}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover animate-fade-in-up delay-${index * 100}`}
              >
                <CardContent className="p-6 space-y-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${event.color} rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-110`}
                  >
                    <event.icon className="h-6 w-6 text-white" />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">{event.title}</h3>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-600 mb-3">
                      {event.ageGroup}
                    </Badge>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-purple-500" />
                      <span className="text-gray-600">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-purple-500" />
                      <span className="text-gray-600">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-purple-500" />
                      <span className="text-gray-600">{event.location}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4">
                    <span className="font-bold text-purple-600">{event.price}</span>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700 btn-hover">
                      Register
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Events */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-600 mb-4">Ongoing Programs</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Regular Events</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ongoingEvents.map((event, index) => (
              <Card key={event.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow card-hover">
                <CardContent className="p-8 space-y-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${event.color} rounded-full flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110`}
                  >
                    <event.icon className="h-8 w-8 text-white" />
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                  </div>

                  <div className="space-y-2 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <Calendar className="h-4 w-4 text-purple-500" />
                      <span className="text-gray-600">{event.schedule}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="h-4 w-4 text-purple-500" />
                      <span className="text-gray-600">{event.time}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <MapPin className="h-4 w-4 text-purple-500" />
                      <span className="text-gray-600">{event.location}</span>
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <span className="font-bold text-purple-600 text-lg">{event.price}</span>
                    <div className="mt-4">
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 btn-hover">
                        Join Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gray-100 text-gray-600 mb-4">Past Events</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Event Highlights</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={event.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-gray-800/80 text-white px-3 py-1 rounded-full text-sm">
                    {event.date}
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>

                  <div className="text-sm text-purple-600 font-medium">👥 {event.participants}</div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      {event.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                          <Star className="h-3 w-3 text-yellow-500" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Don't Miss Out on Our Next Event!</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Stay updated with our latest events, workshops, and competitions. Join our community and be the first to
            know about exciting opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-semibold btn-hover">
              Subscribe to Updates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 btn-hover transition-all duration-300"
            >
              View All Events
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
