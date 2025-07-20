import { Card, CardContent } from "@/components/ui/card"
import { Award, Clock, Briefcase, Zap } from "lucide-react"
import { CTASection } from "@/components/cta-section"

export default function AboutPage() {

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">About DoutorBytes</h1>
          <p className="text-xl text-muted-foreground mb-0 max-w-2xl mx-auto">
            Fast, professional IT solutions designed for busy corporate professionals
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
                  Founded in 2022, DoutorBytes was born from a simple observation: corporate professionals and business 
                  people don&apos;t have time to waste on device repairs and lengthy waiting periods.
                </p>
                <p>
                  In today&apos;s fast-paced business environment, every minute counts. When your laptop crashes before 
                  an important presentation or your network goes down during a critical meeting, you need solutions 
                  that work as fast as you do.
                </p>
                <p>
                  We recognized that traditional repair shops weren&apos;t meeting the needs of busy professionals who 
                  require immediate, reliable service. That&apos;s why we built DoutorBytes around speed, efficiency, 
                  and minimal downtime.
                </p>
                <p>
                  Our streamlined processes, express repair options, and proactive communication ensure that your 
                  technology issues are resolved quickly, so you can get back to what matters most - running your business.
                </p>
                <p>
                  Today, we serve corporate clients and business professionals throughout Lisboa, providing rapid 
                  IT solutions that respect your time and understand your urgency.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="DoutorBytes professional IT services"
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
            <h2 className="text-3xl font-bold tracking-tight mb-2">Why Busy Professionals Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Built for the demands of modern business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <Zap className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Speed</h3>
                <p className="text-muted-foreground text-center">
                  Express repairs and same-day service options because your business can&apos;t wait.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <Briefcase className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Professional</h3>
                <p className="text-muted-foreground text-center">
                  Corporate-grade service with the professionalism your business demands.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <Clock className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Time-Conscious</h3>
                <p className="text-muted-foreground text-center">
                  We understand deadlines and work around your schedule, not ours.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Reliable</h3>
                <p className="text-muted-foreground text-center">
                  Consistent, dependable service that keeps your business running smoothly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Focus */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Built for Business Professionals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Express Service Options</h3>
                <p className="text-muted-foreground">
                  Same-day repairs, priority queuing, and emergency response services for when you can&apos;t afford downtime.
                </p>
                
                <h3 className="text-xl font-semibold text-primary">Flexible Scheduling</h3>
                <p className="text-muted-foreground">
                  Early morning drop-offs, late evening pickups, and weekend availability to work around your busy schedule.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Corporate Partnerships</h3>
                <p className="text-muted-foreground">
                  Dedicated account management and bulk service agreements for companies that need ongoing IT support.
                </p>
                
                <h3 className="text-xl font-semibold text-primary">Transparent Communication</h3>
                <p className="text-muted-foreground">
                  Real-time updates, clear timelines, and upfront pricing so you always know where your repair stands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Delivering Results Since 2022</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Trusted by corporate professionals who demand excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">2+</div>
              <p className="text-xl opacity-90">Years Serving Professionals</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-xl opacity-90">Corporate Clients Served</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold mb-2">98%</div>
              <p className="text-xl opacity-90">Same-Day Resolution Rate</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold mb-2">&lt;4h</div>
              <p className="text-xl opacity-90">Average Response Time</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
