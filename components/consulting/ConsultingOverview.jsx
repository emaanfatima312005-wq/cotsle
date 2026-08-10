export default function ConsultingOverview() {
  return (
    <section
      data-aos="fade-up"
      className="py-28 bg-white"
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div data-aos="fade-right">

            <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-5">
              Consulting With Purpose
            </p>

            <h2 className="text-5xl lg:text-6xl font-black text-[#081B33] leading-tight">
              Better Decisions.
              <br />

              <span className="text-[#0D6EFD]">
                Better Results.
              </span>
            </h2>

          </div>


          {/* Right */}

          <div data-aos="fade-left">

            <p className="text-xl text-gray-600 leading-9">
              COTSLE Consulting works with organizations to identify
              challenges, improve processes, and create practical
              strategies that deliver measurable results.
            </p>

            <p className="mt-6 text-lg text-gray-500 leading-8">
              Our approach combines business understanding,
              technology expertise, and industry knowledge to help
              organizations navigate change with confidence.
            </p>

          </div>

        </div>


        {/* Divider */}

        <div className="mt-20 border-t border-gray-200 pt-12">

          <div className="grid md:grid-cols-3 gap-10">

            {/* Point 1 */}

            <div
              data-aos="fade-up"
              data-aos-delay="100"
            >

              <span className="text-[#0D6EFD] text-sm font-black">
                01
              </span>

              <h3 className="mt-4 text-2xl font-bold text-[#081B33]">
                Understand
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                We understand your organization's goals,
                challenges, and current capabilities.
              </p>

            </div>


            {/* Point 2 */}

            <div
              data-aos="fade-up"
              data-aos-delay="200"
            >

              <span className="text-[#0D6EFD] text-sm font-black">
                02
              </span>

              <h3 className="mt-4 text-2xl font-bold text-[#081B33]">
                Strategize
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                We develop practical strategies aligned with
                your business and technology objectives.
              </p>

            </div>


            {/* Point 3 */}

            <div
              data-aos="fade-up"
              data-aos-delay="300"
            >

              <span className="text-[#0D6EFD] text-sm font-black">
                03
              </span>

              <h3 className="mt-4 text-2xl font-bold text-[#081B33]">
                Improve
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                We help turn strategy into meaningful,
                sustainable improvements.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}