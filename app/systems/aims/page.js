import Image from "next/image";
import Link from "next/link";

export default function AIIMS() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-black to-[#06152d] text-white">

        {/* Background Glow */}
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#0D6EFD]/20 blur-[140px]" />
        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#0D6EFD]/10 blur-[130px]" />

        {/* Decorative Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-[15%] top-0 h-full w-px bg-[#0D6EFD]" />
          <div className="absolute left-[35%] top-0 h-full w-px bg-[#0D6EFD]" />
          <div className="absolute right-[25%] top-0 h-full w-px bg-[#0D6EFD]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}
            <div>

              <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
                AI-Powered
                <span className="block text-[#0D6EFD]">
                  Institute Management
              </span>
                System
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-gray-300">
                A smarter way to manage institute operations, students,
                faculty, attendance, academic performance and administrative
                workflows through one intelligent platform.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                {/* MAIN BUTTON */}
                <Link
                  href="#"
                  className="group inline-flex items-center gap-3 rounded-lg bg-[#0D6EFD] px-7 py-4 font-semibold text-white shadow-lg shadow-[#0D6EFD]/20 transition-all duration-300 hover:bg-blue-700 hover:shadow-xl"
                >
                  Go to AIMS
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="#features"
                  className="inline-flex items-center rounded-lg border border-gray-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:border-[#0D6EFD] hover:bg-[#0D6EFD]/10"
                >
                  Explore Features
                </Link>

              </div>

            </div>

            {/* RIGHT DASHBOARD VISUAL */}
            <div className="relative">

              <div className="absolute -inset-6 rounded-[40px] bg-[#0D6EFD]/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl">

                {/* Window Header */}
                <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">

                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <span className="h-3 w-3 rounded-full bg-green-400/70" />
                  </div>

                  <span className="text-xs font-medium text-gray-400">
                    AIMS Dashboard
                  </span>

                </div>

                {/* Dashboard */}
                <div className="grid grid-cols-2 gap-4">

                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-xs text-gray-400">
                      Total Students
                    </p>
                    <p className="mt-2 text-3xl font-bold">
                      1,248
                    </p>
                    <p className="mt-2 text-xs text-blue-300">
                      +12.5% this month
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-xs text-gray-400">
                      Attendance
                    </p>
                    <p className="mt-2 text-3xl font-bold">
                      92%
                    </p>
                    <p className="mt-2 text-xs text-green-300">
                      Excellent
                    </p>
                  </div>

                  <div className="col-span-2 rounded-2xl bg-white/10 p-5">

                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold">
                        Student Performance
                      </p>

                      <span className="text-xs text-gray-400">
                        Overview
                      </span>
                    </div>

                    <div className="mt-6 flex h-32 items-end gap-3">

                      {[45, 62, 55, 75, 68, 88, 78, 94, 82, 97].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="flex-1 rounded-t-md bg-[#0D6EFD]/70 transition-all duration-300 hover:bg-[#0D6EFD]"
                            style={{ height: `${height}%` }}
                          />
                        )
                      )}

                    </div>

                  </div>

                  <div className="col-span-2 rounded-2xl border border-[#0D6EFD]/20 bg-[#0D6EFD]/10 p-5">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0D6EFD]">
                        AI
                      </div>

                      <div>
                        <p className="font-semibold">
                          AI Insights
                        </p>

                        <p className="text-xs text-gray-400">
                          Intelligent academic analysis
                        </p>
                      </div>

                    </div>

                    <p className="mt-4 text-sm leading-6 text-gray-300">
                      AI-powered insights help identify academic trends,
                      attendance patterns and areas that may require attention.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-bold uppercase tracking-[5px] text-[#0D6EFD]">
            One Intelligent Platform
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Everything Your Institute Needs
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            AIMS brings essential institute management functions together
            into a centralized digital environment designed for modern
            educational organizations.
          </p>

        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section
        id="features"
        className="bg-gray-50 px-6 py-24 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-14">

            <p className="text-sm font-bold uppercase tracking-[5px] text-[#0D6EFD]">
              Core Features
            </p>

            <h2 className="mt-3 text-4xl font-black">
              Built for Smarter Institute Management
            </h2>

          </div>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* CARD 1 */}
            <FeatureCard
              number="01"
              title="Student Management"
              description="Manage student information, academic records and essential student activities from one centralized system."
            />

            {/* CARD 2 */}
            <FeatureCard
              number="02"
              title="Faculty Management"
              description="Organize faculty information, responsibilities and academic activities through a unified management platform."
            />

            {/* CARD 3 */}
            <FeatureCard
              number="03"
              title="Attendance Management"
              description="Track attendance efficiently and gain a clearer view of attendance patterns across classes and programs."
            />

            {/* CARD 4 */}
            <FeatureCard
              number="04"
              title="Academic Management"
              description="Keep courses, classes, academic information and institutional workflows organized in one place."
            />

            {/* CARD 5 */}
            <FeatureCard
              number="05"
              title="Performance Insights"
              description="Transform academic information into meaningful insights that can support better institutional decisions."
            />

            {/* CARD 6 */}
            <FeatureCard
              number="06"
              title="AI-Powered Intelligence"
              description="Use intelligent analysis to help institutes understand patterns and make more informed decisions."
            />

          </div>

        </div>

      </section>


      {/* ================= AI SECTION ================= */}
      <section className="relative overflow-hidden bg-black px-6 py-28 text-white lg:px-8">

        <div className="absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#0D6EFD]/20 blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-7xl">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <p className="text-sm font-bold uppercase tracking-[5px] text-[#4DA3FF]">
                Intelligent Technology
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                Smarter Decisions
                <span className="block text-[#0D6EFD]">
                  Powered by AI
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
                AIMS combines institute management with intelligent
                capabilities to help transform institutional data into
                useful insights.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Intelligent academic insights",
                  "Student performance analysis",
                  "Attendance pattern analysis",
                  "Data-driven institutional decisions",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0D6EFD] text-xs">
                      ✓
                    </div>

                    <span className="text-gray-300">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>


            {/* AI VISUAL */}
            <div className="relative">

              <div className="rounded-[30px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur">

                <div className="mb-8 flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0D6EFD] text-xl font-black">
                    AI
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">
                      AIMS Intelligence
                    </h3>

                    <p className="text-sm text-gray-500">
                      Institutional Insights
                    </p>
                  </div>

                </div>

                <div className="space-y-4">

                  <div className="rounded-xl bg-white/5 p-4">
                    <p className="text-xs text-gray-500">
                      Attendance Analysis
                    </p>
                    <div className="mt-3 h-2 rounded-full bg-gray-800">
                      <div className="h-2 w-[84%] rounded-full bg-[#0D6EFD]" />
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/5 p-4">
                    <p className="text-xs text-gray-500">
                      Academic Performance
                    </p>
                    <div className="mt-3 h-2 rounded-full bg-gray-800">
                      <div className="h-2 w-[91%] rounded-full bg-[#0D6EFD]" />
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/5 p-4">
                    <p className="text-xs text-gray-500">
                      Student Engagement
                    </p>
                    <div className="mt-3 h-2 rounded-full bg-gray-800">
                      <div className="h-2 w-[76%] rounded-full bg-[#0D6EFD]" />
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-gradient-to-r from-[#0D6EFD] to-blue-700 px-8 py-16 text-center text-white shadow-2xl sm:px-16">

          <p className="text-sm font-bold uppercase tracking-[5px] text-blue-100">
            COTSLE Systems
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Ready to Manage Your Institute Smarter?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Explore AIMS and discover a smarter approach to modern
            institute management.
          </p>

          <Link
            href="#"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-white px-8 py-4 font-bold text-[#0D6EFD] transition-all duration-300 hover:bg-gray-100"
          >
            Go to AIMS
            <span>→</span>
          </Link>

        </div>

      </section>

    </main>
  );
}


/* ================= FEATURE CARD ================= */

function FeatureCard({ number, title, description }) {
  return (
    <div className="group rounded-[24px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0D6EFD]/30 hover:shadow-xl">

      <div className="flex items-center justify-between">

        <span className="text-sm font-bold text-[#0D6EFD]">
          {number}
        </span>

        <span className="h-2 w-2 rounded-full bg-[#0D6EFD] transition-all duration-300 group-hover:scale-150" />

      </div>

      <h3 className="mt-8 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        {description}
      </p>

      <div className="mt-7 h-px w-10 bg-[#0D6EFD] transition-all duration-300 group-hover:w-full" />

    </div>
  );
}