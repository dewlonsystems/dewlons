// src/app/services/cloud-solutions/page.tsx
import Link from "next/link";
import { FiZap, FiShield, FiBarChart2, FiGlobe, FiCheck, FiCloud } from "react-icons/fi";

export default function CloudSolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/cloud.jpg)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cloud Solutions
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Scale smarter, cut IT costs, and protect your data—with cloud infrastructure built for Kenya.
          </p>
        </div>
      </section>

      {/* The Hidden Risks of On-Premise */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
                Is Your On-Premise Server Holding You Back?
              </h2>
              <p className="text-gray-800 mb-4">
                Maintaining physical servers in Nairobi means constant hardware upgrades, power backups, security patches, and the ever-present risk of fire, flood, or theft wiping out your data overnight.
              </p>
              <p className="text-gray-800">
                The cloud isn’t just “someone else’s computer”—it’s your path to **resilience, agility, and predictable costs**.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-3 mb-4">
                <FiZap className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Server crashed during peak sales</p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <FiShield className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">No off-site backup = lost 3 days of data</p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <FiBarChart2 className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">IT costs keep rising with no ROI</p>
              </div>
              <div className="flex items-start space-x-3">
                <FiGlobe className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Can’t scale during traffic spikes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            Cloud That Works for Kenyan Businesses
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiCloud className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Strategic Migration</h3>
              <p className="text-gray-700 text-sm">
                Move legacy systems to AWS, Azure, or GCP—safely, affordably, and with zero downtime.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiShield className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Security & Compliance</h3>
              <p className="text-gray-700 text-sm">
                Encrypted data, IAM controls, firewall rules—and guidance on Kenyan data residency requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiBarChart2 className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Cost Optimization</h3>
              <p className="text-gray-700 text-sm">
                Right-size resources, auto-scale, and eliminate waste—so you only pay for what you use.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiZap className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">High Availability</h3>
              <p className="text-gray-700 text-sm">
                Multi-AZ deployments ensure your app stays online—even if one data center fails.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiCheck className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Disaster Recovery</h3>
              <p className="text-gray-700 text-sm">
                Automated backups, point-in-time recovery, and tested failover plans—so you sleep soundly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiGlobe className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Hybrid & Multi-Cloud</h3>
              <p className="text-gray-700 text-sm">
                Keep sensitive data on-premise while running public apps in the cloud—or avoid vendor lock-in with multi-cloud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Kenya */}
      <section className="py-16 px-4 bg-[var(--color-secondary)]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
            Cloud That Understands Kenyan Realities
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto mb-8">
            We design cloud strategies that respect your context:
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-[var(--color-primary)] mb-2">Data Residency</h4>
              <p className="text-gray-700 text-sm">Deploy in African regions (e.g., AWS Cape Town) when required by policy or preference.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-[var(--color-primary)] mb-2">Intermittent Connectivity</h4>
              <p className="text-gray-700 text-sm">Design apps that sync gracefully when internet drops—critical for rural operations.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-[var(--color-primary)] mb-2">Budget Predictability</h4>
              <p className="text-gray-700 text-sm">No more surprise hardware bills—switch to monthly operational expenses you can forecast.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            From Assessment to Optimization—in 4 Steps
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">1</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Assess & Strategize</h3>
                <p className="text-gray-800">
                  We audit your current infrastructure and define a cloud roadmap aligned with your budget, compliance needs, and growth goals.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">2</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Migrate & Modernize</h3>
                <p className="text-gray-800">
                  We lift-and-shift or refactor your apps—using Infrastructure-as-Code (Terraform) for consistency and speed.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">3</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Secure & Monitor</h3>
                <p className="text-gray-800">
                  Implement security best practices and real-time monitoring (CloudWatch, Grafana) so you’re always in control.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">4</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Optimize & Scale</h3>
                <p className="text-gray-800">
                  Continuously refine performance and costs—so your cloud investment grows smarter over time.
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
            Stop Worrying About Servers. Start Growing Your Business.
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free cloud readiness assessment + cost-saving roadmap.
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