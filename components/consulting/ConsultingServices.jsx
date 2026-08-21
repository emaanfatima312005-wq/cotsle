export default function ConsultingServices() {
  const services = [
    {
      number: "01",
      title: "Management Consulting",
      description:
        "Improve organizational performance through practical strategies, better processes, and informed decision-making.",
    },
    {
      number: "02",
      title: "IT Consulting",
      description:
        "Align technology with business objectives and identify opportunities to improve efficiency, reliability, and performance.",
    },
    {
      number: "03",
      title: "IT & Security Audits",
      description:
        "Evaluate technology environments, identify risks, and strengthen security, compliance, and operational practices.",
    },
    {
      number: "04",
      title: "IT Governance",
      description:
        "Establish effective governance frameworks that help organizations manage technology, risk, resources, and accountability.",
    },
    {
      number: "05",
      title: "IT Service Management",
      description:
        "Improve the delivery and management of IT services through structured processes and industry best practices.",
    },
    {
      number: "06",
      title: "Professional Training",
      description:
        "Develop the skills and capabilities of teams through focused professional development and technology training.",
    },
  ];

  return (
    <section
      id="consulting-services"
      data-aos="fade-up"
      className="py-28 bg-[#F8FAFC]"
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="max-w-3xl mb-16">

          <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-5">
            What We Offer
          </p>

          <h2 className="text-5xl lg:text-6xl font-black text-[#081B33] leading-tight">
            Consulting That
            <br />

            <span className="text-[#0D6EFD]">
              Creates Impact.
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-2xl">
            From strategic guidance to technology improvement,
            our consulting services are designed to solve real
            organizational challenges.
          </p>

        </div>


        {/* Services */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">

          {services.map((service, index) => (

            <div
              key={service.number}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-white border border-gray-200 p-8 rounded-2xl hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
            >

              <span className="text-[#0D6EFD] font-black text-sm">
                {service.number}
              </span>

              <h3 className="mt-6 text-2xl font-bold text-[#081B33] group-hover:text-[#0D6EFD] transition-colors duration-300">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}