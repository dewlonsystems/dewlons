// src/app/services/custom-software-development/page.tsx
import Link from "next/link";
import { FiZap, FiShield, FiBarChart2, FiLayers, FiCheck, FiUsers } from "react-icons/fi";

export default function CustomSoftwarePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/custom_software.jpg)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Custom Software Development
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Software built for your unique workflow—not forced into off-the-shelf boxes.
          </p>
        </div>
      </section>

      {/* The Off-the-Shelf Trap */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
                Are You Forcing Your Business Into Someone Else’s Mold?
              </h2>
              <p className="text-gray-800 mb-4">
                Generic software might seem cheaper upfront—but when it doesn’t match your workflow, you end up with workarounds, double data entry, frustrated staff, and missed opportunities.
              </p>
              <p className="text-gray-800">
                Custom software isn’t a luxury—it’s how serious organizations **eliminate waste, automate complexity, and outpace competitors**.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-3 mb-4">
                <FiZap className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Staff use 3 tools to complete one task</p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <FiLayers className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Critical process can’t be automated</p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <FiBarChart2 className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">No real-time visibility into operations</p>
              </div>
              <div className="flex items-start space-x-3">
                <FiShield className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Data stuck in spreadsheets = security risk</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            Software That Fits Like a Glove
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiUsers className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Workflow-First Design</h3>
              <p className="text-gray-700 text-sm">
                We map your actual processes—not idealized versions—so the software matches how your team really works.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiZap className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">End-to-End Automation</h3>
              <p className="text-gray-700 text-sm">
                From data capture to reporting, approvals to notifications—automate repetitive tasks and reduce errors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiShield className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure & Compliant</h3>
              <p className="text-gray-700 text-sm">
                Role-based access, audit logs, encrypted data—and full alignment with Kenyan regulatory needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiBarChart2 className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Real-Time Dashboards</h3>
              <p className="text-gray-700 text-sm">
                Empower leaders with live insights into KPIs, bottlenecks, and performance—on any device.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiLayers className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Seamless Integrations</h3>
              <p className="text-gray-700 text-sm">
                Connect with M-Pesa, ERPs, CRMs, SMS gateways, or legacy databases—no silos, no manual exports.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiCheck className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Future-Proof Architecture</h3>
              <p className="text-gray-700 text-sm">
                Built with modern stacks (React, Node.js, Python, .NET) so your system scales as you grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Kenyan Organizations */}
      <section className="py-16 px-4 bg-[var(--color-secondary)]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
            Trusted Across Kenya’s Most Demanding Sectors
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto mb-8">
            We’ve delivered custom solutions that solve real problems:
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-[var(--color-primary)] mb-2">Financial Cooperatives</h4>
              <p className="text-gray-700 text-sm">Loan management, member portals, and automated repayment tracking with M-Pesa integration.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-[var(--color-primary)] mb-2">County Health Systems</h4>
              <p className="text-gray-700 text-sm">Patient registration, drug inventory, and reporting dashboards for clinics across Western Kenya.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-[var(--color-primary)] mb-2">Logistics & Transport</h4>
              <p className="text-gray-700 text-sm">Fleet tracking, driver assignment, and customer booking systems that cut dispatch time by 50%.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Collaborative Process */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            How We Build Software That Lasts
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">1</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Deep Discovery</h3>
                <p className="text-gray-800">
                  We spend time with your team—observing, interviewing, and mapping real workflows to uncover hidden needs.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">2</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Prototype & Validate</h3>
                <p className="text-gray-800">
                  We build clickable prototypes so you can test ideas before we write production code—reducing risk and rework.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">3</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Agile Development</h3>
                <p className="text-gray-800">
                  We deliver working software in 2-week sprints—so you see progress, give feedback, and stay in control.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">4</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Train, Launch & Support</h3>
                <p className="text-gray-800">
                  We train your team, go live smoothly, and provide ongoing maintenance—so your investment keeps delivering value.
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
            Stop Compromising. Start Building.
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free custom software concept review + technical feasibility assessment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <Link href="/contact" className="btn-primary inline-block px-8 py-4 text-lg">
              Request Free Review
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