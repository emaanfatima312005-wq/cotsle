export default function ConsultingTrainingsPage() {
  return (
    <>
      {/* Trainings Hero */}

      <section
        data-aos="fade-up"
        className="relative overflow-hidden bg-white text-[#081B33] py-24 lg:py-32"
      >

        {/* Blue Glow */}

        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#0D6EFD]/5 rounded-full blur-[120px]" />

        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-[#0D6EFD]/5 rounded-full blur-[110px]" />


        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Left */}

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
                Learn.
                <br />

                <span className="text-[#0D6EFD]">
                  Grow.
                </span>
                <br />

                Lead.
              </h1>


              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="mt-8 text-xl text-gray-600 leading-9 max-w-xl"
              >
                Build the knowledge, skills, and capabilities
                your organization needs to perform confidently
                in a constantly changing business and technology
                environment.
              </p>


              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="mt-9"
              >

                <a
                  href="#training-programs"
                  className="inline-block bg-[#0D6EFD] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Training
                </a>

              </div>

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
                  src="/images/consulting-training.jpg"
                  alt="COTSLE Professional Training"
                  className="w-full h-[420px] lg:h-[520px] object-cover hover:scale-105 transition-transform duration-700"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Training Introduction */}

      <section
        data-aos="fade-up"
        className="py-24 bg-[#F8FAFC]"
      >

        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">

          <p
            data-aos="fade-down"
            className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-5"
          >
            Professional Development
          </p>


          <h2
            data-aos="fade-up"
            className="text-5xl lg:text-6xl font-black text-[#081B33] leading-tight"
          >
            Knowledge That
            <br />

            <span className="text-[#0D6EFD]">
              Drives Progress.
            </span>
          </h2>


          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-7 text-lg lg:text-xl text-gray-600 leading-8 max-w-3xl mx-auto"
          >
            Our training programs combine practical knowledge,
            industry-focused concepts, and hands-on learning to
            help professionals strengthen their capabilities.
          </p>

        </div>

      </section>


      {/* Training Programs */}

      <section
        id="training-programs"
        data-aos="fade-up"
        className="py-28 bg-white"
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="max-w-3xl mb-16">

            <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-5">
              Training Areas
            </p>

            <h2 className="text-5xl lg:text-6xl font-black text-[#081B33] leading-tight">
              Build Skills That
              <br />

              <span className="text-[#0D6EFD]">
                Matter.
              </span>
            </h2>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Training 01 */}

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="group p-8 rounded-2xl border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
            >

              <span className="text-[#0D6EFD] text-3xl font-black">
                01
              </span>

              <h3 className="mt-6 text-2xl font-bold text-[#081B33] group-hover:text-[#0D6EFD] transition-colors">
                IT & Technology
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Develop practical technology skills across
                modern IT environments and digital platforms.
              </p>

            </div>


            {/* Training 02 */}

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="group p-8 rounded-2xl border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
            >

              <span className="text-[#0D6EFD] text-3xl font-black">
                02
              </span>

              <h3 className="mt-6 text-2xl font-bold text-[#081B33] group-hover:text-[#0D6EFD] transition-colors">
                Cybersecurity
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Strengthen cybersecurity awareness and develop
                skills for managing modern security challenges.
              </p>

            </div>


            {/* Training 03 */}

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="group p-8 rounded-2xl border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
            >

              <span className="text-[#0D6EFD] text-3xl font-black">
                03
              </span>

              <h3 className="mt-6 text-2xl font-bold text-[#081B33] group-hover:text-[#0D6EFD] transition-colors">
                IT Governance
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Understand governance frameworks, controls,
                risk management, and effective IT practices.
              </p>

            </div>


            {/* Training 04 */}

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="group p-8 rounded-2xl border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
            >

              <span className="text-[#0D6EFD] text-3xl font-black">
                04
              </span>

              <h3 className="mt-6 text-2xl font-bold text-[#081B33] group-hover:text-[#0D6EFD] transition-colors">
                Leadership
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Develop leadership, communication, and
                decision-making capabilities.
              </p>

            </div>


            {/* Training 05 */}

            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="group p-8 rounded-2xl border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
            >

              <span className="text-[#0D6EFD] text-3xl font-black">
                05
              </span>

              <h3 className="mt-6 text-2xl font-bold text-[#081B33] group-hover:text-[#0D6EFD] transition-colors">
                Business Skills
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Improve essential business skills that support
                productivity, collaboration, and performance.
              </p>

            </div>


            {/* Training 06 */}

            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="group p-8 rounded-2xl border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
            >

              <span className="text-[#0D6EFD] text-3xl font-black">
                06
              </span>

              <h3 className="mt-6 text-2xl font-bold text-[#081B33] group-hover:text-[#0D6EFD] transition-colors">
                Customized Programs
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Tailored learning programs designed around
                your organization's specific needs and objectives.
              </p>

            </div>

          </div>

        </div>

      </section>
{/* Our Training Approach */}

