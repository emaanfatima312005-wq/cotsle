export default function ConsultingApproach() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      text: "We begin by understanding your organization's goals, challenges, and current environment.",
    },
    {
      number: "02",
      title: "Assess",
      text: "We evaluate existing processes, technology, risks, and opportunities for improvement.",
    },
    {
      number: "03",
      title: "Plan",
      text: "We develop a practical roadmap with clear priorities, recommendations, and measurable goals.",
    },
    {
      number: "04",
      title: "Implement",
      text: "We help turn recommendations into action while keeping your business objectives at the center.",
    },
    {
      number: "05",
      title: "Improve",
      text: "We continuously evaluate results and identify opportunities for long-term improvement.",
    },
  ];

  return (
    <section
      data-aos="fade-up"
      className="py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="max-w-3xl mb-20">

          <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-5">
            Our Approach
          </p>

          <h2 className="text-5xl lg:text-6xl font-black text-[#081B33] leading-tight">
            From Challenge
            <br />
            <span className="text-[#0D6EFD]">
              To Transformation.
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-2xl">
            Our consulting process is designed to move organizations
            from understanding their challenges to creating practical,
            sustainable improvements.
          </p>

        </div>

        {/* Steps */}

        <div className="relative">

          <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-gray-200" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">

            {steps.map((step, index) => (
              <div
                key={step.number}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="relative"
              >

                <div className="relative z-10 w-14 h-14 rounded-full bg-[#081B33] text-white flex items-center justify-center font-bold border-4 border-white shadow-md">
                  {step.number}
                </div>

                <h3 className="mt-7 text-2xl font-bold text-[#081B33]">
                  {step.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {step.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}