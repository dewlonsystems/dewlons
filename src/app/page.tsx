// src/app/page.tsx
import Link from "next/link";
import {
  FiChevronDown,
  FiExternalLink,
  FiStar,
  FiMapPin,
  FiGlobe,
  FiSmartphone,
  FiCode,
  FiCloud,
  FiLayers,
  FiSearch
} from "react-icons/fi";

export default function HomePage() {
  const testimonials = [
    {
      name: "Jane Mwangi",
      role: "CEO, TechStart Nairobi",
      content: "Dewlon delivered our e-commerce platform ahead of schedule. Their attention to detail and UI/UX expertise is unmatched in Kenya.",
    },
    {
      name: "David Omondi",
      role: "Founder, AgriSoko",
      content: "From concept to deployment, the team was professional and responsive. Our mobile app now serves over 10,000 farmers.",
    },
    {
      name: "Grace Akinyi",
      role: "IT Director, Kakamega County",
      content: "The enterprise system they built streamlined our operations and reduced processing time by 70%.",
    },
    {
      name: "Samuel Wanjala",
      role: "Director, EduPortal Kenya",
      content: "Their team understood our educational workflow perfectly and built a system that teachers actually enjoy using.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url(https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/199282681dcdbf1c1e457ca9148e4cc1515f5c89/hero.jpg)",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Software & Web Development in Nairobi
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Dewlon Systems builds scalable, secure, and user-friendly digital solutions for businesses across Kenya and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="btn-primary w-full max-w-xs">
              Request a Quote
            </Link>
            <Link href="/client-portal" className="btn-outline w-full max-w-xs">
              Client Portal
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-4 bg-[var(--color-secondary)]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/who_we_are.jpg"
              alt="Dewlon Systems team collaborating in Nairobi office"
              className="rounded-lg shadow-md w-full"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Who We Are</h2>

            <p className="text-gray-800 mb-5">
              Dewlon Systems isn’t just another software company—we are your dedicated digital ally in Kenya’s rapidly evolving tech landscape. Founded and rooted in Nairobi’s vibrant innovation ecosystem, we blend global engineering standards with intimate knowledge of East African business culture, regulatory environments, and user behavior. Every line of code we write carries the weight of real-world impact: empowering farmers with mobile marketplaces, enabling county governments to serve citizens faster, and helping startups scale with confidence.
            </p>

            <p className="text-gray-800 mb-5">
              Headquartered in Imara Daima—a hub of entrepreneurial energy—we’ve grown from a passionate two-person team into a full-service digital product studio trusted by organizations across Nairobi, Kisumu, Mombasa, Kakamega, Kisii, and beyond. Our strength lies not only in technical mastery but in deep listening: we take time to understand your pain points, workflows, customer journey, and long-term vision before writing a single line of code.
            </p>

            <p className="text-gray-800 mb-5">
              Our multidisciplinary team includes senior full-stack developers fluent in modern stacks (React, Next.js, Node.js, Python/Django, Laravel), certified cloud engineers (AWS & Azure), UI/UX designers trained in human-centered design principles, and project managers who communicate clearly, consistently, and proactively. Many of us have worked within Kenyan fintech startups, agricultural cooperatives, health-tech NGOs, and public-sector digitization initiatives—so we don’t just build software; we build solutions that respect your operational reality.
            </p>

            <p className="text-gray-800 mb-5">
              What truly sets Dewlon apart is our unwavering commitment to partnership over transaction. We don’t disappear after launch. Instead, we offer ongoing maintenance, performance monitoring, feature enhancements, and strategic tech advisory—because your success is our reputation. Over 85% of our clients return for additional projects or refer us to peers, a testament to the trust we’ve earned through reliability, transparency, and excellence.
            </p>

            <p className="text-gray-800">
              In a market flooded with offshore freelancers and generic agencies, Dewlon Systems stands as a homegrown alternative: proudly Kenyan, technically elite, and relentlessly focused on delivering digital products that don’t just function—but flourish. When you work with us, you’re not outsourcing your future—you’re investing in a collaborative relationship built on shared ambition and mutual growth.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">What We Do</h2>
            
            <p className="text-gray-800 mb-4">
              At Dewlon Systems, we specialize in end-to-end digital product development for businesses across Kenya and East Africa. From startups launching their first MVP to government agencies modernizing legacy systems, we build secure, scalable, and high-performance software solutions that solve real-world problems.
            </p>

            <p className="text-gray-800 mb-4">
              Our services span custom web applications, mobile apps (iOS & Android), enterprise software, cloud infrastructure, and conversion-focused website design—all engineered with clean code, modern frameworks, and a deep understanding of local market dynamics.
            </p>

            <p className="text-gray-800 mb-4">
              Unlike generic agencies, we embed ourselves in your business context. Whether you’re a Nairobi-based fintech startup, an agricultural cooperative in Western Kenya, or a healthcare provider scaling operations, we align every line of code with your operational goals, compliance needs, and user experience expectations.
            </p>

            <p className="text-gray-800">
              Every project follows a structured yet agile process: discovery → UX/UI design → development → QA testing → deployment → ongoing support. We don’t just deliver software—we deliver measurable business impact, including faster workflows, reduced costs, increased customer engagement, and stronger digital presence.
            </p>

            <Link href="/services" className="mt-6 inline-block text-[var(--color-accent)] font-semibold hover:underline">
              Explore our full range of services →
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/what%20we.jpg"
              alt="Professional software development team in Nairobi working on custom web and mobile applications"
              className="rounded-lg shadow-md w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Our Services Preview */}
      <section className="py-16 px-4 bg-[var(--color-secondary)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-4">
            Our Services
          </h2>
          <p className="text-gray-800 max-w-4xl mx-auto text-center mb-10">
            Dewlon Systems offers a full spectrum of digital development services tailored to the unique needs of Kenyan businesses, NGOs, and public institutions. Whether you need a responsive business website, a scalable mobile application, or a secure cloud-based enterprise system, our team combines technical excellence with deep local insight to deliver solutions that perform, convert, and grow with you.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-[var(--color-accent)] mb-4">
                <FiGlobe className="text-2xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Website Design & Development</h3>
              <p className="text-gray-600 text-sm mb-4">
                Professional, responsive, and optimized for performance and conversions.
              </p>
              <Link
                href="/services/website-design-development"
                className="text-[var(--color-accent)] font-medium text-sm hover:underline"
              >
                See more →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-[var(--color-accent)] mb-4">
                <FiSmartphone className="text-2xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Mobile App Development</h3>
              <p className="text-gray-600 text-sm mb-4">
                Native and cross-platform apps for iOS and Android with seamless UX.
              </p>
              <Link
                href="/services/mobile-app-development"
                className="text-[var(--color-accent)] font-medium text-sm hover:underline"
              >
                See more →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-[var(--color-accent)] mb-4">
                <FiCode className="text-2xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Custom Software Development</h3>
              <p className="text-gray-600 text-sm mb-4">
                Tailored enterprise applications built to your exact business workflow.
              </p>
              <Link
                href="/services/custom-software-development"
                className="text-[var(--color-accent)] font-medium text-sm hover:underline"
              >
                See more →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-[var(--color-accent)] mb-4">
                <FiCloud className="text-2xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Cloud Solutions</h3>
              <p className="text-gray-600 text-sm mb-4">
                Secure, scalable cloud architecture on AWS, Azure, or Google Cloud.
              </p>
              <Link
                href="/services/cloud-solutions"
                className="text-[var(--color-accent)] font-medium text-sm hover:underline"
              >
                See more →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-[var(--color-accent)] mb-4">
                <FiLayers className="text-2xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">UI/UX Design & Prototyping</h3>
              <p className="text-gray-600 text-sm mb-4">
                User research, wireframes, and interactive prototypes for better engagement.
              </p>
              <Link
                href="/services/ui-ux-design-prototyping"
                className="text-[var(--color-accent)] font-medium text-sm hover:underline"
              >
                See more →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-[var(--color-accent)] mb-4">
                <FiSearch className="text-2xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">SEO & Digital Marketing Support</h3>
              <p className="text-gray-600 text-sm mb-4">
                Improve visibility and drive traffic with data-driven marketing strategies.
              </p>
              <Link
                href="/services/seo-digital-marketing-support"
                className="text-[var(--color-accent)] font-medium text-sm hover:underline"
              >
                See more →
              </Link>
            </div>
          </div>
          <div className="text-center">
            <Link href="/services" className="btn-outline inline-block">
              See All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Where We Offer Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
            Where We Offer Services
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto mb-10">
            Our physical presence in Kenya ensures local support and understanding of regional business needs.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-[var(--color-secondary)] rounded-lg shadow-sm">
              <FiMapPin className="text-[var(--color-accent)] mx-auto text-3xl mb-4" />
              <h3 className="font-bold text-lg mb-2">Nairobi (Head Office)</h3>
              <p className="text-gray-800">
                Imara Daima, Nairobi — Full-service development and client meetings.
              </p>
            </div>
            <div className="p-6 bg-[var(--color-secondary)] rounded-lg shadow-sm">
              <FiMapPin className="text-[var(--color-accent)] mx-auto text-3xl mb-4" />
              <h3 className="font-bold text-lg mb-2">Kisii Branch</h3>
              <p className="text-gray-800">
                On-site support and project management for Western Kenya clients.
              </p>
            </div>
            <div className="p-6 bg-[var(--color-secondary)] rounded-lg shadow-sm">
              <FiGlobe className="text-[var(--color-accent)] mx-auto text-3xl mb-4" />
              <h3 className="font-bold text-lg mb-2">Remote Services</h3>
              <p className="text-gray-800">
                We serve clients nationwide and internationally via secure remote collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Work / Portfolio */}
      <section className="py-16 px-4 bg-[var(--color-secondary)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-4">
            Who We Have Worked With
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto text-center mb-10">
            Over the years, we’ve partnered with forward-thinking organizations across Kenya—from education and agriculture to healthcare and logistics—to build digital products that drive real impact. Each project reflects our commitment to quality, user-centered design, and timely delivery, earning us long-term collaborations and trusted referrals nationwide.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/eduportal.jpg"
                  alt="EduPortal Kenya – digital learning platform for schools"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">EduPortal Kenya</h3>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[var(--color-accent)] text-sm font-medium hover:underline"
                >
                  View Live Site <FiExternalLink className="ml-1" />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/health.jpg"
                  alt="Nairobi Health Connect – telemedicine platform"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Nairobi Health Connect</h3>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[var(--color-accent)] text-sm font-medium hover:underline"
                >
                  View Live Site <FiExternalLink className="ml-1" />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/sipedo.png"
                  alt="Sipedo Services – Cleaning Services Website"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Sipedo Services</h3>
                <a
                  href="https://sipedo.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[var(--color-accent)] text-sm font-medium hover:underline"
                >
                  View Live Site <FiExternalLink className="ml-1" />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/1.png"
                  alt="Qezzy Surveys – survey platform for businesses"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Qezzy Surveys</h3>
                <a
                  href="https://qezzykenya.company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[var(--color-accent)] text-sm font-medium hover:underline"
                >
                  View Live Site <FiExternalLink className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Horizontal Auto-Scroll */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-4">
            Client Testimonials
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto text-center mb-10">
            Don’t just take our word for it—here’s what our clients say about working with Dewlon Systems. From CEOs of Nairobi startups to county government IT directors, our partners consistently highlight our professionalism, responsiveness, and ability to turn complex challenges into intuitive digital solutions.
          </p>
          <div className="overflow-hidden">
            <div className="flex animate-scroll-x space-x-6 py-4">
              {[...testimonials, ...testimonials].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-80 bg-[var(--color-secondary)] p-6 rounded-lg shadow-sm border border-gray-200"
                >
                  <div className="flex text-[var(--color-accent)] mb-3">
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                  </div>
                  <p className="text-gray-800 italic mb-4">"{testimonial.content}"</p>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-[var(--color-secondary)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="bg-white p-5 rounded-lg shadow-sm">
              <summary className="list-none font-semibold cursor-pointer flex justify-between items-center">
                Do you offer services outside Nairobi?
                <FiChevronDown className="transform transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-gray-600">
                Yes. While our head office is in Imara Daima, Nairobi, we have branches in Kisii and Kakamega. We also provide remote development services nationwide and internationally.
              </p>
            </details>
            <details className="bg-white p-5 rounded-lg shadow-sm">
              <summary className="list-none font-semibold cursor-pointer flex justify-between items-center">
                How long does a typical website project take?
                <FiChevronDown className="transform transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-gray-600">
                A standard business website takes 2–4 weeks. Custom web applications may take 6–12 weeks depending on complexity.
              </p>
            </details>
            <details className="bg-white p-5 rounded-lg shadow-sm">
              <summary className="list-none font-semibold cursor-pointer flex justify-between items-center">
                Do you provide ongoing maintenance?
                <FiChevronDown className="transform transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-gray-600">
                Yes. We offer monthly support packages including updates, security patches, backups, and performance monitoring.
              </p>
            </details>
            <details className="bg-white p-5 rounded-lg shadow-sm">
              <summary className="list-none font-semibold cursor-pointer flex justify-between items-center">
                Can you redesign my existing website?
                <FiChevronDown className="transform transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-gray-600">
                Absolutely. We audit your current site, preserve SEO value, and rebuild with modern UX principles and faster performance.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            Latest Insights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-secondary)] rounded-lg overflow-hidden shadow-sm">
              <div className="h-48">
                <img
                  src="https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/custom_software.jpg"
                  alt="Why Your Business Needs a Custom Web Application in 2026"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">
                  Why Your Business Needs a Custom Web Application in 2026
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Discover how tailored software solutions can give you a competitive edge in the Kenyan market.
                </p>
                <Link
                  href="/blog/custom-web-app-2026"
                  className="text-[var(--color-accent)] font-medium text-sm hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
            <div className="bg-[var(--color-secondary)] rounded-lg overflow-hidden shadow-sm">
              <div className="h-48">
                <img
                  src="https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/c7cf8d5c8aa810f2cc5bb2793b0b3f3431ee1062/seon.jpg"
                  alt="SEO Best Practices for Nairobi-Based Companies"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">
                  SEO Best Practices for Nairobi-Based Companies
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn how local SEO can drive more customers to your physical store or service area.
                </p>
                <Link
                  href="/blog/seo-nairobi-2026"
                  className="text-[var(--color-accent)] font-medium text-sm hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
            <div className="bg-[var(--color-secondary)] rounded-lg overflow-hidden shadow-sm">
              <div className="h-48">
                <img
                  src="https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/eduportal.jpg"
                  alt="Mobile App Development Trends in East Africa"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">
                  Mobile App Development Trends in East Africa
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  From fintech to agritech, see what’s shaping the future of apps in the region.
                </p>
                <Link
                  href="/blog/mobile-trends-east-africa"
                  className="text-[var(--color-accent)] font-medium text-sm hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-[var(--color-primary)] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Digital Future?
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Contact Dewlon Systems today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="btn-primary w-full max-w-xs">
              Get Started Now
            </Link>
            <Link href="/client-portal" className="btn-outline w-full max-w-xs">
              Client Portal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}