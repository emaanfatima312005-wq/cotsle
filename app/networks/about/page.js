import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
{/* About Hero */}

<section className="bg-white py-28">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <div>

        <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-5">
          About COTSLE
        </p>

        <h1 className="text-5xl lg:text-7xl font-black text-[#081B33] leading-tight">
          Technology
          <span className="text-[#0D6EFD]"> With Purpose.</span>
        </h1>

        <p className="mt-8 text-xl text-gray-600 leading-9 max-w-xl">
          COTSLE is a technology solutions company helping businesses
          build secure, connected, and future-ready digital environments.
        </p>

        <p className="mt-5 text-lg text-gray-500 leading-8 max-w-xl">
          From enterprise networking and cybersecurity to cloud
          infrastructure and digital transformation, we combine
          technology and expertise to solve real business challenges.
        </p>

      </div>

      <div className="relative">

        <div className="absolute -inset-6 bg-[#0D6EFD]/10 rounded-[40px] blur-2xl" />

        <div className="relative bg-[#081B33] rounded-[40px] p-12 text-white">

          <p className="text-[#0D6EFD] uppercase tracking-[4px] font-semibold mb-8">
            Our Focus
          </p>

          <div className="space-y-7">

            <div className="border-b border-white/10 pb-6">
              <h3 className="text-2xl font-bold">
                Secure
              </h3>
              <p className="text-gray-400 mt-2">
                Protecting businesses against evolving digital threats.
              </p>
            </div>

            <div className="border-b border-white/10 pb-6">
              <h3 className="text-2xl font-bold">
                Connected
              </h3>
              <p className="text-gray-400 mt-2">
                Building reliable infrastructure that keeps businesses connected.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Future Ready
              </h3>
              <p className="text-gray-400 mt-2">
                Preparing organizations for the technologies of tomorrow.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
    </>
     );
}
