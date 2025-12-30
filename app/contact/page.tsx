"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ContactSection />
      <OfficesSection />
      <MapSection />
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
          src="/images/contact/Contact-us-header.jpg"
          alt="Contact MayfairTech"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center text-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#6fee51]/30 bg-[#6fee51]/10 px-4 py-2 backdrop-blur">
            <div className="h-2 w-2 animate-pulse rounded-full bg-[#6fee51]"></div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#6fee51]">
              Get In Touch
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Let's Build Something
            <br />
            <span className="text-[#6fee51]">
              Extraordinary Together
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg text-white/80">
            Speak with our consultants and explore how MayfairTech.ai can transform your business
            with cutting-edge AI, e-business, and logistics solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="mailto:support@mayfair.com.pk"
              className="group flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 backdrop-blur transition hover:bg-white/20"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6fee51] text-[#081b3e]">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-semibold text-white">support@mayfair.com.pk</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section with Form
function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "AI & Machine Learning",
    "E-Business Solutions",
    "BPO & Call Center",
    "Logistics & Supply Chain",
    "Custom Development",
    "Consulting",
    "Other",
  ];

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Side - Info */}
          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#081b3e] sm:text-4xl">
              Ready to Transform
              <br />
              <span className="text-[#6fee51]">Your Business?</span>
            </h2>

            <p className="mb-8 text-lg text-[#707e8a]">
              Fill out the form and our team will get back to you within 24 hours. We're here to
              help you navigate your digital transformation journey.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 transition hover:border-[#6fee51] hover:shadow-lg">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#081b3e] text-white transition group-hover:bg-[#6fee51] group-hover:text-[#081b3e]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-[#081b3e]">Email Us</h3>
                  <a href="mailto:support@mayfair.com.pk" className="text-[#6fee51] transition hover:text-[#31703a] font-bold">
                    support@mayfair.com.pk
                  </a>
                  <p className="mt-1 text-sm text-[#707e8a]">We respond within 24 hours</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 transition hover:border-[#6fee51] hover:shadow-lg">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#081b3e] text-white transition group-hover:bg-[#6fee51] group-hover:text-[#081b3e]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-[#081b3e]">Business Hours</h3>
                  <p className="text-[#707e8a]">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="mt-1 text-sm text-[#707e8a]">Weekend support available for enterprise clients</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 transition hover:border-[#6fee51] hover:shadow-lg">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#081b3e] text-white transition group-hover:bg-[#6fee51] group-hover:text-[#081b3e]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-[#081b3e]">Global Presence</h3>
                  <p className="text-[#707e8a]">Offices in UAE & Pakistan</p>
                  <p className="mt-1 text-sm text-[#707e8a]">Serving clients across 30+ countries</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            {isSubmitted ? (
              <div className="flex h-full items-center justify-center rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-12 shadow-xl">
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#6fee51]/20">
                      <svg className="h-12 w-12 text-[#6fee51]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-[#081b3e]">Message Sent!</h3>
                  <p className="mb-6 text-[#707e8a]">
                    Thank you for reaching out. Our team will review your message and get back to
                    you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#081b3e] px-6 py-3 font-semibold text-white transition hover:bg-[#183f40]"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-xl sm:p-10"
              >
                <h3 className="mb-6 text-xl font-bold text-[#081b3e]">Send Us a Message</h3>

                <div className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#081b3e]">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-[#081b3e] transition focus:border-[#6fee51] focus:outline-none"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#081b3e]">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-[#081b3e] transition focus:border-[#6fee51] focus:outline-none"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#081b3e]">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-[#081b3e] transition focus:border-[#6fee51] focus:outline-none"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#081b3e]">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-[#081b3e] transition focus:border-[#6fee51] focus:outline-none"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#081b3e]">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-[#081b3e] transition focus:border-[#6fee51] focus:outline-none"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#081b3e]">
                      Service Interested In *
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-[#081b3e] transition focus:border-[#6fee51] focus:outline-none"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#081b3e]">
                      Your Message *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-[#081b3e] transition focus:border-[#6fee51] focus:outline-none"
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-gradient-to-r from-[#6fee51] to-[#6fee51] px-8 py-4 font-semibold text-[#081b3e] shadow-lg transition hover:shadow-xl disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Offices Section
function OfficesSection() {
  const offices = [
    {
      city: "Dubai, UAE",
      label: "Our Dubai Office Location",
      address: "FOAM0658 Compass Building, Al Shohada Road, AL Hamra Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates",
      flag: "🇦🇪",
      features: ["Regional HQ", "Client Meetings", "Enterprise Support"],
    },
    {
      city: "Lahore, Pakistan",
      label: "Our Lahore Office Location",
      address: "Asian Food Industries Limited, 46-49 Industrial Area, Gulberg-lll, Lahore, Pakistan",
      flag: "🇵🇰",
      features: ["Development Center", "Operations Hub", "Training Facility"],
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#081b3e] via-[#183f40] to-[#081b3e] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Our Global Offices
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Visit us at our offices or schedule a virtual meeting with our team
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {offices.map((office, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur transition hover:bg-white/15"
            >
              {/* Decorative Elements */}
              

              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl backdrop-blur">
                    {office.flag}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{office.city}</h3>
                    <p className="text-sm text-[#6fee51]">{office.label}</p>
                  </div>
                </div>

                <div className="mb-6 flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-[#6fee51]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-white/80">{office.address}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {office.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Map/CTA Section
function MapSection() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 p-12 shadow-xl sm:p-16">
          <div className="relative z-10 text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#6fee51]/20">
                <svg className="h-10 w-10 text-[#6fee51]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
            </div>

            <h2 className="mb-4 text-3xl font-bold text-[#081b3e] sm:text-4xl">
              Let's Start a Conversation
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-[#707e8a]">
              Whether you're ready to start a project or just want to learn more about our services,
              we'd love to hear from you.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:support@mayfair.com.pk"
                className="inline-flex items-center gap-2 rounded-full bg-[#6fee51] px-8 py-4 text-base font-semibold text-[#081b3e] shadow-lg transition hover:bg-[#5dd840]"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@mayfair.com.pk
              </a>
              <Link
                href="/solutions"
                className="inline-flex items-center rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-[#081b3e] transition hover:border-[#6fee51]"
              >
                Explore Solutions
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-[#707e8a]">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-[#6fee51]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">24-Hour Response</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-[#6fee51]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-[#6fee51]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">No Obligation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
