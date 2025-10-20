import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              About <span className="text-primary">Mayfair Tech AI</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Founded on the principle of transforming businesses through intelligent technology, we are pioneers in AI,
              e-business, and logistics solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-primary">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p className="text-pretty">
                  Mayfair Tech AI was founded in 2018 with a vision to bridge the gap between cutting-edge artificial
                  intelligence and practical business applications. What started as a small team of AI researchers and
                  business strategists has grown into a global leader in enterprise technology solutions.
                </p>
                <p className="text-pretty">
                  Our journey began when we recognized that many businesses were struggling to harness the true
                  potential of AI and digital transformation. We set out to create solutions that not only leverage the
                  latest technological advances but also integrate seamlessly with existing business processes.
                </p>
                <p className="text-pretty">
                  Today, we serve Fortune 500 companies across three continents, helping them optimize operations,
                  enhance customer experiences, and drive sustainable growth through intelligent automation and
                  data-driven insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-primary">Our Foundation</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-pretty">
                  To empower businesses with intelligent technology solutions that drive innovation, efficiency, and
                  sustainable growth in an increasingly digital world.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-pretty">
                  To be the global leader in AI-powered business transformation, creating a future where intelligent
                  technology seamlessly enhances human potential and business success.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">Values</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary" className="mr-2">
                    Innovation
                  </Badge>
                  <Badge variant="secondary" className="mr-2">
                    Integrity
                  </Badge>
                  <Badge variant="secondary" className="mr-2">
                    Excellence
                  </Badge>
                  <Badge variant="secondary" className="mr-2">
                    Collaboration
                  </Badge>
                  <Badge variant="secondary" className="mr-2">
                    Sustainability
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
