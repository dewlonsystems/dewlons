// src/app/contact/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Client-side validation for phone (in case HTML5 is bypassed)
    if (!data.phone || !/^\+?[\d\s\-\(\)]{10,}$/.test(data.phone as string)) {
      setSubmitStatus({ type: "error", message: "Please enter a valid phone number." });
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setSubmitStatus({ type: "success", message: "Thank you! We’ll call you within 24 hours." });
        e.currentTarget.reset();
      } else {
        setSubmitStatus({ type: "error", message: result.error || "Failed to send. Please try again." });
      }
    } catch (error) {
      setSubmitStatus({ type: "error", message: "Network error. Please check your connection." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url(https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/contact-us.jpg)",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Dewlon Systems</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Let’s build something remarkable together, starting with a conversation.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 bg-[var(--color-secondary)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-800 text-lg mb-6">
            We respond to all inquiries within <strong>24 business hours</strong>. For urgent matters, call us directly at <strong>+254 728 722 746</strong>.
          </p>
          <p className="text-gray-800">
            Prefer a face-to-face meeting? Visit our offices in Nairobi, Kisii, or Kakamega. We’d love to host you.
          </p>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-primary)]">How to Reach Us</h2>
            
            <div className="flex items-start gap-4 p-4 bg-[var(--color-secondary)] rounded-lg hover:shadow-md transition-shadow">
              <FiMapPin className="text-[var(--color-accent)] mt-1 flex-shrink-0 text-xl" />
              <div>
                <p className="font-semibold text-gray-900">Head Office – Nairobi</p>
                <p className="text-gray-700">Imara Daima, Nairobi, Kenya</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-[var(--color-secondary)] rounded-lg hover:shadow-md transition-shadow">
              <FiMapPin className="text-[var(--color-accent)] mt-1 flex-shrink-0 text-xl" />
              <div>
                <p className="font-semibold text-gray-900">Western Kenya Branch</p>
                <p className="text-gray-700">Kisii Town & Kakamega Town</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-[var(--color-secondary)] rounded-lg hover:shadow-md transition-shadow">
              <FiPhone className="text-[var(--color-accent)] mt-1 flex-shrink-0 text-xl" />
              <div>
                <p className="font-semibold text-gray-900">Call or WhatsApp</p>
                <p className="text-gray-700">
                  <a href="tel:+254728722746" className="hover:underline">+254 728 722 746</a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-[var(--color-secondary)] rounded-lg hover:shadow-md transition-shadow">
              <FiMail className="text-[var(--color-accent)] mt-1 flex-shrink-0 text-xl" />
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-gray-700">
                  <a href="mailto:info@dewlons.com" className="hover:underline">info@dewlons.com</a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-[var(--color-secondary)] rounded-lg hover:shadow-md transition-shadow">
              <FiClock className="text-[var(--color-accent)] mt-1 flex-shrink-0 text-xl" />
              <div>
                <p className="font-semibold text-gray-900">Working Hours</p>
                <p className="text-gray-700">Monday – Friday: 8:00 AM – 6:00 PM EAT<br />Saturday: 9:00 AM – 1:00 PM (Support Only)</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <div className="h-64 md:h-full bg-gray-100 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.795283040751!2d36.81503447513203!3d-1.2863890000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f117e5b3e5c0d%3A0x1e3d5e5e5e5e5e5e5!2sImara%20Daima%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dewlon Systems Nairobi Office"
              ></iframe>
            </div>
            <p className="text-center text-sm text-gray-600 mt-2">
              *Interactive map: Nairobi Head Office (Imara Daima)
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-[var(--color-secondary)]">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-2 text-center">Start Your Project Today</h2>
            <p className="text-gray-700 text-center mb-6">
              Tell us about your vision. We’ll call you to discuss next steps, usually within hours.
            </p>

            {submitStatus && (
              <div
                className={`mb-6 p-4 rounded-lg text-center flex items-center justify-center gap-2 ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {submitStatus.type === "success" ? <FiCheckCircle /> : <FiAlertCircle />}
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-800 mb-2 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition"
                    placeholder="e.g., Jane Mwangi"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-800 mb-2 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-800 mb-2 font-medium">
                  Phone Number * <span className="text-sm text-gray-600">(We’ll call you)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  pattern="^\+?[\d\s\-\(\)]{10,}$"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition"
                  placeholder="+254 728 722 746"
                  title="Please enter a valid phone number (e.g., +254 7XX XXX XXX)"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-gray-800 mb-2 font-medium">
                  Service You Need *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition"
                >
                  <option value="">Select a service</option>
                  <option value="Custom Software Development">Custom Software Development</option>
                  <option value="Website Design & Development">Website Design & Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Enterprise Software Solutions">Enterprise Software Solutions</option>
                  <option value="Cloud Solutions">Cloud Solutions</option>
                  <option value="API Development & Integration">API Development & Integration</option>
                  <option value="Software Maintenance & Support">Software Maintenance & Support</option>
                  <option value="UI/UX Design & Prototyping">UI/UX Design & Prototyping</option>
                  <option value="Quality Assurance & Testing">Quality Assurance & Testing</option>
                  <option value="DevOps & Automation">DevOps & Automation</option>
                  <option value="SEO & Digital Marketing Support">SEO & Digital Marketing Support</option>
                  <option value="IT Consulting & Digital Transformation">IT Consulting & Digital Transformation</option>
                  <option value="Technical Training & Knowledge Transfer">Technical Training & Knowledge Transfer</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-800 mb-2 font-medium">
                  Tell Us About Your Project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition"
                  placeholder="What are you trying to achieve? What challenges are you facing? We’re listening..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-3 flex items-center justify-center gap-2 text-white font-medium rounded-lg hover:bg-opacity-90 transition"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message & Get a Call <FiSend className="ml-1" />
                  </>
                )}
              </button>
              <p className="text-center text-sm text-gray-600 mt-4">
                By submitting, you agree to our <Link href="/privacy-policy" className="text-[var(--color-accent)] hover:underline">Privacy Policy</Link>.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">We’re Just a Call Away</h2>
          <p className="text-gray-800 mb-4 text-lg">
            For immediate assistance, dial <strong><a href="tel:+254728722746" className="text-[var(--color-primary)] hover:underline">+254 728 722 746</a></strong>.
          </p>
          <p className="text-gray-700 mb-8">
            Our team is ready to listen, advise, and help you turn your digital vision into reality.
          </p>
          <Link href="/about" className="btn-outline inline-block px-8 py-3">
            Meet Our Team
          </Link>
        </div>
      </section>
    </>
  );
}