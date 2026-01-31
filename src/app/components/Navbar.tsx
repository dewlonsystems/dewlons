// src/app/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const servicesList = [
  "Custom Software Development",
  "Website Design & Development",
  "Mobile App Development",
  "Enterprise Software Solutions",
  "Cloud Solutions",
  "API Development & Integration",
  "Software Maintenance & Support",
  "UI/UX Design & Prototyping",
  "Quality Assurance & Testing",
  "DevOps & Automation",
  "SEO & Digital Marketing Support",
  "IT Consulting & Digital Transformation",
  "Technical Training & Knowledge Transfer",
];

// Helper: slugify service names for URLs
const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Real logo URL from Unsplash (public domain, replaceable)
  const logoUrl = "https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/2e0edfd8eb82da1c4834ea017735a421d97a82fb/dew.png";

  return (
    <>
      {/* Desktop & Tablet Navigation */}
      <header
        className={`bg-white transition-all duration-300 ${
          isScrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src={logoUrl}
                alt="Dewlon Systems Logo"
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="font-medium hover:text-[var(--color-primary)] transition-colors">
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center font-medium hover:text-[var(--color-primary)] transition-colors">
                  Services
                  <FiChevronDown className="ml-1 w-4 h-4" />
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 hidden group-hover:block z-50">
                  {servicesList.map((service) => (
                    <Link
                      key={service}
                      href={`/services/${slugify(service)}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/about" className="font-medium hover:text-[var(--color-primary)] transition-colors">
                About
              </Link>
              <Link href="/contact" className="font-medium hover:text-[var(--color-primary)] transition-colors">
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Toggle menu"
            >
              <FiMenu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl flex flex-col">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <img
                    src={logoUrl}
                    alt="Dewlon Systems Logo"
                    className="h-10"
                  />
                </Link>
                <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                  <FiX size={24} />
                </button>
              </div>
            </div>
            <nav className="flex-1 overflow-y-auto p-6">
              <ul className="space-y-6">
                <li>
                  <Link href="/" className="block font-medium" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <details className="group">
                    <summary className="list-none font-medium cursor-pointer flex justify-between items-center">
                      Services
                      <FiChevronDown className="transform group-open:rotate-180 transition-transform ml-1" />
                    </summary>
                    <ul className="mt-3 pl-4 space-y-3 border-l-2 border-gray-200">
                      {servicesList.map((service) => (
                        <li key={service}>
                          <Link
                            href={`/services/${slugify(service)}`}
                            className="block text-gray-600 hover:text-[var(--color-primary)]"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
                <li>
                  <Link href="/about" className="block font-medium" onClick={() => setIsMenuOpen(false)}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="block font-medium" onClick={() => setIsMenuOpen(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}