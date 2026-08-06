import {
  FaNetworkWired,
  FaCloud,
  FaShieldAlt,
  FaServer,
  FaDatabase,
  FaCogs,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";


export default function Hero() {
  return (
    <section className="bg-white border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <h1 className="text-5xl lg:text-6xl font-black text-[#081B33] leading-tight">

              Enterprise IT
              <br />

              Services

            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-600 max-w-xl">

              From secure networking and cloud infrastructure
              to cybersecurity, managed IT, and consulting,
              COTSLE Networks provides technology solutions
              designed for growing businesses.

            </p>

            <div className="mt-10">

              <Link
                href="/networks/contact"
                className="inline-flex items-center rounded-xl bg-[#0D6EFD] px-8 py-4 font-semibold text-white hover:bg-blue-700 transition"
              >
                Request Consultation
              </Link>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <Image
              src="/images/services-banner.png"
              width={650}
              height={500}
              alt="Services"
              className="w-full max-w-xl"
              priority
            />

          </div>

        </div>
        {/* Core Services */}

<section id="services" className="py-24 bg-gray-50">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-3">
        Our Core Services
      </p>

      <h2 className="text-5xl font-black text-[#081B33]">
        Enterprise IT Solutions
      </h2>

      <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
        We help organizations build secure, scalable and future-ready
        IT environments through industry-leading technology solutions.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Card */}

      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">

        <div className="w-16 h-16 rounded-2xl bg-[#0D6EFD]/10 flex items-center justify-center mb-6">
  <FaNetworkWired className="text-3xl text-[#0D6EFD]" />
</div>
        <h3 className="text-2xl font-bold mb-4">
          Enterprise Networking
        </h3>

        <p className="text-gray-600 leading-8">
          LAN, WAN, SD-WAN, wireless infrastructure, routing and switching
          solutions for organizations of every size.
        </p>

      </div>

      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">

        <div className="w-16 h-16 rounded-2xl bg-[#0D6EFD]/10 flex items-center justify-center mb-6">
  <FaCloud className="text-3xl text-[#0D6EFD]" />
</div>

        <h3 className="text-2xl font-bold mb-4">
          Cloud Infrastructure
        </h3>

        <p className="text-gray-600 leading-8">
          Public, private and hybrid cloud deployments with seamless
          migration, optimization and management.
        </p>

      </div>

      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">

        <div className="w-16 h-16 rounded-2xl bg-[#0D6EFD]/10 flex items-center justify-center mb-6">
  <FaShieldAlt className="text-3xl text-[#0D6EFD]" />
</div>

        <h3 className="text-2xl font-bold mb-4">
          Cyber Security
        </h3>

        <p className="text-gray-600 leading-8">
          Firewalls, endpoint protection, vulnerability assessments,
          SIEM and advanced security monitoring.
        </p>

      </div>

      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">

        <div className="w-16 h-16 rounded-2xl bg-[#0D6EFD]/10 flex items-center justify-center mb-6">
  <FaServer className="text-3xl text-[#0D6EFD]" />
</div>

        <h3 className="text-2xl font-bold mb-4">
          Managed IT Services
        </h3>

        <p className="text-gray-600 leading-8">
          Complete IT infrastructure management with proactive monitoring
          and 24/7 technical support.
        </p>

      </div>

      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">

        <div className="w-16 h-16 rounded-2xl bg-[#0D6EFD]/10 flex items-center justify-center mb-6">
  <FaDatabase className="text-3xl text-[#0D6EFD]" />
</div>

        <h3 className="text-2xl font-bold mb-4">
          Data Center Solutions
        </h3>

        <p className="text-gray-600 leading-8">
          Modern compute, storage, virtualization and backup solutions
          for mission-critical business operations.
        </p>

      </div>

      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">

        <div className="w-16 h-16 rounded-2xl bg-[#0D6EFD]/10 flex items-center justify-center mb-6">
  <FaCogs className="text-3xl text-[#0D6EFD]" />
</div>

        <h3 className="text-2xl font-bold mb-4">
          IT Consulting
        </h3>

        <p className="text-gray-600 leading-8">
          Strategic planning, digital transformation and technology
          consulting aligned with your business objectives.
        </p>

      </div>

    </div>

  </div>

</section>
<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Heading */}

    <div className="text-center mb-20">

      <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-3">
        Our Capabilities
      </p>

      <h2 className="text-5xl font-black text-[#081B33]">
        Enterprise Solutions Built For Growth
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        We combine networking, cybersecurity and cloud expertise to
        deliver complete IT ecosystems for modern organizations.
      </p>

    </div>

    {/* Capability 1 */}

    <div className="grid lg:grid-cols-2 gap-20 items-center mb-28">

      <div>

        <span className="text-[#0D6EFD] font-semibold uppercase tracking-[4px]">
          Enterprise Networking
        </span>

        <h3 className="text-4xl font-bold mt-4 mb-6 text-[#081B33]">
          Intelligent Network Infrastructure
        </h3>

        <p className="text-gray-600 text-lg leading-8 mb-8">
          Design and deploy secure LAN, WAN, SD-WAN and wireless
          infrastructures that provide reliability, scalability
          and high performance.
        </p>

        <ul className="space-y-4 text-gray-700">

          <li>✓ Campus & Branch Networking</li>

          <li>✓ Wireless Infrastructure</li>

          <li>✓ Software Defined Networking</li>

          <li>✓ Enterprise Routing & Switching</li>

        </ul>

      </div>

      <div className="flex justify-center">

        <img
          src="/images/network-design.svg"
          alt="Enterprise Network"
          className="w-full max-w-md"
        />

      </div>

    </div>

    {/* Capability 2 */}

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      <div className="order-2 lg:order-1 flex justify-center">

        <img
          src="/images/security.png"
          alt="Cyber Security"
          className="w-full max-w-md h-[500px] object-contain"
        />

      </div>

      <div className="order-1 lg:order-2">

        <span className="text-[#0D6EFD] font-semibold uppercase tracking-[4px]">
          Cyber Security
        </span>

        <h3 className="text-4xl font-bold mt-4 mb-6 text-[#081B33]">
          Protect Every Layer Of Your Business
        </h3>

        <p className="text-gray-600 text-lg leading-8 mb-8">
          Secure your digital assets through proactive monitoring,
          next-generation firewalls and advanced threat detection.
        </p>

        <ul className="space-y-4 text-gray-700">

          <li>✓ Next Generation Firewalls</li>

          <li>✓ Endpoint Protection</li>

          <li>✓ Security Monitoring</li>

          <li>✓ Vulnerability Assessment</li>

        </ul>

      </div>

    </div>

  </div>

</section>
<section className="py-28 bg-[#F8FAFC]">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Heading */}

    <div className="text-center mb-20">

      <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-3">
        Solutions By Industry
      </p>

      <h2 className="text-5xl font-black text-[#081B33]">
        Tailored For Every Business
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        Every industry has unique networking and security requirements.
        We build customized solutions that meet business goals and
        compliance standards.
      </p>

    </div>

    {/* Bento Grid */}

    <div className="grid lg:grid-cols-3 gap-6">

      

      {/* Card */}

      <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition">

        <div className="w-full h-42">
    <img
      src="/images/healthcare.jpg"
      alt="Healthcare"
      className="w-full h-full object-cover"
    />
  </div>
<div className="p-6">
        <h3 className="text-2xl font-bold text-[#081B33] mb-3">
          Healthcare
        </h3>

        <p className="text-gray-600">
          Secure hospital networks and healthcare infrastructure.
        </p>

      </div>
      </div>

{/* Card */}

      <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition">

        <div className="w-full h-42">
    <img
      src="/images/education.jpg"
      alt="Education"
      className="w-full h-full object-cover"
    />
  </div>
<div className="p-6">
        <h3 className="text-2xl font-bold text-[#081B33] mb-3">
          Education
        </h3>

        <p className="text-gray-600">
          Smart campus networking and digital classrooms.
        </p>

      </div>
      </div>

      {/* Card */}

      <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition">

        <div className="w-full h-42">
    <img
      src="/images/manufacturing.jpg"
      alt="Manufacturing"
      className="w-full h-full object-cover"
    />
  </div>
<div className="p-6">
        <h3 className="text-2xl font-bold text-[#081B33] mb-3">
          Manufacturing
        </h3>

        <p className="text-gray-600">
          Industrial connectivity and factory automation.
        </p>

      </div>
      </div>

{/* Card */}

      <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition">

        <div className="w-full h-42">
    <img
      src="/images/financial.jpg"
      alt="Financial businesses"
      className="w-full h-full object-cover"
    />
  </div>
<div className="p-6">
        <h3 className="text-2xl font-bold text-[#081B33] mb-3">
          Financial businesses
        </h3>

        <p className="text-gray-600">
          Secure business networks and buisness infrastructure.
        </p>

      </div>
      </div>

     {/* Card */}

      <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition">

        <div className="w-full h-42">
    <img
      src="/images/industry.jpg"
      alt="Industry"
      className="w-full h-full object-cover"
    />
  </div>
<div className="p-6">
        <h3 className="text-2xl font-bold text-[#081B33] mb-3">
          Industry
        </h3>

        <p className="text-gray-600">
          Secure industrial networks and industrial infrastructure.
        </p>

      </div>
      </div>

{/* Card */}

      <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition">

        <div className="w-full h-42">
    <img
      src="/images/government.jpg"
      alt="Government"
      className="w-full h-full object-cover"
    />
  </div>
<div className="p-6">
        <h3 className="text-2xl font-bold text-[#081B33] mb-3">
          Government
        </h3>

        <p className="text-gray-600">
          Secure infrastructure for public sector organizations.
        </p>

      </div>
      </div>
      
    </div>

  </div>

</section>

<section className="py-28 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-3">
        Trusted Technology Partners
      </p>

      <h2 className="text-5xl font-black text-[#081B33]">
        Working With Industry Leaders
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        We partner with globally recognized technology vendors to
        deliver secure, scalable and enterprise-ready solutions.
      </p>

    </div>

  </div>

  {/* Moving Logos */}

  <div className="relative">

    <div className="flex animate-marquee whitespace-nowrap gap-24">

      {[
        "cisco.png",
        "microsoft.png",
        "aws.png",
        "dell.png",
        "huawei.png",
        "vmware.jpg",

        

      ].map((logo, index) => (

        <div
          key={index}
          className="flex items-center justify-center min-w-[180px]"
        >

          <img
            src={`/images/${logo}`}
            className="h-16 object-contain"
          />

        </div>

      ))}

    </div>

  </div>

</section>

{/* CTA */}

<section className="py-24 bg-white">

  <div className="max-w-5xl mx-auto px-6 text-center">

    <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-4">
      Ready to Get Started?
    </p>

    <h2 className="text-5xl lg:text-6xl font-black text-[#081B33] leading-tight mb-8">
      Let's Build a Smarter,
      <br />
      More Secure IT Infrastructure
    </h2>

    <p className="text-xl text-gray-600 leading-9 max-w-3xl mx-auto mb-12">

      Whether you're modernizing your network, securing your business,
      migrating to the cloud or planning your next digital transformation,
      our experts are ready to help you every step of the way.

    </p>

    <div className="flex flex-wrap justify-center gap-5">

      <Link
        href="/networks/contact"
        className="bg-[#0D6EFD] text-white px-9 py-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
      >
        Talk to an Expert
      </Link>

      <Link
        href="/networks/solutions"
        className="border-2 border-[#081B33] text-[#081B33] px-9 py-4 rounded-full font-semibold hover:bg-[#081B33] hover:text-white transition duration-300"
      >
        Explore Solutions
      </Link>

    </div>

  </div>

</section>

      </div>

    </section>
  );
}