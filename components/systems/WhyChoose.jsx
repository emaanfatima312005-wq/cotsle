import { FaCheckCircle } from "react-icons/fa";

export default function WhyChoose() {

  const stats = [
    {
      number: "5+",
      title: "Years Experience",
    },
    {
      number: "50+",
      title: "Projects Delivered",
    },
    {
      number: "100%",
      title: "Client Satisfaction",
    },
    {
      number: "24/7",
      title: "Technical Support",
    },
  ];

  return (
    <section
      data-aos="fade-up"
      className="py-16 lg:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">

          {/* Left Side */}

          <div className="text-center lg:text-left">

            <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
              Why Choose Cotsle
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Trusted Technology Partner
              <span className="text-[#0D6EFD]">
                {" "}For Your Business
              </span>
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-8 max-w-2xl mx-auto lg:mx-0 mb-8">
              We combine innovation, technical expertise, and customer-focused
              solutions to help businesses grow in today's digital world.
            </p>

            {/* Features */}

            <div className="w-fit mx-auto lg:mx-0 text-left space-y-5">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#0D6EFD] text-lg flex-shrink-0" />
                <span>Experienced Software Professionals</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#0D6EFD] text-lg flex-shrink-0" />
                <span>Latest Technologies & AI Solutions</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#0D6EFD] text-lg flex-shrink-0" />
                <span>Customer-Centric Development</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#0D6EFD] text-lg flex-shrink-0" />
                <span>End-to-End IT Services</span>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="grid grid-cols-2 gap-5">

            {stats.map((stat, index) => (

              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-md p-6 md:p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-[#0D6EFD]"
              >

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D6EFD] mb-3">
                  {stat.number}
                </h3>

                <p className="text-gray-700 font-medium text-sm md:text-base">
                  {stat.title}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}