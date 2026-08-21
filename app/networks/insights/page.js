import Image from "next/image";
import Link from "next/link";

export default function Insights() {
  return (
    <>
      {/* Insights Hero */}
      <section className="bg-white min-h-[650px] flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-20">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Side - Content */}
            <div className="max-w-3xl">

              <p className="uppercase tracking-[6px] text-[#0D6EFD] font-semibold mb-5">
                COTSLE Insights
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-[#081B33]">
                Technology.
                <br />

                <span className="text-[#0D6EFD]">
                  Ideas.
                </span>

                <br />

                Innovation.
              </h1>

              <p className="mt-8 text-lg md:text-xl text-gray-600 leading-9 max-w-2xl">
                Explore insights, trends, strategies, and practical knowledge
                covering cybersecurity, cloud technology, networking,
                artificial intelligence, and digital transformation.
              </p>

            </div>


            {/* Right Side - Image */}
            <div className="relative flex justify-center lg:justify-end">

              <div className="relative w-full max-w-[550px] h-[450px]">

                <Image
                  src="/images/insights.jpg"
                  alt="COTSLE Insights"
                  fill
                  className="object-cover rounded-3xl"
                  priority
                />

              </div>

            </div>

          </div>

        </div>
      </section>
      {/* Featured Insight */}

<section className="py-28 bg-white">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="mb-14">

      <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-3">
        Featured Insight
      </p>

      <h2 className="text-5xl font-black text-[#081B33]">
        What's Shaping Technology Today?
      </h2>

    </div>

    <div className="grid lg:grid-cols-2 gap-14 items-center">

      {/* Image */}

      <div className="relative overflow-hidden rounded-3xl bg-[#081B33]">

        <Image
          src="/images/security.jpg"
          alt="Technology insights"
          width={700}
          height={500}
          className="w-full object-cover"
        />

      </div>

      {/* Content */}

      <div>

        <p className="text-[#0D6EFD] font-semibold mb-5">
          Cybersecurity • 8 min read
        </p>

        <h3 className="text-4xl font-black text-[#081B33] leading-tight mb-6">
          Why Businesses Need a Proactive Cybersecurity Strategy
        </h3>

        <p className="text-lg text-gray-600 leading-8 mb-8">
          Cyber threats are becoming more sophisticated every day.
          Discover how organizations can move beyond reactive security
          and build a proactive approach to protecting their digital
          infrastructure.
        </p>

      </div>

    </div>

  </div>

</section>
{/* Latest Insights */}

<section className="py-28 bg-[#F8FAFC]">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-3">
        Latest Insights
      </p>

      <h2 className="text-5xl font-black text-[#081B33]">
        Explore Our Latest Thinking
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        Practical insights and expert perspectives to help businesses
        make smarter technology decisions.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Article 1 */}

      <article className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

        <Image
          src="/images/Cyber_security.jpg"
          alt="Cybersecurity"
          width={600}
          height={380}
          className="w-full h-56 object-cover"
        />

        <div className="p-8">

          <p className="text-[#0D6EFD] font-semibold text-sm mb-4">
            CYBERSECURITY
          </p>

          <h3 className="text-2xl font-bold text-[#081B33] mb-4">
            The Future of Enterprise Cybersecurity
          </h3>

          <p className="text-gray-600 leading-7 mb-6">
            Understanding the security challenges businesses will face
            as technology and cyber threats continue to evolve.
          </p>

        </div>

      </article>

      {/* Article 2 */}

      <article className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

        <Image
          src="/images/Cloud_computing.jpg"
          alt="Cloud infrastructure"
          width={600}
          height={380}
          className="w-full h-56 object-cover"
        />

        <div className="p-8">

          <p className="text-[#0D6EFD] font-semibold text-sm mb-4">
            CLOUD
          </p>

          <h3 className="text-2xl font-bold text-[#081B33] mb-4">
            Building a Secure Cloud Infrastructure
          </h3>

          <p className="text-gray-600 leading-7 mb-6">
            Key considerations businesses should understand when
            moving workloads and applications to the cloud.
          </p>

        </div>

      </article>

      {/* Article 3 */}

      <article className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

        <Image
          src="/images/AI.jpg"
          alt="Artificial Intelligence"
          width={600}
          height={380}
          className="w-full h-56 object-cover"
        />

        <div className="p-8">

          <p className="text-[#0D6EFD] font-semibold text-sm mb-4">
            ARTIFICIAL INTELLIGENCE
          </p>

          <h3 className="text-2xl font-bold text-[#081B33] mb-4">
            How AI Is Transforming Modern Businesses
          </h3>

          <p className="text-gray-600 leading-7 mb-6">
            Discover how organizations are using AI to automate
            processes, improve decisions, and create new opportunities.
          </p>

        </div>

      </article>

    </div>

  </div>

</section>
{/* Insights Topics */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left */}

      <div>

        <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-4">
          Explore Topics
        </p>

        <h2 className="text-5xl font-black text-[#081B33] leading-tight mb-6">
          Knowledge Across
          <span className="text-[#0D6EFD]"> Technology</span>
        </h2>

        <p className="text-lg text-gray-600 leading-8 max-w-xl">
          Stay informed with practical knowledge and expert perspectives
          across the technologies shaping modern businesses.
        </p>

      </div>

      {/* Right */}

      <div className="grid sm:grid-cols-2 gap-4">

        <Link
          href="#"
          className="group border border-gray-200 rounded-2xl p-6 hover:border-[#0D6EFD] hover:shadow-lg transition-all"
        >
          <h3 className="text-xl font-bold text-[#081B33] mb-2">
            Cybersecurity
          </h3>

          <p className="text-gray-500">
            Threats, protection & security strategies
          </p>

          <span className="block mt-5 text-[#0D6EFD] font-semibold group-hover:translate-x-1 transition">
            Explore →
          </span>
        </Link>

        <Link
          href="#"
          className="group border border-gray-200 rounded-2xl p-6 hover:border-[#0D6EFD] hover:shadow-lg transition-all"
        >
          <h3 className="text-xl font-bold text-[#081B33] mb-2">
            Cloud Technology
          </h3>

          <p className="text-gray-500">
            Infrastructure, migration & cloud security
          </p>

          <span className="block mt-5 text-[#0D6EFD] font-semibold group-hover:translate-x-1 transition">
            Explore →
          </span>
        </Link>

        <Link
          href="#"
          className="group border border-gray-200 rounded-2xl p-6 hover:border-[#0D6EFD] hover:shadow-lg transition-all"
        >
          <h3 className="text-xl font-bold text-[#081B33] mb-2">
            Networking
          </h3>

          <p className="text-gray-500">
            Connectivity, infrastructure & performance
          </p>

          <span className="block mt-5 text-[#0D6EFD] font-semibold group-hover:translate-x-1 transition">
            Explore →
          </span>
        </Link>

        <Link
          href="#"
          className="group border border-gray-200 rounded-2xl p-6 hover:border-[#0D6EFD] hover:shadow-lg transition-all"
        >
          <h3 className="text-xl font-bold text-[#081B33] mb-2">
            Artificial Intelligence
          </h3>

          <p className="text-gray-500">
            AI, automation & intelligent solutions
          </p>

          <span className="block mt-5 text-[#0D6EFD] font-semibold group-hover:translate-x-1 transition">
            Explore →
          </span>
        </Link>

      </div>

    </div>

  </div>

</section>
{/* Stay Informed */}

<section className="py-20 bg-[#F8FAFC]">

  <div className="max-w-5xl mx-auto px-6 text-center">

    <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-4">
      Stay Informed
    </p>

    <h2 className="text-4xl lg:text-5xl font-black text-[#081B33] mb-6">
      Keep Up With What's Next
    </h2>

    <p className="text-lg text-gray-600 leading-8 max-w-2xl mx-auto mb-10">
      Stay connected with the latest technology trends, cybersecurity
      developments, and digital transformation insights from COTSLE.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">

      <Link
        href="/networks/contact"
        className="bg-[#0D6EFD] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition"
      >
        Talk To Our Experts
      </Link>

      <Link
        href="/networks/services"
        className="border-2 border-[#081B33] text-[#081B33] px-8 py-4 rounded-full font-semibold hover:bg-[#081B33] hover:text-white transition"
      >
        Explore Our Services
      </Link>

    </div>

  </div>

</section>
    </>
  );
}

