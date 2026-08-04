import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#081B33] text-white">

      {/* Background */}

      <div className="absolute inset-0">
        <Image
          src="/images/network-bg.jpeg"
          fill
          alt=""
          className="object-cover opacity-15"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div>

            <p className="uppercase tracking-[6px] text-[#0D6EFD] font-semibold mb-6">
              Enterprise Technology
            </p>

            <h1 className="text-6xl lg:text-7xl font-black leading-tight">

              Secure.

              <br />

              Connected.

              <br />

              Future Ready.

            </h1>

            <p className="mt-10 text-xl text-gray-300 leading-9 max-w-xl">

              COTSLE Networks delivers enterprise networking,
              cybersecurity, managed services, cloud infrastructure,
              and digital transformation solutions for modern businesses.

            </p>

            <div className="mt-12 flex gap-5">

              <Link
                href="/networks/services"
                className="bg-[#0D6EFD] px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition"
              >
                Explore Services
              </Link>

              <Link
                href="/networks/contact"
                className="border border-white/30 px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
              >
                Talk To Experts
              </Link>

            </div>

          </div>

          {/* Right */}

          <div className="relative flex justify-center">

            <div className="absolute h-[500px] w-[500px] rounded-full bg-[#0D6EFD]/20 blur-[120px]" />

            <Image
              src="/images/network-hero.png"
              width={700}
              height={700}
              alt="Network"
              className="relative z-10"
            />

          </div>

        </div>

      </div>

    </section>
  );
}