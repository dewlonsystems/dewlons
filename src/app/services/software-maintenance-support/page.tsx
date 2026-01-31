// src/app/services/software-maintenance-support/page.tsx
import Link from "next/link";
import { FiShield, FiZap, FiClock, FiBarChart2, FiCheck, FiHeadphones } from "react-icons/fi";

export default function MaintenanceSupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/software%20maintenance.jpg)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Software Maintenance & Support
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Keep your systems secure, fast, and always running—with proactive care from Nairobi’s trusted tech partner.
          </p>
        </div>
      </section>

      {/* The Hidden Cost of "Set It and Forget It" */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
                Is Your Software a Liability Waiting to Happen?
              </h2>
              <p className="text-gray-800 mb-4">
                Outdated software doesn’t just slow down—it exposes you to security breaches, crashes during peak hours, and compatibility failures with new devices or payment systems like M-Pesa.
              </p>
              <p className="text-gray-800">
                Without ongoing care, even the best-built system becomes a risk to your business continuity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-3 mb-4">
                <FiZap className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Site crashed during Black Friday sale</p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <FiShield className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Hacked due to unpatched vulnerability</p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <FiClock className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">M-Pesa integration failed after API update</p>
              </div>
              <div className="flex items-start space-x-3">
                <FiBarChart2 className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Slow performance = lost customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            Peace of Mind, Built In
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiShield className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Security Monitoring & Patching</h3>
              <p className="text-gray-700 text-sm">
                Automatic updates for OS, frameworks, and dependencies—plus malware scans and firewall checks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiZap className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">24/7 Uptime Monitoring</h3>
              <p className="text-gray-700 text-sm">
                Real-time alerts if your site or app goes down—so we fix it before your customers notice.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiClock className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Priority Bug Fixes</h3>
              <p className="text-gray-700 text-sm">
                Critical issues resolved within 4–24 hours, depending on your plan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiBarChart2 className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Performance Optimization</h3>
              <p className="text-gray-700 text-sm">
                Speed audits, database tuning, and image optimization to keep load times under 2 seconds.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiHeadphones className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Dedicated Support Channel</h3>
              <p className="text-gray-700 text-sm">
                Email, WhatsApp, or phone access to your assigned engineer—no call centers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiCheck className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Monthly Health Reports</h3>
              <p className="text-gray-700 text-sm">
                Clear summaries of uptime, security status, updates applied, and recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Support Tiers */}
      <section className="py-16 px-4 bg-[var(--color-secondary)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            Flexible Plans for Every Need
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-bold text-lg text-[var(--color-primary)] mb-3">Basic Care</h3>
              <ul className="text-gray-700 text-sm space-y-2 mb-4">
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /> Security patches
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /> Uptime monitoring
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /> Monthly report
                </li>
              </ul>
              <p className="text-gray-600 text-sm italic">Ideal for small business websites</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 ring-2 ring-[var(--color-accent)]">
              <h3 className="font-bold text-lg text-[var(--color-primary)] mb-3">Pro Support</h3>
              <ul className="text-gray-700 text-sm space-y-2 mb-4">
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /> Everything in Basic
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /> Priority bug fixes
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /> Performance tuning
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /> WhatsApp support
                </li>
              </ul>
              <p className="text-gray-600 text-sm italic">Best for e-commerce & web apps</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-bold text-lg text-[var(--color-primary)] mb-3">Enterprise Care</h3>
              <ul className="text-gray-700 text-sm space-y-2 mb-4">
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /> Everything in Pro
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /> 4-hour critical response
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /> Feature enhancements
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /> Dedicated engineer
                </li>
              </ul>
              <p className="text-gray-600 text-sm italic">For government & high-traffic systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Dewlon? */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
            Why Kenyan Organizations Trust Us With Their Critical Systems
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto mb-8">
            We don’t just fix problems—we prevent them. With deep knowledge of your system (since we likely built it), local presence in Nairobi, and a commitment to transparency, we become your long-term tech guardian.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <span>• 99.8% average uptime across clients</span>
            <span>• 24/7 monitoring from our Imara Daima office</span>
            <span>• No long-term contracts—cancel anytime</span>
            <span>• All plans include M-Pesa & SMS gateway checks</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-[var(--color-primary)] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don’t Wait for a Crisis to Protect Your Business
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free system health check + custom support plan recommendation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <Link href="/contact" className="btn-primary inline-block px-8 py-4 text-lg">
              Request Free Health Check
            </Link>
            <p className="text-sm opacity-90">
              Or call us now: <a href="tel:+254728722746" className="underline">+254 728 722 746</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}