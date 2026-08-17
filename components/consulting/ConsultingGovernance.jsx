export default function ConsultingGovernance() {
  const areas = [
    {
      number: "01",
      title: "IT Governance",
      text: "Establish clear structures, responsibilities, and decision-making processes that keep technology aligned with business objectives.",
    },
    {
      number: "02",
      title: "Risk Management",
      text: "Identify technology and operational risks, assess their potential impact, and develop practical strategies to manage them.",
    },
    {
      number: "03",
      title: "Compliance & Controls",
      text: "Strengthen internal controls and support organizations in maintaining effective technology, security, and compliance practices.",
    },
  ];

  return (
    <section
      data-aos="fade-up"
      className="py-28 bg-[#081B33] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">

          <div data-aos="fade-right">

            <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-5">
              Governance & Risk
            </p>

            <h2 className="text-5xl lg:text-6xl font-black leading-tight">
              Stronger
              <br />

              <span className="text-[#0D6EFD]">
                Governance.
              </span>
            </h2>

          </div>

          <div data-aos="fade-left">

            <p className="text-lg text-gray-300 leading-8 max-w-xl">
              Effective governance helps organizations make better
              technology decisions, manage risk, and create
              accountability across their operations.
            </p>

          </div>

        </div>


        {/* Areas */}

        <div className="grid md:grid-cols-3 gap-8">

          {areas.map((area, index) => (

            <div
              key={area.number}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="group border border-white/10 rounded-2xl p-8 hover:border-[#0D6EFD]/60 hover:bg-white/[0.04] transition-all duration-500"
            >

              <span className="text-[#0D6EFD] font-black text-sm">
                {area.number}
              </span>

              <h3 className="mt-7 text-2xl font-bold">
                {area.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-7">
                {area.text}
              </p>

              <div className="mt-7 h-[2px] w-10 bg-[#0D6EFD] group-hover:w-20 transition-all duration-500" />

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}