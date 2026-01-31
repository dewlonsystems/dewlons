// src/app/services/quality-assurance-testing/page.tsx
import Link from "next/link";
import { FiShield, FiSmartphone, FiZap, FiCheck, FiBarChart2, FiLock } from "react-icons/fi";

export default function QaTestingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/quality.jpg)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Quality Assurance & Testing
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Catch bugs before your users do—on every device, network, and screen size across Kenya.
          </p>
        </div>
      </section>

      {/* The Cost of Skipping QA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
                One Bug Can Cost You More Than All Testing Combined
              </h2>
              <p className="text-gray-800 mb-4">
                Imagine: your e-commerce site goes live—only for M-Pesa payments to fail during peak sales. Or your county health app crashes when 10,000 users log in at once. These aren’t hypotheticals—they’re real risks without rigorous QA.
              </p>
              <p className="text-gray-800">
                Quality Assurance isn’t an expense—it’s your **reputation shield** and **revenue protector**.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-3 mb-4">
                <FiZap className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">M-Pesa integration fails on launch day</p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <FiSmartphone className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">App crashes on Tecno or Infinix phones</p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <FiLock className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">User data exposed due to untested form</p>
              </div>
              <div className="flex items-start space-x-3">
                <FiBarChart2 className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Slow load times on Safaricom 3G</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Test */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            Comprehensive Testing for Real-World Conditions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiCheck className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Functional Testing</h3>
              <p className="text-gray-700 text-sm">
                Every button, form, and workflow tested against your requirements—does it do what it should?
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiSmartphone className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Cross-Device & Browser</h3>
              <p className="text-gray-700 text-sm">
                Tested on popular Kenyan devices: Samsung, Tecno, Infinix, iPhone—and Chrome, Safari, Firefox.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiZap className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Performance & Load Testing</h3>
              <p className="text-gray-700 text-sm">
                Simulate 1,000+ users to ensure your system stays fast during peak traffic (e.g., exam results day).
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiLock className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Security Audits</h3>
              <p className="text-gray-700 text-sm">
                Test for SQL injection, XSS, broken auth—especially on login and payment pages.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiBarChart2 className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Usability & Accessibility</h3>
              <p className="text-gray-700 text-sm">
                Is your app easy to use for non-tech users? Does it work with screen readers?
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiShield className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Regression Testing</h3>
              <p className="text-gray-700 text-sm">
                After every update, we verify nothing else broke—automated with Cypress & Jest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our QA Process */}
      <section className="py-16 px-4 bg-[var(--color-secondary)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            How We Ensure Flawless Delivery
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">1</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Test Planning</h3>
                <p className="text-gray-800">
                  We define test cases based on your user stories, edge cases, and business-critical paths (e.g., checkout flow).
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">2</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Manual + Automated Testing</h3>
                <p className="text-gray-800">
                  Human testers explore real-user behavior; automation handles repetitive checks (Cypress, Postman, Jest).
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">3</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Real Device Testing</h3>
                <p className="text-gray-800">
                  We test on actual low-end and mid-range Android phones common in Kenya—not just emulators.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">4</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Reporting & Sign-off</h3>
                <p className="text-gray-800">
                  You receive a detailed test report with screenshots, steps to reproduce, and severity ratings—so you can launch with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
            Quality Isn’t Expensive—It’s Priceless
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto mb-8">
            A single public failure can damage trust for years. With Dewlon’s QA, you avoid:
          </p>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 inline-block">
            <p className="text-gray-800 italic">
              “After their QA cycle, our app launched with zero critical bugs. Even our M-Pesa webhook worked perfectly on Day 1.”
              <br />
              <span className="font-medium not-italic">— David Omondi, Founder, AgriSoko</span>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-[var(--color-primary)] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don’t Launch Blind—Test Like Your Business Depends on It
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free QA checklist + risk assessment for your project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <Link href="/contact" className="btn-primary inline-block px-8 py-4 text-lg">
              Request Free QA Assessment
            </Link>
            <p className="text-sm opacity-90">
              Or call us: <a href="tel:+254728722746" className="underline">+254 728 722 746</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}