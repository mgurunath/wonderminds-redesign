import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, BookOpen, Users, Lightbulb, Star, Play, Heart, Brain, Sparkles } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 text-white"
      >
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
                Where <br />
                <span className="text-purple-900">The Wonderful Minds</span> <br />
                Meets <span className="text-yellow-400">Wisdom</span>
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed animate-fade-in delay-200">
                Empowering children, parents, and educators through innovative learning experiences that spark
                creativity, build confidence, and unlock infinite potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-300">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-semibold btn-hover btn-glow btn-icon-slide group"
                  >
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5 icon transition-transform duration-300" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  className="bg-purple-900 border-purple-900 text-white hover:bg-white hover:text-purple-900 hover:border-purple-900 btn-hover btn-icon-rotate group transition-all duration-300"
                >
                  <Play className="mr-2 h-5 w-5 icon transition-transform duration-300" />
                  Watch Our Story
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in delay-400 lg:ml-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full blur-2xl opacity-30 animate-gentle-float"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TZuz2wiMojrbCVtCWI2pYjoVgYL3Fr.png"
                alt="Young woman learning with tablet"
                width={500}
                height={500}
                className="relative rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105 ml-auto"
              />
            </div>
          </div>
        </div>

        {/* Minimal Floating Elements */}
        <div className="absolute top-20 left-10 floating-element">
          <div className="w-8 h-8 bg-yellow-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 floating-element">
          <div className="w-6 h-6 bg-pink-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 floating-element">
          <div className="w-10 h-10 bg-orange-400 rounded-full opacity-60"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* New Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Numbers That Inspire</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Shaping Future Innovators Through Numbers and Partnerships
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "5000+", label: "Happy Children", icon: Heart },
              { number: "200+", label: "Expert Educators", icon: Users },
              { number: "50+", label: "Programs", icon: BookOpen },
              { number: "98%", label: "Success Rate", icon: Star },
            ].map((stat, index) => (
              <Card
                key={index}
                className={`text-center p-6 border-0 shadow-lg card-hover bg-gradient-to-br from-purple-50 to-pink-50 animate-slide-up delay-${(index + 1) * 100}`}
              >
                <CardContent className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
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

      {/* Services Preview */}
      <section id="programs" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-purple-100 text-purple-600 mb-4 badge-hover">Our Programs</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Tailored Learning Experiences for Every Mind</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From early childhood development to corporate training, we create transformative educational journeys.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Little Explorers",
                description: "Creative learning programs for children aged 3-8",
                icon: Sparkles,
                color: "from-yellow-400 to-orange-400",
                age: "Ages 3-8",
                category: "early-childhood",
              },
              {
                title: "Young Innovators",
                description: "STEM and creative thinking for ages 9-16",
                icon: Lightbulb,
                color: "from-blue-400 to-purple-400",
                age: "Ages 9-16",
                category: "elementary",
              },
              {
                title: "Parent & Educator Hub",
                description: "Resources and training for adults",
                icon: Brain,
                color: "from-green-400 to-teal-400",
                age: "Adults",
                category: "adult",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`group card-hover border-0 shadow-lg overflow-hidden animate-slide-up delay-${(index + 1) * 100}`}
              >
                <CardContent className="p-8 space-y-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-600 badge-hover">
                    {service.age}
                  </Badge>
                  <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <Link href={`/programs?category=${service.category}`}>
                    <Button
                      variant="ghost"
                      className="text-purple-600 hover:text-purple-700 p-0 h-auto font-semibold btn-icon-slide group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 icon transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section id="resources" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-pink-100 text-pink-600 mb-4 badge-hover">Success Stories</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Transforming Lives, One Mind at a Time</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 card-hover">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400 transition-transform duration-300 hover:scale-110"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "The Wonder Minds transformed my daughter's approach to learning. She went from being shy and
                    hesitant to confident and curious about everything around her."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold transition-transform duration-300 hover:scale-110">
                      S
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Sarah Johnson</div>
                      <div className="text-gray-600 text-sm">Parent of 7-year-old Emma</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Link href="/testimonials">
                <Button className="bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white btn-hover btn-icon-slide transition-all duration-300">
                  Read More Stories
                  <ArrowRight className="ml-2 h-4 w-4 icon transition-transform duration-300" />
                </Button>
              </Link>
            </div>

            <div className="relative animate-slide-up delay-200">
              <Image
                src="/images/teacher-student.jpg"
                alt="Teacher helping young student learn"
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white animate-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">Ready to Unlock Your Child's Potential?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto animate-fade-in delay-100">
            Join thousands of families who have discovered the joy of learning with The Wonder Minds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-200">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-semibold btn-hover btn-glow"
              >
                Book a Free Consultation
              </Button>
            </Link>
            <Link href="/programs">
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 btn-hover transition-all duration-300"
              >
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