<section
  data-aos="fade-up"
  className="py-28 bg-[#081B33] text-white"
>
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Heading */}

    <div className="max-w-3xl mb-16">

      <p
        data-aos="fade-down"
        className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-5"
      >
        Our Training Approach
      </p>

      <h2
        data-aos="fade-up"
        className="text-5xl lg:text-6xl font-black leading-tight"
      >
        Learning Designed
        <br />

        <span className="text-[#0D6EFD]">
          For Real Impact.
        </span>
      </h2>

      <p
        data-aos="fade-up"
        data-aos-delay="150"
        className="mt-6 text-lg text-gray-300 leading-8 max-w-2xl"
      >
        We focus on practical learning that connects knowledge
        with real workplace challenges and organizational goals.
      </p>

    </div>


    {/* Steps */}

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Step 01 */}

      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="border-t border-white/20 pt-8 hover:-translate-y-2 transition-all duration-500"
      >

        <span className="text-[#0D6EFD] text-4xl font-black">
          01
        </span>

        <h3 className="mt-6 text-2xl font-bold">
          Assess
        </h3>

        <p className="mt-4 text-gray-400 leading-7">
          We understand your team's current capabilities,
          knowledge gaps, and learning objectives.
        </p>

      </div>


      {/* Step 02 */}

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="border-t border-white/20 pt-8 hover:-translate-y-2 transition-all duration-500"
      >

        <span className="text-[#0D6EFD] text-4xl font-black">
          02
        </span>

        <h3 className="mt-6 text-2xl font-bold">
          Design
        </h3>

        <p className="mt-4 text-gray-400 leading-7">
          We structure training around relevant topics,
          practical objectives, and your organizational needs.
        </p>

      </div>


      {/* Step 03 */}

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="border-t border-white/20 pt-8 hover:-translate-y-2 transition-all duration-500"
      >

        <span className="text-[#0D6EFD] text-4xl font-black">
          03
        </span>

        <h3 className="mt-6 text-2xl font-bold">
          Deliver
        </h3>

        <p className="mt-4 text-gray-400 leading-7">
          Our sessions combine expert instruction,
          practical examples, and interactive learning.
        </p>

      </div>


      {/* Step 04 */}

      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="border-t border-white/20 pt-8 hover:-translate-y-2 transition-all duration-500"
      >

        <span className="text-[#0D6EFD] text-4xl font-black">
          04
        </span>

        <h3 className="mt-6 text-2xl font-bold">
          Evaluate
        </h3>

        <p className="mt-4 text-gray-400 leading-7">
          We evaluate learning outcomes and identify
          opportunities for continued development.
        </p>

      </div>

    </div>

  </div>
</section>

{/* Training CTA */}

<section
  data-aos="fade-up"
  className="relative overflow-hidden bg-white py-24 lg:py-28"
>
  {/* Blue Glow */}

  <div className="absolute -top-40 -right-40 w-[450px] h-[450px] bg-[#0D6EFD]/5 rounded-full blur-[120px]" />

  <div className="absolute -bottom-40 -left-40 w-[350px] h-[350px] bg-[#0D6EFD]/5 rounded-full blur-[100px]" />


  <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center">

    <p
      data-aos="fade-down"
      className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-5"
    >
      Invest In Your People
    </p>


    <h2
      data-aos="fade-up"
      className="text-5xl lg:text-6xl font-black text-[#081B33] leading-tight"
    >
      Ready to Build
      <br />

      <span className="text-[#0D6EFD]">
        Better Capabilities?
      </span>
    </h2>


    <p
      data-aos="fade-up"
      data-aos-delay="150"
      className="mt-7 text-lg lg:text-xl text-gray-600 leading-8 max-w-2xl mx-auto"
    >
      Give your team the knowledge and skills they need to
      perform confidently, adapt to change, and create greater
      value for your organization.
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
        Discuss Your Training Needs
      </a>


      <a
        href="/consulting"
        className="border border-[#081B33]/20 text-[#081B33] px-8 py-4 rounded-full font-semibold hover:bg-[#081B33] hover:text-white transition-all duration-300"
      >
        Explore Consulting
      </a>

    </div>

  </div>

</section>

    </>
      );
}