// src/app/services/technical-training-knowledge-transfer/page.tsx
import Link from "next/link";
import { FiUsers, FiBookOpen, FiShield, FiZap, FiCheck, FiCode } from "react-icons/fi";

export default function TrainingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/training.jpg)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Technical Training & Knowledge Transfer
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Empower your team to own, manage, and grow your digital systems—with confidence.
          </p>
        </div>
      </section>

      {/* The Risk of No Training */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
                What Happens When Your Tech Team Leaves?
              </h2>
              <p className="text-gray-800 mb-4">
                Too many Kenyan organizations invest in great software—only to find themselves dependent on external developers for every small change. Passwords get lost. Documentation is missing. Simple updates take weeks.
              </p>
              <p className="text-gray-800">
                That’s not sustainability. That’s vulnerability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-3 mb-4">
                <FiUsers className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Only one person knows how the system works</p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <FiBookOpen className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">No user or admin manuals exist</p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <FiShield className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Security practices are unclear</p>
              </div>
              <div className="flex items-start space-x-3">
                <FiZap className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Every update requires a new quote</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            Build Internal Capacity—Not Dependency
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiUsers className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Customized Team Training</h3>
              <p className="text-gray-700 text-sm">
                Hands-on workshops for admins, developers, or end-users—tailored to your team’s skill level and roles.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiBookOpen className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Comprehensive Documentation</h3>
              <p className="text-gray-700 text-sm">
                Architecture diagrams, user manuals, API guides, troubleshooting steps—and more—in clear, simple English.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiCode className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Code Walkthroughs</h3>
              <p className="text-gray-700 text-sm">
                We explain how your system works—from database structure to business logic—so your devs can extend it safely.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiShield className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Security & Best Practices</h3>
              <p className="text-gray-700 text-sm">
                Learn how to manage credentials, apply patches, monitor logs, and prevent common vulnerabilities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiCheck className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Post-Training Support</h3>
              <p className="text-gray-700 text-sm">
                30 days of Q&A access so your team can ask follow-up questions as they go live.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                <FiZap className="text-[var(--color-accent)] text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">No Vendor Lock-In</h3>
              <p className="text-gray-700 text-sm">
                You own your code, your data, and your future. We make sure you can run it—without us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-4 bg-[var(--color-secondary)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            How We Ensure Your Team Succeeds
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">1</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Assess Needs</h3>
                <p className="text-gray-800">
                  We interview your team to understand their roles, technical background, and learning goals.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">2</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Customize Curriculum</h3>
                <p className="text-gray-800">
                  Training isn’t one-size-fits-all. We tailor content for developers, IT staff, or non-technical users.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">3</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Deliver + Document</h3>
                <p className="text-gray-800">
                  Live sessions (in-person or remote) + professionally written guides your team can refer to forever.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] font-bold">4</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-bold text-lg mb-2">Verify Understanding</h3>
                <p className="text-gray-800">
                  We test knowledge with real scenarios—“How would you reset a user’s password?”—to ensure readiness.
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
            True Digital Transformation Starts With People
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto mb-8">
            Technology alone doesn’t solve problems—people do. By investing in your team’s knowledge, you ensure your digital systems deliver value for years, not just months.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 inline-block">
            <p className="text-gray-800 italic">
              “After Dewlon’s training, our IT team now handles 90% of updates internally. We’ve cut support costs by half.”
              <br />
              <span className="font-medium not-italic">— Grace Akinyi, IT Director, Kakamega County</span>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-[var(--color-primary)] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Make Your Team the Owners of Your Tech Future
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free training needs assessment + sample documentation outline.
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