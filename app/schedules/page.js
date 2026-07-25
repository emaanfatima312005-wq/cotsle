import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function SchedulePage() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}

      <section className="bg-white py-24 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="inline-block bg-blue-100 text-[#0D6EFD] px-5 py-2 rounded-full font-semibold mb-6">
                Class Schedules
              </span>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">

                Find The Perfect

                <span className="text-[#0D6EFD]">
                  {" "}Learning Schedule
                </span>

              </h1>

              <p className="text-gray-600 text-lg leading-8 mb-10">

                Choose from flexible morning, afternoon, evening,
                and weekend batches designed to fit your lifestyle.

              </p>

              <div className="flex gap-5">

                <Link
                  href="#batches"
                  className="bg-[#0D6EFD] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  View Schedule
                </Link>

                <Link
                  href="/contact"
                  className="border border-gray-300 hover:border-[#0D6EFD] hover:text-[#0D6EFD] px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  Contact Us
                </Link>

              </div>

            </div>

            <div className="relative flex justify-center">

              <div className="absolute w-80 h-80 bg-[#0D6EFD] opacity-10 blur-[140px] rounded-full"></div>

              <Image
                src="/images/schedule.png"
                alt="Schedules"
                width={650}
                height={650}
                className="relative z-10 w-full max-w-lg"
                priority
              />

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}