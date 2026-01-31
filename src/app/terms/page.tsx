// src/app/terms/page.tsx
import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-200">
        <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-8 text-center">
          Terms of Service
        </h1>

        <p className="text-gray-800 mb-6">
          Last updated: January 31, 2026
        </p>

        <p className="text-gray-800 mb-6">
          These Terms of Service ("Terms") govern your access to and use of the services provided by Dewlon Systems ("we," "us," or "our"). By engaging our services or using our website (dewlons.com), you agree to be bound by these Terms.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--color-primary)] mt-8 mb-4">
          1. Services Offered
        </h2>
        <p className="text-gray-800 mb-6">
          We provide custom software development, website design, mobile app development, cloud solutions, and related digital services. All deliverables are subject to mutual agreement via a formal proposal or contract.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--color-primary)] mt-8 mb-4">
          2. Client Responsibilities
        </h2>
        <p className="text-gray-800 mb-6">
          You agree to:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-800 space-y-2">
          <li>Provide accurate and complete information</li>
          <li>Grant necessary access to systems, content, or third-party accounts</li>
          <li>Make timely payments as per agreed schedule</li>
          <li>Review and approve deliverables within agreed timelines</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--color-primary)] mt-8 mb-4">
          3. Payment Terms
        </h2>
        <p className="text-gray-800 mb-6">
          - Invoices are due within 14 days of issuance.<br />
          - Late payments may incur a 1.5% monthly interest fee.<br />
          - Work may be paused for non-payment beyond 30 days.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--color-primary)] mt-8 mb-4">
          4. Intellectual Property
        </h2>
        <p className="text-gray-800 mb-6">
          Upon full payment, all final deliverables (source code, designs, documentation) are transferred to you. Pre-existing libraries, frameworks, or tools remain the property of their respective owners. We retain the right to showcase completed work in our portfolio unless otherwise agreed in writing.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--color-primary)] mt-8 mb-4">
          5. Warranties and Limitations
        </h2>
        <p className="text-gray-800 mb-6">
          We warrant that our services will be performed with reasonable skill and care. However, we do not guarantee uninterrupted or error-free operation of delivered software. Our liability is limited to the total fees paid for the specific project.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--color-primary)] mt-8 mb-4">
          6. Termination
        </h2>
        <p className="text-gray-800 mb-6">
          Either party may terminate a project with 14 days’ written notice. You will be billed for all work completed up to the termination date, plus any incurred third-party costs.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--color-primary)] mt-8 mb-4">
          7. Governing Law
        </h2>
        <p className="text-gray-800 mb-6">
          These Terms are governed by the laws of the Republic of Kenya. Any disputes shall be resolved in the courts of Nairobi.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--color-primary)] mt-8 mb-4">
          8. Contact
        </h2>
        <p className="text-gray-800 mb-6">
          For questions about these Terms, contact us:
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