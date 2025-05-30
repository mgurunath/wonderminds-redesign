import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Users, Target, Heart, ArrowRight, Lightbulb, Star } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">Our Story</Badge>
            <h1 className="text-5xl font-bold mb-6">Nurturing Minds, Building Futures</h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Founded with a vision to transform education, The Wonder Minds has been empowering learners of all ages
              through innovative, engaging, and personalized learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-purple-100 text-purple-600 mb-4">Our Mission</Badge>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Unlocking Every Child's Potential</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe every child is born with infinite potential. Our mission is to create learning environments
                  that nurture creativity, build confidence, and inspire lifelong learning through innovative
                  educational approaches.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Target,
                    title: "Purpose-Driven",
                    desc: "Every program designed with clear learning outcomes",
                  },
                  { icon: Heart, title: "Child-Centered", desc: "Putting children's needs and interests first" },
                  { icon: Lightbulb, title: "Innovation", desc: "Using cutting-edge educational methodologies" },
                  { icon: Users, title: "Community", desc: "Building strong learning communities" },
                ].map((item, index) => (
                  <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="space-y-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/child-potential.png"
                alt="Child showing potential and strength"
                width={500}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-float opacity-60"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-pink-400 rounded-full animate-bounce-gentle opacity-60"></div>
          <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-blue-400 rounded-full animate-float opacity-60"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-wiggle opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="bg-white/20 text-white border-white/30 mb-4 hover-bounce">Our Journey</Badge>
            <h2 className="text-4xl font-bold text-white mb-6 glow-text">Growing Together Since 2020</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Follow our journey along the road of educational innovation and growth
            </p>
          </div>

          <div className="max-w-6xl mx-auto relative">
            {/* Animated Road Path */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full">
              {/* Main Road Line */}
              <div className="w-full h-full bg-gradient-to-b from-yellow-400 via-orange-400 to-red-400 rounded-full relative overflow-hidden">
                {/* Animated Road Markings */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full">
                  <div
                    className="w-full h-8 bg-white opacity-60 animate-bounce-gentle"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(to bottom, white 0px, white 8px, transparent 8px, transparent 16px)",
                      animation: "road-markings 3s linear infinite",
                    }}
                  ></div>
                </div>
              </div>

              {/* Road Glow Effect */}
              <div className="absolute inset-0 w-6 h-full bg-gradient-to-b from-yellow-400/30 via-orange-400/30 to-red-400/30 blur-sm -left-2 animate-pulse-glow"></div>
            </div>

            {/* Timeline Items */}
            <div className="space-y-24 relative z-10">
              {[
                {
                  year: "2020",
                  title: "The Beginning",
                  description:
                    "Started with a small group of passionate educators in Roorkee, focusing on creative learning for young children.",
                  milestone: "First 50 students",
                  side: "left",
                  icon: "🌱",
                  color: "from-green-400 to-emerald-500",
                },
                {
                  year: "2021",
                  title: "Expanding Horizons",
                  description:
                    "Introduced STEM programs and parent workshops, building a comprehensive learning ecosystem.",
                  milestone: "500+ families joined",
                  side: "right",
                  icon: "🚀",
                  color: "from-blue-400 to-cyan-500",
                },
                {
                  year: "2022",
                  title: "Digital Innovation",
                  description: "Launched online programs and hybrid learning models, reaching children across India.",
                  milestone: "2000+ students online",
                  side: "left",
                  icon: "💻",
                  color: "from-purple-400 to-violet-500",
                },
                {
                  year: "2023",
                  title: "Community Impact",
                  description:
                    "Partnered with schools and organizations to bring quality education to underserved communities.",
                  milestone: "10+ school partnerships",
                  side: "right",
                  icon: "🤝",
                  color: "from-orange-400 to-red-500",
                },
                {
                  year: "2024",
                  title: "Recognition & Growth",
                  description:
                    "Received awards for educational innovation and expanded to serve corporate training programs.",
                  milestone: "5000+ lives impacted",
                  side: "left",
                  icon: "🏆",
                  color: "from-yellow-400 to-amber-500",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${item.side === "right" ? "flex-row-reverse" : ""} animate-fade-in-up stagger-${index + 1}`}
                >
                  {/* Content Card */}
                  <div className={`w-5/12 ${item.side === "right" ? "pl-8" : "pr-8"}`}>
                    <Card className="border-0 shadow-2xl hover-lift hover-glow transition-all duration-500 bg-white/10 backdrop-blur-sm border border-white/20">
                      <CardContent className="p-8 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-2xl hover-rotate transition-transform duration-300 animate-gradient-shift`}
                            >
                              {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white glow-text">{item.title}</h3>
                          </div>
                          <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover-bounce">
                            {item.milestone}
                          </Badge>
                        </div>
                        <p className="text-purple-100 leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Road Milestone */}
                  <div className="w-2/12 flex justify-center relative">
                    {/* Milestone Marker */}
                    <div className="relative z-20">
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl hover-glow transition-all duration-500 animate-bounce-in border-4 border-white/30`}
                      >
                        {item.year.slice(-2)}
                      </div>

                      {/* Pulsing Ring */}
                      <div
                        className={`absolute inset-0 w-20 h-20 bg-gradient-to-br ${item.color} rounded-full animate-ping opacity-20`}
                      ></div>

                      {/* Year Label */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
                        <span className="text-white font-semibold text-sm">{item.year}</span>
                      </div>
                    </div>

                    {/* Connecting Road Segment */}
                    {index < 4 && (
                      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-1 h-24">
                        <div className="w-full h-full bg-gradient-to-b from-white/40 to-transparent animate-pulse"></div>
                      </div>
                    )}
                  </div>

                  {/* Empty Space for Alignment */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>

            {/* Road End Marker */}
            <div className="flex justify-center mt-16 animate-fade-in-up">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl hover-glow transition-all duration-500 animate-heartbeat border-4 border-white/30">
                  ∞
                </div>
                <div className="absolute inset-0 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-ping opacity-20"></div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <span className="text-white font-semibold">Future</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-600 mb-4">Our Team</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Founding Members & Visionary Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our distinguished leaders bring decades of experience from academia, government, and industry to guide our
              educational mission.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Venkat Gottipati",
                role: "Venture Capitalist",
                expertise: "Startup cheer leader, Avid Land Investor and Developer in USA",
              },
              {
                name: "Prof. Narendra Singh",
                role: "Former Professor, IIT Roorkee",
                expertise: "Advisor to Former Chief Minister, Uttrakhand",
              },
              {
                name: "Prof. S.C. Jain",
                role: "Former Dean",
                expertise: "Infrastructure & Services at IIT Mandi And IIT Roorkee",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-all duration-300 border-0 shadow-lg hover:shadow-2xl overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden h-[300px] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    {member.name === "Venkat Gottipati" ? (
                      <Image
                        src="/images/venkat-gottipati.jpg"
                        alt={member.name}
                        width={400}
                        height={300}
                        className="w-full h-full object-contain object-center"
                      />
                    ) : member.name === "Prof. Narendra Singh" ? (
                      <Image
                        src="/images/prof-narendra-singh.jpg"
                        alt={member.name}
                        width={400}
                        height={300}
                        className="w-full h-full object-contain object-center"
                      />
                    ) : member.name === "Prof. S.C. Jain" ? (
                      <Image
                        src="/images/prof-sc-jain.jpg"
                        alt={member.name}
                        width={400}
                        height={300}
                        className="w-full h-full object-contain object-center"
                      />
                    ) : (
                      <div className="text-gray-400 text-center">
                        <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                        <p className="text-sm">Photo Coming Soon</p>
                      </div>
                    )}
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                    <p className="text-purple-600 font-medium">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.expertise}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-600 mb-4">Our Values</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">What Drives Us Every Day</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Compassion",
                description: "We approach every child with empathy, understanding their unique needs and challenges.",
              },
              {
                icon: Star,
                title: "Excellence",
                description: "We strive for the highest standards in everything we do, from curriculum to care.",
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "We believe in the power of community and work together with families and educators.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "We continuously evolve our methods to stay at the forefront of educational excellence.",
              },
            ].map((value, index) => (
              <Card key={index} className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Learning Community</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Be part of a movement that's transforming education and empowering the next generation of innovators and
            leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-semibold">
                Explore Our Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 btn-hover transition-all duration-300"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
