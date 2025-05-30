"use client"
import { useState, useEffect, useMemo } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  ArrowRight,
  Clock,
  Users,
  Star,
  CheckCircle,
  Calendar,
  BookOpen,
  Lightbulb,
  Globe,
  Heart,
  Brain,
  Target,
  Award,
  Play,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import Image from "next/image"

export default function ProgramsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState("all")

  const [expandedFeatures, setExpandedFeatures] = useState<{ [key: number]: boolean }>({})

  // Set initial category from URL parameter and handle changes
  useEffect(() => {
    const categoryParam = searchParams.get("category")
    console.log("URL category param:", categoryParam)

    const newCategory = categoryParam || "all"
    if (newCategory !== selectedCategory) {
      setSelectedCategory(newCategory)
    }
  }, [searchParams])

  // Handle category button clicks
  const handleCategoryChange = (categoryId: string) => {
    console.log("Changing category to:", categoryId)

    // Update state immediately
    setSelectedCategory(categoryId)

    // Update URL without causing scroll or glitches
    const newUrl = categoryId === "all" ? "/programs" : `/programs?category=${categoryId}`
    window.history.replaceState({}, "", newUrl)
  }

  // Toggle expanded features for a specific program
  const toggleFeatures = (programId: number) => {
    setExpandedFeatures((prev) => ({
      ...prev,
      [programId]: !prev[programId],
    }))
  }

  const categories = [
    { id: "all", name: "All Programs", icon: Globe },
    { id: "early-childhood", name: "Early Childhood", icon: Heart },
    { id: "elementary", name: "Elementary", icon: BookOpen },
    { id: "teen", name: "Teen Programs", icon: Brain },
    { id: "adult", name: "Adult Learning", icon: Target },
  ]

  const programs = [
    {
      id: 1,
      title: "Little Explorers",
      subtitle: "Creative Foundation Program",
      category: "early-childhood",
      ageRange: "Ages 3-5",
      duration: "45 minutes",
      groupSize: "6-8 children",
      price: "₹2,500/month",
      image: "/images/little-explorers-activity.png",
      description: "A magical introduction to learning through play, creativity, and exploration.",
      features: [
        "Sensory play activities",
        "Basic literacy and numeracy",
        "Social skills development",
        "Creative arts and crafts",
        "Music and movement",
        "Nature exploration",
      ],
      highlights: ["Small group setting", "Qualified early childhood educators", "Parent involvement"],
      color: "from-pink-400 to-rose-400",
    },
    {
      id: 2,
      title: "Wonder Kids",
      subtitle: "Comprehensive Learning Program",
      category: "elementary",
      ageRange: "Ages 6-8",
      duration: "60 minutes",
      groupSize: "8-10 children",
      price: "₹3,000/month",
      image: "/images/wonder-kids-stem.png",
      description: "Building strong foundations in core subjects while nurturing creativity and critical thinking.",
      features: [
        "Reading and writing skills",
        "Mathematical concepts",
        "Science experiments",
        "Creative storytelling",
        "Problem-solving activities",
        "Digital literacy basics",
      ],
      highlights: ["Personalized learning paths", "Progress tracking", "Home learning support"],
      color: "from-blue-400 to-cyan-400",
    },
    {
      id: 3,
      title: "Young Innovators",
      subtitle: "STEM Excellence Program",
      category: "elementary",
      ageRange: "Ages 9-12",
      duration: "75 minutes",
      groupSize: "10-12 children",
      price: "₹3,500/month",
      image: "/images/young-innovators-stem.png",
      description: "Advanced STEM learning with hands-on projects, coding, and innovation challenges.",
      features: [
        "Coding and programming",
        "Robotics and engineering",
        "Advanced mathematics",
        "Scientific research projects",
        "Innovation challenges",
        "Presentation skills",
      ],
      highlights: ["Project-based learning", "Technology integration", "Competition preparation"],
      color: "from-purple-400 to-violet-400",
    },
    {
      id: 4,
      title: "Teen Leaders",
      subtitle: "Leadership & Life Skills",
      category: "teen",
      ageRange: "Ages 13-16",
      duration: "90 minutes",
      groupSize: "12-15 teens",
      price: "₹4,000/month",
      image: "/images/teen-leaders-collaboration.jpg",
      description: "Developing leadership skills, emotional intelligence, and preparing for future success.",
      features: [
        "Leadership development",
        "Communication skills",
        "Emotional intelligence",
        "Career exploration",
        "Financial literacy",
        "Community service projects",
      ],
      highlights: ["Mentorship program", "Real-world projects", "College preparation"],
      color: "from-green-400 to-emerald-400",
    },
    {
      id: 5,
      title: "Creative Arts Studio",
      subtitle: "Artistic Expression Program",
      category: "elementary",
      ageRange: "Ages 5-12",
      duration: "60 minutes",
      groupSize: "8-10 children",
      price: "₹2,800/month",
      image: "/images/creative-arts-studio.png", // Ensure this path is correct
      description: "Unleashing creativity through various art forms, music, and creative expression.",
      features: [
        "Visual arts and painting",
        "Music and singing",
        "Drama and theater",
        "Creative writing",
        "Digital art basics",
        "Art history exploration",
      ],
      highlights: ["Professional art supplies", "Exhibition opportunities", "Guest artist sessions"],
      color: "from-orange-400 to-amber-400",
    },
    {
      id: 6,
      title: "Parent Empowerment Workshop",
      subtitle: "Parenting Skills Development",
      category: "adult",
      ageRange: "Adults",
      duration: "2 hours",
      groupSize: "15-20 parents",
      price: "₹1,500/session",
      image: "/images/parent-empowerment-workshop.png", // Updated image path
      description: "Empowering parents with effective strategies for supporting their child's development.",
      features: [
        "Child psychology insights",
        "Effective communication",
        "Behavior management",
        "Learning support strategies",
        "Screen time management",
        "Building confidence",
      ],
      highlights: ["Expert facilitators", "Interactive sessions", "Take-home resources"],
      color: "from-teal-400 to-cyan-400",
    },
    {
      id: 7,
      title: "Educator Training Program",
      subtitle: "Professional Development",
      category: "adult",
      ageRange: "Educators",
      duration: "4 hours",
      groupSize: "20-25 educators",
      price: "₹5,000/workshop",
      image: "/images/educator-training-program.png", // Updated image path
      description: "Advanced training for educators to implement innovative teaching methodologies.",
      features: [
        "Modern teaching techniques",
        "Technology integration",
        "Classroom management",
        "Assessment strategies",
        "Inclusive education",
        "Student engagement",
      ],
      highlights: ["Certification provided", "Ongoing support", "Resource library access"],
      color: "from-indigo-400 to-purple-400",
    },
    {
      id: 8,
      title: "Summer Innovation Camp",
      subtitle: "Intensive Learning Experience",
      category: "elementary",
      ageRange: "Ages 7-14",
      duration: "Full day",
      groupSize: "15-20 children",
      price: "₹15,000/week",
      image: "/images/summer-innovation-camp.png", // Updated image path
      description: "Week-long intensive camps focusing on specific themes and skills development.",
      features: [
        "Theme-based learning",
        "Outdoor activities",
        "Team building exercises",
        "Skill workshops",
        "Cultural activities",
        "Field trips",
      ],
      highlights: ["All materials included", "Lunch provided", "End-of-camp showcase"],
      color: "from-yellow-400 to-orange-400",
    },
  ]

  // More efficient filtering with useMemo
  const filteredPrograms = useMemo(() => {
    console.log("Current selectedCategory:", selectedCategory)
    console.log("Total programs:", programs.length)

    if (selectedCategory === "all") {
      console.log("Showing all programs:", programs.length)
      return programs
    } else {
      const filtered = programs.filter((program) => program.category === selectedCategory)
      console.log(`Filtered programs for ${selectedCategory}:`, filtered.length)
      return filtered
    }
  }, [selectedCategory])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">Our Programs</Badge>
            <h1 className="text-5xl font-bold mb-6">Transformative Learning Experiences</h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Discover our comprehensive range of programs designed to nurture every aspect of your child's development,
              from early childhood through teenage years, plus support for parents and educators.
            </p>
          </div>
        </div>
      </section>

      {/* Program Categories */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => handleCategoryChange(category.id)}
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
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredPrograms.map((program, index) => (
              <Card
                key={program.id}
                className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in-up delay-${index * 100}`}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    width={400}
                    height={300}
                    priority={program.id === 5}
                    unoptimized={program.id === 5}
                    className={`w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 ${
                      program.id === 3 ? "object-top" : ""
                    }`}
                  />
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${program.color} text-white rounded-full text-sm font-semibold`}
                  >
                    {program.ageRange}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                    {program.price}
                  </div>
                </div>

                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{program.title}</h3>
                    <p className="text-purple-600 font-medium mb-4">{program.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed">{program.description}</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-purple-500" />
                      <span className="text-gray-600">{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-purple-500" />
                      <span className="text-gray-600">{program.groupSize}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-purple-500" />
                      <span className="text-gray-600">Flexible schedule</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">What You'll Learn:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {(expandedFeatures[program.id] ? program.features : program.features.slice(0, 4)).map(
                        (feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ),
                      )}
                    </div>
                    {program.features.length > 4 && (
                      <button
                        onClick={() => toggleFeatures(program.id)}
                        className="flex items-center space-x-1 text-sm text-purple-600 mt-2 hover:text-purple-800 transition-colors duration-200"
                      >
                        <span>
                          {expandedFeatures[program.id] ? "Show less" : `+${program.features.length - 4} more features`}
                        </span>
                        {expandedFeatures[program.id] ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                    )}
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Program Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-purple-100 text-purple-600">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 btn-hover">
                      Enroll Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button className="bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white btn-hover transition-all duration-300">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-600 mb-4">Why Choose Us</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">What Makes Our Programs Special</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Expert Educators",
                description:
                  "Our team consists of qualified professionals with years of experience in child development and education.",
                color: "from-yellow-400 to-orange-400",
              },
              {
                icon: Heart,
                title: "Personalized Approach",
                description:
                  "Every child is unique. We tailor our teaching methods to match individual learning styles and pace.",
                color: "from-pink-400 to-rose-400",
              },
              {
                icon: Lightbulb,
                title: "Innovative Methods",
                description:
                  "We use cutting-edge educational techniques, technology, and creative approaches to make learning engaging.",
                color: "from-purple-400 to-violet-400",
              },
              {
                icon: Users,
                title: "Small Group Sizes",
                description:
                  "Limited class sizes ensure every child receives individual attention and support from our educators.",
                color: "from-blue-400 to-cyan-400",
              },
              {
                icon: Award,
                title: "Proven Results",
                description:
                  "Our programs have helped thousands of children achieve academic success and personal growth.",
                color: "from-green-400 to-emerald-400",
              },
              {
                icon: Globe,
                title: "Holistic Development",
                description:
                  "We focus on developing not just academic skills, but also social, emotional, and creative abilities.",
                color: "from-teal-400 to-cyan-400",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow card-hover"
              >
                <CardContent className="space-y-4">
                  <div
                    className={`mx-auto w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-600 mb-4">Easy Enrollment</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">How to Get Started</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Choose Program",
                description: "Select the program that best fits your child's age and interests.",
                icon: BookOpen,
              },
              {
                step: "02",
                title: "Schedule Demo",
                description: "Book a free demo session to experience our teaching methodology.",
                icon: Calendar,
              },
              {
                step: "03",
                title: "Meet Educators",
                description: "Have a consultation with our educators to discuss your child's needs.",
                icon: Users,
              },
              {
                step: "04",
                title: "Start Learning",
                description: "Begin your child's transformative learning journey with us.",
                icon: Play,
              },
            ].map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-purple-900">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Learning Journey?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of families who have chosen The Wonder Minds for their children's educational development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-semibold btn-hover">
                Book Free Demo
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 btn-hover transition-all duration-300"
              >
                Get More Information
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
