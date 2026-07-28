import Link from "next/link";
import Image from "next/image";
import {
  FaGraduationCap,
  FaNetworkWired,
  FaBrain,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Tech Grid */}

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(13,110,253,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(13,110,253,.15) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Blue Glow */}

      <div className="absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full bg-[#0D6EFD]/10 blur-[170px]" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-blue-300/20 blur-[170px]" />


      {/* HERO */}

      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
        {/* Logo */}
    <div className="flex justify-center">
      <Image
        src="/images/logo2.png"
        alt="COTSLE Logo"
        width={230}
        height={230}
        className="object-contain"
        priority
      />
    </div>

        <div className="text-center">

          <h1 className="mt-8 text-6xl md:text-8xl font-black tracking-tight text-gray-900">
            COTSLE
          </h1>

         {/* <h2 className="mt-4 text-2xl md:text-3xl text-gray-600 font-light">
            Education • Enterprise • Artificial Intelligence
          </h2>*/}

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-gray-600">
            Empowering students, professionals and businesses through
            cutting-edge education, enterprise technology solutions and
            AI-driven innovation.
          </p>

        </div>

      </section>

      {/* PANELS */}

      <section className="relative z-10 py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-3 gap-8">

            {/* ================= SYSTEMS ================= */}
<Link href="/systems">
  <div className="group relative overflow-hidden rounded-[34px] bg-gray-900 h-[600px] shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer">

    {/* Image */}
    <div className="relative h-70 w-full">
      <Image
        src="/images/systems_cards.jpeg"
        alt="Systems"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* Content */}
    <div className="p-8">

      <p className="mt-5 uppercase tracking-[6px] text-[#4DA3FF] text-sm font-bold">
        COTSLE
      </p>

      <h2 className="mt-2 text-4xl font-black text-white">
        SYSTEMS
      </h2>

      <p className="mt-5 text-gray-300 leading-7">
        Professional IT education, certifications and hands-on
        training for future technology leaders.
      </p>

      <div className="mt-8 text-[#4DA3FF] font-semibold group-hover:translate-x-2 transition-all">
        Explore →
      </div>

    </div>

  </div>
</Link>
                       {/* ================= NETWORKS ================= */}

            <Link href="/networks">
  <div className="group relative overflow-hidden rounded-[34px] bg-gray-900 h-[600px] shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer">

    {/* Image */}
    <div className="relative h-70 w-full">
      <Image
        src="/images/networks_cards.jpeg"
        alt="Networks"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* Content */}
    <div className="p-8">

      <p className="mt-5 uppercase tracking-[6px] text-[#4DA3FF] text-sm font-bold">
        COTSLE
      </p>

      <h2 className="mt-2 text-4xl font-black text-white">
        NETWORKS
      </h2>

      <p className="mt-5 text-gray-300 leading-7">
        Enterprise software, cloud infrastructure & cybersecurity
        solutions for modern organizations.
      </p>

      <div className="mt-8 text-[#4DA3FF] font-semibold transition-all group-hover:translate-x-2">
        Explore →
      </div>

    </div>

  </div>
</Link>

{/* ================= CONSULTING ================= */}

<Link href="/consulting">
  <div className="group relative overflow-hidden rounded-[34px] bg-gray-900 h-[600px] shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer">

    {/* Image */}
    <div className="relative h-70 w-full">
      <Image
        src="/images/consulting_cards.jpeg"
        alt="Consulting"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* Content */}
    <div className="p-8">

      <p className="mt-5 uppercase tracking-[6px] text-[#4DA3FF] text-sm font-bold">
        COTSLE
      </p>

      <h2 className="mt-2 text-4xl font-black text-white">
        CONSULTING
      </h2>

      <p className="mt-5 text-gray-300 leading-7">
        AI-powered consulting, intelligent assistants and learning
        roadmaps that guide students and businesses.
      </p>

      <div className="mt-8 text-[#4DA3FF] font-semibold transition-all group-hover:translate-x-2">
        Explore →
      </div>

    </div>

  </div>
</Link>

          </div>

        </div>

      </section>

            {/* Bottom Banner */}
{/* Bottom CTA */}
<section className="relative z-10 pb-20 px-6">
  <div className="max-w-5xl mx-auto text-center">

    <p className="uppercase tracking-[6px] text-[#4DA3FF] font-semibold">
      One Technology Group
    </p>

    <h2 className="mt-5 text-4xl md:text-5xl font-black text-gray-900">
      Three Specialized Divisions
    </h2>

    <p className="mt-6 text-lg leading-8 text-gray-600">
      Whether you're looking to build your career, transform your
      business, or leverage Artificial Intelligence, COTSLE has a
      dedicated division ready to help you succeed.
    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-4">

      <Link
        href="/systems"
        className="rounded-full bg-[#0D6EFD] px-7 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700"
      >
        Explore Systems
      </Link>

      <Link
        href="/networks"
        className="rounded-full border border-[#0D6EFD] px-7 py-3 font-semibold text-[#0D6EFD] transition duration-300 hover:bg-[#0D6EFD] hover:text-white"
      >
        Explore Networks
      </Link>

      <Link
        href="/consulting"
        className="rounded-full border border-[#0D6EFD] px-7 py-3 font-semibold text-[#0D6EFD] transition duration-300 hover:bg-[#0D6EFD] hover:text-white"
      >
        Explore Consulting
      </Link>

    </div>

  </div>
</section>

      {/* Footer */}

      <footer className="relative z-10 border-t border-gray-200 py-8 text-center">

        <h3 className="font-black text-xl text-gray-900">
          COTSLE
        </h3>

        <p className="mt-2 text-gray-500">
          Technology Group
        </p>

        <p className="mt-4 text-sm text-gray-400">
          © 2026 COTSLE. All Rights Reserved.
        </p>

      </footer>

    </main>
  );
}