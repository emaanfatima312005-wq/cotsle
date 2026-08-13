export default function ConsultingServicesPage() {
  return (
    <>
     {/* Services Hero */}

<section
  data-aos="fade-up"
  className="relative overflow-hidden bg-white text-[#081B33] py-24 lg:py-32"
>
  {/* Subtle Blue Glow */}

  <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#0D6EFD]/5 rounded-full blur-[120px]" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

      {/* Left - Text */}

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
          Solutions.
          <br />

          <span className="text-[#0D6EFD]">
            Strategy.
          </span>

          <br />

          Results.
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-8 text-xl text-gray-600 leading-9 max-w-xl"
        >
          Our consulting services help organizations solve
          complex challenges, strengthen their capabilities,
          and turn strategic goals into measurable results.
        </p>

      </div>


      {/* Right - Image */}

      <div
        data-aos="fade-left"
        data-aos-delay="200"
        className="relative"
      >

        <div className="absolute -inset-4 bg-[#0D6EFD]/10 rounded-[2rem] blur-2xl" />

        <div className="relative overflow-hidden rounded-[2rem]">
          <img
            src="/images/consulting-services.jpg"
            alt="COTSLE Consulting Services"
            className="w-full h-[420px] lg:h-[520px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

      </div>

    </div>

  </div>
</section>

      {/* What We Do */}

<section
  data-aos="fade-up"
  className="py-24 lg:py-28 bg-[#F8FAFC]"
>
  <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">

    <p
      data-aos="fade-down"
      className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-5"
    >
      What We Do
    </p>

    <h2
      data-aos="fade-up"
      className="text-5xl lg:text-6xl font-black text-[#081B33] leading-tight"
    >
      Expertise Built
      <br />

      <span className="text-[#0D6EFD]">
        Around You.
      </span>
    </h2>

    <p
      data-aos="fade-up"
      data-aos-delay="150"
      className="mt-7 text-lg lg:text-xl text-gray-600 leading-8 max-w-3xl mx-auto"
    >
      Every organization has different priorities, challenges,
      and opportunities. Our consulting services are designed
      to adapt to those needs.
    </p>

    <p
      data-aos="fade-up"
      data-aos-delay="250"
      className="mt-5 text-lg text-gray-500 leading-8 max-w-3xl mx-auto"
    >
      From business strategy and IT advisory to governance,
      risk management, and professional development, we provide
      practical expertise where it matters most.
    </p>

  </div>
</section>

      {/* Main Services */}

      <section
        data-aos="fade-up"
        className="py-28 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="max-w-3xl mb-16">

            <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-5">
              Our Services
            </p>

            <h2 className="text-5xl lg:text-6xl font-black text-[#081B33] leading-tight">
              Consulting That
              <br />

              <span className="text-[#0D6EFD]">
                Delivers.
              </span>
            </h2>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Management Consulting */}

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="group p-8 rounded-2xl border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
            >
              <span className="text-[#0D6EFD] font-black">
                01
              </span>

              <h3 className="mt-6 text-2xl font-bold text-[#081B33] group-hover:text-[#0D6EFD] transition-colors">
                Management Consulting
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Strategic guidance to improve organizational
                performance, decision-making, and business direction.
              </p>
            </div>


            {/* IT Consulting */}

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="group p-8 rounded-2xl border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
            >
              <span className="text-[#0D6EFD] font-black">
                02
              </span>

              <h3 className="mt-6 text-2xl font-bold text-[#081B33] group-hover:text-[#0D6EFD] transition-colors">
                IT Consulting
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Align technology capabilities with business goals
                through practical IT strategies and recommendations.
              </p>
            </div>


            {/* IT Audit */}

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="group p-8 rounded-2xl border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
            >
              <span className="text-[#0D6EFD] font-black">
                03
              </span>

              <h3 className="mt-6 text-2xl font-bold text-[#081B33] group-hover:text-[#0D6EFD] transition-colors">
                IT & Security Audits
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Identify technology risks, security gaps, and
                opportunities to strengthen your IT environment.
              </p>
            </div>


            {/* Governance */}

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="group p-8 rounded-2xl border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
            >
              <span className="text-[#0D6EFD] font-black">
                04
              </span>

              <h3 className="mt-6 text-2xl font-bold text-[#081B33] group-hover:text-[#0D6EFD] transition-colors">
                IT Governance
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Build effective governance structures that improve
                accountability, risk management, and IT decisions.
              </p>
            </div>


            {/* ITSM */}

            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="group p-8 rounded-2xl border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
            >
              <span className="text-[#0D6EFD] font-black">
                05
              </span>

              <h3 className="mt-6 text-2xl font-bold text-[#081B33] group-hover:text-[#0D6EFD] transition-colors">
                IT Service Management
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Improve the delivery, management, and quality of
                IT services through structured processes.
              </p>
            </div>


            {/* Training */}

            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="group p-8 rounded-2xl border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
            >
              <span className="text-[#0D6EFD] font-black">
                06
              </span>

              <h3 className="mt-6 text-2xl font-bold text-[#081B33] group-hover:text-[#0D6EFD] transition-colors">
                Professional Training
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Develop organizational capabilities through focused
                professional and technology training programs.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* How We Deliver */}

