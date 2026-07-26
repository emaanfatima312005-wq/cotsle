import Link from "next/link";
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

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-[#0D6EFD] font-semibold">
            Technology Group
          </p>

          <h1 className="mt-8 text-6xl md:text-8xl font-black tracking-tight text-gray-900">
            COTSLE
          </h1>

          <h2 className="mt-4 text-2xl md:text-3xl text-gray-600 font-light">
            Education • Enterprise • Artificial Intelligence
          </h2>

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

            <div className="group relative overflow-hidden rounded-[34px] bg-gray-900 p-10 h-[520px] shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer">

                <div className="absolute left-0 top-0 h-full w-0 bg-[#0D6EFD] transition-all duration-500 group-hover:w-2"></div>

                <span className="absolute right-6 top-4 text-[120px] font-black text-white/5">
                  01
                </span>

                <div className="w-20 h-20 rounded-3xl bg-blue-50 flex items-center justify-center">

                  <FaGraduationCap className="text-4xl text-[#0D6EFD]" />

                </div>

                <p className="mt-8 uppercase tracking-[6px] text-[#0D6EFD] text-sm font-bold">
                  COTSLE
                </p>

                <h2 className="mt-2 text-4xl font-black text-gray-900">
                  SYSTEMS
                </h2>

                <p className="mt-6 leading-8 text-gray-600">
                  Professional IT education, certifications and hands-on
                  training for future technology leaders.
                </p>


                <div className="mt-12 text-[#0D6EFD] font-semibold group-hover:translate-x-2 transition-all">

                  Explore →

                </div>

              </div>

            </Link>

                       {/* ================= NETWORKS ================= */}

            <Link href="/networks">

              <div className="group relative overflow-hidden rounded-[34px] bg-gray-900 p-10 h-[520px] shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer">

                <div className="absolute left-0 top-0 h-full w-0 bg-[#0D6EFD] transition-all duration-500 group-hover:w-2"></div>

                <span className="absolute right-6 top-4 text-[120px] font-black text-white/5">
                  02
                </span>

                <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center">

                  <FaNetworkWired className="text-4xl text-[#4DA3FF]" />

                </div>

                <p className="mt-8 uppercase tracking-[6px] text-[#4DA3FF] text-sm font-bold">
                  COTSLE
                </p>

                <h2 className="mt-2 text-4xl font-black text-white">
                  NETWORKS
                </h2>

                <p className="mt-6 leading-8 text-gray-300">
                  Enterprise software, cloud infrastructure and cybersecurity
                  solutions built for modern organizations.
                </p>

                <div className="mt-12 text-[#4DA3FF] font-semibold group-hover:translate-x-2 transition-all">

                  Explore →

                </div>

              </div>

            </Link>

            {/* ================= CONSULTING ================= */}

            <Link href="/consulting">

              <div className="group relative overflow-hidden rounded-[34px] bg-gray-900 p-10 h-[520px] shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer">

                <div className="absolute left-0 top-0 h-full w-0 bg-[#0D6EFD] transition-all duration-500 group-hover:w-2"></div>

                <span className="absolute right-6 top-4 text-[120px] font-black text-white/5">
                  03
                </span>

                <div className="w-20 h-20 rounded-3xl bg-blue-50 flex items-center justify-center">

                  <FaBrain className="text-4xl text-[#0D6EFD]" />

                </div>

                <p className="mt-8 uppercase tracking-[6px] text-[#0D6EFD] text-sm font-bold">
                  COTSLE
                </p>

                <h2 className="mt-2 text-4xl font-black text-gray-900">
                  CONSULTING
                </h2>

                <p className="mt-6 leading-8 text-gray-600">
                  AI-powered consulting, intelligent assistants and learning
                  roadmaps that guide students and businesses.
                </p>

                <div className="mt-12 text-[#0D6EFD] font-semibold group-hover:translate-x-2 transition-all">

                  Explore →

                </div>

              </div>

            </Link>

          </div>

        </div>

      </section>

            {/* Bottom Banner */}

      <section className="relative z-10 pb-20 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="overflow-hidden rounded-[36px] bg-gradient-to-r from-gray-900 via-black to-gray-900 px-12 py-16 text-center shadow-2xl">

            <p className="uppercase tracking-[6px] text-[#4DA3FF] font-semibold">
              One Technology Group
            </p>

            <h2 className="mt-5 text-4xl md:text-5xl font-black text-white">
              Three Specialized Divisions
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-300">
              Whether you're looking to build your career, transform your
              business, or leverage Artificial Intelligence, COTSLE has a
              dedicated division ready to help you succeed.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <Link
                href="/systems"
                className="rounded-full bg-[#0D6EFD] px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Explore Systems
              </Link>

              <Link
                href="/networks"
                className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition hover:border-[#0D6EFD]"
              >
                Explore Networks
              </Link>

              <Link
                href="/consulting"
                className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition hover:border-[#0D6EFD]"
              >
                Explore Consulting
              </Link>

            </div>

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