"use client";

import { useState } from "react";
import Link from "next/link";

export default function CareersPage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <WhyJoinSection />
      <OpenPositionsSection />
      <BenefitsSection />
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
          src="/images/careers/Careers-header.jpg"
          alt="Careers at MayfairTech"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center text-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#6fee51]/30 bg-[#6fee51]/10 px-4 py-2">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#6fee51]">
              Join Our Team
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Build the Future of
            <br />
            <span className="text-[#6fee51]">Digital Innovation</span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg text-white/80">
            Explore opportunities in AI engineering, software development, project management, BPO
            operations, and logistics technology. Join a team that's shaping the future of enterprise
            technology.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#positions"
              className="inline-flex items-center gap-2 rounded-full bg-[#6fee51] px-8 py-4 text-base font-semibold text-[#081b3e] transition hover:bg-white"
            >
              View Open Positions
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Why Join Section
function WhyJoinSection() {
  const reasons = [
    {
      title: "Cutting-Edge Technology",
      description: "Work with the latest AI, machine learning, and enterprise technologies",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Global Impact",
      description: "Your work reaches businesses across 30+ countries worldwide",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Career Growth",
      description: "Clear progression paths and continuous learning opportunities",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: "Collaborative Culture",
      description: "Work alongside talented professionals in a supportive environment",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#081b3e] sm:text-4xl lg:text-5xl">
            Why Join MayfairTech.AI?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#707e8a]">
            Be part of a team that's transforming how businesses operate globally
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group rounded-2xl border-2 border-gray-100 bg-gradient-to-br from-white to-gray-50 p-6 shadow-md transition hover:border-[#6fee51] hover:shadow-xl hover:scale-105"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#081b3e] text-white transition group-hover:bg-[#6fee51] group-hover:text-[#081b3e]">
                {reason.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#081b3e]">{reason.title}</h3>
              <p className="text-sm text-[#707e8a]">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Open Positions Section
function OpenPositionsSection() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const departments = [
    {
      name: "AI & Engineering",
      positions: [
        {
          id: "ai-engineer",
          title: "AI/ML Engineer",
          type: "Full-time",
          location: "Remote / On-site",
          experience: "3-5 years",
          description: "Design and implement machine learning models and AI solutions for enterprise clients.",
          requirements: [
            "Experience with TensorFlow, PyTorch, or similar frameworks",
            "Strong Python programming skills",
            "Understanding of NLP, Computer Vision, or Predictive Analytics",
            "Experience with cloud platforms (AWS, GCP, Azure)",
          ],
        },
        {
          id: "llm-specialist",
          title: "LLM Specialist",
          type: "Full-time",
          location: "Remote",
          experience: "2-4 years",
          description: "Develop and fine-tune large language models for custom enterprise applications.",
          requirements: [
            "Experience with GPT, BERT, or similar LLM architectures",
            "Prompt engineering expertise",
            "Experience with RAG systems and vector databases",
            "Strong understanding of NLP techniques",
          ],
        },
      ],
    },
    {
      name: "Software Development",
      positions: [
        {
          id: "fullstack-dev",
          title: "Full Stack Developer",
          type: "Full-time",
          location: "On-site",
          experience: "3-5 years",
          description: "Build scalable web applications and digital commerce platforms.",
          requirements: [
            "Proficiency in React, Next.js, Node.js",
            "Experience with databases (PostgreSQL, MongoDB)",
            "Knowledge of cloud services and DevOps",
            "Strong problem-solving skills",
          ],
        },
        {
          id: "backend-dev",
          title: "Backend Developer",
          type: "Full-time",
          location: "Remote / On-site",
          experience: "2-4 years",
          description: "Develop robust APIs and backend systems for enterprise applications.",
          requirements: [
            "Experience with Node.js, Python, or Java",
            "Database design and optimization",
            "RESTful API development",
            "Microservices architecture experience",
          ],
        },
      ],
    },
    {
      name: "Project Management",
      positions: [
        {
          id: "tech-pm",
          title: "Technical Project Manager",
          type: "Full-time",
          location: "On-site",
          experience: "5+ years",
          description: "Lead cross-functional teams to deliver complex technology projects.",
          requirements: [
            "PMP or Agile certification preferred",
            "Experience managing AI/ML projects",
            "Strong stakeholder communication skills",
            "Budget and resource management experience",
          ],
        },
      ],
    },
    {
      name: "BPO Operations",
      positions: [
        {
          id: "bpo-manager",
          title: "BPO Operations Manager",
          type: "Full-time",
          location: "On-site",
          experience: "4-6 years",
          description: "Manage call center operations and ensure service excellence.",
          requirements: [
            "Experience in BPO/call center management",
            "Team leadership and training skills",
            "Quality assurance expertise",
            "Knowledge of CRM systems",
          ],
        },
        {
          id: "team-lead",
          title: "Customer Support Team Lead",
          type: "Full-time",
          location: "On-site",
          experience: "2-3 years",
          description: "Lead customer support teams and maintain service quality standards.",
          requirements: [
            "Customer service experience",
            "Team leadership skills",
            "Excellent communication abilities",
            "Problem-solving mindset",
          ],
        },
      ],
    },
    {
      name: "Logistics Technology",
      positions: [
        {
          id: "logistics-analyst",
          title: "Logistics Systems Analyst",
          type: "Full-time",
          location: "On-site",
          experience: "3-5 years",
          description: "Analyze and optimize supply chain and logistics technology systems.",
          requirements: [
            "Experience with WMS and TMS systems",
            "Data analysis and reporting skills",
            "Understanding of supply chain operations",
            "SQL and analytics tools proficiency",
          ],
        },
      ],
    },
  ];

  return (
    <section id="positions" className="bg-gradient-to-br from-[#081b3e] via-[#183f40] to-[#081b3e] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Open Positions
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Find your next opportunity and grow your career with us
          </p>
        </div>

        <div className="space-y-8">
          {departments.map((dept, deptIndex) => (
            <div key={deptIndex}>
              <h3 className="mb-4 text-xl font-bold text-[#6fee51]">{dept.name}</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {dept.positions.map((position) => (
                  <div
                    key={position.id}
                    className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur transition hover:bg-white/15"
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-white">{position.title}</h4>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="rounded-full bg-[#6fee51]/20 px-3 py-1 text-xs font-medium text-[#6fee51]">
                            {position.type}
                          </span>
                          <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                            {position.location}
                          </span>
                          <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                            {position.experience}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="mb-4 text-sm text-white/70">{position.description}</p>

                    <div className="mb-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/50">
                        Requirements
                      </p>
                      <ul className="space-y-1">
                        {position.requirements.slice(0, 2).map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-white/60">
                            <svg className="mt-0.5 h-3 w-3 flex-shrink-0 text-[#6fee51]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => setSelectedJob(position.id)}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#6fee51] px-6 py-3 text-sm font-semibold text-[#081b3e] transition hover:bg-white"
                    >
                      Apply Now
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <ApplicationModal jobId={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </section>
  );
}

// Application Modal Component
function ApplicationModal({ jobId, onClose }: { jobId: string; onClose: () => void }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    resume: null as File | null,
    coverLetter: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
        <div className="w-full max-w-lg rounded-3xl bg-white p-8 text-center shadow-2xl">
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#6fee51]/20">
              <svg className="h-10 w-10 text-[#6fee51]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h3 className="mb-2 text-2xl font-bold text-[#081b3e]">Application Submitted!</h3>
          <p className="mb-6 text-[#707e8a]">
            Thank you for your interest in joining MayfairTech.AI. Our HR team will review your
            application and get back to you within 5-7 business days.
          </p>
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-full bg-[#081b3e] px-8 py-3 font-semibold text-white transition hover:bg-[#183f40]"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-[#081b3e]">Apply for Position</h3>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#707e8a] transition hover:bg-gray-100"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#081b3e]">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-[#081b3e] transition focus:border-[#6fee51] focus:outline-none"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#081b3e]">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-[#081b3e] transition focus:border-[#6fee51] focus:outline-none"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#081b3e]">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-[#081b3e] transition focus:border-[#6fee51] focus:outline-none"
                placeholder="+1 234 567 8900"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#081b3e]">
                Years of Experience *
              </label>
              <select
                required
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-[#081b3e] transition focus:border-[#6fee51] focus:outline-none"
              >
                <option value="">Select experience</option>
                <option value="0-1">0-1 years</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5-7">5-7 years</option>
                <option value="7+">7+ years</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#081b3e]">
              Resume/CV *
            </label>
            <div className="rounded-xl border-2 border-dashed border-gray-200 p-6 text-center transition hover:border-[#6fee51]">
              <input
                type="file"
                required
                accept=".pdf,.doc,.docx"
                onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
                className="hidden"
                id="resume-upload"
              />
              <label htmlFor="resume-upload" className="cursor-pointer">
                <svg className="mx-auto mb-2 h-10 w-10 text-[#707e8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-sm text-[#707e8a]">
                  {formData.resume ? formData.resume.name : "Click to upload or drag and drop"}
                </p>
                <p className="text-xs text-[#707e8a]/60">PDF, DOC, DOCX (max 5MB)</p>
              </label>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#081b3e]">
              Cover Letter
            </label>
            <textarea
              value={formData.coverLetter}
              onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
              rows={4}
              className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-[#081b3e] transition focus:border-[#6fee51] focus:outline-none"
              placeholder="Tell us why you're interested in this position..."
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-full border-2 border-gray-200 px-6 py-4 font-semibold text-[#081b3e] transition hover:border-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 rounded-full bg-[#6fee51] px-6 py-4 font-semibold text-[#081b3e] transition hover:bg-[#5dd840] disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Benefits Section
function BenefitsSection() {
  const benefits = [
    {
      title: "Competitive Salary",
      description: "Industry-leading compensation packages",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and family",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "Flexible Work",
      description: "Remote and hybrid work options available",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: "Learning Budget",
      description: "Annual budget for courses and certifications",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "Paid Time Off",
      description: "Generous vacation and personal days",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Team Events",
      description: "Regular team building and social activities",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#081b3e] sm:text-4xl lg:text-5xl">
            Benefits & Perks
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#707e8a]">
            We take care of our team so they can focus on what matters most
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg hover:scale-105"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#6fee51]/20 text-[#081b3e]">
                {benefit.icon}
              </div>
              <div>
                <h3 className="mb-1 font-bold text-[#081b3e]">{benefit.title}</h3>
                <p className="text-sm text-[#707e8a]">{benefit.description}</p>
              </div>
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
    <section className="bg-gradient-to-br from-[#31703a] via-[#183f40] to-[#31703a] px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-12 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-[#6fee51] hover:bg-white/15 hover:shadow-lg hover:shadow-[#6fee51]/20 sm:p-16">
          <div className="relative z-10 text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Don't See the Right Role?
            </h2>
            <p className="mb-10 text-lg text-white/80">
              We're always looking for talented individuals. Send us your resume and we'll keep you in
              mind for future opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#081b3e] transition hover:bg-[#6fee51]"
            >
              Get In Touch
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          {/* Shine Effect */}
          <div className="absolute inset-0 translate-x-[-100%] skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]"></div>
        </div>
      </div>
    </section>
  );
}
