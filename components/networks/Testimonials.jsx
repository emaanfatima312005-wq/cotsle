export default function Testimonials() {
  const testimonials = [
    {
      company: "ABC Technologies",
      person: "Muhammad Ali",
      role: "IT Manager",
      review:
        "COTSLE Networks redesigned our infrastructure with zero downtime. Their engineers were highly professional and the deployment was flawless.",
    },
    {
      company: "Future Solutions",
      person: "Sarah Khan",
      role: "Operations Director",
      review:
        "Their cybersecurity team helped us secure our network and significantly improved our overall IT performance.",
    },
    {
      company: "Prime Logistics",
      person: "Ahmed Raza",
      role: "Head of Infrastructure",
      review:
        "From cloud migration to network management, COTSLE Networks exceeded our expectations. Highly recommended.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-3">
            Client Testimonials
          </p>

          <h2 className="text-5xl font-black text-gray-900">
            Trusted By Businesses
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            Organizations rely on COTSLE Networks to build secure,
            scalable and reliable IT infrastructure.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item) => (

            <div
              key={item.company}
              className="group bg-white rounded-3xl border border-gray-200 p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Rating */}

              <div className="text-yellow-400 text-xl mb-5">
                ★★★★★
              </div>

              {/* Review */}

              <p className="text-gray-600 leading-8 italic">
                "{item.review}"
              </p>

              {/* Divider */}

              <div className="h-px bg-gray-200 my-8"></div>

              {/* Client */}

              <h3 className="text-xl font-bold text-gray-900">
                {item.person}
              </h3>

              <p className="text-[#0D6EFD] font-semibold mt-1">
                {item.role}
              </p>

              <p className="text-gray-500 mt-3">
                {item.company}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}