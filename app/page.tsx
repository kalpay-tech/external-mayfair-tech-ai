import { Navigation } from "@/components/navigation"
import { DomainCard } from "@/components/domain-card"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Brain, ShoppingCart, Truck, ArrowRight, CheckCircle, Headphones } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-card to-background py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 animate-fade-in">
              Innovating Business with <span className="text-primary">AI, E-Business, BPO & Logistics</span>
            </h1>
            <p
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              Mayfair Tech AI provides advanced AI, e-business, logistics, and BPO (call center) outsourcing solutions
              that power innovation and growth. We enable enterprises to achieve digital transformation through
              intelligent technology, streamlined strategies, and reliable customer support services.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Cards Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-primary">Our Core Domains</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Specialized solutions across four key areas of modern business transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <DomainCard
              title="Artificial Intelligence"
              description="Harness the power of AI to automate processes, gain insights, and drive intelligent decision-making across your organization."
              features={[
                "Machine Learning Models",
                "Natural Language Processing",
                "Computer Vision Solutions",
                "Predictive Analytics",
                "AI Strategy Consulting",
              ]}
              icon={<Brain className="h-8 w-8 text-primary" />}
              delay={0}
              image="/ai-brain-network.jpg"
            />

            <DomainCard
              title="E-business Solutions"
              description="Comprehensive digital commerce platforms and tools to optimize your online presence and drive revenue growth."
              features={[
                "E-commerce Platforms",
                "Digital Marketing Tools",
                "Customer Analytics",
                "Payment Integration",
                "Mobile Commerce",
              ]}
              icon={<ShoppingCart className="h-8 w-8 text-primary" />}
              delay={200}
              image="/ecommerce-shopping.jpg"
            />

            <DomainCard
              title="Logistics & Supply Chain"
              description="Streamline operations with intelligent logistics solutions that optimize efficiency and reduce costs."
              features={[
                "Supply Chain Optimization",
                "Inventory Management",
                "Route Planning",
                "Warehouse Automation",
                "Real-time Tracking",
              ]}
              icon={<Truck className="h-8 w-8 text-primary" />}
              delay={400}
              image="/logistics-warehouse.jpg"
            />

            <DomainCard
              title="BPO & Call Center Outsourcing"
              description="Deliver exceptional customer support and optimize business operations with our scalable BPO solutions."
              features={[
                "24/7 Multilingual Customer Support",
                "Inbound & Outbound Call Management",
                "Technical Helpdesk & Ticketing Support",
                "Back-Office & Data Processing Solutions",
              ]}
              icon={<Headphones className="h-8 w-8 text-primary" />}
              delay={600}
              image="/call-center-support.jpg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-primary">
                Why Choose Mayfair Tech AI?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                We combine deep technical expertise with industry knowledge to deliver solutions that not only meet your
                current needs but scale with your future growth.
              </p>

              <div className="space-y-4">
                {[
                  "Proven track record with Fortune 500 companies",
                  "Cutting-edge AI and machine learning capabilities",
                  "End-to-end solution development and support",
                  "Global presence with local expertise",
                  "24/7 technical support and maintenance",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <img
                  src="/ai-office-visualization.png"
                  alt="Modern technology workspace"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 text-balance">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 text-pretty">
            Let's discuss how our AI, e-business, logistics, and BPO solutions can drive your success.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
