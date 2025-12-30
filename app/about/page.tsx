"use client";

import type { Metadata } from "next";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <PhilosophySection />
      <ValuesSection />
      <TeamSection />
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
          src="/images/about/hero-background.jpg"
          alt="About MayfairTech"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center text-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#6fee51]/30 bg-[#6fee51]/10 px-4 py-2 backdrop-blur">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#6fee51]">
              About Us
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Transforming Businesses Through
            <br />
            <span className="text-[#6fee51]">Intelligent Technology</span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg text-white/90 leading-relaxed">
            A venture of the Mayfair Group (est. 1969), blending decades of expertise with cutting-edge
            AI to deliver transformative digital solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#6fee51] px-8 py-4 text-base font-semibold text-[#081b3e] transition hover:bg-white hover:scale-105"
            >
              Get In Touch
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20 hover:scale-105"
            >
              Our Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6fee51]/10 px-4 py-2">
              <span className="text-sm font-semibold text-[#081b3e]">Since 1969</span>
            </div>

            <h2 className="text-3xl font-bold text-[#081b3e] sm:text-4xl lg:text-5xl">
              About MayfairTech.AI
            </h2>

            <div className="space-y-4 text-[#707e8a] leading-relaxed">
              <p className="text-lg">
                MayfairTech.AI, a venture of the Mayfair Group (est. 1969), blends Artificial
                Intelligence, eBusiness, and Smart Logistics to build intelligent, end-to-end digital
                transformation platforms. With decades of cross-border trade expertise, we help
                businesses modernize, scale, and deliver secure, seamless digital experiences.
              </p>

              <p>
                We create AI-powered, customer-centric solutions that enhance operational efficiency,
                strengthen data security, and accelerate digital growth. Our capabilities span AI
                automation, eBusiness development, supply chain intelligence, and enterprise
                technology solutions—all designed to drive measurable ROI.
              </p>

              <p>
                As we expand, MayfairTech.AI is entering BPO and outsourcing services, offering
                scalable technology development and AI-driven tools to support global business
                operations.
              </p>

              <div className="rounded-2xl border-l-4 border-[#6fee51] bg-gradient-to-r from-[#6fee51]/10 to-transparent p-6">
                <p className="font-semibold text-[#081b3e] text-lg">
                  Our mission: to make technology intuitive and impactful, empowering organizations to
                  transform how they work, trade, and connect in an intelligent digital world.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="group relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105">
              <img
                src="/images/about/company-image.jpg"
                alt="MayfairTech Office"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl border-4 border-transparent transition-all duration-500 group-hover:border-[#6fee51]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Stats Section
function StatsSection() {
  const stats = [
    {
      value: "55+",
      label: "Years of Excellence",
      description: "Mayfair Group Heritage",
      gradient: "bg-[#183f40]",
      pattern: "M0 0L50 50M50 0L0 50"
    },
    {
      value: "200+",
      label: "Projects Delivered",
      description: "Across Industries",
      gradient: "bg-[#31703a]",
      pattern: "M25 0L50 25L25 50L0 25Z"
    },
    {
      value: "30+",
      label: "Countries Served",
      description: "Global Reach",
      gradient: "bg-[#6fee51]",
      pattern: "M0 25Q25 0 50 25T100 25"
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      description: "Proven Results",
      gradient: "bg-[#707e8a]",
      pattern: "M25 0A25 25 0 1125 50A25 25 0 1125 0"
    },
  ];

  return (
    <section className="bg-[#081b3e] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Our Impact in Numbers
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Decades of excellence delivering transformative solutions worldwide
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl"
            >
              {/* Color Background */}
              <div className={`absolute inset-0 ${stat.gradient}`}></div>

              {/* Content */}
              <div className="relative z-10 p-8 text-center">
                <div className="mb-4 text-5xl font-bold text-white lg:text-6xl">{stat.value}</div>
                <div className="mb-2 text-lg font-semibold text-white">{stat.label}</div>
                <div className="text-sm text-white/80">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Philosophy Section (Vision, Mission, Core Objective)
function PhilosophySection() {
  const philosophy = [
    {
      title: "Our Vision",
      content:
        "MayfairTech.AI is the global partner of choice for secure, scalable, and intelligent digital transformation. We empower businesses from global enterprises to local SMEs with AI-driven tools that simplify operations, unlock growth, and create lasting impact. Guided by our vision of a digitally inclusive Pakistan, we are building technology that makes innovation accessible to everyone.",
      gradient: "bg-[#081b3e]",
      accentColor: "bg-[#6fee51]",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: "Our Mission",
      content:
        "MayfairTech.AI empowers businesses with AI-driven eBusiness and logistics solutions that simplify commerce, enhance efficiency, and connect industries to drive accessible, impactful digital transformation.",
      gradient: "bg-[#183f40]",
      accentColor: "bg-[#6fee51]",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Core Objective",
      content:
        "MayfairTech.AI is a trusted end-to-end partner for AI-powered eBusiness and logistics transformation. We deliver rapid value, unified governance, and scalable growth through intelligent digital solutions. Our focus is on shaping next-generation platforms that expand market access, enhance digital ecosystems, and redefine how people and businesses connect in a smarter global economy.",
      gradient: "bg-[#31703a]",
      accentColor: "bg-[#6fee51]",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 py-20">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-0 top-0 h-96 w-96 animate-pulse rounded-full bg-purple-300 opacity-20 blur-3xl"></div>
        <div className="absolute right-0 top-1/3 h-96 w-96 animate-pulse rounded-full bg-blue-300 opacity-20 blur-3xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/3 h-96 w-96 animate-pulse rounded-full bg-teal-300 opacity-20 blur-3xl" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-[#081b3e] px-6 py-2">
            <span className="text-sm font-bold text-white">WHO WE ARE</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-[#081b3e] sm:text-4xl lg:text-5xl">
            Our Philosophy
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#707e8a]">
            Guiding principles that drive our commitment to excellence and innovation
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {philosophy.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Dynamic Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-95 transition-opacity duration-500 group-hover:opacity-100`}></div>

              {/* Animated Mesh Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(111, 238, 81, 0.3) 2px, transparent 2px), radial-gradient(circle at 80% 80%, rgba(111, 238, 81, 0.3) 2px, transparent 2px)',
                  backgroundSize: '60px 60px',
                  backgroundPosition: '0 0, 30px 30px'
                }}></div>
              </div>

              {/* Floating Orbs */}
              <div className="absolute -right-8 -top-8 h-32 w-32 animate-pulse rounded-full bg-[#6fee51]/20 blur-2xl transition-transform duration-700 group-hover:scale-150"></div>
              <div className="absolute -bottom-8 -left-8 h-40 w-40 animate-pulse rounded-full bg-[#6fee51]/10 blur-2xl transition-transform duration-700 group-hover:scale-150" style={{ animationDelay: '1s' }}></div>

              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Icon Container with Multiple Layers */}
                <div className="relative mb-6 h-20 w-20">
                  {/* Outer Ring */}
                  <div className="absolute inset-0 animate-spin-slow rounded-full border-4 border-dashed border-[#6fee51]/40"></div>
                  {/* Middle Ring */}
                  <div className="absolute inset-2 animate-spin-slow rounded-full border-2 border-[#6fee51]/30" style={{ animationDirection: 'reverse', animationDuration: '8s' }}></div>
                  {/* Icon Center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6fee51] text-[#081b3e] shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                      {item.icon}
                    </div>
                  </div>
                </div>

                {/* Title with Underline Effect */}
                <div className="relative mb-4">
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <div className={`mt-2 h-1 w-16 ${item.accentColor} rounded-full transition-all duration-500 group-hover:w-full`}></div>
                </div>

                <p className="text-white/95 leading-relaxed">{item.content}</p>

                {/* Decorative Elements */}
                <div className="mt-6 flex gap-2">
                  <div className="h-1.5 w-1.5 animate-ping rounded-full bg-[#6fee51]"></div>
                  <div className="h-1.5 w-1.5 animate-ping rounded-full bg-[#6fee51]" style={{ animationDelay: '0.2s' }}></div>
                  <div className="h-1.5 w-1.5 animate-ping rounded-full bg-[#6fee51]" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>

              {/* Animated Border with Glow */}
              <div className="absolute inset-0 rounded-3xl border-2 border-[#6fee51]/30 transition-all duration-500 group-hover:border-[#6fee51]/70 group-hover:shadow-2xl"></div>

              {/* Shine Effect */}
              <div className="absolute inset-0 translate-x-[-100%] skew-x-12 bg-gradient-to-r from-transparent via-[#6fee51]/30 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]"></div>

              {/* Corner Accents */}
              <div className="absolute right-6 top-6 h-6 w-6 border-r-4 border-t-4 border-[#6fee51]/50 transition-all duration-500 group-hover:h-10 group-hover:w-10"></div>
              <div className="absolute bottom-6 left-6 h-6 w-6 border-b-4 border-l-4 border-[#6fee51]/50 transition-all duration-500 group-hover:h-10 group-hover:w-10"></div>

              {/* Number Badge */}
              <div className="absolute right-8 top-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6fee51]/20 backdrop-blur-md">
                  <span className="text-xl font-bold text-white">{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
}

// Values Section
function ValuesSection() {
  const values = [
    {
      title: "Innovation",
      description: "Pioneering AI-driven solutions that push the boundaries of what's possible",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Integrity",
      description: "Building trust through transparent, ethical business practices",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Excellence",
      description: "Delivering exceptional quality in every solution we create",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: "Collaboration",
      description: "Partnering with clients to achieve shared success and growth",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Security",
      description: "Protecting data and ensuring secure digital experiences",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: "Impact",
      description: "Creating measurable value and lasting positive change",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#081b3e] via-[#183f40] to-[#31703a] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Our Core Values
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            The principles that define who we are and how we deliver value
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-[#6fee51] hover:bg-white/15 hover:shadow-lg hover:shadow-[#6fee51]/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#6fee51] text-[#081b3e] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                {value.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#6fee51]">{value.title}</h3>
              <p className="text-sm leading-relaxed text-white/80 transition-colors duration-300 group-hover:text-white">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Team/CTA Section
function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/about/team-background.jpg"
          alt="Our Team"
          className="h-full w-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-3xl bg-[#081b3e] p-12 shadow-2xl sm:p-16">
          <div className="relative z-10 text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready to Partner with Us?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/90 leading-relaxed">
              Join the growing list of businesses transforming their operations with MayfairTech.AI.
              Let's build intelligent solutions together.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#6fee51] px-8 py-4 text-base font-semibold text-[#081b3e] shadow-lg transition hover:scale-105 hover:bg-white"
              >
                Contact Us Today
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur transition hover:scale-105 hover:bg-white/20"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
