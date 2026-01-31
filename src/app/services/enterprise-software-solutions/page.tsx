// src/app/services/enterprise-software-solutions/page.tsx
import Link from "next/link";
import { FiDatabase, FiZap, FiShield, FiBarChart2, FiUsers, FiCheck } from "react-icons/fi";

export default function EnterpriseSoftwarePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/Enterprise-Software.jpg)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Enterprise Software Solutions
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Unified, secure, and intelligent systems that power Kenya’s largest organizations—built for scale, compliance, and impact.
          </p>
        </div>
      </section>

      {/* The Cost of Fragmented Systems */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
                Are Siloed Systems Slowing Down Your Mission?
              </h2>
              <p className="text-gray-800 mb-4">
                When finance, HR, procurement, and service delivery run on disconnected tools—or worse, spreadsheets—you lose visibility, waste hours on manual reconciliation, and risk compliance failures during audits.
              </p>
              <p className="text-gray-800">
                Enterprise software isn’t about replacing people—it’s about **freeing them** to focus on what matters: serving citizens, growing your business, or advancing your mission.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-3 mb-4">
                <FiDatabase className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Finance and procurement don’t share data</p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <FiZap className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Staff spend 20+ hours/week on manual reports</p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <FiShield className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Failed audit due to missing audit trails</p>
              </div>
              <div className="flex items-start space-x-3">
                <FiBarChart2 className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Leadership makes decisions with outdated data</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            Mission-Critical Systems, Built for Kenya
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiDatabase className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Custom ERP Systems</h3>
              <p className="text-gray-700 text-sm">
                Integrate finance, procurement, inventory, and logistics into one secure platform—tailored to your workflows.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiUsers className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">CRM & Citizen Portals</h3>
              <p className="text-gray-700 text-sm">
                Track interactions, automate follow-ups, and deliver seamless service—whether to customers or constituents.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiBarChart2 className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">HR & Payroll Management</h3>
              <p className="text-gray-700 text-sm">
                Automate leave, attendance, payroll (NHIF, NSSF, PAYE), and performance reviews—fully compliant with Kenyan law.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiShield className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Document & Records Management</h3>
              <p className="text-gray-700 text-sm">
                Digitize files, enforce retention policies, and enable secure access—with full audit trails for compliance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiZap className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Real-Time Dashboards</h3>
              <p className="text-gray-700 text-sm">
                Empower leaders with live KPIs, financial summaries, and operational insights—on any device.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiCheck className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">On-Premise or Cloud</h3>
              <p className="text-gray-700 text-sm">
                Deploy where you need it—securely hosted in Nairobi, on AWS/Azure, or within your own data center.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Kenyan Institutions */}
      <section className="py-16 px-4 bg-[var(--color-secondary)]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
            Trusted by Kenya’s Most Demanding Organizations
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto mb-8">
            We’ve delivered enterprise systems that meet the rigorous demands of public sector, healthcare, and large cooperatives:
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-[var(--color-primary)] mb-2">🏛️ Kakamega County Government</h4>
              <p className="text-gray-700 text-sm">Integrated procurement & finance system reduced processing time by 70% and passed national audit.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-[var(--color-primary)] mb-2">🏥 Nairobi Regional Hospital</h4>
              <p className="text-gray-700 text-sm">Patient records, billing, and pharmacy management unified into one HIPAA-aligned platform.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-[var(--color-primary)] mb-2">🌾 Kisii Dairy Cooperative</h4>
              <p className="text-gray-700 text-sm">Farmers, collection centers, and HQ now share real-time milk volume, pricing, and payments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Enterprise Approach */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            How We Deliver Systems That Last
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">1</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Deep Process Mapping</h3>
                <p className="text-gray-800">
                  We shadow your teams to understand real workflows—not just org charts—so the system fits how you actually work.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">2</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Modular & Scalable Architecture</h3>
                <p className="text-gray-800">
                  Start with core modules (e.g., finance), then add HR, CRM, or analytics as your needs grow—without rebuilding.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">3</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Role-Based Security & Compliance</h3>
                <p className="text-gray-800">
                  Granular permissions, audit logs, and data encryption ensure compliance with Kenyan regulations and internal policies.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">4</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Change Management & Training</h3>
                <p className="text-gray-800">
                  We train super-users, create video guides, and provide 6 months of post-go-live support—so adoption sticks.
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
            Your Organization Deserves a System That Works as Hard as You Do
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free enterprise readiness assessment + solution blueprint.
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