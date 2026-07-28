import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* ===================== PAGE BACKGROUND ===================== */}
      

{/* Main Gradient */}
<section className="relative z-10 overflow-hidden px-6 pt-8">

  <div className="relative w-full mx-auto">

    <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F7FAFF] to-[#EAF3FF]" />

{/* Building Background */}
<div className="absolute inset-0 pointer-events-none">

  <Image
    src="/images/building.jpg"
    alt=""
    fill
    priority
    className="object-cover object-right opacity-[0.13]"
  />

  {/* White Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-[#EDF5FF]/70" />

</div>

{/* Top Right Glow */}

<div className="absolute -top-32 right-[-140px] h-[520px] w-[520px] rounded-full bg-[#0D6EFD]/10 blur-[170px]" />

{/* Bottom Left Glow */}

<div className="absolute bottom-[-150px] left-[-120px] h-[420px] w-[420px] rounded-full bg-[#0D6EFD]/10 blur-[160px]" />

{/* Decorative Circles */}

<div className="absolute top-24 left-20 h-40 w-40 rounded-full border border-[#0D6EFD]/10" />

<div className="absolute bottom-32 right-24 h-24 w-24 rounded-full border border-[#0D6EFD]/10" />

{/* Dots Top Right */}

<div className="absolute right-24 top-20 grid grid-cols-6 gap-3 opacity-40">

  {Array.from({ length: 36 }).map((_, i) => (

    <span
      key={i}
      className="h-1 w-1 rounded-full bg-[#0D6EFD]"
    />

  ))}

</div>

{/* Dots Bottom Left */}

<div className="absolute bottom-24 left-24 grid grid-cols-6 gap-3 opacity-25">

  {Array.from({ length: 36 }).map((_, i) => (

    <span
      key={i}
      className="h-1 w-1 rounded-full bg-[#0D6EFD]"
    />

  ))}

</div>

{/* Thin Lines */}

<div className="absolute top-0 right-0 h-full w-full opacity-5">

  <svg
    className="h-full w-full"
    viewBox="0 0 1600 900"
    fill="none"
  >
    <path
      d="M1200 -50 C900 250 900 650 1450 950"
      stroke="#0D6EFD"
      strokeWidth="2"
    />

    <path
      d="M1300 -50 C980 250 980 650 1550 950"
      stroke="#0D6EFD"
      strokeWidth="2"
    />

    <path
      d="M1400 -50 C1050 250 1050 650 1650 950"
      stroke="#0D6EFD"
      strokeWidth="2"
    />

  </svg>

</div>
    {/* Right Background Graphic */}

    <div className="absolute right-[-260px] top-1/2 h-[650px] w-[650px] -translate-y-1/2 rotate-12">

      <div className="absolute h-full w-full rounded-[70px] border border-[#0D6EFD]/15" />

      <div className="absolute left-10 top-10 h-[400px] w-[400px] rounded-[60px] border border-[#0D6EFD]/10" />

      <div className="absolute left-20 top-20 h-[320px] w-[320px] rounded-[50px] border border-[#0D6EFD]/10" />

    </div>

    {/* Hero Content */}

    <div className="relative z-10 flex min-h-[50vh] flex-col items-center justify-center px-8 text-center">

      <Image
        src="/images/logo2.png"
        alt="COTSLE Logo"
        width={130}
        height={130}
        priority
      />

      <h1 className="mt-5 text-5xl font-black tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
        COTSLE
      </h1>

      <p className="mt-4 max-w-3xl text-lg leading-7 text-gray-600">
        Empowering students, professionals and businesses through
        cutting-edge education, enterprise technology solutions and
        AI-driven innovation.
      </p>

      <div className="mt-5 h-1 w-24 rounded-full bg-[#0D6EFD]" />

    </div>

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
    {/* Thin Lines */}

<div className="absolute top-0 right-0 h-full w-full opacity-5">

  <svg
    className="h-full w-full"
    viewBox="0 0 1600 900"
    fill="none"
  >
    <path
      d="M1200 -50 C900 250 900 650 1450 950"
      stroke="#0D6EFD"
      strokeWidth="2"
    />

    <path
      d="M1300 -50 C980 250 980 650 1550 950"
      stroke="#0D6EFD"
      strokeWidth="2"
    />

    <path
      d="M1400 -50 C1050 250 1050 650 1650 950"
      stroke="#0D6EFD"
      strokeWidth="2"
    />

  </svg>

</div>

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