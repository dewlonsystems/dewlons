// src/app/blog/page.tsx
import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      slug: "custom-web-app-2026",
      title: "Why Your Business Needs a Custom Web Application in 2026",
      excerpt: "Discover how tailored software solutions can give you a competitive edge in the Kenyan market.",
      date: "January 31, 2026",
      image: "https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/custom_software.jpg"
    },
    {
      slug: "seo-nairobi-2026",
      title: "SEO Best Practices for Nairobi-Based Companies",
      excerpt: "Learn how local SEO can drive more customers to your physical store or service area.",
      date: "January 31, 2026",
      image: "https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/c7cf8d5c8aa810f2cc5bb2793b0b3f3431ee1062/seon.jpg"
    },
    {
      slug: "mobile-trends-east-africa",
      title: "Mobile App Development Trends in East Africa",
      excerpt: "From fintech to agritech, see what’s shaping the future of apps in the region.",
      date: "January 31, 2026",
      image: "https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/eduportal.jpg"
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(https://raw.githubusercontent.com/dewlonsystems/Dewlon-pictures/b41184a10eafc34953d16f6fc93363f583950ad9/blog.jpg)` }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Dewlon Systems Blog</h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">
            Insights on software development, web design, digital marketing, and tech trends in Kenya.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4 bg-[var(--color-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                  <h2 className="text-xl font-bold text-[var(--color-primary)] mb-3">{post.title}</h2>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="text-[var(--color-accent)] font-medium hover:underline"
                  >
                    Read Full Article →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Have a Topic in Mind?</h2>
          <p className="text-gray-800 mb-8">
            We’d love to hear what you’d like us to write about. Or, if you need help with a project, get in touch!
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}