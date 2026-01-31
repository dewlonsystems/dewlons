// src/app/services/seo-digital-marketing-support/page.tsx
import Link from "next/link";
import { FiSearch, FiMapPin, FiBarChart2, FiSmartphone, FiCheck, FiTrendingUp } from "react-icons/fi";

export default function SeoMarketingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/c7cf8d5c8aa810f2cc5bb2793b0b3f3431ee1062/seon.jpg)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            SEO & Digital Marketing Support
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Get found by customers searching for your services in Nairobi, Kisii, Kakamega—and beyond.
          </p>
        </div>
      </section>

      {/* The Visibility Gap */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
                If Google Can’t Find You, Neither Can Your Customers
              </h2>
              <p className="text-gray-800 mb-4">
                In Kenya, over 90% of consumers search online before buying a product or hiring a service. If your business doesn’t appear on the first page of Google—or in Google Maps—you’re invisible to most potential customers.
              </p>
              <p className="text-gray-800">
                Great SEO isn’t magic—it’s strategy, local insight, and technical precision working together to put you in front of ready-to-buy audiences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-3 mb-4">
                <FiSearch className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">“Plumber near me” → your competitor shows up</p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <FiMapPin className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Not on Google Maps = lost walk-in traffic</p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <FiSmartphone className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Site loads slow on Safaricom network</p>
              </div>
              <div className="flex items-start space-x-3">
                <FiBarChart2 className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">No way to track which keywords bring calls</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            Local SEO That Drives Real Business Growth
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiSearch className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Keyword Strategy</h3>
              <p className="text-gray-700 text-sm">
                Research what Kenyans actually search: “best salon Nairobi,” “agricultural loans Kisii,” etc.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiMapPin className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Google Business Profile</h3>
              <p className="text-gray-700 text-sm">
                Claim, verify, and optimize your listing so you appear in Maps and “near me” searches.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiSmartphone className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Mobile-First Optimization</h3>
              <p className="text-gray-700 text-sm">
                Fast loading, tap-friendly buttons, and clear CTAs—even on 3G networks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiTrendingUp className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">On-Page SEO</h3>
              <p className="text-gray-700 text-sm">
                Title tags, headers, image alt text, and content optimized for both users and Google.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiBarChart2 className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Performance Tracking</h3>
              <p className="text-gray-700 text-sm">
                Google Analytics + Search Console setup with monthly reports on traffic, rankings, and leads.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiCheck className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Technical SEO Health</h3>
              <p className="text-gray-700 text-sm">
                Fix broken links, improve site speed, secure with HTTPS, and ensure Google can crawl your site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Focus */}
      <section className="py-16 px-4 bg-[var(--color-secondary)]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
            We Specialize in Kenyan Local SEO
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto mb-8">
            Whether you’re a restaurant in Westlands, a hardware store in Kisumu, or a clinic in Kakamega, we optimize your online presence so nearby customers find you first—on Google Search and Google Maps.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-[var(--color-primary)] mb-2">📍 Google Maps Dominance</h4>
              <p className="text-gray-700 text-sm">Get your business pinned with photos, hours, and reviews.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-[var(--color-primary)] mb-2">📱 Mobile Search Ready</h4>
              <p className="text-gray-700 text-sm">Optimized for users searching on Safaricom, Airtel, or Telkom.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-[var(--color-primary)] mb-2">💬 Review Generation</h4>
              <p className="text-gray-700 text-sm">Encourage happy customers to leave 5-star Google reviews.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results That Matter */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
            Real Impact for Kenyan Businesses
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto mb-8">
            Our clients see measurable growth within 3–6 months of starting SEO:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">↑ 120%</div>
              <p className="text-gray-700">More website visitors from Google</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">↑ 85%</div>
              <p className="text-gray-700">Increase in Google Maps direction requests</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">↑ 60%</div>
              <p className="text-gray-700">More contact form submissions & calls</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-[var(--color-primary)] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stop Losing Customers to Competitors Online
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free SEO audit + custom growth plan for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <Link href="/contact" className="btn-primary inline-block px-8 py-4 text-lg">
              Get Free SEO Audit
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