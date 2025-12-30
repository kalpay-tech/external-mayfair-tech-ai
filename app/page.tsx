"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <OurServices />
      <SuccessStories />
      <Testimonials />
      <TechStack />
      <OurProcess />
      <WhyChooseMayfair />
      <CTASection />
    </div>
  );
}

// Hero Section with Animated Network
function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const isMobile = window.innerWidth < 768;
    const cubeCount = isMobile ? 12 : 20;

    // Cube network animation
    const cubes: {
      x: number;
      y: number;
      z: number;
      size: number;
      rotationX: number;
      rotationY: number;
      rotationZ: number;
    }[] = [];

    const resizeCanvas = () => {
      const oldWidth = canvas.width || canvas.offsetWidth;
      const oldHeight = canvas.height || canvas.offsetHeight;
      const newWidth = canvas.offsetWidth;
      const newHeight = canvas.offsetHeight;

      canvas.width = newWidth;
      canvas.height = newHeight;

      // Reposition cubes on resize if canvas was already initialized
      if (oldWidth > 0 && oldHeight > 0 && cubes.length > 0) {
        const widthRatio = newWidth / oldWidth;
        const heightRatio = newHeight / oldHeight;
        cubes.forEach(cube => {
          cube.x *= widthRatio;
          cube.y *= heightRatio;
        });
      }
    };

    resizeCanvas();

    // Create cubes
    for (let i = 0; i < cubeCount; i++) {
      cubes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 500,
        size: Math.random() * 30 + 10,
        rotationX: Math.random() * Math.PI * 2,
        rotationY: Math.random() * Math.PI * 2,
        rotationZ: Math.random() * Math.PI * 2,
      });
    }

    window.addEventListener("resize", resizeCanvas);

    let animationFrame = 0;

    const animate = () => {
      ctx.fillStyle = "rgba(8, 27, 62, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw cubes
      cubes.forEach((cube, index) => {
        cube.rotationX += 0.01;
        cube.rotationY += 0.01;
        cube.rotationZ += 0.005;

        // Floating animation
        cube.y += Math.sin(animationFrame * 0.02 + index) * 0.5;
        cube.x += Math.cos(animationFrame * 0.015 + index) * 0.3;

        // Keep cubes in bounds
        if (cube.x < -50) cube.x = canvas.width + 50;
        if (cube.x > canvas.width + 50) cube.x = -50;
        if (cube.y < -50) cube.y = canvas.height + 50;
        if (cube.y > canvas.height + 50) cube.y = -50;

        // Draw cube wireframe
        const perspective = 500 / (500 + cube.z);
        const size = cube.size * perspective;

        ctx.save();
        ctx.translate(cube.x, cube.y);

        // Draw connections to nearby cubes
        cubes.forEach((otherCube, otherIndex) => {
          if (otherIndex <= index) return;
          const dx = otherCube.x - cube.x;
          const dy = otherCube.y - cube.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = 1 - distance / 150;
            ctx.strokeStyle = `rgba(111, 238, 81, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(dx, dy);
            ctx.stroke();
          }
        });

        // Draw cube
        ctx.strokeStyle = `rgba(111, 238, 81, ${0.6 + Math.sin(animationFrame * 0.02 + index) * 0.2})`;
        ctx.lineWidth = 2;

        // Simple 3D cube representation
        const points = [
          [-size / 2, -size / 2],
          [size / 2, -size / 2],
          [size / 2, size / 2],
          [-size / 2, size / 2],
        ];

        ctx.beginPath();
        points.forEach((point, i) => {
          if (i === 0) ctx.moveTo(point[0], point[1]);
          else ctx.lineTo(point[0], point[1]);
        });
        ctx.closePath();
        ctx.stroke();

        // Inner glow
        ctx.fillStyle = `rgba(111, 238, 81, ${0.1 + Math.sin(animationFrame * 0.03 + index) * 0.05})`;
        ctx.fill();

        ctx.restore();
      });

      animationFrame++;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="relative min-h-[600px] overflow-hidden bg-gradient-to-br from-[#081b3e] via-[#0a1f45] to-black text-white lg:min-h-[700px]">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ opacity: 0.8 }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-20 text-center lg:py-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#6fee51]/30 bg-[#6fee51]/10 px-4 py-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#6fee51]"></span>
          <span className="text-sm font-semibold uppercase tracking-widest text-[#6fee51]">
            Enterprise-Grade AI Solutions
          </span>
        </div>

        <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
          AI & Digital
          <br />
          <span className="text-[#6fee51]">
            Transformation Company
          </span>
        </h1>
        {/* <h1 className="mb-6 text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
          AI & Digital
          <br />
          <span className="text-[#6fee51]">
            Transformation Company | E-Business, Logistics Solutions
          </span>
        </h1> */}

        <p className="mb-8 max-w-3xl text-lg text-white/80 sm:text-xl">
          MayfairTech.ai delivers enterprise-grade AI, digital transformation, e-business development, and logistics technology solutions for global businesses.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/solutions"
            className="group inline-flex items-center gap-2 rounded-full bg-[#6fee51] px-8 py-4 text-base font-semibold text-[#081b3e] transition hover:bg-white hover:scale-105"
          >
            Explore Services
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur transition hover:border-white/50 hover:bg-white/20"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Contact Us
          </Link>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d2247] to-transparent"></div>
    </section>
  );
}

// Our Services Section
function OurServices() {
  const services = [
    {
      title: "AI & Machine Learning",
      description:
        "Unlock efficiency with MayfairTech.ai’s enterprise AI solutions—custom LLMs, automation, predictive analytics, and computer vision built for scalable operations.",
      features: [
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
      image: "/images/services/ai-ml.png",
      link: "/solutions/ai",
    },
    {
      title: "E-Business Solutions",
      description:
        "Launch and scale digital commerce with MayfairTech.ai’s e-business platforms—marketplace development, payment integration, omnichannel systems, and automation.",
      features: [
        "E-commerce website & app development",
        "Marketplace platforms",
        "Payment gateway & fintech integrations",
        "Inventory & order automation",
        "Catalog and product management",
        "Omnichannel retail systems",
        "Cross border Concierge service "
      ],
      image: "/images/services/e-business.png",
      link: "/solutions/e-business",
    },
    // {
    //   title: "BPO & Call Center",
    //   description:
    //     "MayfairTech.ai provides global BPO services including customer support, technical support, lead generation, and back-office operations with AI-enhanced workflows.",
    //   features: [
    //     "Voice, chat, and email support",
    //     "Technical support & troubleshooting",
    //     "Lead generation & telesales",
    //     "Multilingual call center solutions",
    //     "Back-office processing",
    //     "AI workforce management tools"
    //   ],
    //   image: "/images/services/bpo.jpg",
    //   link: "/solutions/bpo",
    // },
    {
      title: "Logistics & Supply Chain",
      description:
        "Optimize your supply chain with technology-driven logistics—warehouse management, smart routing, cross-border delivery, and real-time tracking systems.",
      features: [
        "Warehouse management systems (WMS)",
        "AI route optimization",
        "Order tracking & delivery management",
        "Supply chain automation",
        "3PL & fulfilment operations",
        "AI-Powered Custom & Shipping Calculation Engine"
      ],
      image: "/images/services/logistics.png",
      link: "/solutions/logistics",
    },
  ];

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#081b3e] sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#707e8a]">
            Comprehensive technology solutions designed to accelerate your digital transformation
            journey
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Service Card Component
function ServiceCard({
  service,
}: {
  service: {
    title: string;
    description: string;
    features: string[];
    image: string;
    link: string;
  };
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition hover:shadow-2xl">
      {/* Image with Title Overlay */}
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#081b3e] to-[#183f40]">
        {!imageError && (
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            onError={() => setImageError(true)}
          />
        )}

        {/* Fallback gradient if image fails */}
        {imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#081b3e] via-[#183f40] to-[#31703a]"></div>
        )}

        {/* Title Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">
          {service.title}
        </h3>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-4 text-sm leading-relaxed text-[#707e8a]">{service.description}</p>

        {/* Features List */}
        <div className="mb-6 space-y-2">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <svg
                className="h-5 w-5 flex-shrink-0 text-[#6fee51]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-[#081b3e]">{feature}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

// Success Stories Section
function SuccessStories() {
  const stories = [
    {
      title: "Smart Manufacturing AI",
      category: "Computer Vision",
      description: "Reduced production defects by 95% using advanced quality control systems",
      metrics: [
        { label: "95% defect reduction", icon: "📊" },
        { label: "40% cost savings", icon: "💰" },
        { label: "2x faster detection", icon: "⚡" },
      ],
      image: "/images/success-stories/manufacturing_.png",
      caseStudyLink: "/insights/case-studies",
    },
    {
      title: "Intelligent Supply Chain",
      category: "AI Automation",
      description: "Optimized logistics and inventory management with AI",
      metrics: [
        { label: "30% cost reduction", icon: "💰" },
        { label: "Real-time tracking", icon: "📍" },
        { label: "Demand forecasting", icon: "📈" },
      ],
      image: "/images/success-stories/Supply.png",
      caseStudyLink: "/insights/case-studies",
    },
    {
      title: "Smart Logistics Platform",
      category: "Machine Learning",
      description: "AI-powered logistics optimization improving delivery efficiency",
      metrics: [
        { label: "45% faster delivery", icon: "🚚" },
        { label: "Real-time optimization", icon: "⚡" },
        { label: "Route intelligence", icon: "🗺️" },
      ],
      image: "/images/success-stories/logistic.png",
      caseStudyLink: "/insights/case-studies",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#081b3e] via-[#183f40] to-[#0a2540] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Success Stories
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Real results from our AI implementations across various industries
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => (
            <SuccessStoryCard key={index} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Success Story Card Component
function SuccessStoryCard({
  story,
}: {
  story: {
    title: string;
    category: string;
    description: string;
    metrics: { label: string; icon: string }[];
    image: string;
    caseStudyLink: string;
  };
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/20 bg-white shadow-lg transition hover:shadow-2xl hover:border-[#6fee51]">
      {/* Image Section with Category Badge */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-[#183f40] to-[#31703a]">
        {!imageError && (
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        )}

        {/* Fallback gradient background if image fails */}
        {imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#183f40] via-[#31703a] to-[#081b3e]">
            <div className="text-center">
              <div className="mb-2 text-6xl">🤖</div>
              <p className="text-sm text-white/70">AI Solution</p>
            </div>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute left-4 top-4 rounded-full bg-[#6fee51] px-4 py-2 text-xs font-bold text-[#081b3e] shadow-lg">
          {story.category}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-xl font-bold text-[#081b3e]">{story.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-[#707e8a]">{story.description}</p>

        {/* Metrics */}
        <div className="mb-6 space-y-2">
          {story.metrics.map((metric, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-[#081b3e]">
              <svg
                className="h-5 w-5 flex-shrink-0 text-[#081b3e]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">{metric.label}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

// Products Section
function Testimonials() {
  const highlights = [
    "Shop worldwide, pay locally",
    "AI-powered product recommendations",
    "Secure payments & multi-currency support",
    "Fast cross-border logistics",
    "24/7 customer support",
  ];

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#081b3e] sm:text-4xl lg:text-5xl">
            Our Products
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#707e8a]">
            Innovative solutions built and powered by MayfairTech.ai
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[700px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-2xl">
              <Image
                src="/images/products/mayfair-highstree.png"
                alt="Mayfair Highstreet - Global Shopping Platform"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay gradient for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-[#6fee51]/10 blur-2xl"></div>
            <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-[#081b3e]/5 blur-2xl"></div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            {/* Subheadline */}

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#6fee51]/30 bg-[#081b3e] px-4 py-2">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#6fee51]">
                Our Product
              </span>
            </div>

            {/* Main Heading */}
            <h3 className="mb-6 text-4xl font-bold text-[#081b3e] sm:text-5xl lg:text-6xl">
              Mayfair Highstreet
              <br />
              <span className="text-[#6fee51]">Global Shopping, Made Simple</span>
            </h3>

            {/* Description */}
            <p className="mb-8 text-lg leading-relaxed text-[#707e8a]">
              Mayfair Highstreet is our flagship e-commerce product — a complete AI-driven shopping experience that brings global brands to customers with local payment options, instant personalization, and seamless cross-border delivery. Built and powered by MayfairTech.ai.
            </p>

            {/* Key Highlights */}
            <div className="mb-10 space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#6fee51]/20">
                    <svg
                      className="h-4 w-4 text-[#6fee51]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-base font-medium text-[#081b3e]">{highlight}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/products/mayfair-highstreet"
              className="group inline-flex items-center gap-3 rounded-full bg-[#6fee51] px-8 py-4 text-base font-semibold text-[#081b3e] shadow-lg transition hover:bg-[#5dd840] hover:shadow-xl"
            >
              Explore Mayfair Highstreet
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonial Avatar Component
function TestimonialAvatar({
  name,
  image,
  company,
}: {
  name: string;
  image: string;
  company: string;
}) {
  const [imageError, setImageError] = useState(false);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="relative">
      <div className="h-16 w-16 overflow-hidden rounded-full border-4 border-white shadow-lg sm:h-20 sm:w-20">
        {!imageError ? (
          <Image
            src={image}
            alt={name}
            width={80}
            height={80}
            className="h-full w-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#6fee51] to-[#31703a] text-xl font-bold text-white">
            {initials}
          </div>
        )}
      </div>
      {/* Company Badge */}
      <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#6fee51] text-xs font-bold text-[#081b3e] shadow-md">
        {company.substring(0, 2).toUpperCase()}
      </div>
    </div>
  );
}

// Why Choose Mayfair Section
function WhyChooseMayfair() {
  const reasons = [
    {
      title: "AI-powered automation across departments",
      description:
        "Every solution leverages cutting-edge AI and machine learning to deliver intelligent, adaptive systems.",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Omnichannel e-commerce technology",
      description:
        "Successfully delivered 200+ projects across 30+ countries with 98% client satisfaction rate.",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    // {
    //   title: "24/7 global BPO operations",
    //   description:
    //     "From consultation to deployment and ongoing support, we handle every aspect of your digital transformation.",
    //   icon: (
    //     <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    //     </svg>
    //   ),
    // },
    {
      title: "Real-time logistics visibility",
      description:
        "Specialized knowledge in retail, healthcare, finance, logistics, and manufacturing sectors.",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Industry-specific tech solutions",
      description:
        "Build once, scale forever. Our solutions grow seamlessly with your business needs.",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      title: "Scalable architecture built for growth",
      description:
        "Round-the-clock technical support and monitoring to ensure your systems run flawlessly.",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#31703a] via-[#183f40] to-[#31703a] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Why Choose Mayfair
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Strategic technology partners committed to your success
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group rounded-xl border-2 border-white/20 bg-white/10 p-6 backdrop-blur transition hover:scale-105 hover:bg-white/15 hover:shadow-xl"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#081b3e]">
                {reason.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-white/80">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Our Process Section
function OurProcess() {
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We begin by understanding your business challenges, goals, and current technology landscape through comprehensive consultation.",
      imgSrc: "/images/our-process/step1.png",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Our experts design a customized roadmap with clear milestones, timelines, and KPIs aligned with your objectives.",
      imgSrc: "/images/our-process/step2.png",
    },
    {
      number: "03",
      title: "Build",
      description:
        "Agile development process with regular updates, ensuring seamless integration with your existing systems.",
      imgSrc: "/images/our-process/step3.png",
    },
    {
      number: "04",
      title: "Launch",
      description:
        "Rigorous testing protocols to ensure reliability, security, and performance before deployment.",
      imgSrc: "/images/our-process/step4.png",
    },
    // {
    //   number: "05",
    //   title: "Deployment & Training",
    //   description:
    //     "Smooth rollout with comprehensive team training and change management support.",
    //   imgSrc: "/images/our-process/step5.png",
    // },
    // {
    //   number: "06",
    //   title: "Optimization & Support",
    //   description:
    //     "Continuous monitoring, optimization, and 24/7 support to maximize ROI and system performance.",
    //   imgSrc: "/images/our-process/step6.png",
    // },
  ];

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#081b3e] sm:text-4xl lg:text-5xl">
            Our Process
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#707e8a]">
            A proven methodology that ensures successful delivery every time
          </p>
        </div>

        <div className="space-y-12">
          {processSteps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 ${isEven ? "" : "lg:grid-flow-dense"
                  }`}
              >
                {/* Text Card */}
                <div className={isEven ? "lg:col-start-1" : "lg:col-start-2"}>
                  <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:border-[#6fee51] hover:shadow-xl">
                    <div className="mb-3 inline-block rounded-full bg-[#6fee51]/10 px-3 py-1.5">
                      <span className="text-xl font-bold text-[#6fee51]">{step.number}</span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-[#081b3e]">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-[#707e8a]">{step.description}</p>
                  </div>
                </div>

                {/* Image Card */}
                <div className={isEven ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"}>
                  <ProcessImageCard step={step} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Separate component to handle image loading state
function ProcessImageCard({ step }: { step: { imgSrc: string; title: string; number: string } }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="h-full">
      <div className="group h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <div className="relative h-full min-h-[300px] w-full lg:min-h-[320px]">
          {!imageError && (
            <Image
              src={step.imgSrc}
              alt={step.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          )}

          {/* Show fallback only if image fails to load or hasn't loaded yet */}
          {(imageError || !imageLoaded) && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#183f40] to-[#31703a]">
              <div className="text-center p-6">
                <div className="mb-3 text-5xl">{step.number}</div>
                <p className="text-sm font-medium text-white/80">
                  {imageError ? "Image not found" : "Loading..."}
                  <br />
                  {step.title}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Tech Stack Section with Infinite Scroll
function TechStack() {
  const [isPaused, setIsPaused] = useState(false);

  const technologies = [
    { name: "TensorFlow", image: "TensorFlow" },
    { name: "PyTorch", image: "PyTorch" },
    { name: "AWS", image: "AWS" },
    { name: "Google Cloud", image: "GoogleCloud" },
    { name: "Azure", image: "Azure" },
    { name: "React", image: "React" },
    { name: "Next.js", image: "Nextjs" },
    { name: "Node.js", image: "Nodejs" },
    { name: "Python", image: "Python" },
    { name: "Kubernetes", image: "Kubernetes" },
    { name: "Docker", image: "Docker" },
    { name: "PostgreSQL", image: "PostgreSQL" },
  ];

  // Duplicate for seamless loop
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <section className="bg-gradient-to-br from-[#081b3e] via-[#183f40] to-[#081b3e] px-6 py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#f5f6f7] sm:text-4xl lg:text-5xl">
            Powered by Leading Technologies
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            We leverage the most advanced tools and frameworks to build scalable, robust AI solutions
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div
          className="relative"
          onMouseEnter={() => {
            if (window.innerWidth >= 768) setIsPaused(true);
          }}
          onMouseLeave={() => {
            if (window.innerWidth >= 768) setIsPaused(false);
          }}
        >
          {/* Gradient Fade Left */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#081b3e] to-transparent"></div>

          {/* Scrolling Track */}
          <div className="overflow-hidden">
            <div
              className={`flex gap-6 ${isPaused ? "[animation-play-state:paused]" : ""}`}
              style={{
                animation: "scroll 30s linear infinite",
                width: "max-content",
              }}
            >
              {duplicatedTech.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex w-40 flex-shrink-0 flex-col items-center rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur transition hover:border-[#6fee51] hover:bg-white/20 hover:shadow-lg hover:shadow-[#6fee51]/20 sm:w-48 sm:p-6"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 p-2 sm:mb-4 sm:h-16 sm:w-16 sm:p-3">
                    <Image
                      src={`/images/TechStack/${tech.image}.png`}
                      alt={tech.name}
                      width={64}
                      height={64}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span className="text-center text-xs font-semibold text-white sm:text-sm">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Fade Right */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#081b3e] to-transparent"></div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

// CTA Section
function CTASection() {
  const features = [
    "Free Consultation",
    "Custom Solutions",
    "Expert Support",
  ];

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* CTA Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 p-12 shadow-xl sm:p-16">
          {/* Content */}
          <div className="relative z-10 text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#081b3e] sm:text-4xl lg:text-5xl">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-[#707e8a]">
              Join hundreds of companies already using our AI solutions to drive growth, reduce costs,
              and unlock new possibilities.
            </p>

            {/* Buttons */}
            <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#6fee51] px-8 py-4 text-base font-semibold text-[#081b3e] shadow-lg transition hover:bg-[#5dd840] hover:shadow-xl"
              >
                Book a Free Consultation
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              <Link
                href="/solutions"
                className="inline-flex items-center rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-[#081b3e] transition hover:border-[#6fee51] hover:shadow-lg"
              >
                View Our Work
              </Link>
            </div>

            {/* Features */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-[#6fee51]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium text-[#707e8a]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
