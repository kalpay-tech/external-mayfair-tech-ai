"use client";

import { useState } from "react";

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState<"privacy" | "terms">("privacy");

  return (
    <div className="flex flex-col">
      <HeroSection />
      <ContentSection activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-[600px] overflow-hidden px-6 py-20 lg:min-h-[700px] lg:py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/legal/Legal-header.jpg"
          alt="Legal & Compliance"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-4xl items-center justify-center text-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#6fee51]/30 bg-[#6fee51]/10 px-4 py-2">
            <svg className="h-4 w-4 text-[#6fee51]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#6fee51]">
              Legal Information
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
            Legal & Compliance
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Your trust matters to us. Review our policies to understand how we protect your data and
            the terms that govern our services.
          </p>
        </div>
      </div>
    </section>
  );
}

// Content Section
function ContentSection({ 
  activeTab, 
  setActiveTab 
}: { 
  activeTab: "privacy" | "terms";
  setActiveTab: (tab: "privacy" | "terms") => void;
}) {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Tab Navigation */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-2xl border border-gray-200 bg-gray-50 p-2 shadow-sm">
            <button
              onClick={() => setActiveTab("privacy")}
              className={`flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition ${activeTab === "privacy"
                ? "bg-[#6fee51] text-[#081b3e] shadow-md"
                : "text-[#081b3e] hover:bg-white"
                }`}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab("terms")}
              className={`flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition ${activeTab === "terms"
                ? "bg-[#6fee51] text-[#081b3e] shadow-md"
                : "text-[#081b3e] hover:bg-white"
                }`}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Terms & Conditions
            </button>
          </div>
        </div>

        {activeTab === "privacy" ? <PrivacyPolicy /> : <TermsConditions />}
      </div>
    </section>
  );
}

// Privacy Policy Content
function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Introduction",
      content: `At MayfairTech.AI, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website or use our services.

By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with our policies, please do not use our services.`,
    },
    {
      title: "2. Information We Collect",
      content: `We collect information in several ways:

**Personal Information:** Name, email address, phone number, company name, job title, and billing information when you contact us, register for services, or make purchases.

**Usage Data:** Information about how you interact with our website, including IP address, browser type, pages visited, time spent on pages, and referring URLs.

**Cookies and Tracking:** We use cookies and similar technologies to enhance your experience, analyze usage patterns, and deliver personalized content.

**Business Information:** Details about your business needs, project requirements, and preferences shared during consultations.`,
    },
    {
      title: "3. How We Use Your Information",
      content: `We use the collected information for the following purposes:

• To provide, maintain, and improve our services
• To process transactions and send related information
• To respond to your inquiries and provide customer support
• To send promotional communications (with your consent)
• To analyze usage patterns and optimize our website
• To detect, prevent, and address technical issues
• To comply with legal obligations`,
    },
    {
      title: "4. Data Sharing and Disclosure",
      content: `We do not sell your personal information. We may share your data with:

**Service Providers:** Third-party vendors who assist us in operating our business (hosting, analytics, payment processing).

**Business Partners:** With your consent, we may share information with partners for joint offerings.

**Legal Requirements:** When required by law, court order, or to protect our rights and safety.

**Business Transfers:** In connection with mergers, acquisitions, or asset sales.`,
    },
    {
      title: "5. Data Security",
      content: `We implement industry-standard security measures to protect your information, including:

• SSL/TLS encryption for data transmission
• Secure data storage with access controls
• Regular security audits and assessments
• Employee training on data protection
• Incident response procedures

However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.`,
    },
    {
      title: "6. Your Rights",
      content: `Depending on your location, you may have the following rights:

• **Access:** Request a copy of your personal data
• **Correction:** Request correction of inaccurate data
• **Deletion:** Request deletion of your data
• **Portability:** Receive your data in a portable format
• **Objection:** Object to certain processing activities
• **Withdrawal:** Withdraw consent at any time

To exercise these rights, contact us at support@mayfair.com.pk`,
    },
    {
      title: "7. Cookies Policy",
      content: `We use cookies to:

• Remember your preferences and settings
• Analyze website traffic and performance
• Provide personalized content and advertising
• Enable social media features

You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.`,
    },
    {
      title: "8. Client Rights",
      content: `You have full control over your information. You may request to update or delete your data anytime by contacting us at contact@mayfair.com.pk.
      We will process your request promptly and with care.`,
    },
    {
  title: "9. Returns & Refunds Policy",
  content: `Applicable to all transactions made via the MayfairTech.AI eBusiness platform.

1. Return Eligibility (Buyers)
• The item received is damaged, defective, or incorrect.
• The product does not match its description on our platform.
• The return request is submitted within 7 days of delivery.
• The product is unused, with original packaging and tags intact.
Our support team will review your request and guide you through the process promptly.

2. Return Eligibility (Sellers / B2B Clients)
• Returns for business or bulk orders are evaluated case by case.
• Any discrepancy between the Purchase Order and delivered items must be reported within 48 hours.
• Logistics issues (misrouted, delayed, or lost shipments) must include proper documentation.
Our team will work with you to resolve valid claims efficiently and fairly.

3. Non-Returnable Items
• Customized or made-to-order goods.
• Digital products or licenses once activated.
• Items marked as “Final Sale” or “Non-Returnable.”
• Products returned without prior authorization.

4. Refunds
• Approved refunds are processed within 7–10 business days to the original payment method.
• Store credit or service credit may be offered when applicable.
• Shipping and handling fees are non-refundable unless the issue is caused by a platform error.

5. Trial Packages / Discounted Promotions
• Trial offers, sample packages, or promotional discounts are non-refundable once activated.
• If agreed performance benchmarks (in writing) are not met, partial credit may be considered at MayfairTech.AI’s discretion.

6. Dispute Resolution
• All disputes must be submitted in writing to support@mayfair.com.pk within 10 days of the transaction.
• MayfairTech.AI will review all documentation and make a final decision according to platform policy.`,
},

