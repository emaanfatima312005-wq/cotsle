"use client";

import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
              Empowering
              <span className="text-[#0D6EFD]">
                {" "}Businesses{" "}
              </span>
              Through Technology
            </h1>

            <p className="text-gray-300 text-base md:text-lg leading-8 max-w-xl mb-10">
              Cotsle delivers innovative software development,
              AI solutions, cloud computing, cybersecurity,
              and professional IT training to help businesses
              succeed in the digital world.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mb-12">

              <Link
                href="/systems/courses"
                className="bg-[#0D6EFD] hover:bg-blue-700 transition-all duration-300 px-8 py-4 rounded-lg font-semibold hover:scale-105"
              >
                Explore Courses
              </Link>

              <Link
                href="/systems/contact"
                className="border border-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 rounded-lg font-semibold hover:scale-105"
              >
                Contact Us
              </Link>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">

              <div>
                <h2 className="text-4xl font-bold text-[#0D6EFD]">
                  <CountUp end={25} duration={2} />+
                </h2>

                <p className="text-gray-400 mt-2">
                  Years Experience
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-[#0D6EFD]">
                  <CountUp
                    end={50000}
                    duration={2}
                    separator=","
                  />
                  +
                </h2>

                <p className="text-gray-400 mt-2">
                  Students
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-[#0D6EFD]">
                  <CountUp
                    end={1000}
                    duration={2}
                    separator=","
                  />
                  +
                </h2>

                <p className="text-gray-400 mt-2">
                  Projects
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="relative flex justify-center">

            {/* Blue Glow */}

            <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>

            <Image
              src="/images/hero.png"
              alt="Hero"
              width={650}
              height={650}
              priority
              className="relative z-10 w-full max-w-sm md:max-w-md lg:max-w-2xl h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />

          </div>

        </div>

      </div>

    </section>
  );
}