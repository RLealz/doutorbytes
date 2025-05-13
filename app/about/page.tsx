import { Card, CardContent } from "@/components/ui/card"
import { Award, Clock, Users, ThumbsUp } from "lucide-react"
import { CTASection } from "@/components/cta-section"

export default function AboutPage() {
  const team = [
    {
      name: "Carlos Oliveira",
      role: "Founder & Lead Technician",
      bio: "With over 15 years of experience in computer repair and IT services, Carlos founded DoutorBytes with a mission to provide reliable and affordable tech solutions.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Ana Silva",
      role: "Hardware Specialist",
      bio: "Ana specializes in hardware diagnostics and repair. She has a knack for bringing even the most damaged devices back to life.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Rafael Santos",
      role: "Network Engineer",
      bio: "Rafael is our networking guru, with expertise in setting up and troubleshooting complex network infrastructures for businesses of all sizes.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Juliana Costa",
      role: "Customer Service Manager",
      bio: "Juliana ensures that every customer receives exceptional service from the moment they contact us until their device is returned in perfect condition.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">About DoutorBytes</h1>
          <p className="text-xl text-muted-foreground mb-0 max-w-2xl mx-auto">
            Your trusted partner for all computer repair and IT service needs
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2010, DoutorBytes began as a small repair shop with a big mission: to provide honest,
                  reliable, and affordable computer repair services to the local community.
                </p>
                <p>
                  Our founder, Carlos Oliveira, noticed that many repair shops were either charging exorbitant prices or
                  providing subpar service. He believed there was a better way to help people with their technology
                  problems.
                </p>
                <p>
                  Over the years, we've grown from a one-person operation to a team of certified technicians, each
                  specializing in different aspects of computer repair and IT services. Despite our growth, we've
                  maintained our commitment to personalized service and technical excellence.
                </p>
                <p>
                  Today, DoutorBytes serves both individuals and businesses throughout São Paulo, providing a
                  comprehensive range of services from simple repairs to complex network setups and data recovery
                  operations.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="DoutorBytes repair shop"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Excellence</h3>
                <p className="text-muted-foreground text-center">
                  We strive for excellence in every repair and service we provide, ensuring the highest quality results.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <ThumbsUp className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Integrity</h3>
                <p className="text-muted-foreground text-center">
                  We operate with complete transparency, providing honest assessments and fair pricing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <Clock className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Efficiency</h3>
                <p className="text-muted-foreground text-center">
                  We value your time and work efficiently to get your devices back to you as quickly as possible.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Customer Focus</h3>
                <p className="text-muted-foreground text-center">
                  We put our customers first, ensuring a positive experience from start to finish.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our certified technicians are passionate about solving your technology problems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10+</div>
              <p className="text-xl opacity-90">Years in Business</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold mb-2">5,000+</div>
              <p className="text-xl opacity-90">Repairs Completed</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold mb-2">98%</div>
              <p className="text-xl opacity-90">Customer Satisfaction</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold mb-2">24h</div>
              <p className="text-xl opacity-90">Average Turnaround</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
