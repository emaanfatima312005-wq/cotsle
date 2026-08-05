import {
  FaUniversity,
  FaHospital,
  FaGraduationCap,
  FaIndustry,
  FaShoppingCart,
  FaBuilding,
} from "react-icons/fa";

export default function Industries() {
  const industries = [
    {
      icon: <FaUniversity />,
      title: "Banking & Finance",
      description:
        "Secure digital infrastructure, compliance, disaster recovery and enterprise-grade cybersecurity.",
    },
    {
      icon: <FaHospital />,
      title: "Healthcare",
      description:
        "Reliable networking, secure patient data management and highly available healthcare IT systems.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Education",
      description:
        "Campus networking, cloud learning environments and secure digital classrooms.",
    },
    {
      icon: <FaIndustry />,
      title: "Manufacturing",
      description:
        "Industrial networking, smart factory connectivity and operational technology security.",
    },
    {
      icon: <FaShoppingCart />,
      title: "Retail & E-Commerce",
      description:
        "Scalable cloud infrastructure, secure payment systems and uninterrupted business operations.",
    },
    {
      icon: <FaBuilding />,
      title: "Government & Enterprise",
      description:
        "Mission-critical infrastructure, secure communications and enterprise digital transformation.",
    },
  ];

  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[6px] text-[#0D6EFD] font-semibold mb-3">
            Industries We Serve
          </p>

          <h2 className="text-5xl lg:text-6xl font-black text-gray-900">
            Technology Solutions For
            <span className="text-[#0D6EFD]"> Every Industry</span>
          </h2>

          <p className="mt-7 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            We partner with organizations across multiple industries,
            delivering secure, scalable and future-ready IT solutions
            tailored to their operational needs.
          </p>

        </div>

        {/* Cards */}
<div className="grid md:grid-cols-2 gap-x-16 gap-y-14">

  {industries.map((industry, index) => (

    <div
      key={index}
      className="group border-b border-gray-200 pb-8"
    >

      <div className="flex items-start gap-6">

        <div className="text-5xl text-[#0D6EFD] transition group-hover:scale-110">

          {industry.icon}

        </div>

        <div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {industry.title}
          </h3>

          <p className="text-gray-600 leading-8">
            {industry.description}
          </p>

        </div>

      </div>

    </div>

  ))}

</div>

      </div>

    </section>
  );
}