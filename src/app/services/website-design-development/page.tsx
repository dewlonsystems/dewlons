// src/app/services/website-design-development/page.tsx
import Link from "next/link";
import { FiSmartphone, FiGlobe, FiSearch, FiZap, FiShield, FiEdit3 } from "react-icons/fi";

export default function WebsiteDesignPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/web_design.jpg)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Website Design & Development</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Fast, beautiful, and lead-generating websites built for Kenyan businesses—mobile-first, SEO-ready, and easy to manage.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
                Is Your Website Costing You Customers?
              </h2>
              <p className="text-gray-800 mb-4">
                In Kenya today, over 85% of web traffic comes from mobile phones. If your site is slow, outdated, or hard to navigate on a smartphone, you’re losing leads before they even say “hello.”
              </p>
              <p className="text-gray-800">
                A great website isn’t just pretty—it’s your 24/7 salesperson, brand ambassador, and customer service desk—all in one.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-3 mb-4">
                <FiSmartphone className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Site doesn’t work well on mobile</p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <FiZap className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Takes more than 3 seconds to load</p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <FiSearch className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Can’t be found on Google</p>
              </div>
              <div className="flex items-start space-x-3">
                <FiEdit3 className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Need a developer just to update text</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            Websites That Work as Hard as You Do
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiGlobe className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Mobile-First Design</h3>
              <p className="text-gray-700 text-sm">
                Fully responsive on all devices—especially optimized for Safaricom, Airtel, and Telkom users.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiZap className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Blazing Fast Performance</h3>
              <p className="text-gray-700 text-sm">
                Built with Next.js + optimized assets—loads in under 2 seconds, even on 3G.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiSearch className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">SEO-Ready from Day One</h3>
              <p className="text-gray-700 text-sm">
                Clean code, semantic HTML, meta tags, sitemaps—built to rank on Google Kenya.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiEdit3 className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Easy Content Management</h3>
              <p className="text-gray-700 text-sm">
                Update text, images, and offers yourself with our intuitive admin panel—no coding needed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiShield className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure & Compliant</h3>
              <p className="text-gray-700 text-sm">
                HTTPS, spam protection, GDPR/KE data best practices, and regular backups included.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiSmartphone className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Conversion-Focused UX</h3>
              <p className="text-gray-700 text-sm">
                Clear calls-to-action, fast contact forms, and WhatsApp integration to drive inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-4 bg-[var(--color-secondary)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            How We Build Your Website—Step by Step
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">1</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Discovery & Strategy</h3>
                <p className="text-gray-800">
                  We learn about your business, customers, competitors, and goals—then define your site’s structure and key pages.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">2</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">UI/UX Design & Approval</h3>
                <p className="text-gray-800">
                  We create clickable prototypes so you can “test-drive” your site before a single line of code is written.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">3</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Development & SEO Setup</h3>
                <p className="text-gray-800">
                  Built with Next.js, Tailwind CSS, and best practices for speed, security, and search visibility.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">4</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Training & Launch</h3>
                <p className="text-gray-800">
                  We train your team, migrate content, go live, and provide 30 days of post-launch support—free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
            Trusted by Nairobi Businesses Across Industries
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto mb-8">
            From restaurants in Westlands to NGOs in Eastleigh and retailers in Thika Road, we’ve helped over 120+ Kenyan organizations launch websites that convert visitors into customers.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <span>• TechStart Nairobi</span>
            <span>• Mama Mboga Online</span>
            <span>• Nairobi Legal Associates</span>
            <span>• Kisii Dairy Co-op</span>
            <span>• EduPortal Kenya</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-[var(--color-primary)] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Website Should Be Your Best Sales Tool
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free website audit + custom proposal—no obligation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <Link href="/contact" className="btn-primary inline-block px-8 py-4 text-lg">
              Get Free Proposal
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