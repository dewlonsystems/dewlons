// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-secondary)] flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        {/* Round Logo */}
        <div className="mb-10">
          <img
            src="https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/ce593d3a81320debbf36f64c22f66e28674ddfde/long.png"
            alt="Dewlon Systems Logo"
            className="mx-auto rounded-full w-24 h-24 object-cover border-4 border-white shadow-lg"
          />
        </div>

        {/* Content */}
        <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-primary)] mb-6">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-700 text-lg max-w-xl mx-auto mb-10">
          Sorry, the page you’re looking for doesn’t exist or has been moved. 
          Don’t worry — you can head back to our homepage or contact us directly.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary px-8 py-3">
            Go to Homepage
          </Link>
          <Link href="/contact" className="btn-outline px-8 py-3">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}