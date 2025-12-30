"use client";

import type { Metadata } from "next";
import { useState } from "react";
import Link from "next/link";

export default function InsightsPage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <CaseStudiesSection />
      <BlogSection />
      <FAQSection />
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
          src="/images/insights/hero-background.jpg"
          alt="Insights Background"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center text-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#6fee51]/30 bg-[#6fee51]/10 px-4 py-2 backdrop-blur">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#6fee51]">
              Insights & Innovations
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
            <span className="text-white">Knowledge That Drives</span>
            <br />
            <span className="text-[#6fee51]">Digital Excellence</span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg text-[#081b3e]">
            Stay ahead with our latest insights, success stories, and thought leadership on AI,
            digital transformation, and enterprise technology innovations.
          </p>
        </div>
      </div>
    </section>
  );
}

// Case Studies Section
function CaseStudiesSection() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Supply Chain Optimization",
      industry: "Manufacturing",
      description: "Reduced operational costs by 35% and improved delivery times by 50% through predictive analytics and automated logistics management.",
      image: "/images/insights/case-study-1.png",
      results: [
        { metric: "35%", label: "Cost Reduction" },
        { metric: "50%", label: "Faster Delivery" },
        { metric: "99.5%", label: "Accuracy Rate" },
      ],
      tags: ["AI", "Logistics", "Automation"],
    },
    {
      id: 2,
      title: "E-Commerce Platform Transformation",
      industry: "Retail",
      description: "Built a scalable marketplace platform that grew from 0 to 100K+ daily transactions with AI-driven personalization and inventory automation.",
      image: "/images/insights/case-study-2.png",
      results: [
        { metric: "100K+", label: "Daily Orders" },
        { metric: "3x", label: "Revenue Growth" },
        { metric: "45%", label: "Higher Conversion" },
      ],
      tags: ["E-Commerce", "AI", "Marketplace"],
    },
    {
      id: 3,
      title: "Global BPO Service Expansion",
      industry: "Customer Service",
      description: "Deployed multilingual AI chatbots and 24/7 support infrastructure that handled 1M+ customer interactions monthly with 95% satisfaction.",
      image: "/images/insights/case-study-3.png",
      results: [
        { metric: "1M+", label: "Monthly Interactions" },
        { metric: "95%", label: "Satisfaction Score" },
        { metric: "60%", label: "Cost Savings" },
      ],
      tags: ["BPO", "AI Chatbots", "Support"],
    },
    {
      id: 4,
      title: "Healthcare Digital Transformation",
      industry: "Healthcare",
      description: "Implemented HIPAA-compliant patient management system with AI triage, reducing wait times by 40% and improving patient outcomes.",
      image: "/images/insights/case-study-4.png",
      results: [
        { metric: "40%", label: "Reduced Wait Time" },
        { metric: "98%", label: "Data Security" },
        { metric: "5x", label: "Patient Volume" },
      ],
      tags: ["Healthcare", "AI", "Compliance"],
    },
  ];

  return (
    <section id="case-studies" className="bg-gradient-to-br from-gray-50 to-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#081b3e] sm:text-4xl lg:text-5xl">
            Success Stories
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#707e8a]">
            Real-world results from our enterprise solutions and digital transformation projects
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2ea82b]/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081b3e] via-[#081b3e]/50 to-transparent"></div>
                
                {/* Industry Badge */}
                <div className="absolute left-6 top-6">
                  <span className="rounded-full bg-[#6fee51] px-4 py-2 text-xs font-bold text-[#081b3e] shadow-lg transition-colors duration-500 group-hover:bg-[#2ea82b]">
                    {study.industry}
                  </span>
                </div>

                {/* Tags */}
                <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                  {study.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="mb-3 text-2xl font-bold text-[#081b3e] transition-colors duration-500 group-hover:text-[#2ea82b]">
                  {study.title}
                </h3>
                <p className="mb-6 text-[#707e8a]">{study.description}</p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 border-t border-gray-200 pt-6">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="mb-1 text-2xl font-bold text-[#6fee51] transition-colors duration-500 group-hover:text-[#2ea82b]">{result.metric}</div>
                      <div className="text-xs text-[#707e8a]">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent transition-all duration-500 group-hover:border-[#2ea82b]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Blog Section
function BlogSection() {
  const [selectedBlog, setSelectedBlog] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Enterprise Operations",
      excerpt: "Exploring how artificial intelligence is revolutionizing business processes, from predictive analytics to autonomous decision-making systems.",
      fullContent: `
        <p>Artificial Intelligence is no longer a futuristic concept—it's transforming enterprise operations today. From Fortune 500 companies to agile startups, organizations are leveraging AI to streamline processes, reduce costs, and unlock new revenue streams.</p>
        
        <h3>The AI Revolution in Business</h3>
        <p>Modern enterprises face unprecedented challenges: global competition, rising operational costs, and ever-increasing customer expectations. AI provides solutions that were impossible just a few years ago. Machine learning algorithms can now predict equipment failures before they happen, optimize supply chains in real-time, and automate complex decision-making processes.</p>
        
        <h3>Key Applications</h3>
        <p><strong>Predictive Analytics:</strong> AI models analyze historical data to forecast future trends, enabling proactive decision-making. Companies can now predict customer churn, demand fluctuations, and market shifts with remarkable accuracy.</p>
        
        <p><strong>Process Automation:</strong> Robotic Process Automation (RPA) combined with AI eliminates repetitive tasks, allowing employees to focus on strategic initiatives. This leads to significant productivity gains and cost reductions.</p>
        
        <p><strong>Customer Intelligence:</strong> AI-powered analytics provide deep insights into customer behavior, preferences, and sentiment, enabling personalized experiences at scale.</p>
        
        <h3>The Path Forward</h3>
        <p>Successful AI implementation requires a strategic approach. Organizations must invest in data infrastructure, develop AI literacy across teams, and establish governance frameworks. The future belongs to enterprises that embrace AI not as a tool, but as a fundamental business capability.</p>
      `,
      image: "/images/insights/blog-1.png",
      category: "AI & Machine Learning",
      author: "Dr. Sarah Chen",
      date: "December 2024",
      readTime: "8 min read",
      tags: ["AI", "Enterprise", "Automation"],
    },
    {
      id: 2,
      title: "Digital Commerce Trends for 2025",
      excerpt: "Key trends shaping the future of e-commerce: headless commerce, AI personalization, and omnichannel experiences that drive customer engagement.",
      fullContent: `
        <p>As we enter 2025, digital commerce continues to evolve at breakneck speed. The convergence of AI, advanced analytics, and innovative technologies is creating unprecedented opportunities for retailers and brands to engage customers in meaningful ways.</p>
        
        <h3>Headless Commerce Takes Center Stage</h3>
        <p>Traditional monolithic e-commerce platforms are giving way to flexible, API-first architectures. Headless commerce separates the frontend presentation layer from backend commerce functionality, enabling brands to deliver consistent experiences across every touchpoint—from websites and mobile apps to IoT devices and voice assistants.</p>
        
        <h3>AI-Powered Personalization</h3>
        <p>Generic shopping experiences are obsolete. Modern consumers expect personalized recommendations, dynamic pricing, and tailored content. AI algorithms analyze browsing behavior, purchase history, and contextual data to create unique experiences for each customer, dramatically improving conversion rates and customer lifetime value.</p>
        
        <h3>Omnichannel Excellence</h3>
        <p>The line between online and offline retail continues to blur. Successful brands create seamless omnichannel experiences where customers can browse online, try in-store, buy via mobile, and pick up curbside—all tracked through unified customer profiles.</p>
        
        <h3>Social Commerce Integration</h3>
        <p>Social media platforms are becoming full-fledged commerce channels. Instagram, TikTok, and emerging platforms enable direct purchases without leaving the app, making social commerce a critical revenue channel for modern brands.</p>
        
        <h3>Preparing for the Future</h3>
        <p>To thrive in 2025 and beyond, businesses must invest in flexible technology stacks, prioritize customer data platforms, and embrace continuous innovation. The future of commerce is personalized, seamless, and always-on.</p>
      `,
      image: "/images/insights/blog-2.png",
      category: "E-Commerce",
      author: "Michael Rodriguez",
      date: "November 2024",
      readTime: "6 min read",
      tags: ["E-Commerce", "Trends", "Digital"],
    },
    {
      id: 3,
      title: "Supply Chain Resilience Through Technology",
      excerpt: "How modern supply chains leverage IoT, AI, and real-time analytics to adapt to disruptions and maintain operational excellence.",
      fullContent: `
        <p>Recent global disruptions have exposed vulnerabilities in traditional supply chains. Forward-thinking organizations are leveraging technology to build resilient, adaptive supply networks capable of weathering any storm.</p>
        
        <h3>The Internet of Things Revolution</h3>
        <p>IoT sensors and connected devices provide real-time visibility across the entire supply chain. From warehouse temperature monitoring to in-transit shipment tracking, organizations now have unprecedented insight into their operations. This data enables proactive problem-solving and rapid response to disruptions.</p>
        
        <h3>AI-Driven Optimization</h3>
        <p>Machine learning algorithms analyze vast amounts of supply chain data to identify patterns, predict disruptions, and optimize operations. AI can forecast demand with remarkable accuracy, recommend optimal inventory levels, and suggest alternative suppliers when primary sources are unavailable.</p>
        
        <h3>Real-Time Analytics</h3>
        <p>Modern supply chains require instant decision-making. Real-time analytics platforms aggregate data from multiple sources, providing actionable insights through intuitive dashboards. Decision-makers can identify bottlenecks, track KPIs, and respond to issues before they escalate.</p>
        
        <h3>Digital Twins and Simulation</h3>
        <p>Leading organizations create digital twins—virtual replicas of physical supply chains. These models enable scenario planning, risk assessment, and optimization testing without disrupting actual operations.</p>
        
        <h3>Building Future-Ready Supply Chains</h3>
        <p>Resilient supply chains combine technology, strategic partnerships, and agile processes. Organizations that invest in these capabilities will be better positioned to handle future disruptions while maintaining competitive advantage.</p>
      `,
      image: "/images/insights/blog-3.png",
      category: "Logistics",
      author: "Emily Thompson",
      date: "November 2024",
      readTime: "7 min read",
      tags: ["Logistics", "IoT", "Analytics"],
    },
    {
      id: 4,
      title: "Building Scalable Marketplace Platforms",
      excerpt: "Architecture patterns and best practices for creating robust multi-vendor marketplaces that handle millions of transactions efficiently.",
      fullContent: `
        <p>Multi-vendor marketplaces are transforming commerce, but building platforms that scale to millions of transactions requires careful architectural planning and engineering excellence.</p>
        
        <h3>Microservices Architecture</h3>
        <p>Modern marketplaces leverage microservices to achieve scalability and flexibility. Breaking down the platform into independent services—catalog management, payment processing, order fulfillment, and vendor management—enables teams to develop, deploy, and scale components independently.</p>
        
        <h3>Database Design for Scale</h3>
        <p>Data architecture is critical. Successful marketplaces often employ polyglot persistence, using different database technologies for different use cases. Product catalogs might use NoSQL for flexibility, while financial transactions require ACID-compliant relational databases.</p>
        
        <h3>Caching and Performance</h3>
        <p>At scale, every millisecond matters. Implementing multi-layer caching strategies—from CDNs for static assets to Redis for session data—ensures fast response times even under heavy load. Performance optimization is continuous, not one-time.</p>
        
        <h3>Payment Processing and Security</h3>
        <p>Handling payments for multiple vendors requires robust financial infrastructure. Platforms must support various payment methods, manage complex fund routing, ensure PCI compliance, and protect against fraud—all while providing seamless user experiences.</p>
        
        <h3>Vendor Management Systems</h3>
        <p>Successful marketplaces provide vendors with powerful tools for managing products, orders, and analytics. Self-service capabilities reduce operational overhead while empowering vendors to grow their businesses.</p>
        
        <h3>The Path to Scale</h3>
        <p>Building scalable marketplaces requires balancing immediate needs with long-term vision. Start with solid foundations, instrument everything for observability, and iterate based on real-world usage patterns.</p>
      `,
      image: "/images/insights/blog-4.png",
      category: "Technology",
      author: "James Anderson",
      date: "October 2024",
      readTime: "10 min read",
      tags: ["Marketplace", "Architecture", "Scale"],
    },
    {
      id: 5,
      title: "AI Chatbots: Beyond Basic Automation",
      excerpt: "Advanced conversational AI techniques that create natural, context-aware customer interactions while integrating seamlessly with business systems.",
      fullContent: `
        <p>The evolution of AI chatbots has been remarkable. Today's conversational AI goes far beyond scripted responses, delivering intelligent, context-aware interactions that rival human customer service representatives.</p>
        
        <h3>Natural Language Understanding</h3>
        <p>Modern chatbots leverage advanced NLP models to understand intent, sentiment, and context. They can handle complex queries, interpret ambiguous language, and maintain coherent conversations across multiple topics. This creates natural interactions that customers actually enjoy.</p>
        
        <h3>Contextual Awareness</h3>
        <p>Leading chatbots maintain conversation context, remember previous interactions, and access customer history. This enables personalized responses and eliminates frustrating repetition. When a customer says "I want to return that," the bot knows exactly which recent purchase they're referencing.</p>
        
        <h3>Seamless System Integration</h3>
        <p>The most effective chatbots integrate deeply with business systems—CRM, order management, inventory, and knowledge bases. This enables them to provide real-time information, process transactions, and escalate complex issues with full context to human agents.</p>
        
        <h3>Multilingual Capabilities</h3>
        <p>Global businesses require global support. Advanced chatbots handle multiple languages fluently, understanding cultural nuances and adapting tone appropriately for different markets.</p>
        
        <h3>Continuous Learning</h3>
        <p>AI chatbots improve over time through machine learning. They analyze successful interactions, learn from escalations, and adapt to changing customer needs. This creates a virtuous cycle of improving service quality.</p>
        
        <h3>The Human Touch</h3>
        <p>The goal isn't to replace humans but to augment them. Chatbots handle routine queries efficiently, freeing human agents to focus on complex issues requiring empathy, creativity, and nuanced problem-solving.</p>
      `,
      image: "/images/insights/blog-5.png",
      category: "AI & Customer Service",
      author: "Lisa Park",
      date: "October 2024",
      readTime: "5 min read",
      tags: ["AI", "Chatbots", "Customer Service"],
    },
    {
      id: 6,
      title: "Data Security in Digital Transformation",
      excerpt: "Essential security frameworks and compliance strategies for protecting enterprise data during large-scale digital transformation initiatives.",
      fullContent: `
        <p>Digital transformation unlocks tremendous business value, but it also expands the attack surface and introduces new security challenges. Organizations must balance innovation with robust security practices.</p>
        
        <h3>Zero Trust Architecture</h3>
        <p>Traditional perimeter-based security is obsolete. Zero Trust assumes no user, device, or network is trustworthy by default. Every access request is verified, authenticated, and authorized based on contextual factors like user identity, device health, and requested resource sensitivity.</p>
        
        <h3>Data Encryption and Privacy</h3>
        <p>Protecting data requires comprehensive encryption strategies. Data must be encrypted at rest, in transit, and increasingly, during processing. Privacy-enhancing technologies like differential privacy and homomorphic encryption enable secure data analytics while preserving individual privacy.</p>
        
        <h3>Compliance Frameworks</h3>
        <p>Organizations must navigate complex regulatory landscapes—GDPR, CCPA, HIPAA, PCI-DSS, and industry-specific requirements. Compliance isn't just about avoiding fines; it's about building customer trust and maintaining competitive advantage.</p>
        
        <h3>Identity and Access Management</h3>
        <p>Robust IAM systems are critical. Implement multi-factor authentication, role-based access control, and just-in-time privilege elevation. Regular access reviews and automated de-provisioning prevent unauthorized access from former employees or compromised accounts.</p>
        
        <h3>Security Monitoring and Response</h3>
        <p>Modern threats require continuous monitoring. Security Information and Event Management (SIEM) systems aggregate logs, detect anomalies, and trigger automated responses. Security operations centers (SOCs) provide 24/7 vigilance against evolving threats.</p>
        
        <h3>Building Security Culture</h3>
        <p>Technology alone isn't enough. Organizations must foster security-aware culture through regular training, clear policies, and leadership commitment. Every employee plays a role in protecting enterprise assets.</p>
        
        <h3>The Path Forward</h3>
        <p>Security must be integrated into digital transformation from day one, not bolted on afterward. Adopt security-by-design principles, conduct regular assessments, and stay current with evolving threats and best practices.</p>
      `,
      image: "/images/insights/blog-6.png",
      category: "Security",
      author: "David Martinez",
      date: "September 2024",
      readTime: "9 min read",
      tags: ["Security", "Compliance", "Data"],
    },
  ];

  return (
    <section id="blog" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#081b3e] sm:text-4xl lg:text-5xl">
            Latest Insights & Blog
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#707e8a]">
            Expert perspectives on AI, digital transformation, and technology innovation
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              onClick={() => setSelectedBlog(post.id)}
              className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2ea82b]/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 flex-shrink-0 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081b3e]/60 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-[#6fee51] px-3 py-1 text-xs font-bold text-[#081b3e] shadow-lg transition-colors duration-500 group-hover:bg-[#2ea82b]">
                    {post.category}
                  </span>
                </div>

                {/* Read Time */}
                <div className="absolute bottom-4 right-4">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                {/* Title and Excerpt - Flexible Section */}
                <div className="mb-4 flex-1">
                  <h3 className="mb-3 text-xl font-bold text-[#081b3e] transition-colors duration-500 group-hover:text-[#2ea82b]">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#707e8a] line-clamp-3">{post.excerpt}</p>
                </div>

                {/* Fixed Bottom Section */}
                <div className="mt-auto">
                  {/* Tags */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs text-[#081b3e] transition-colors duration-500 group-hover:bg-[#2ea82b]/10"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Author & Date */}
                  <div className="mb-4 flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6fee51]/20 text-sm font-bold text-[#081b3e] transition-colors duration-500 group-hover:bg-[#2ea82b]/20">
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#081b3e]">{post.author}</div>
                        <div className="text-xs text-[#707e8a]">{post.date}</div>
                      </div>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedBlog(post.id);
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#081b3e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2ea82b] hover:text-white"
                  >
                    Read More
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 translate-x-[-100%] skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]"></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent transition-all duration-500 group-hover:border-[#2ea82b]"></div>
            </article>
          ))}
        </div>

        {/* Full Blog Modal */}
        {selectedBlog && (
          <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm">
            <div className="relative my-8 w-full max-w-4xl animate-in fade-in zoom-in duration-300">
              <article className="overflow-hidden rounded-3xl bg-white shadow-2xl">
                {/* Header Image */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={blogPosts.find(p => p.id === selectedBlog)?.image}
                    alt={blogPosts.find(p => p.id === selectedBlog)?.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081b3e] via-[#081b3e]/50 to-transparent"></div>
                  
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedBlog(null)}
                    className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white hover:text-[#081b3e]"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="mb-3 inline-block rounded-full bg-[#6fee51] px-4 py-2 text-sm font-bold text-[#081b3e]">
                      {blogPosts.find(p => p.id === selectedBlog)?.category}
                    </span>
                    <h2 className="mb-2 text-3xl font-bold text-white lg:text-4xl">
                      {blogPosts.find(p => p.id === selectedBlog)?.title}
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-white/90">
                      <span>{blogPosts.find(p => p.id === selectedBlog)?.author}</span>
                      <span>•</span>
                      <span>{blogPosts.find(p => p.id === selectedBlog)?.date}</span>
                      <span>•</span>
                      <span>{blogPosts.find(p => p.id === selectedBlog)?.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="p-8 lg:p-12">
                  <div className="space-y-6 text-[#707e8a]">
                    {selectedBlog === 1 && (
                      <>
                        <p className="text-lg leading-relaxed">Artificial Intelligence is no longer a futuristic concept—it's transforming enterprise operations today. From Fortune 500 companies to agile startups, organizations are leveraging AI to streamline processes, reduce costs, and unlock new revenue streams.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">The AI Revolution in Business</h3>
                        <p className="leading-relaxed">Modern enterprises face unprecedented challenges: global competition, rising operational costs, and ever-increasing customer expectations. AI provides solutions that were impossible just a few years ago. Machine learning algorithms can now predict equipment failures before they happen, optimize supply chains in real-time, and automate complex decision-making processes.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">Key Applications</h3>
                        <p className="leading-relaxed"><strong className="text-[#081b3e]">Predictive Analytics:</strong> AI models analyze historical data to forecast future trends, enabling proactive decision-making. Companies can now predict customer churn, demand fluctuations, and market shifts with remarkable accuracy.</p>
                        
                        <p className="leading-relaxed"><strong className="text-[#081b3e]">Process Automation:</strong> Robotic Process Automation (RPA) combined with AI eliminates repetitive tasks, allowing employees to focus on strategic initiatives. This leads to significant productivity gains and cost reductions.</p>
                        
                        <p className="leading-relaxed"><strong className="text-[#081b3e]">Customer Intelligence:</strong> AI-powered analytics provide deep insights into customer behavior, preferences, and sentiment, enabling personalized experiences at scale.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">The Path Forward</h3>
                        <p className="leading-relaxed">Successful AI implementation requires a strategic approach. Organizations must invest in data infrastructure, develop AI literacy across teams, and establish governance frameworks. The future belongs to enterprises that embrace AI not as a tool, but as a fundamental business capability.</p>
                      </>
                    )}

                    {selectedBlog === 2 && (
                      <>
                        <p className="text-lg leading-relaxed">As we enter 2025, digital commerce continues to evolve at breakneck speed. The convergence of AI, advanced analytics, and innovative technologies is creating unprecedented opportunities for retailers and brands to engage customers in meaningful ways.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">Headless Commerce Takes Center Stage</h3>
                        <p className="leading-relaxed">Traditional monolithic e-commerce platforms are giving way to flexible, API-first architectures. Headless commerce separates the frontend presentation layer from backend commerce functionality, enabling brands to deliver consistent experiences across every touchpoint—from websites and mobile apps to IoT devices and voice assistants.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">AI-Powered Personalization</h3>
                        <p className="leading-relaxed">Generic shopping experiences are obsolete. Modern consumers expect personalized recommendations, dynamic pricing, and tailored content. AI algorithms analyze browsing behavior, purchase history, and contextual data to create unique experiences for each customer, dramatically improving conversion rates and customer lifetime value.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">Omnichannel Excellence</h3>
                        <p className="leading-relaxed">The line between online and offline retail continues to blur. Successful brands create seamless omnichannel experiences where customers can browse online, try in-store, buy via mobile, and pick up curbside—all tracked through unified customer profiles.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">Social Commerce Integration</h3>
                        <p className="leading-relaxed">Social media platforms are becoming full-fledged commerce channels. Instagram, TikTok, and emerging platforms enable direct purchases without leaving the app, making social commerce a critical revenue channel for modern brands.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">Preparing for the Future</h3>
                        <p className="leading-relaxed">To thrive in 2025 and beyond, businesses must invest in flexible technology stacks, prioritize customer data platforms, and embrace continuous innovation. The future of commerce is personalized, seamless, and always-on.</p>
                      </>
                    )}

                    {selectedBlog === 3 && (
                      <>
                        <p className="text-lg leading-relaxed">Recent global disruptions have exposed vulnerabilities in traditional supply chains. Forward-thinking organizations are leveraging technology to build resilient, adaptive supply networks capable of weathering any storm.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">The Internet of Things Revolution</h3>
                        <p className="leading-relaxed">IoT sensors and connected devices provide real-time visibility across the entire supply chain. From warehouse temperature monitoring to in-transit shipment tracking, organizations now have unprecedented insight into their operations. This data enables proactive problem-solving and rapid response to disruptions.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">AI-Driven Optimization</h3>
                        <p className="leading-relaxed">Machine learning algorithms analyze vast amounts of supply chain data to identify patterns, predict disruptions, and optimize operations. AI can forecast demand with remarkable accuracy, recommend optimal inventory levels, and suggest alternative suppliers when primary sources are unavailable.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">Real-Time Analytics</h3>
                        <p className="leading-relaxed">Modern supply chains require instant decision-making. Real-time analytics platforms aggregate data from multiple sources, providing actionable insights through intuitive dashboards. Decision-makers can identify bottlenecks, track KPIs, and respond to issues before they escalate.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">Digital Twins and Simulation</h3>
                        <p className="leading-relaxed">Leading organizations create digital twins—virtual replicas of physical supply chains. These models enable scenario planning, risk assessment, and optimization testing without disrupting actual operations.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">Building Future-Ready Supply Chains</h3>
                        <p className="leading-relaxed">Resilient supply chains combine technology, strategic partnerships, and agile processes. Organizations that invest in these capabilities will be better positioned to handle future disruptions while maintaining competitive advantage.</p>
                      </>
                    )}

                    {selectedBlog === 4 && (
                      <>
                        <p className="text-lg leading-relaxed">Multi-vendor marketplaces are transforming commerce, but building platforms that scale to millions of transactions requires careful architectural planning and engineering excellence.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">Microservices Architecture</h3>
                        <p className="leading-relaxed">Modern marketplaces leverage microservices to achieve scalability and flexibility. Breaking down the platform into independent services—catalog management, payment processing, order fulfillment, and vendor management—enables teams to develop, deploy, and scale components independently.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">Database Design for Scale</h3>
                        <p className="leading-relaxed">Data architecture is critical. Successful marketplaces often employ polyglot persistence, using different database technologies for different use cases. Product catalogs might use NoSQL for flexibility, while financial transactions require ACID-compliant relational databases.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">Caching and Performance</h3>
                        <p className="leading-relaxed">At scale, every millisecond matters. Implementing multi-layer caching strategies—from CDNs for static assets to Redis for session data—ensures fast response times even under heavy load. Performance optimization is continuous, not one-time.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">Payment Processing and Security</h3>
                        <p className="leading-relaxed">Handling payments for multiple vendors requires robust financial infrastructure. Platforms must support various payment methods, manage complex fund routing, ensure PCI compliance, and protect against fraud—all while providing seamless user experiences.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">Vendor Management Systems</h3>
                        <p className="leading-relaxed">Successful marketplaces provide vendors with powerful tools for managing products, orders, and analytics. Self-service capabilities reduce operational overhead while empowering vendors to grow their businesses.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">The Path to Scale</h3>
                        <p className="leading-relaxed">Building scalable marketplaces requires balancing immediate needs with long-term vision. Start with solid foundations, instrument everything for observability, and iterate based on real-world usage patterns.</p>
                      </>
                    )}

                    {selectedBlog === 5 && (
                      <>
                        <p className="text-lg leading-relaxed">The evolution of AI chatbots has been remarkable. Today's conversational AI goes far beyond scripted responses, delivering intelligent, context-aware interactions that rival human customer service representatives.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">Natural Language Understanding</h3>
                        <p className="leading-relaxed">Modern chatbots leverage advanced NLP models to understand intent, sentiment, and context. They can handle complex queries, interpret ambiguous language, and maintain coherent conversations across multiple topics. This creates natural interactions that customers actually enjoy.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">Contextual Awareness</h3>
                        <p className="leading-relaxed">Leading chatbots maintain conversation context, remember previous interactions, and access customer history. This enables personalized responses and eliminates frustrating repetition. When a customer says "I want to return that," the bot knows exactly which recent purchase they're referencing.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">Seamless System Integration</h3>
                        <p className="leading-relaxed">The most effective chatbots integrate deeply with business systems—CRM, order management, inventory, and knowledge bases. This enables them to provide real-time information, process transactions, and escalate complex issues with full context to human agents.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">Multilingual Capabilities</h3>
                        <p className="leading-relaxed">Global businesses require global support. Advanced chatbots handle multiple languages fluently, understanding cultural nuances and adapting tone appropriately for different markets.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">Continuous Learning</h3>
                        <p className="leading-relaxed">AI chatbots improve over time through machine learning. They analyze successful interactions, learn from escalations, and adapt to changing customer needs. This creates a virtuous cycle of improving service quality.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">The Human Touch</h3>
                        <p className="leading-relaxed">The goal isn't to replace humans but to augment them. Chatbots handle routine queries efficiently, freeing human agents to focus on complex issues requiring empathy, creativity, and nuanced problem-solving.</p>
                      </>
                    )}

                    {selectedBlog === 6 && (
                      <>
                        <p className="text-lg leading-relaxed">Digital transformation unlocks tremendous business value, but it also expands the attack surface and introduces new security challenges. Organizations must balance innovation with robust security practices.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">Zero Trust Architecture</h3>
                        <p className="leading-relaxed">Traditional perimeter-based security is obsolete. Zero Trust assumes no user, device, or network is trustworthy by default. Every access request is verified, authenticated, and authorized based on contextual factors like user identity, device health, and requested resource sensitivity.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">Data Encryption and Privacy</h3>
                        <p className="leading-relaxed">Protecting data requires comprehensive encryption strategies. Data must be encrypted at rest, in transit, and increasingly, during processing. Privacy-enhancing technologies like differential privacy and homomorphic encryption enable secure data analytics while preserving individual privacy.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">Compliance Frameworks</h3>
                        <p className="leading-relaxed">Organizations must navigate complex regulatory landscapes—GDPR, CCPA, HIPAA, PCI-DSS, and industry-specific requirements. Compliance isn't just about avoiding fines; it's about building customer trust and maintaining competitive advantage.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">Identity and Access Management</h3>
                        <p className="leading-relaxed">Robust IAM systems are critical. Implement multi-factor authentication, role-based access control, and just-in-time privilege elevation. Regular access reviews and automated de-provisioning prevent unauthorized access from former employees or compromised accounts.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">Security Monitoring and Response</h3>
                        <p className="leading-relaxed">Modern threats require continuous monitoring. Security Information and Event Management (SIEM) systems aggregate logs, detect anomalies, and trigger automated responses. Security operations centers (SOCs) provide 24/7 vigilance against evolving threats.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">Building Security Culture</h3>
                        <p className="leading-relaxed">Technology alone isn't enough. Organizations must foster security-aware culture through regular training, clear policies, and leadership commitment. Every employee plays a role in protecting enterprise assets.</p>
                        
                        <h3 className="mb-4 mt-8 text-2xl font-bold text-[#081b3e]">The Path Forward</h3>
                        <p className="leading-relaxed">Security must be integrated into digital transformation from day one, not bolted on afterward. Adopt security-by-design principles, conduct regular assessments, and stay current with evolving threats and best practices.</p>
                      </>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="mt-8 flex flex-wrap gap-2 border-t border-gray-200 pt-8">
                    {blogPosts.find(p => p.id === selectedBlog)?.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-[#6fee51]/10 px-4 py-2 text-sm font-semibold text-[#081b3e]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Back Button */}
                  <button
                    onClick={() => setSelectedBlog(null)}
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#081b3e] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#6fee51] hover:text-[#081b3e]"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to All Blogs
                  </button>
                </div>
              </article>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is e-business transformation?",
      answer:
        "E-business transformation is the strategic shift to fully integrated digital commerce systems, operations, and experiences. It encompasses the complete digitization of business processes, customer interactions, supply chain management, and data-driven decision making to create a seamless, technology-enabled organization.",
    },
    {
      question: "How long does digital commerce transformation take?",
      answer:
        "The timeline for digital commerce transformation varies depending on the scale and complexity of your organization. Typically, implementations range from 3 months for focused initiatives to 2 years for comprehensive enterprise-wide transformations. We work with you to create phased roadmaps that deliver incremental value while progressing toward your long-term goals.",
    },
    {
      question: "What is the difference between e-business and e-commerce?",
      answer:
        "E-commerce refers specifically to selling products or services online — the transactional aspect of digital business. E-business is a broader concept that encompasses full digital operations including logistics, customer support, data management, supply chain automation, internal processes, and technology infrastructure. E-commerce is a component of e-business.",
    },
    {
      question: "What role does AI play in digital commerce?",
      answer:
        "AI is a transformative force in digital commerce, enhancing multiple aspects of business operations. It improves personalization by analyzing customer behavior and preferences, enables accurate demand forecasting, automates routine tasks and processes, optimizes logistics and supply chain operations, and revolutionizes customer support through intelligent chatbots and virtual assistants.",
    },
    {
      question: "How do you ensure data security and compliance?",
      answer:
        "We implement industry-leading security frameworks including end-to-end encryption, regular security audits, and compliance with standards like GDPR, HIPAA, and PCI-DSS. Our solutions feature role-based access control, automated threat detection, and comprehensive audit trails to protect your sensitive business data.",
    },
    {
      question: "Can your solutions integrate with existing systems?",
      answer:
        "Yes, our solutions are designed with integration in mind. We use modern APIs and middleware to connect seamlessly with popular ERP, CRM, payment gateways, and other enterprise systems. Our integration approach ensures minimal disruption to your existing operations while maximizing the value of your current technology investments.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gradient-to-br from-[#081b3e] via-[#183f40] to-[#31703a] px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Get answers to common questions about digital transformation and e-business
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-[#6fee51] hover:bg-white/15 hover:shadow-lg hover:shadow-[#6fee51]/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#6fee51] text-[#081b3e] shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="flex w-full items-center justify-between gap-4 text-left"
                      >
                        <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-[#6fee51]">
                          {faq.question}
                        </h3>
                        <svg
                          className={`h-5 w-5 flex-shrink-0 text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="mt-4 text-sm leading-relaxed text-white/80 transition-colors duration-300 group-hover:text-white">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 translate-x-[-100%] skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]"></div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Have a Query?
          </h2>

          {/* Button */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group/btn inline-flex items-center gap-2 rounded-full bg-[#6fee51] px-8 py-4 text-base font-semibold text-[#081b3e] shadow-lg transition hover:bg-[#5dd840] hover:shadow-xl"
            >
              Speak With Our Experts
              <svg
                className="h-5 w-5 transition-transform group-hover/btn:translate-x-1"
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

          {/* Microcopy */}
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Connect directly with our specialists for tailored support, technical guidance, or enterprise consultation.
          </p>
        </div>
      </div>
    </section>
  );
}