{
  title: "10. Changes to This Policy",
    content: `We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new policy on our website and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.`,
    },
{
  title: "11. Contact Us",
    content: `If you have questions about this Privacy Policy or our data practices, please contact us:

**Email:** support@mayfair.com.pk

**Dubai Office:**
FOAM0658 Compass Building, Al Shohada Road, AL Hamra Industrial Zone-FZ, Ras Al Khaimah, UAE

**Lahore Office:**
Asian Food Industries Limited, 46-49 Industrial Area, Gulberg-lll, Lahore, Pakistan`,
    },
  ];

return (
  <div>
    <div className="mb-8 flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-6">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#081b3e] text-white">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </div>
      <div>
        <h2 className="text-xl font-bold text-[#081b3e]">Privacy Policy</h2>
        <p className="text-sm text-[#707e8a]">Last Updated: December 2, 2025</p>
      </div>
    </div>

    <div className="space-y-8">
      {sections.map((section, index) => (
        <div key={index} className="border-b border-gray-100 pb-8 last:border-0">
          <h3 className="mb-4 text-lg font-bold text-[#081b3e]">{section.title}</h3>
          <div className="prose prose-gray max-w-none">
            {section.content.split("\n\n").map((paragraph, pIndex) => (
              <p
                key={pIndex}
                className="mb-4 whitespace-pre-line text-[#707e8a]"
                dangerouslySetInnerHTML={{
                  __html: paragraph
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#081b3e]">$1</strong>')
                    .replace(/^• /gm, '<span class="text-[#6fee51] mr-2">•</span>'),
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

// Terms & Conditions Content
function TermsConditions() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing or using MayfairTech.AI's website, services, or products, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.

These terms constitute a legally binding agreement between you and MayfairTech.AI regarding your use of our services.`,
    },
    {
      title: "2. Description of Services",
      content: `MayfairTech.AI provides technology solutions including but not limited to:

• AI and Machine Learning Solutions
• E-Business and Digital Commerce Platforms
• BPO and Call Center Services
• Logistics and Supply Chain Technology
• Custom Software Development
• Technology Consulting Services

We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.`,
    },
    {
      title: "3. User Obligations",
      content: `By using our services, you agree to:

• Provide accurate and complete information
• Maintain the confidentiality of your account credentials
• Use our services only for lawful purposes
• Not interfere with the proper functioning of our services
• Not attempt to gain unauthorized access to our systems
• Not use our services to transmit harmful or malicious content
• Comply with all applicable laws and regulations`,
    },
    {
      title: "4. Intellectual Property",
      content: `**Our Property:** All content, designs, logos, trademarks, software, and materials on our website and in our services are owned by MayfairTech.AI or our licensors and are protected by intellectual property laws.

**Your Content:** You retain ownership of content you provide to us. By submitting content, you grant us a non-exclusive, worldwide license to use, reproduce, and process such content for providing our services.

**Restrictions:** You may not copy, modify, distribute, sell, or lease any part of our services or included software without our written permission.`,
    },
    {
      title: "5. Payment Terms",
      content: `**Pricing:** All prices are subject to change. We will notify you of any price changes before they take effect.

**Payment:** Payment is due as specified in your service agreement. We accept various payment methods as indicated during checkout.

**Taxes:** You are responsible for all applicable taxes related to your purchases.

**Refunds:** Refund policies vary by service. Please refer to your specific service agreement for details.`,
    },
    {
      title: "6. Confidentiality",
      content: `Both parties agree to maintain the confidentiality of any proprietary or confidential information shared during the course of our business relationship. This includes:

• Technical specifications and documentation
• Business strategies and plans
• Client lists and contact information
• Pricing and financial information
• Any information marked as confidential

This obligation survives termination of our agreement.`,
    },
    {
      title: "7. Limitation of Liability",
      content: `**Disclaimer:** Our services are provided "as is" without warranties of any kind, express or implied.

**Limitation:** To the maximum extent permitted by law, MayfairTech.AI shall not be liable for:

• Indirect, incidental, special, or consequential damages
• Loss of profits, revenue, or data
• Business interruption
• Damages exceeding the amount paid for services in the 12 months preceding the claim

Some jurisdictions do not allow these limitations, so they may not apply to you.`,
    },
    {
      title: "8. Indemnification",
      content: `You agree to indemnify, defend, and hold harmless MayfairTech.AI, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from:

• Your use of our services
• Your violation of these terms
• Your violation of any third-party rights
• Any content you submit to our services`,
    },
    {
      title: "9. Termination",
      content: `**By You:** You may terminate your use of our services at any time by contacting us.

**By Us:** We may suspend or terminate your access to our services if you violate these terms or for any other reason at our discretion.

**Effect:** Upon termination, your right to use our services ceases. Provisions that should survive termination (such as intellectual property, limitation of liability, and indemnification) will remain in effect.`,
    },
    {
      title: "10. Governing Law",
      content: `These Terms and Conditions shall be governed by and construed in accordance with the laws of the United Arab Emirates, without regard to conflict of law principles.

Any disputes arising from these terms shall be resolved through binding arbitration in Dubai, UAE, unless otherwise required by applicable law.`,
    },
    {
      title: "11. Changes to Terms",
      content: `We reserve the right to modify these Terms and Conditions at any time. We will notify you of material changes by posting the updated terms on our website and updating the "Last Updated" date.

Your continued use of our services after changes constitutes acceptance of the modified terms.`,
    },
    {
      title: "12. Contact Information",
      content: `For questions about these Terms and Conditions, please contact us:

**Email:** support@mayfair.com.pk

**Dubai Office:**
FOAM0658 Compass Building, Al Shohada Road, AL Hamra Industrial Zone-FZ, Ras Al Khaimah, UAE

**Lahore Office:**
Asian Food Industries Limited, 46-49 Industrial Area, Gulberg-lll, Lahore, Pakistan`,
    },
  ];

  return (
    <div>
      <div className="mb-8 flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-6">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#081b3e] text-white">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#081b3e]">Terms & Conditions</h2>
          <p className="text-sm text-[#707e8a]">Last Updated: December 2, 2025</p>
        </div>
      </div>

      <div className="space-y-8">
        {sections.map((section, index) => (
          <div key={index} className="border-b border-gray-100 pb-8 last:border-0">
            <h3 className="mb-4 text-lg font-bold text-[#081b3e]">{section.title}</h3>
            <div className="prose prose-gray max-w-none">
              {section.content.split("\n\n").map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="mb-4 whitespace-pre-line text-[#707e8a]"
                  dangerouslySetInnerHTML={{
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#081b3e]">$1</strong>')
                      .replace(/^• /gm, '<span class="text-[#6fee51] mr-2">•</span>'),
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
