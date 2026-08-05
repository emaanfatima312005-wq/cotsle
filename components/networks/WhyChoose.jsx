import Image from "next/image";
import Link from "next/link";

export default function WhyChoose() {
  const reasons = [
    "Certified Engineers",
    "24/7 Technical Support",
    "Enterprise Security",
    "Vendor Partnerships",
    "Scalable Infrastructure",
    "Fast Deployment",
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Illustration */}

          <div className="relative flex justify-center">

            {/* Glow */}

            <div className="absolute w-[420px] h-[420px] rounded-full bg-[#0D6EFD]/10 blur-[100px]" />

            <Image
              src="/images/network-team.png"
              alt="Why Choose COTSLE Networks"
              width={600}
              height={600}
              className="relative z-10 w-full max-w-xl"
            />

          </div>

          {/* Content */}

          <div>

            <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-3">
              Why Choose Us
            </p>

            <h2 className="text-5xl font-black text-gray-900 leading-tight">
              Trusted IT Solutions
              <span className="block text-[#0D6EFD]">
                Built For Business
              </span>
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              COTSLE Networks delivers enterprise networking, cloud,
              cybersecurity and managed IT solutions designed to help
              organizations operate securely, efficiently and at scale.
              Our experienced team works closely with businesses to
              implement reliable technology that supports long-term growth.
            </p>

            {/* Checklist */}

            <div className="grid sm:grid-cols-2 gap-4 mt-10">

              {reasons.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm hover:border-[#0D6EFD] hover:shadow-lg transition"
                >

                  <div className="w-7 h-7 rounded-full bg-[#0D6EFD] text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>

                  <span className="font-semibold text-gray-800">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            {/* CTA */}

            <Link
              href="/networks/contact"
              className="inline-block mt-10 bg-[#0D6EFD] hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Talk to an Expert
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}