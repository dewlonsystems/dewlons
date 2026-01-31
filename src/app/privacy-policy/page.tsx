// src/app/privacy-policy/page.tsx
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-200">
        <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-8 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-800 mb-6">
          Last updated: January 31, 2026
        </p>

        <p className="text-gray-800 mb-6">
          Dewlon Systems ("we," "us," or "our") operates the website dewlonsystems.com and provides software development and digital services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--color-primary)] mt-8 mb-4">
          1. Information We Collect
        </h2>
        <p className="text-gray-800 mb-4">
          We may collect the following types of information:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-800 space-y-2">
          <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and project details you provide via contact forms or emails.</li>
          <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on site, and referring URLs (collected via analytics tools).</li>
          <li><strong>Cookies:</strong> We use cookies to enhance user experience and analyze site traffic.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--color-primary)] mt-8 mb-4">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-800 mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-800 space-y-2">
          <li>Respond to your inquiries and provide requested services</li>
          <li>Improve our website and service offerings</li>
          <li>Send project updates, invoices, or support communications</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--color-primary)] mt-8 mb-4">
          3. Sharing of Information
        </h2>
        <p className="text-gray-800 mb-4">
          We do not sell, trade, or rent your personal information to third parties. We may share data only when necessary with:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-800 space-y-2">
          <li>Trusted subcontractors (e.g., hosting providers, payment processors) who assist in delivering our services</li>
          <li>Legal authorities if required by law</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--color-primary)] mt-8 mb-4">
          4. Data Security
        </h2>
        <p className="text-gray-800 mb-6">
          We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--color-primary)] mt-8 mb-4">
          5. Your Rights
        </h2>
        <p className="text-gray-800 mb-6">
          You have the right to:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-800 space-y-2">
          <li>Access, correct, or delete your personal data</li>
          <li>Withdraw consent at any time</li>
          <li>Request a copy of your data</li>
        </ul>
        <p className="text-gray-800 mb-6">
          To exercise these rights, contact us at <strong>info@dewlons.com</strong>.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--color-primary)] mt-8 mb-4">
          6. Changes to This Policy
        </h2>
        <p className="text-gray-800 mb-6">
          We may update this Privacy Policy periodically. The updated version will be posted on this page with a new "Last updated" date.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--color-primary)] mt-8 mb-4">
          7. Contact Us
        </h2>
        <p className="text-gray-800 mb-6">
          If you have questions about this Privacy Policy, please contact us:
        </p>
        <address className="text-gray-800 not-italic mb-8">
          Dewlon Systems<br />
          Imara Daima, Nairobi, Kenya<br />
          Email: info@dewlons.com<br />
          Phone: +254 728 722 746
        </address>

        <div className="text-center">
          <Link href="/" className="btn-outline inline-block">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}