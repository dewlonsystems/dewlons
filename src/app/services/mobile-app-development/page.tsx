// src/app/services/mobile-app-development/page.tsx
import Link from "next/link";
import { FiSmartphone, FiLayers, FiZap, FiLock, FiBarChart2, FiCheck } from "react-icons/fi";

export default function MobileAppPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/eduportal.jpg)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mobile App Development
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Build a mobile app that drives engagement, loyalty, and revenue—built for Kenyan users, on every device.
          </p>
        </div>
      </section>

      {/* The Mobile Opportunity */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
                Your Customers Live on Their Phones—Are You There?
              </h2>
              <p className="text-gray-800 mb-4">
                In Kenya, over 91% of internet users access the web via mobile. If your business isn’t meeting them in their pocket—with a fast, reliable, and useful app—you’re missing out on daily engagement, repeat sales, and brand loyalty.
              </p>
              <p className="text-gray-800">
                A great mobile app isn’t a luxury—it’s your 24/7 storefront, service desk, and relationship builder.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-3 mb-4">
                <FiSmartphone className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Customers abandon slow or buggy apps</p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <FiLayers className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">MVP built offshore fails on local networks</p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <FiZap className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">App rejected by Google Play for policy issues</p>
              </div>
              <div className="flex items-start space-x-3">
                <FiBarChart2 className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">No way to track user behavior or retention</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            Apps That Work as Hard as You Do
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiSmartphone className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Native or Cross-Platform</h3>
              <p className="text-gray-700 text-sm">
                iOS (Swift), Android (Kotlin), or cross-platform (React Native/Flutter)—we choose what’s best for your budget and performance needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiZap className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Optimized for Kenyan Networks</h3>
              <p className="text-gray-700 text-sm">
                Lightweight, offline-first design that works flawlessly on Safaricom, Airtel, and Telkom—even on 3G.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiLock className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure & Compliant</h3>
              <p className="text-gray-700 text-sm">
                Biometric login, encrypted data, M-Pesa integration, and full compliance with Google Play & App Store policies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiBarChart2 className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Analytics & Growth Tools</h3>
              <p className="text-gray-700 text-sm">
                Track user behavior, retention, and conversions with Firebase, Mixpanel, or custom dashboards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiCheck className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">End-to-End Ownership</h3>
              <p className="text-gray-700 text-sm">
                From idea → design → development → App Store submission → post-launch support—we handle it all.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiLayers className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Real Device Testing</h3>
              <p className="text-gray-700 text-sm">
                Tested on popular Kenyan devices: Tecno, Infinix, Samsung, iPhone—so it works for your real users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-4 bg-[var(--color-secondary)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            From Idea to App Store—Done Right
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">1</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Discovery & Strategy</h3>
                <p className="text-gray-800">
                  We define your core features, target users, and success metrics—focusing on what truly matters for your business.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">2</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">UI/UX Design & Prototyping</h3>
                <p className="text-gray-800">
                  Clickable prototypes tested with real users—so you validate before you build.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">3</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Development & QA</h3>
                <p className="text-gray-800">
                  Clean, maintainable code + rigorous testing on real devices across Kenya.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">4</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Launch & Growth</h3>
                <p className="text-gray-800">
                  We handle App Store submission, monitor performance, and help you plan feature updates based on real usage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Impact */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
            Built for Kenya, Loved by Users
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto mb-8">
            We’ve helped Kenyan innovators launch apps that solve real problems:
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-[var(--color-primary)] mb-2">🌾 AgriSoko</h4>
              <p className="text-gray-700 text-sm">Farmers order inputs, track deliveries, and receive payments via M-Pesa—all in one app.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-[var(--color-primary)] mb-2">🏥 Nairobi Health Connect</h4>
              <p className="text-gray-700 text-sm">Patients book appointments, view records, and get SMS reminders—reducing no-shows by 40%.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-[var(--color-primary)] mb-2">📚 EduPortal</h4>
              <p className="text-gray-700 text-sm">Teachers manage classes, parents pay fees, students access lessons—offline-capable for rural schools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-[var(--color-primary)] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your App Could Be Changing Lives—Starting Today
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free app concept review + technical feasibility assessment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <Link href="/contact" className="btn-primary inline-block px-8 py-4 text-lg">
              Get Free Concept Review
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