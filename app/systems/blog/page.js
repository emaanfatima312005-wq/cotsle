import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <>

      {/* Hero */}

      <section className="bg-white py-24 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">

                Stay Updated With

                <span className="text-[#0D6EFD]">
                  {" "}Technology Insights
                </span>

              </h1>

              <p className="text-gray-600 text-lg leading-8 mb-10">

                Discover the latest trends in software development,
                artificial intelligence, cybersecurity, cloud computing,
                and professional IT education.

              </p>

              <div className="flex gap-5">

                <Link
                  href="#articles"
                  className="bg-[#0D6EFD] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  Read Articles
                </Link>

                <Link
                  href="/systems/contact"
                  className="border border-gray-300 hover:border-[#0D6EFD] hover:text-[#0D6EFD] px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  Contact Us
                </Link>

              </div>

            </div>

            <div className="relative flex justify-center">

              <div className="absolute w-80 h-80 bg-[#0D6EFD] opacity-10 blur-[140px] rounded-full"></div>

              <Image
                src="/images/blog.png"
                alt="Blog"
                width={600}
                height={600}
                className="relative z-10 w-full max-w-lg"
                priority
              />

            </div>

          </div>

        </div>

      </section>
      {/* Featured Article */}

<section
  data-aos="fade-up"
  className="py-24 bg-gray-50"
>

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
        Featured Article
      </p>

      <h2 className="text-5xl font-bold text-gray-900">
        Editor's Pick
      </h2>

    </div>

    <div className="grid lg:grid-cols-2 gap-14 items-center bg-white rounded-3xl shadow-xl overflow-hidden">

      <Image
        src="/images/featured-blog.png"
        alt="Featured Blog"
        width={700}
        height={500}
        className="w-full h-full object-cover"
      />

      <div className="p-10">

        <h3 className="text-4xl font-bold text-gray-900 mt-6 mb-6">
          How Artificial Intelligence Is Transforming Modern Businesses
        </h3>

        <p className="text-gray-600 leading-8 text-lg mb-8">
          Artificial Intelligence is revolutionizing every industry by
          improving productivity, automating repetitive tasks,
          strengthening security, and helping businesses make
          smarter decisions using data.
        </p>

        <div className="flex items-center gap-8 mb-8 text-gray-500">

          <span>📅 July 2026</span>

          <span>👤 Cotsle Team</span>

          <span>⏱ 6 min read</span>

        </div>

        <Link
          href="#articles"
          className="inline-block bg-[#0D6EFD] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
        >
          Read Article
        </Link>

      </div>

    </div>

  </div>

</section>
{/* Latest Articles */}

<section
  id="articles"
  data-aos="fade-up"
  className="py-24 bg-white"
