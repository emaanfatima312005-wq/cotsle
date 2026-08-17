export default function ConsultingWhyChoose() {
  const reasons = [
    "Practical recommendations focused on real business challenges.",
    "Technology and business expertise working together.",
    "Solutions aligned with organizational goals and priorities.",
    "A structured approach focused on measurable improvement.",
    "Knowledge transfer that helps teams become more capable and confident.",
  ];

  return (
    <section
      data-aos="fade-up"
      className="py-28 bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div data-aos="fade-right">

            <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-5">
              Why COTSLE Consulting
            </p>

            <h2 className="text-5xl lg:text-6xl font-black text-[#081B33] leading-tight">
              Expertise That
              <br />

              <span className="text-[#0D6EFD]">
                Moves You Forward.
              </span>
            </h2>

            <p className="mt-7 text-lg text-gray-600 leading-8 max-w-xl">
              We combine strategic thinking, technology expertise,
              and practical experience to help organizations turn
              complex challenges into opportunities for improvement.
            </p>

          </div>


          {/* Right */}

          <div data-aos="fade-left">

            <div className="space-y-6">

              {reasons.map((reason, index) => (

                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="flex items-start gap-5 border-b border-gray-200 pb-6"
                >

                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0D6EFD] text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>

                  <p className="text-lg text-gray-700 leading-7">
                    {reason}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}