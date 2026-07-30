import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function About() {
  return (
    <section
      data-aos="fade-up"
      className="py-16 lg:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">

          {/* Left Image */}

          <div className="flex justify-center">

            <Image
              src="/images/about.png"
              alt="About Cotsle"
              width={550}
              height={550}
              className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto"
            />

          </div>

          {/* Right Content */}

          <div className="text-center lg:text-left">

            <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
              About Cotsle
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Building Innovative
              <span className="text-[#0D6EFD]">
                {" "}Technology Solutions
              </span>
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-8 max-w-2xl mx-auto lg:mx-0 mb-8">
              Cotsle empowers businesses through cutting-edge software
              development, cloud computing, artificial intelligence,
              cybersecurity, and professional IT training. We help
              organizations grow with innovative digital solutions.
            </p>

            {/* Features */}

            <div className="w-fit mx-auto lg:mx-0 text-left space-y-5 mb-10">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#0D6EFD] text-lg flex-shrink-0" />
                <span className="text-gray-800">
                  Software Development
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#0D6EFD] text-lg flex-shrink-0" />
                <span className="text-gray-800">
                  Artificial Intelligence Solutions
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#0D6EFD] text-lg flex-shrink-0" />
                <span className="text-gray-800">
                  Cloud Computing Services
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#0D6EFD] text-lg flex-shrink-0" />
                <span className="text-gray-800">
                  Professional IT Training
                </span>
              </div>

            </div>

            {/* Button */}

            <div className="flex justify-center lg:justify-start">

              <Link
                href="/about"
                className="bg-[#0D6EFD] hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-300 font-semibold"
              >
                Learn More
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}