<section
  data-aos="fade-up"
  className="py-28 bg-[#081B33] text-white"
>
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <p
        data-aos="fade-down"
        className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-5"
      >
        How We Deliver
      </p>

      <h2
        data-aos="fade-up"
        className="text-5xl lg:text-6xl font-black leading-tight"
      >
        A Clear Path From
        <br />

        <span className="text-[#0D6EFD]">
          Challenge to Change.
        </span>
      </h2>

      <p
        data-aos="fade-up"
        data-aos-delay="150"
        className="mt-6 text-lg text-gray-300 leading-8"
      >
        Our approach combines structured thinking, collaboration,
        and practical execution to help organizations move from
        identifying a challenge to achieving meaningful results.
      </p>

    </div>


    {/* Process */}

    <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Step 01 */}

      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="relative border-t border-white/20 pt-8 hover:-translate-y-2 transition-all duration-500"
      >

        <span className="text-[#0D6EFD] text-4xl font-black">
          01
        </span>

        <h3 className="mt-6 text-2xl font-bold">
          Understand
        </h3>

        <p className="mt-4 text-gray-400 leading-7">
          We begin by understanding your organization,
          objectives, challenges, and current environment.
        </p>

      </div>


      {/* Step 02 */}

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="relative border-t border-white/20 pt-8 hover:-translate-y-2 transition-all duration-500"
      >

        <span className="text-[#0D6EFD] text-4xl font-black">
          02
        </span>

        <h3 className="mt-6 text-2xl font-bold">
          Analyze
        </h3>

        <p className="mt-4 text-gray-400 leading-7">
          We evaluate existing processes, technologies,
          risks, and opportunities to identify what matters most.
        </p>

      </div>


      {/* Step 03 */}

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative border-t border-white/20 pt-8 hover:-translate-y-2 transition-all duration-500"
      >

        <span className="text-[#0D6EFD] text-4xl font-black">
          03
        </span>

        <h3 className="mt-6 text-2xl font-bold">
          Recommend
        </h3>

        <p className="mt-4 text-gray-400 leading-7">
          We develop practical recommendations and strategies
          aligned with your goals and available resources.
        </p>

      </div>


      {/* Step 04 */}

      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="relative border-t border-white/20 pt-8 hover:-translate-y-2 transition-all duration-500"
      >

        <span className="text-[#0D6EFD] text-4xl font-black">
          04
        </span>

        <h3 className="mt-6 text-2xl font-bold">
          Transform
        </h3>

        <p className="mt-4 text-gray-400 leading-7">
          We help turn recommendations into practical
          improvements that create lasting organizational value.
        </p>

      </div>

    </div>

  </div>
</section>

{/* Services CTA */}

<section
  data-aos="fade-up"
  className="relative overflow-hidden bg-white py-24 lg:py-28"
>
  {/* Blue Glow */}

  <div className="absolute -top-40 -right-40 w-[450px] h-[450px] bg-[#0D6EFD]/5 rounded-full blur-[120px]" />

  <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center">

    <p
      data-aos="fade-down"
      className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-5"
    >
      Let's Work Together
    </p>

    <h2
      data-aos="fade-up"
      className="text-5xl lg:text-6xl font-black text-[#081B33] leading-tight"
    >
      Have a Challenge?
      <br />

      <span className="text-[#0D6EFD]">
        Let's Solve It.
      </span>
    </h2>

    <p
      data-aos="fade-up"
      data-aos-delay="150"
      className="mt-7 text-lg lg:text-xl text-gray-600 leading-8 max-w-2xl mx-auto"
    >
      Talk to our consulting team and discover how practical
      strategy, technology, and expertise can help your
      organization move forward.
    </p>

    <div
      data-aos="fade-up"
      data-aos-delay="250"
      className="mt-10 flex flex-wrap justify-center gap-4"
    >

      <a
        href="/consulting/contact"
        className="bg-[#0D6EFD] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
      >
        Talk To Our Experts
      </a>

      <a
        href="/consulting/about"
        className="border border-[#081B33]/20 text-[#081B33] px-8 py-4 rounded-full font-semibold hover:bg-[#081B33] hover:text-white transition-all duration-300"
      >
        About COTSLE
      </a>

    </div>

  </div>
</section>

    </>
  );
}