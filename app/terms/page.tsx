import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-card to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-secondary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">Terms & Conditions</h1>
            <p className="text-xl text-muted-foreground mb-4 text-pretty">
              These terms govern your use of our services. Please read them carefully before using our platform.
            </p>
            <p className="text-sm text-muted-foreground">Last updated: 23 September 2025</p>
          </div>
        </div>
      </section>

      {/* Terms Overview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: CheckCircle,
                title: "Fair Terms",
                description: "Balanced terms that protect both parties",
              },
              {
                icon: CheckCircle,
                title: "Your Rights",
                description: "Clear explanation of your rights and protections",
              },
              {
                icon: CheckCircle,
                title: "Responsibilities",
                description: "Understanding mutual obligations and limits",
              },
            ].map((principle, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <principle.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{principle.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="prose prose-gray max-w-none">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ArrowRight className="h-5 w-5 mr-2 text-secondary" />
                  Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  By accessing and using Mayfair Tech AI's services, you accept and agree to be bound by the terms and
                  provision of this agreement.
                </p>
                <p className="text-muted-foreground text-sm">
                  These terms apply to all visitors, users, and others who access or use our services, including our
                  website, applications, and any related services provided by Mayfair Tech AI.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ArrowRight className="h-5 w-5 mr-2 text-secondary" />
                  1. Quotation Validity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Your quotation and payment link are valid for 24 hours from the time of issue.
                </p>
                <p className="text-muted-foreground text-sm">
                  After 24 hours, prices or terms may change based on market conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ArrowRight className="h-5 w-5 mr-2 text-secondary" />
                  2. Pricing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Prices are based on current market rates and may vary due to exchange rates or supplier changes.
                </p>
                <p className="text-muted-foreground text-sm">
                  All prices are exclusive of applicable taxes unless stated otherwise.
                </p>
                <p className="text-muted-foreground text-sm">We always aim to keep our pricing transparent and fair.</p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ArrowRight className="h-5 w-5 mr-2 text-secondary" />
                  3. Payment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Please complete your payment within 24 hours to confirm your order.
                </p>
                <p className="text-muted-foreground text-sm">
                  The secure payment link provided is unique to your quotation.
                </p>
                <p className="text-muted-foreground text-sm">
                  Once payment is received, the order details cannot be changed unless agreed upon in writing.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ArrowRight className="h-5 w-5 mr-2 text-secondary" />
                  4. Shipping
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Delivery times depend on your chosen shipping method (Express, Console, or Sea Freight).
                </p>
                <p className="text-muted-foreground text-sm">
                  Shipping charges are calculated separately and may vary based on destination and shipping mode.
                </p>
                <p className="text-muted-foreground text-sm">
                  While we do our best to ensure smooth delivery, delays caused by customs or shipping carriers are
                  unfortunately beyond our control.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ArrowRight className="h-5 w-5 mr-2 text-secondary" />
                  5. Order Confirmation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Your order will be confirmed once full payment has been received within the 24-hour window.
                </p>
                <p className="text-muted-foreground text-sm">
                  Orders not paid within this time may require a new quotation.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ArrowRight className="h-5 w-5 mr-2 text-secondary" />
                  6. Refunds & Cancellations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Payments are non-refundable, except in cases where a delay or issue is solely caused by
                  MayfairTech.AI.
                </p>
                <p className="text-muted-foreground text-sm">
                  Once payment is processed, order cancellations are not permitted, unless agreed upon in writing.
                </p>
                <p className="text-muted-foreground text-sm">
                  If any issue arises, our support team will do their best to assist you promptly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  If you have any questions about these terms and conditions, please contact us:
                </p>
                <div className="space-y-2 text-sm">
                  <div>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:contact@mayfair.com.pk" className="text-primary hover:underline font-medium">
                      contact@mayfair.com.pk
                    </a>
                  </div>
                  <div>
                    <strong>Dubai Office:</strong> FOAM0658 Compass Building, Al Shohada Road, AL Hamra Industrial
                    Zone-FZ, Ras Al Khaimah, United Arab Emirates
                  </div>
                  <div>
                    <strong>Lahore Office:</strong> Asian Food Industries Limited, 46-49 Industrial Area, Gulberg-lll,
                    Lahore, Pakistan
                  </div>
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
