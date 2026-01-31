// src/app/services/devops-automation/page.tsx
import Link from "next/link";
import { FiZap, FiShield, FiClock, FiBarChart2, FiCheck, FiRepeat } from "react-icons/fi";

export default function DevOpsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/devops.webp)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            DevOps & Automation
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Ship features faster, reduce outages, and eliminate weekend firefighting—with automated, reliable software delivery.
          </p>
        </div>
      </section>

      {/* The Hidden Cost of Manual Ops */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
                Is Your Team Spending More Time Fixing Than Building?
              </h2>
              <p className="text-gray-800 mb-4">
                Many Kenyan tech teams are stuck in a cycle: code → manual testing → late-night deployments → bugs → rollback → repeat. This slows innovation, burns out talent, and delays revenue-generating features.
              </p>
              <p className="text-gray-800">
                DevOps isn’t just for Silicon Valley—it’s your path to **predictable, stress-free software delivery**, even with limited resources.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-3 mb-4">
                <FiClock className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Deployments take hours (or days)</p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <FiZap className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Critical bug found after launch</p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <FiRepeat className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Same deployment errors keep happening</p>
              </div>
              <div className="flex items-start space-x-3">
                <FiBarChart2 className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">No visibility into system performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            Automated, Reliable, and Fast—Every Time
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiZap className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">CI/CD Pipelines</h3>
              <p className="text-gray-700 text-sm">
                Automate testing and deployment—push code, and it ships safely to staging or production in minutes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiRepeat className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">One-Click Rollbacks</h3>
              <p className="text-gray-700 text-sm">
                If something goes wrong, revert to the last stable version instantly—no panic, no downtime.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiShield className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Infrastructure as Code</h3>
              <p className="text-gray-700 text-sm">
                Define servers, networks, and databases in code (Terraform)—so environments are identical and reproducible.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiBarChart2 className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Real-Time Monitoring</h3>
              <p className="text-gray-700 text-sm">
                Track uptime, errors, and performance with Grafana & Prometheus—get alerts before users complain.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiCheck className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Containerization (Docker)</h3>
              <p className="text-gray-700 text-sm">
                Package your app once, run it anywhere—eliminating “it works on my machine” chaos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiClock className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Faster Time-to-Market</h3>
              <p className="text-gray-700 text-sm">
                Release new features weekly—or daily—instead of quarterly. Stay ahead of competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters for Kenyan Teams */}
      <section className="py-16 px-4 bg-[var(--color-secondary)]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
            DevOps That Works for Nairobi, Not Just Netflix
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto mb-8">
            You don’t need a 100-person SRE team. We implement **practical, affordable DevOps** for Kenyan realities:
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-[var(--color-primary)] mb-2">💰 Budget-Conscious</h4>
              <p className="text-gray-700 text-sm">Start small: automate deployments first, then monitoring, then scaling.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-[var(--color-primary)] mb-2">👨‍💻 Small Teams</h4>
              <p className="text-gray-700 text-sm">Empower your 3–5 person dev team to ship like a giant—with guardrails.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-[var(--color-primary)] mb-2">☁️ Hybrid Cloud</h4>
              <p className="text-gray-700 text-sm">Works on AWS, Azure, Google Cloud, or your on-premise servers in Nairobi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            From Chaos to Confidence—in 4 Steps
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">1</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Assess & Prioritize</h3>
                <p className="text-gray-800">
                  We audit your current workflow and identify the highest-impact automation opportunities (e.g., deployment, testing).
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">2</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Build & Integrate</h3>
                <p className="text-gray-800">
                  We set up pipelines, containerize apps, and connect monitoring—without disrupting your live systems.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">3</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Train & Document</h3>
                <p className="text-gray-800">
                  Your team learns to manage the system—with runbooks, video guides, and hands-on workshops.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">4</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Support & Optimize</h3>
                <p className="text-gray-800">
                  We monitor performance and refine the system over time—so it keeps delivering value.
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
            Stop Wasting Time on Repetitive Tasks
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free DevOps readiness assessment + custom automation roadmap.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <Link href="/contact" className="btn-primary inline-block px-8 py-4 text-lg">
              Request Free Assessment
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