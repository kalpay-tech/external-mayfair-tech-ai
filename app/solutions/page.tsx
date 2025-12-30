import type { Metadata } from "next";
import Link from "next/link";
import { ProductSection } from "./product-section";

export const metadata: Metadata = {
  title: "AI Solutions for Enterprise Automation | Custom LLMs & Predictive Analytics | MayfairTech.ai",
  description:
    "Unlock efficiency with MayfairTech.ai's enterprise AI solutions—custom LLMs, automation, predictive analytics, and computer vision built for scalable operations.",
  keywords:
    "AI for business automation, enterprise AI solutions, generative AI for companies, predictive analytics platform, e-commerce development services, marketplace builder, BPO outsourcing company, logistics technology company",
};

export default function SolutionsPage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <SolutionsSection />
      <ProductSection />
      {/* <IndustriesSection /> */}
      <CTASection />
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
          src="/images/solution-and-industries/hero-img-solution&industries.jpg"
          alt="Background"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center text-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#6fee51]/30 bg-[#6fee51]/10 px-4 py-2">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#6fee51]">
              Solutions & Industries
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Enterprise Technology Solutions
            <br />
            <span className="text-[#6fee51]">Built for Scale</span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg text-white/80">
            From AI automation to global logistics, we deliver end-to-end technology solutions that
            transform operations, reduce costs, and drive sustainable growth across industries.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#6fee51] px-8 py-4 text-base font-semibold text-[#081b3e] transition hover:bg-white"
            >
              Get Started
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#solutions"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Solutions Section
function SolutionsSection() {
  const solutions = [
    {
      id: "ai",
      title: "Artificial Intelligence",
      tagline: "AI Solutions That Transform Business Operations",
      description:
        "Our AI division delivers tailored automation, custom LLM development, generative models, and predictive intelligence designed around your organization's workflows. Reduce operational cost, accelerate performance, and deploy scalable intelligence without compromising security.",
      capabilities: [
        "Custom AI & LLM Development",
        "Predictive Analytics for Sales & Operations",
        "AI Chatbots & Customer Support Automation",
        "Computer Vision & OCR Systems",
        "Process Automation & RPA",
        "E-commerce Personalization Engines",
        "Real-Time CCTV Surveillance & Security Monitoring",
        "Enterprise Facial Recognition for Workforce Management",
        "Enterprise Voice Assistants with Multilingual Support"
      ],
      image: "/images/solution-and-industries/ai.png",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "ebusiness",
      title: "E-Business Solutions",
      tagline: "End-to-End E-Business Solutions That Drive Revenue",
      description:
        "We design and build complete digital commerce ecosystems using secure, scalable, and optimized technology. Whether launching an online store, creating a multi-vendor marketplace, or digitizing retail operations, we deliver the systems needed to grow revenue and streamline operations.",
      capabilities: [
        "E-commerce website & app development",
        "Marketplace platforms",
        "Payment gateway & fintech integrations",
        "Inventory & order automation",
        "Catalog and product management",
        "Omnichannel retail systems",
        "Cross border Concierge service "
      ],
      image: "/images/solution-and-industries/e-business.png",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    // {
    //   id: "bpo",
    //   title: "BPO & Call Center",
    //   tagline: "Scalable BPO & Call Center Services for Global Brands",
    //   description:
    //     "Our BPO division provides 24/7 customer support, technical assistance, and back-office outsourcing powered by AI tools. We help businesses reduce cost, improve quality metrics, and provide seamless customer experiences across every channel.",
    //   capabilities: [
    //     "Voice, chat, and email support",
    //     "Technical support & troubleshooting",
    //     "Lead generation & telesales",
    //     "Multilingual call center solutions",
    //     "Back-office processing",
    //     "AI workforce management tools",
    //   ],
    //   image: "/images/solution-and-industries/bpo.jpg",
    //   icon: (
    //     <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    //     </svg>
    //   ),
    // },
    {
      id: "logistics",
      title: "Logistics & Supply Chain",
      tagline: "Tech-Driven Logistics & Supply Chain Solutions",
      description:
        "We bring intelligence, automation, and real-time visibility to logistics operations. From cross-border delivery to warehouse automation, our solutions reduce delays, improve accuracy, and support scalable fulfilment for retail and e-commerce.",
      capabilities: [
        "Warehouse management systems (WMS)",
        "AI route optimization",
        "Order tracking & delivery management",
        "Cross-border logistics",
        "Supply chain automation",
        "3PL & fulfilment operations",
        "AI-Powered Custom & Shipping Calculation Engine"
      ],
      image: "/images/solution-and-industries/logistics.png",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="solutions" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#081b3e] sm:text-4xl lg:text-5xl">
            Our Solutions
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#707e8a]">
            Comprehensive technology solutions designed to transform your business operations
          </p>
        </div>

        <div className="space-y-20">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className={`group flex flex-col gap-8 lg:flex-row lg:items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6fee51]/10 text-[#081b3e] transition-all duration-200 ease-out group-hover:scale-110 group-hover:bg-[#2ea82b] group-hover:shadow-lg">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#081b3e] transition-colors duration-200 ease-out group-hover:text-[#2ea82b] lg:text-3xl">
                  {solution.title}
                </h3>
                <p className="text-lg font-semibold text-[#6fee51] transition-colors duration-200 ease-out group-hover:text-[#2ea82b]">{solution.tagline}</p>
                <p className="text-[#707e8a] transition-all duration-200 ease-out">{solution.description}</p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {solution.capabilities.map((capability, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-3 transition-all duration-200 ease-out group-hover:translate-x-2"
                    >
                      <svg
                        className="mt-1 h-5 w-5 flex-shrink-0 text-[#6fee51] transition-colors duration-200 ease-out group-hover:text-[#2ea82b]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-[#081b3e] transition-all duration-200 ease-out">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Card */}
              <div className="flex-1">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-200 ease-out group-hover:shadow-[#2ea82b]/30 group-hover:scale-105">
                  <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#081b3e] to-[#183f40]">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-2"
                    />
                  </div>
                  
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081b3e]/80 via-[#081b3e]/40 to-transparent opacity-60 transition-opacity duration-200 ease-out group-hover:opacity-40"></div>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl border-4 border-transparent transition-all duration-200 ease-out group-hover:border-[#2ea82b]"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute bottom-6 left-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6fee51] text-[#081b3e] shadow-lg transition-all duration-200 ease-out group-hover:bg-[#2ea82b] group-hover:scale-125 group-hover:rotate-12">
                    {solution.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Industries Section
function IndustriesSection() {
  const industries = [
    {
      title: "Retail & E-Commerce",
      description:
        "Tech solutions for scaling online and offline retail — including AI recommendations, inventory automation, and omnichannel commerce.",
      image: "/images/solution-and-industries/retail.jpg",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Manufacturing",
      description:
        "Improve operational efficiency with predictive maintenance, automation, and quality control systems.",
      image: "/images/solution-and-industries/manufacturing.jpg",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: "Healthcare",
      description:
        "HIPAA-compliant digital systems, patient support, AI triage, and secure health data management.",
      image: "/images/solution-and-industries/healthcare.jpg",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "Logistics & Transport",
      description:
        "Fleet management, tracking, route optimization, and end-to-end logistics visibility.",
      image: "/images/solution-and-industries/logistics-transport.jpg",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      title: "Financial Services",
      description:
        "Secure digital banking, fraud detection, KYC automation, and intelligent customer engagement.",
      image: "/images/solution-and-industries/financial.jpg",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#081b3e] via-[#183f40] to-[#31703a] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Industries We Serve
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Industry-specific digital transformation solutions tailored to your sector's unique challenges
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#6fee51]/20"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Background */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-3"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#081b3e] via-[#081b3e]/70 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                {/* Icon */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#6fee51] text-[#081b3e] shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[#6fee51]/50">
                  {industry.icon}
                </div>

                {/* Title */}
                <h3 className="mb-2 text-xl font-bold text-white transition-all duration-300 group-hover:text-[#6fee51]">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/80 transition-all duration-300 group-hover:text-white">
                  {industry.description}
                </p>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 group-hover:border-[#6fee51]"></div>

              {/* Shine Effect */}
              <div className="absolute inset-0 translate-x-[-100%] skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}











// CTA Section
function CTASection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 p-12 shadow-xl sm:p-16">
          <div className="relative z-10 text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#081b3e] sm:text-4xl">
              Ready to Transform Your Operations?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-[#707e8a]">
              Let's discuss how our solutions can help your business achieve operational excellence
              and sustainable growth.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#6fee51] px-8 py-4 text-base font-semibold text-[#081b3e] shadow-lg transition hover:bg-[#5dd840]"
              >
                Schedule a Consultation
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/insights/case-studies"
                className="inline-flex items-center rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-[#081b3e] transition hover:border-[#6fee51]"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
