// src/app/services/it-consulting-digital-transformation/page.tsx
import Link from "next/link";
import { FiZap, FiShield, FiBarChart2, FiLayers, FiCheck, FiTrendingUp } from "react-icons/fi";

export default function ItConsultingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/it%20consulting.jpg)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            IT Consulting & Digital Transformation
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Turn technology into your strategic advantage—with a clear, affordable roadmap built for Kenya.
          </p>
        </div>
      </section>

      {/* The Strategic Gap */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
                Are You Investing in Tech—or Just Spending on It?
              </h2>
              <p className="text-gray-800 mb-4">
                Many Kenyan organizations buy software, hire developers, or migrate to the cloud—only to find their systems don’t talk to each other, staff resist change, or ROI never materializes.
              </p>
              <p className="text-gray-800">
                Digital transformation isn’t about tools—it’s about **strategy, alignment, and execution**. And that starts with honest, expert advice.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-3 mb-4">
                <FiZap className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Spent KSh 2M on software no one uses</p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <FiShield className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Cybersecurity gaps exposed during audit</p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <FiBarChart2 className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">No clear way to measure tech ROI</p>
              </div>
              <div className="flex items-start space-x-3">
                <FiLayers className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Legacy systems block innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            Strategic Clarity. Practical Roadmaps. Measurable Results.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiBarChart2 className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Digital Maturity Assessment</h3>
              <p className="text-gray-700 text-sm">
                Audit your current tech stack, processes, and skills—then benchmark against industry best practices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiLayers className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Custom Transformation Roadmap</h3>
              <p className="text-gray-700 text-sm">
                A phased, budget-conscious plan with clear milestones, risks, and expected ROI—tailored to your sector.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiShield className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Cybersecurity & Compliance Review</h3>
              <p className="text-gray-700 text-sm">
                Identify vulnerabilities, align with Kenyan data guidelines, and prepare for audits (e.g., county govt).
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiZap className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Cloud & AI Strategy</h3>
              <p className="text-gray-700 text-sm">
                Should you move to AWS? Use AI for customer service? We advise based on real need—not hype.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiCheck className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Vendor & Tool Selection</h3>
              <p className="text-gray-700 text-sm">
                Cut through marketing noise. We help you choose the right ERP, CRM, or SaaS—without bias.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiTrendingUp className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Change Management Guidance</h3>
              <p className="text-gray-700 text-sm">
                Train teams, manage resistance, and ensure your people adopt new systems successfully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local Expertise Matters */}
      <section className="py-16 px-4 bg-[var(--color-secondary)]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
            Technology That Works in the Kenyan Context
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto mb-8">
            Global frameworks fail when they ignore local realities. We’ve advised:
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-[var(--color-primary)] mb-2">🏢 County Governments</h4>
              <p className="text-gray-700 text-sm">On e-citizen systems, data privacy, and interoperability with national platforms.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-[var(--color-primary)] mb-2">🌱 Agri-Cooperatives</h4>
              <p className="text-gray-700 text-sm">On low-bandwidth solutions, mobile-first design, and M-Pesa integration.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-[var(--color-primary)] mb-2">🏦 SMEs & Startups</h4>
              <p className="text-gray-700 text-sm">On cost-effective cloud adoption, cybersecurity basics, and scalable architecture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            How We Partner With You
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">1</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Listen & Understand</h3>
                <p className="text-gray-800">
                  We spend time learning your mission, constraints, team, and vision—not just your tech stack.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">2</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Diagnose & Benchmark</h3>
                <p className="text-gray-800">
                  We assess your current state against peers and global standards—then identify quick wins vs. long-term plays.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">3</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Recommend & Prioritize</h3>
                <p className="text-gray-800">
                  You get a clear, jargon-free roadmap—with options for every budget and timeline.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">4</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Support Implementation</h3>
                <p className="text-gray-800">
                  We can execute the plan ourselves—or guide your internal team or other vendors to success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-[var(--color-primary)] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stop Guessing. Start Transforming.
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free 60-minute digital strategy session + custom assessment report.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <Link href="/contact" className="btn-primary inline-block px-8 py-4 text-lg">
              Book Free Strategy Session
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