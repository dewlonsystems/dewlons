// src/app/services/page.tsx
"use client";

import Link from "next/link";
import { FiMonitor, FiSmartphone, FiCode, FiShield, FiCloud, FiZap, FiBookOpen, FiHeadphones, FiLayers, FiSearch, FiGlobe, FiSettings, FiUsers } from "react-icons/fi";

const services = [
  {
    title: "Custom Software Development",
    description: "End-to-end development of tailored business applications that solve real-world problems and scale with your growth.",
    image: "https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/custom_software.jpg",
    slug: "custom-software-development",
    icon: <FiCode className="text-2xl" />
  },
  {
    title: "Website Design & Development",
    description: "Modern, responsive, and SEO-optimized websites that convert visitors into customers and reflect your brand identity.",
    image: "https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/web_design.jpg",
    slug: "website-design-development",
    icon: <FiMonitor className="text-2xl" />
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android with intuitive UX and robust performance.",
    image: "https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/eduportal.jpg",
    slug: "mobile-app-development",
    icon: <FiSmartphone className="text-2xl" />
  },
  {
    title: "Enterprise Software Solutions",
    description: "Integrated systems for large organizations including ERP, CRM, HRM, and workflow automation.",
    image: "https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/Enterprise-Software.jpg",
    slug: "enterprise-software-solutions",
    icon: <FiGlobe className="text-2xl" />
  },
  {
    title: "Cloud Solutions",
    description: "Migration, architecture, and management of secure, scalable cloud infrastructure on AWS, Azure, or GCP.",
    image: "https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/cloud.jpg",
    slug: "cloud-solutions",
    icon: <FiCloud className="text-2xl" />
  },
  {
    title: "API Development & Integration",
    description: "Robust RESTful and GraphQL APIs with seamless third-party integrations for payment, SMS, logistics, and more.",
    image: "https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/API.jpg",
    slug: "api-development-integration",
    icon: <FiZap className="text-2xl" />
  },
  {
    title: "Software Maintenance & Support",
    description: "Ongoing monitoring, updates, bug fixes, and performance tuning to keep your systems running smoothly.",
    image: "https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/software%20maintenance.jpg",
    slug: "software-maintenance-support",
    icon: <FiSettings className="text-2xl" />
  },
  {
    title: "UI/UX Design & Prototyping",
    description: "User research, wireframing, and interactive prototypes to ensure intuitive and engaging digital experiences.",
    image: "https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/UI.jpg",
    slug: "ui-ux-design-prototyping",
    icon: <FiLayers className="text-2xl" />
  },
  {
    title: "Quality Assurance & Testing",
    description: "Comprehensive manual and automated testing to ensure reliability, security, and performance across devices.",
    image: "https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/quality.jpg",
    slug: "quality-assurance-testing",
    icon: <FiShield className="text-2xl" />
  },
  {
    title: "DevOps & Automation",
    description: "CI/CD pipelines, containerization, infrastructure-as-code, and monitoring for faster, safer deployments.",
    image: "https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/devops.webp",
    slug: "devops-automation",
    icon: <FiHeadphones className="text-2xl" />
  },
  {
    title: "SEO & Digital Marketing Support",
    description: "On-page SEO, content strategy, and analytics to improve visibility and drive qualified traffic to your site.",
    image: "https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/c7cf8d5c8aa810f2cc5bb2793b0b3f3431ee1062/seon.jpg",
    slug: "seo-digital-marketing-support",
    icon: <FiSearch className="text-2xl" />
  },
  {
    title: "IT Consulting & Digital Transformation",
    description: "Strategic guidance to modernize legacy systems, adopt new technologies, and align IT with business goals.",
    image: "https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/it%20consulting.jpg",
    slug: "it-consulting-digital-transformation",
    icon: <FiUsers className="text-2xl" />
  },
  {
    title: "Technical Training & Knowledge Transfer",
    description: "Hands-on workshops and documentation to empower your team with the skills to manage and extend your systems.",
    image: "https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/training.jpg",
    slug: "technical-training-knowledge-transfer",
    icon: <FiBookOpen className="text-2xl" />
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/our_services.jpg)` }}
        ></div>
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">
            Comprehensive digital solutions for businesses in Nairobi, Kisii, Kakamega, and beyond.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-800 max-w-3xl mx-auto">
              From concept to deployment and beyond, Dewlon Systems delivers high-quality software and digital services tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[var(--color-accent)] mb-3">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-[var(--color-primary)]">{service.title}</h3>
                  <p className="text-gray-700 text-sm mb-4">{service.description}</p>
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="inline-block text-[var(--color-accent)] font-medium text-sm hover:underline"
                  >
                    See more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Need a Custom Solution?</h2>
          <p className="mb-8 text-gray-800 text-lg">
            Tell us about your project, and we’ll provide a free consultation and detailed quote.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}