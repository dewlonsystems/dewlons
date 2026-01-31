// src/app/services/ui-ux-design-prototyping/page.tsx
import Link from "next/link";
import { FiUser, FiLayers, FiSmartphone, FiEye, FiZap, FiCheck } from "react-icons/fi";

export default function UiUxPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/UI.jpg)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">UI/UX Design & Prototyping</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Human-centered design that turns complex problems into intuitive, engaging digital experiences—built for Kenyan users.
          </p>
        </div>
      </section>

      {/* The Cost of Bad UX */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
                Great Design Isn’t Optional—It’s Your Competitive Edge
              </h2>
              <p className="text-gray-800 mb-4">
                In Kenya’s fast-moving digital market, users decide in seconds whether to stay or leave. Confusing navigation, slow flows, or unclear buttons don’t just frustrate—they cost you customers, revenue, and reputation.
              </p>
              <p className="text-gray-800">
                Investing in thoughtful UI/UX isn’t about aesthetics—it’s about reducing support calls, increasing conversions, and building products people actually *want* to use.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-3 mb-4">
                <FiUser className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Users abandon your app after 2 taps</p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <FiSmartphone className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Forms are too long or confusing</p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <FiEye className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Key actions are hard to find</p>
              </div>
              <div className="flex items-start space-x-3">
                <FiZap className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Developers keep rebuilding features</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            From Research to Reality—Design That Drives Results
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiUser className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">User Research & Personas</h3>
              <p className="text-gray-700 text-sm">
                Interviews, surveys, and behavioral insights tailored to Kenyan user contexts and tech literacy levels.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiLayers className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Wireframes & User Flows</h3>
              <p className="text-gray-700 text-sm">
                Low-fidelity blueprints to test logic and structure—before writing code.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiSmartphone className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Interactive Prototypes</h3>
              <p className="text-gray-700 text-sm">
                Clickable Figma prototypes that simulate real app behavior—perfect for stakeholder buy-in and usability testing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiEye className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Visual UI Design</h3>
              <p className="text-gray-700 text-sm">
                Clean, brand-aligned interfaces with typography, color, and spacing optimized for readability on mobile.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiCheck className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Accessibility & WCAG</h3>
              <p className="text-gray-700 text-sm">
                Designs that work for all users—including those with visual or motor impairments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiZap className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Developer Handoff Kit</h3>
              <p className="text-gray-700 text-sm">
                Organized Figma files with specs, assets, and animations—so developers build it exactly as designed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-4 bg-[var(--color-secondary)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            Our Human-Centered Design Process
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">1</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Understand</h3>
                <p className="text-gray-800">
                  We interview stakeholders, analyze competitors, and study your target users—especially how they use phones, apps, and services in Kenya.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">2</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Define & Ideate</h3>
                <p className="text-gray-800">
                  We map user journeys, identify pain points, and brainstorm solutions that align with your business goals.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">3</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Prototype</h3>
                <p className="text-gray-800">
                  From paper sketches to clickable Figma prototypes—we test ideas early and often with real users.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">4</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Refine & Deliver</h3>
                <p className="text-gray-800">
                  Based on feedback, we polish the design and deliver production-ready assets with full documentation.
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
            Good Design Saves Time, Money, and Headaches
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto mb-8">
            By validating your product with users before development begins, you avoid costly rework, reduce developer frustration, and launch faster—with confidence that your solution truly meets user needs.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-[var(--color-primary)] mb-2">↓ 40% Dev Rework</h4>
              <p className="text-gray-700 text-sm">Clear specs = fewer surprises during coding.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-[var(--color-primary)] mb-2">↑ 65% User Retention</h4>
              <p className="text-gray-700 text-sm">Intuitive flows keep users coming back.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-[var(--color-primary)] mb-2">✓ Faster Stakeholder Buy-in</h4>
              <p className="text-gray-700 text-sm">Clickable prototypes speak louder than documents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-[var(--color-primary)] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let’s Design a Product People Love to Use
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free 30-minute UX consultation + sample wireframe for your project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <Link href="/contact" className="btn-primary inline-block px-8 py-4 text-lg">
              Book Free Consultation
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