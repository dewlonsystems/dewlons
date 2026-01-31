// src/app/services/api-development-integration/page.tsx
import Link from "next/link";
import { FiCheck, FiShield, FiZap, FiCode, FiLock, FiDatabase } from "react-icons/fi";

export default function ApiDevelopmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/API.jpg)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">API Development & Integration</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Secure, scalable APIs that connect your business to M-Pesa, ERPs, CRMs, and global platforms—without breaking a sweat.
          </p>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
                Are Your Systems Talking—or Just Shouting Into the Void?
              </h2>
              <p className="text-gray-800 mb-4">
                Many Kenyan businesses struggle with disconnected tools: sales data stuck in spreadsheets, payments not syncing with inventory, customer records scattered across platforms. The result? Wasted time, errors, and missed opportunities.
              </p>
              <p className="text-gray-800">
                You don’t need more software—you need smarter connections.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-3 mb-4">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">
                  Manual data entry between systems
                </p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">
                  Failed M-Pesa webhook deliveries
                </p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">
                  CRM not updating after online orders
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">
                  Legacy ERP locked in isolation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            Seamless Integration, Built Right
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiCode className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Custom API Development</h3>
              <p className="text-gray-700 text-sm">
                RESTful or GraphQL APIs built with Node.js, Python, or Laravel—secure, documented, and versioned.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiZap className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Third-Party Integrations</h3>
              <p className="text-gray-700 text-sm">
                M-Pesa, Sendy, Twilio, Stripe, Google Workspace, SAP, Odoo, Zoho—and more.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiLock className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Enterprise-Grade Security</h3>
              <p className="text-gray-700 text-sm">
                OAuth 2.0, JWT, IP whitelisting, rate limiting, and end-to-end encryption.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiDatabase className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Legacy System Modernization</h3>
              <p className="text-gray-700 text-sm">
                Connect old databases or on-premise software to modern cloud apps—no full rewrite needed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiShield className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Reliability & Monitoring</h3>
              <p className="text-gray-700 text-sm">
                Real-time logging, error alerts, and uptime SLAs so your integrations never go silent.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiCheck className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Full Documentation</h3>
              <p className="text-gray-700 text-sm">
                Interactive Swagger/OpenAPI docs so your team can use and extend APIs with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Snippet */}
      <section className="py-16 px-4 bg-[var(--color-secondary)]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
            Real Impact: AgriSoko’s Unified Platform
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto mb-8">
            We integrated AgriSoko’s mobile app with M-Pesa, their warehouse database, and SMS alerts via Twilio. Result? Farmers now receive instant payment confirmations, inventory updates in real time, and order tracking, all through one seamless system.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-primary)] text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition"
          >
            Explore More
          </Link>
        </div>
      </section>

      {/* Why Dewlon? */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            Why Kenyan Businesses Trust Us With Their Critical Integrations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="mt-1 text-[var(--color-accent)]">
                <FiCheck className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Local Compliance Knowledge</h3>
                <p className="text-gray-700">
                  We understand Kenya’s data privacy expectations, M-Pesa API nuances, and public-sector integration requirements.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="mt-1 text-[var(--color-accent)]">
                <FiCheck className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Post-Launch Support</h3>
                <p className="text-gray-700">
                  APIs evolve. We monitor, maintain, and scale them long after launch—so you’re never left stranded.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="mt-1 text-[var(--color-accent)]">
                <FiCheck className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">No Black Boxes</h3>
                <p className="text-gray-700">
                  You own your code. We provide full documentation, training, and source access—no vendor lock-in.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="mt-1 text-[var(--color-accent)]">
                <FiCheck className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Nairobi-Based Team</h3>
                <p className="text-gray-700">
                  Meet face-to-face if needed. We’re not a faceless offshore shop—we’re your neighbors in Imara Daima.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[var(--color-primary)] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Unify Your Systems?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free integration audit and technical consultation—no obligation.
          </p>
          <Link href="/contact" className="btn-primary inline-block px-8 py-4 text-lg">
            Schedule Your Free Audit
          </Link>
          <p className="mt-4 text-sm opacity-80">
            Or call us directly: +254 728 722 746
          </p>
        </div>
      </section>
    </>
  );
}