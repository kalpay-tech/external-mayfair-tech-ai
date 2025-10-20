import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-card to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-secondary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground mb-4 text-pretty">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-muted-foreground">Last updated: 23 September 2025</p>
          </div>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: CheckCircle,
                title: "Transparency",
                description: "We're clear about what data we collect and why",
              },
              {
                icon: CheckCircle,
                title: "Security",
                description: "Your data is protected with industry-leading security",
              },
              {
                icon: CheckCircle,
                title: "Control",
                description: "You have control over your personal information",
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
                  1. Information Collection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground text-sm">
                  We collect only the essential details — such as your name, contact information, and payment details —
                  to prepare your quotation and process your order securely.
                </p>
                <p className="text-muted-foreground text-sm">
                  We do not collect unnecessary personal data or use it for unrelated purposes.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ArrowRight className="h-5 w-5 mr-2 text-secondary" />
                  2. Data Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm">
                  <li>Your personal and payment information is handled with strict confidentiality.</li>
                  <li>All payment links are encrypted and processed through a trusted, secure payment gateway.</li>
                  <li>We follow industry best practices to keep your information safe at every stage.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ArrowRight className="h-5 w-5 mr-2 text-secondary" />
                  3. Data Retention
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground text-sm">
                  We keep your information only for as long as it’s needed to:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm">
                  <li>Complete your order and provide support,</li>
                  <li>Meet legal or accounting requirements.</li>
                </ul>
                <p className="text-muted-foreground text-sm">
                  After this period, your data is safely deleted from our systems.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ArrowRight className="h-5 w-5 mr-2 text-secondary" />
                  4. No Data Sharing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground text-sm">
                  Your information is never sold or shared with third parties.
                </p>
                <p className="text-muted-foreground text-sm">
                  It is only shared with trusted logistics and payment partners—and only when required to fulfill your
                  order.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ArrowRight className="h-5 w-5 mr-2 text-secondary" />
                  5. Client Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground text-sm">You have full control over your information.</p>
                <p className="text-muted-foreground text-sm">
                  You may request to update or delete your data anytime by contacting us at{" "}
                  <a href="mailto:contact@mayfair.com.pk" className="text-primary hover:underline font-medium">
                    contact@mayfair.com.pk
                  </a>
                  .
                </p>
                <p className="text-muted-foreground text-sm">We’ll process your request promptly and with care.</p>
              </CardContent>
            </Card>

            <Card className="mb-10">
              <CardHeader>
                <CardTitle>Returns & Refunds Policy</CardTitle>
                <CardDescription>
                  Applicable to all transactions made via the Mayfairtech.AI eBusiness platform.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 text-sm text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">1. Return Eligibility (Buyers)</h3>
                  <p className="mb-2">
                    We want you to be completely satisfied with your purchase. You may request a return if:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>The item received is damaged, defective, or incorrect.</li>
                    <li>The product you received does not match its description on our platform.</li>
                    <li>The return request is submitted within 7 calendar days of delivery.</li>
                    <li>The product is in unused condition, with original packaging and tags intact.</li>
                  </ul>
                  <p className="mt-2">
                    Our support team will review your request and guide you through the return process promptly.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">2. Return Eligibility (Sellers / B2B Clients)</h3>
                  <p className="mb-2">For business and bulk orders, returns are evaluated case by case.</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Any discrepancy between Purchase Order and delivered items must be reported within 48 hours of
                      receipt.
                    </li>
                    <li>
                      Logistics issues (e.g., misrouted, delayed, or lost shipments) must be supported by proper
                      documentation.
                    </li>
                  </ul>
                  <p className="mt-2">Our team will work with you to resolve valid claims efficiently and fairly.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">3. Non-Returnable Items</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Customized or made-to-order goods.</li>
                    <li>Digital products or licenses once activated.</li>
                    <li>Items marked as “Final Sale” or “Non-Returnable” on the platform.</li>
                    <li>Products returned without prior authorization from our team.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">4. Refunds</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Once approved, refunds are processed within 7–10 business days to your original payment method.
                    </li>
                    <li>In select cases, store credit or service credits may be offered as an alternative.</li>
                    <li>
                      Shipping and handling fees are non-refundable unless the issue arises from a platform error or
                      service fault.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">5. Trial Packages / Discounted Promotions</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Trial offers, sample packages, or discounted promotions are non-refundable once activated.</li>
                    <li>
                      If specific performance benchmarks (agreed in writing) are not met, partial credit may be
                      considered at MayfairTech.AI’s discretion.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">6. Dispute Resolution</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      All disputes regarding returns or refunds must be submitted in writing to{" "}
                      <a href="mailto:support@mayfairtech.ai" className="text-primary hover:underline font-medium">
                        support@mayfairtech.ai
                      </a>{" "}
                      within 10 calendar days of the transaction.
                    </li>
                    <li>
                      MayfairTech.AI will review all documentation and evidence carefully and make a final decision in
                      line with platform policies.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact card retained */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-sm">
                  <div>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:contact@mayfair.com.pk" className="text-primary hover:underline font-medium">
                      contact@mayfair.com.pk
                    </a>
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
