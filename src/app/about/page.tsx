// src/app/about/page.tsx
import Link from "next/link";
import { FiMapPin, FiUsers, FiShield, FiZap, FiBarChart2, FiGlobe, FiCheck } from "react-icons/fi";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/who_we_are.jpg)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Dewlon Systems</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Nairobi’s most trusted, locally rooted, and technically elite software development company, delivering custom digital solutions for businesses, NGOs, and government agencies across Kenya and East Africa.
          </p>
        </div>
      </section>

      {/* Who We Are & Our Mission */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-8">
            Who Is Dewlon Systems, and Why Do We Exist?
          </h2>
          <p className="text-gray-800 max-w-4xl mx-auto mb-6 leading-relaxed">
            Dewlon Systems is a premier software development company headquartered in Imara Daima, Nairobi, with a satellite office in Kisii, Western Kenya. Founded in 2019 by a Kenyan engineer who witnessed firsthand the struggles of local businesses trying to work with offshore developers who didn’t understand M-Pesa integrations, county government workflows, or the realities of low-bandwidth rural connectivity, we set out to build something different: a homegrown, world-class tech studio that combines global engineering standards with deep local insight.
          </p>
          <p className="text-gray-800 max-w-4xl mx-auto mb-6 leading-relaxed">
            Our mission is simple yet profound: <strong>to empower Kenyan and East African organizations with secure, scalable, and intuitive digital solutions that solve real business problems, drive efficiency, and create measurable impact.</strong> We believe technology should serve people, not complicate their lives. Whether you’re a startup launching your first mobile app, a cooperative modernizing farmer payments, or a county government digitizing citizen services, we are your dedicated partner in digital transformation.
          </p>
          <p className="text-gray-800 max-w-4xl mx-auto leading-relaxed">
            Today, Dewlon Systems is a team of over 25 full-time professionals, including senior full-stack developers, UI/UX designers, cloud architects, DevOps engineers, QA specialists, and project managers, all based in Kenya, fluent in local business contexts, and committed to delivering excellence without compromise.
          </p>
        </div>
      </section>

      {/* What Services Do You Offer? */}
      <section className="py-16 px-4 bg-[var(--color-secondary)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-8">
            What Digital Services Does Dewlon Systems Provide?
          </h2>
          <p className="text-gray-800 max-w-4xl mx-auto mb-6 leading-relaxed">
            As a full-service software development company in Nairobi, we offer end-to-end digital product creation and support across nine core disciplines. We don’t just build websites, we architect complete digital ecosystems tailored to your unique operational needs.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              "Custom Software Development",
              "Website Design & Development",
              "Mobile App Development (iOS & Android)",
              "UI/UX Design & Prototyping",
              "API Development & Third-Party Integrations",
              "Cloud Solutions (AWS, Azure, GCP)",
              "DevOps & Automation",
              "Quality Assurance & Testing",
              "IT Consulting & Digital Transformation"
            ].map((service, i) => (
              <div key={i} className="flex items-start space-x-3">
                <FiCheck className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
                <span className="text-gray-800">{service}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-800 max-w-4xl mx-auto leading-relaxed">
            Additionally, we provide critical post-launch services including <strong>software maintenance and support</strong>, <strong>technical training and knowledge transfer</strong>, and <strong>SEO & digital marketing support</strong>,ensuring your digital investment continues to deliver value long after launch. From M-Pesa and Sendy integrations to ERP modernization and cloud migration, we handle everything under one roof, with full transparency and ownership.
          </p>
        </div>
      </section>

      {/* Why Choose a Local Kenyan Company? */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-8">
            Why Should I Choose a Local Software Company in Nairobi Over Offshore Developers?
          </h2>
          <p className="text-gray-800 max-w-4xl mx-auto mb-6 leading-relaxed">
            Choosing a local Kenyan software development partner like Dewlon Systems isn’t just about patriotism, it’s about practicality, efficiency, and risk reduction. When you work with offshore teams in distant time zones, you face communication delays, cultural misunderstandings, and a lack of contextual awareness about Kenyan business practices, regulatory requirements, and user behavior.
          </p>
          <p className="text-gray-800 max-w-4xl mx-auto mb-6 leading-relaxed">
            With Dewlon, you get:
          </p>
          <ul className="list-disc pl-6 text-gray-800 max-w-4xl mx-auto space-y-3 mb-6">
            <li><strong>Same-time-zone collaboration:</strong> Daily standups, quick feedback loops, and real-time problem-solving.</li>
            <li><strong>Local compliance knowledge:</strong> Understanding of data privacy expectations, public-sector procurement rules, and financial regulations in Kenya.</li>
            <li><strong>Context-aware design:</strong> Apps and websites optimized for Safaricom/Airtel networks, popular devices (Tecno, Infinix), and “near me” search behavior.</li>
            <li><strong>Physical presence:</strong> Meet face-to-face at our Imara Daima office or Kisii branch when needed.</li>
            <li><strong>No vendor lock-in:</strong> Full code ownership, comprehensive documentation, and training so you can manage your system independently.</li>
          </ul>
          <p className="text-gray-800 max-w-4xl mx-auto leading-relaxed">
            We’ve seen too many Kenyan organizations waste time and money on generic offshore solutions that fail during real-world use. That’s why we built Dewlon, to be the reliable, competent, and caring alternative.
          </p>
        </div>
      </section>

      {/* What Industries Do You Serve? */}
      <section className="py-16 px-4 bg-[var(--color-secondary)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-8">
            Which Industries and Sectors Has Dewlon Systems Worked With?
          </h2>
          <p className="text-gray-800 max-w-4xl mx-auto mb-6 leading-relaxed">
            Our experience spans both private and public sectors across Kenya, with deep expertise in industries where digital transformation delivers outsized impact.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { title: "Agriculture & Cooperatives", desc: "Farm management apps, M-Pesa payment systems, inventory tracking for dairy and crop cooperatives." },
              { title: "Government & County Services", desc: "E-citizen portals, procurement systems, HR/payroll platforms compliant with Kenyan public finance laws." },
              { title: "Healthcare", desc: "Patient management systems, telemedicine platforms, pharmacy inventory for clinics and hospitals." },
              { title: "Education", desc: "Learning management systems, school fee payment portals, teacher performance dashboards." },
              { title: "Fintech & Financial Services", desc: "Loan management software, mobile banking interfaces, agent network platforms with M-Pesa integration." },
              { title: "Retail & E-commerce", desc: "Online stores, inventory sync, delivery tracking, WhatsApp commerce integrations." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg text-[var(--color-primary)] mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-800 max-w-4xl mx-auto leading-relaxed">
            No matter your sector, we begin by understanding your unique workflows, pain points, and strategic goals, then build software that fits like a glove.
          </p>
        </div>
      </section>

      {/* Where Are You Located? */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-8">
            Where Is Dewlon Systems Located, and Do We Serve Clients Outside Nairobi?
          </h2>
          <p className="text-gray-800 max-w-4xl mx-auto mb-6 leading-relaxed">
            Our head office is strategically located in <strong>Imara Daima, Nairobi</strong>, a vibrant hub of innovation and entrepreneurship. This central location allows us to host client workshops, conduct in-person requirement sessions, and build strong collaborative relationships with businesses across the capital.
          </p>
          <p className="text-gray-800 max-w-4xl mx-auto mb-6 leading-relaxed">
            In 2023, we opened a second office in <strong>Kisii Town, Western Kenya</strong>, to better serve agricultural cooperatives, NGOs, and county government projects in the region. This physical presence ensures we understand local challenges and can provide on-site support when needed.
          </p>
          <p className="text-gray-800 max-w-4xl mx-auto mb-6 leading-relaxed">
            However, geography is no barrier. Through secure remote collaboration tools, agile project management, and clear communication protocols, we successfully serve clients across <strong>Mombasa, Kisumu, Nakuru, Eldoret, Kakamega, Thika, and beyond</strong>, as well as international partners in Uganda, Tanzania, and Rwanda.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <FiMapPin className="text-[var(--color-accent)] text-2xl mx-auto mb-3" />
              <h3 className="font-bold text-lg text-[var(--color-primary)]">Nairobi (HQ)</h3>
              <p className="text-gray-700 text-sm">Imara Daima – Full development, client meetings, workshops</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <FiMapPin className="text-[var(--color-accent)] text-2xl mx-auto mb-3" />
              <h3 className="font-bold text-lg text-[var(--color-primary)]">Kisii Branch</h3>
              <p className="text-gray-700 text-sm">Western Kenya – On-site support & regional coordination</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <FiGlobe className="text-[var(--color-accent)] text-2xl mx-auto mb-3" />
              <h3 className="font-bold text-lg text-[var(--color-primary)]">Remote Nationwide</h3>
              <p className="text-gray-700 text-sm">Secure collaboration across Kenya & East Africa</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Your Approach Different? */}
      <section className="py-16 px-4 bg-[var(--color-secondary)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-8">
            What Truly Sets Dewlon Systems Apart From Other Software Companies in Kenya?
          </h2>
          <p className="text-gray-800 max-w-4xl mx-auto mb-6 leading-relaxed">
            Many companies claim to offer “custom software”, but few deliver true partnership. At Dewlon, our difference lies in five core pillars:
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl text-[var(--color-primary)] mb-2">1. Deep Discovery, Not Assumption</h3>
              <p className="text-gray-800">
                We spend significant time understanding your actual workflows—not idealized versions, through interviews, shadowing, and process mapping. This ensures the software solves real problems, not imagined ones.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-[var(--color-primary)] mb-2">2. Human-Centered Design</h3>
              <p className="text-gray-800">
                Every interface is tested with real users, especially non-technical staff. We prioritize clarity, simplicity, and mobile-first experiences that work on low-end devices.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-[var(--color-primary)] mb-2">3. Transparent & Agile Delivery</h3>
              <p className="text-gray-800">
                We work in 2-week sprints with weekly demos, so you see progress, give feedback, and stay in control. No black boxes. No surprises.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-[var(--color-primary)] mb-2">4. Knowledge Transfer Built-In</h3>
              <p className="text-gray-800">
                From day one, we prepare your team to own the system. Training, documentation, and admin guides are included, not add-ons.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-[var(--color-primary)] mb-2">5. Long-Term Partnership Mindset</h3>
              <p className="text-gray-800">
                We measure success by your long-term satisfaction, not just project completion. Over 85% of our clients return for additional work or refer us to peers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact & Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-8">
            Our Impact Across Kenya
          </h2>
          <div className="grid md:grid-cols-4 gap-6 mt-10">
            <div>
              <div className="text-4xl font-bold text-[var(--color-primary)]">120+</div>
              <p className="text-gray-800">Custom software projects delivered since 2019</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[var(--color-primary)]">85%</div>
              <p className="text-gray-800">Client retention & referral rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[var(--color-primary)]">99.8%</div>
              <p className="text-gray-800">Average system uptime across all clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[var(--color-primary)]">50+</div>
              <p className="text-gray-800">Organizations empowered, from startups to county governments</p>
            </div>
          </div>
          <p className="text-gray-800 max-w-3xl mx-auto mt-10 leading-relaxed">
            We don’t count success in lines of code, but in <strong>faster service delivery for citizens</strong>, <strong>reduced operational costs for cooperatives</strong>, <strong>increased online sales for retailers</strong>, and <strong>digital confidence for leaders</strong> who once feared technology.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-[var(--color-primary)] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner With Nairobi’s Most Trusted Software Team?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you have a detailed specification or just a problem to solve, we’re here to listen, advise, and build with you, every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <Link href="/contact" className="btn-primary inline-block px-8 py-4 text-lg">
              Start Your Project Today
            </Link>
            <p className="text-sm opacity-90">
              Or call us directly: <a href="tel:+254728722746" className="underline">+254 728 722 746</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}