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

  // Real logo URL
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

      {/* Modern Full-Screen Centered Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white px-6"
          onClick={() => setIsMenuOpen(false)}
        >
          {/* Backdrop with subtle blur (optional but modern) */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Centered Content */}
          <div
            className="relative z-10 flex flex-col items-center justify-center w-full max-w-md space-y-8 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-gray-700 hover:text-[var(--color-primary)] transition-colors"
              aria-label="Close menu"
            >
              <FiX size={24} />
            </button>

            {/* Logo */}
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <img
                src={logoUrl}
                alt="Dewlon Systems Logo"
                className="h-12 w-auto"
              />
            </Link>

            {/* Nav Links */}
            <nav className="w-full">
              <ul className="space-y-6 text-center">
                <li>
                  <Link
                    href="/"
                    className="block text-2xl font-medium text-gray-800 hover:text-[var(--color-primary)] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <details className="group">
                    <summary className="list-none text-2xl font-medium text-gray-800 cursor-pointer flex justify-center items-center gap-2">
                      Services
                      <FiChevronDown className="transform group-open:rotate-180 transition-transform" />
                    </summary>
                    <ul className="mt-4 space-y-3">
                      {servicesList.map((service) => (
                        <li key={service}>
                          <Link
                            href={`/services/${slugify(service)}`}
                            className="block text-lg text-gray-600 hover:text-[var(--color-primary)] transition-colors"
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
                  <Link
                    href="/about"
                    className="block text-2xl font-medium text-gray-800 hover:text-[var(--color-primary)] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block text-2xl font-medium text-gray-800 hover:text-[var(--color-primary)] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
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