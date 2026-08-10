export default function ConsultingHero() {
  return (
    <section
      data-aos="fade-up"
      className="relative overflow-hidden bg-[#081B33] text-white py-28 lg:py-36"
    >

      {/* Background Glow */}

      <div className="absolute -top-40 -right-40 w-[550px] h-[550px] bg-[#0D6EFD]/15 rounded-full blur-[130px]" />

      <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] bg-[#0D6EFD]/10 rounded-full blur-[120px]" />


      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <p
              data-aos="fade-down"
              className="uppercase tracking-[6px] text-[#0D6EFD] font-semibold mb-6"
            >
              COTSLE Consulting
            </p>

            <h1
              data-aos="fade-right"
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05]"
            >
              Turning
              <br />

              <span className="text-[#0D6EFD]">
                Challenges
              </span>

              <br />

              Into Progress.
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-8 text-xl text-gray-300 leading-9 max-w-xl"
            >
              We help organizations make smarter decisions,
              improve performance, and transform their technology
              and business practices through practical consulting.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-10 flex flex-wrap gap-4"
            >

              <a
                href="#consulting-services"
                className="bg-[#0D6EFD] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
              >
                Explore Our Services
              </a>

              <a
                href="/consulting/contact"
                className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#081B33] transition-all duration-300"
              >
                Talk To Our Experts
              </a>

            </div>

          </div>


          {/* RIGHT */}

          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="relative"
          >

            <div className="border border-white/10 rounded-[32px] p-8 lg:p-10 bg-white/[0.03] backdrop-blur-sm">

              <p className="uppercase tracking-[4px] text-[#0D6EFD] text-sm font-semibold mb-8">
                Consulting Focus
              </p>

              <div className="space-y-7">

                <div className="flex gap-5">

                  <span className="text-[#0D6EFD] font-black text-lg">
                    01
                  </span>

                  <div>
                    <h3 className="text-xl font-bold">
                      Business Strategy
                    </h3>

                    <p className="text-gray-400 mt-2 leading-7">
                      Align your goals, processes, and resources
                      for stronger business performance.
                    </p>
                  </div>

                </div>


                <div className="flex gap-5">

                  <span className="text-[#0D6EFD] font-black text-lg">
                    02
                  </span>

                  <div>
                    <h3 className="text-xl font-bold">
                      Technology Advisory
                    </h3>

                    <p className="text-gray-400 mt-2 leading-7">
                      Make informed technology decisions that
                      support your organization's objectives.
                    </p>
                  </div>

                </div>


                <div className="flex gap-5">

                  <span className="text-[#0D6EFD] font-black text-lg">
                    03
                  </span>

                  <div>
                    <h3 className="text-xl font-bold">
                      Organizational Growth
                    </h3>

                    <p className="text-gray-400 mt-2 leading-7">
                      Build stronger capabilities, processes,
                      and teams for sustainable growth.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}