>

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
        Latest Articles
      </p>

      <h2 className="text-5xl font-bold text-gray-900 mb-5">
        Explore Our Latest Insights
      </h2>

      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        Stay ahead with expert articles covering AI, software development,
        cybersecurity, cloud computing and digital transformation.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Card 1 */}

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

        <Image
          src="/images/blog1.jpg"
          alt="AI"
          width={500}
          height={300}
          className="w-full h-56 object-cover"
        />

        <div className="p-7">

          <span className="text-[#0D6EFD] font-semibold">
            Artificial Intelligence
          </span>

          <h3 className="text-2xl font-bold mt-4 mb-4">
            AI Trends Every Business Should Know
          </h3>

          <p className="text-gray-600 leading-7 mb-6">
            Discover how artificial intelligence is changing industries and creating new opportunities.
          </p>

          <Link
            href="#"
            className="text-[#0D6EFD] font-semibold hover:underline"
          >
            Read More →
          </Link>

        </div>

      </div>

      {/* Card 2 */}

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

        <Image
          src="/images/blog2.jpg"
          alt="Cyber"
          width={500}
          height={300}
          className="w-full h-56 object-cover"
        />

        <div className="p-7">

          <span className="text-[#0D6EFD] font-semibold">
            Cybersecurity
          </span>

          <h3 className="text-2xl font-bold mt-4 mb-4">
            Protecting Your Business From Cyber Threats
          </h3>

          <p className="text-gray-600 leading-7 mb-6">
            Learn the essential cybersecurity practices every organization should implement.
          </p>

          <Link
            href="#"
            className="text-[#0D6EFD] font-semibold hover:underline"
          >
            Read More →
          </Link>

        </div>

      </div>

      {/* Card 3 */}

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

        <Image
          src="/images/blog3.jpg"
          alt="Cloud"
          width={500}
          height={300}
          className="w-full h-56 object-cover"
        />

        <div className="p-7">

          <span className="text-[#0D6EFD] font-semibold">
            Cloud Computing
          </span>

          <h3 className="text-2xl font-bold mt-4 mb-4">
            Why Businesses Are Moving To The Cloud
          </h3>

          <p className="text-gray-600 leading-7 mb-6">
            Explore the advantages of cloud platforms for modern organizations.
          </p>

          <Link
            href="#"
            className="text-[#0D6EFD] font-semibold hover:underline"
          >
            Read More →
          </Link>

        </div>

      </div>

      {/* Card 4 */}

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

        <Image
          src="/images/blog4.jpg"
          alt="Web"
          width={500}
          height={300}
          className="w-full h-56 object-cover"
        />

        <div className="p-7">

          <span className="text-[#0D6EFD] font-semibold">
            Web Development
          </span>

          <h3 className="text-2xl font-bold mt-4 mb-4">
            Top Web Development Trends In 2026
          </h3>

          <p className="text-gray-600 leading-7 mb-6">
            Discover the frameworks and technologies shaping modern websites.
          </p>

          <Link
            href="#"
            className="text-[#0D6EFD] font-semibold hover:underline"
          >
            Read More →
          </Link>

        </div>

      </div>

      {/* Card 5 */}

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

        <Image
          src="/images/blog5.jpg"
          alt="Networking"
          width={500}
          height={300}
          className="w-full h-56 object-cover"
        />

        <div className="p-7">

          <span className="text-[#0D6EFD] font-semibold">
            Networking
          </span>

          <h3 className="text-2xl font-bold mt-4 mb-4">
            Building Secure Enterprise Networks
          </h3>

          <p className="text-gray-600 leading-7 mb-6">
            Learn how modern networking keeps businesses connected and secure.
          </p>

          <Link
            href="#"
            className="text-[#0D6EFD] font-semibold hover:underline"
          >
            Read More →
          </Link>

        </div>

      </div>

      {/* Card 6 */}

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

        <Image
          src="/images/blog6.jpg"
          alt="Software"
          width={500}
          height={300}
          className="w-full h-56 object-cover"
        />

        <div className="p-7">

          <span className="text-[#0D6EFD] font-semibold">
            Software Development
          </span>

          <h3 className="text-2xl font-bold mt-4 mb-4">
            How Custom Software Helps Businesses Grow
          </h3>

          <p className="text-gray-600 leading-7 mb-6">
            Discover why tailored software solutions provide a competitive advantage.
          </p>

          <Link
            href="#"
            className="text-[#0D6EFD] font-semibold hover:underline"
          >
            Read More →
          </Link>

        </div>

      </div>

    </div>

  </div>

</section>
{/* Newsletter */}

<section
  data-aos="fade-up"
  className="py-24 bg-white"
>

  <div className="max-w-5xl mx-auto px-6">

    <div className="bg-gradient-to-r from-blue-50 to-white rounded-3xl shadow-xl border border-blue-100 p-12 text-center">

      <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
        Newsletter
      </p>

      <h2 className="text-5xl font-bold text-gray-900 mb-6">
        Never Miss a Technology Update
      </h2>

      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
        Subscribe to receive the latest articles, technology insights,
        software trends, cybersecurity news, and AI updates directly in your inbox.
      </p>

      <div className="flex flex-col md:flex-row gap-4 justify-center">

        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full md:w-[450px] border border-gray-300 rounded-xl px-6 py-4 focus:outline-none focus:border-[#0D6EFD]"
        />

        <button
          className="bg-[#0D6EFD] hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
        >
          Subscribe
        </button>

      </div>

    </div>

  </div>

</section>
    </>
  );
}