// src/app/components/Footer.tsx
import Link from "next/link";
import { FiMapPin, FiGlobe, FiPhone, FiMail, FiClock } from "react-icons/fi";

// Helper to slugify service names (matches your routing)
const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const services = [
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

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dewlon Systems</h3>
            <p className="text-gray-400 mb-4">
              Professional software and web development company based in Nairobi, Kenya.
            </p>
            <p className="text-gray-400 space-y-1">
              <span className="flex items-center gap-2 mb-1">
                <FiMapPin className="text-gray-400" /> Imara Daima, Nairobi
              </span>
              <span className="flex items-center gap-2 mb-1">
                <FiMapPin className="text-gray-400" /> Kisii & Kakamega Branches
              </span>
              <span className="flex items-center gap-2">
                <FiGlobe className="text-gray-400" /> Remote services worldwide
              </span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">All Services</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services - FULL LIST */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href={`/services/${slugify(service)}`}
                    className="hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400 flex items-center gap-2 mb-2">
              <FiPhone className="text-gray-400 flex-shrink-0" />
              +254728722746
            </p>
            <p className="text-gray-400 flex items-center gap-2 mb-2">
              <FiMail className="text-gray-400 flex-shrink-0" />
              info@dewlons.com
            </p>
            <p className="text-gray-400 flex items-center gap-2">
              <FiClock className="text-gray-400 flex-shrink-0" />
              Mon–Fri: 8AM–6PM EAT
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Dewlon Systems. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}