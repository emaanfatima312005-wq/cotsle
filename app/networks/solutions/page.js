import Image from "next/image";
import Link from "next/link";
import {
  FaBullseye,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";

export default function SolutionsPage() {
  return (
    <>
{/* Hero */}

<section className="relative bg-white overflow-hidden">

  {/* Background Pattern */}

  <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#0D6EFD]/5 blur-3xl"></div>

  <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* Left */}

      <div>

        <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-5">
          Enterprise Solutions
        </p>

        <h1 className="text-6xl lg:text-7xl font-black text-[#081B33] leading-tight">

          Smart Solutions
          <br />
          For Modern
          <span className="block text-[#0D6EFD]">
            Enterprises
          </span>

        </h1>

        <p className="mt-8 text-xl text-gray-600 leading-9 max-w-xl">

          Empower your organization with enterprise networking,
          cloud infrastructure, cybersecurity and digital
          transformation solutions built for performance,
          security and future growth.

        </p>

        <div className="mt-12 flex flex-wrap gap-5">

          <Link
            href="/networks/contact"
            className="bg-[#0D6EFD] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Talk To Experts
          </Link>

          <Link
            href="/networks/services"
            className="border-2 border-[#081B33] text-[#081B33] px-8 py-4 rounded-full font-semibold hover:bg-[#081B33] hover:text-white transition"
          >
            Our Services
          </Link>

        </div>

      </div>

      {/* Right */}

      <div className="relative flex justify-center">

        <div className="absolute w-[450px] h-[450px] rounded-full bg-[#0D6EFD]/10 blur-[120px]"></div>

        <Image
          src="/images/solutions-hero.png"
          alt="Enterprise Solutions"
          width={650}
          height={650}
          className="relative z-10"
          priority
        />

      </div>

    </div>

  </div>

</section>
{/* Core Solutions */}

<section className="py-24 bg-[#F8FAFC]">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-3">
        Core Solutions
      </p>

      <h2 className="text-5xl font-black text-[#081B33]">
        Enterprise Solutions Designed
        <br />
        Around Your Business
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        Our solutions are designed to help organizations modernize
        infrastructure, strengthen security and accelerate digital
        transformation.
      </p>

    </div>

    <div className="space-y-6">

      {/* Row 1 */}

      <div className="grid lg:grid-cols-2 gap-6">

        <div className="bg-white rounded-3xl p-10 shadow-md hover:shadow-xl transition">

          <h3 className="text-3xl font-bold text-[#081B33] mb-4">
            Enterprise Networking
          </h3>

          <p className="text-gray-600 leading-8 mb-6">
            High-performance wired and wireless infrastructure that
            keeps your business securely connected.
          </p>

          <Link
            href="/networks/contact"
            className="text-[#0D6EFD] font-semibold hover:underline"
          >
            Learn More →
          </Link>

        </div>

        <div className="bg-white rounded-3xl p-10 shadow-md hover:shadow-xl transition">

          <h3 className="text-3xl font-bold text-[#081B33] mb-4">
            Cloud Infrastructure
          </h3>

          <p className="text-gray-600 leading-8 mb-6">
            Hybrid and multi-cloud environments designed for scalability,
            resilience and business continuity.
          </p>

          <Link
            href="/networks/contact"
            className="text-[#0D6EFD] font-semibold hover:underline"
          >
            Learn More →
          </Link>

        </div>

      </div>

      {/* Row 2 */}

      <div className="grid lg:grid-cols-3 gap-6">

        <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition">

          <h3 className="text-2xl font-bold text-[#081B33] mb-4">
            Cybersecurity
          </h3>

          <p className="text-gray-600 leading-8">
            End-to-end protection against evolving cyber threats.
          </p>

        </div>

        <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition">

          <h3 className="text-2xl font-bold text-[#081B33] mb-4">
            Managed Services
          </h3>

          <p className="text-gray-600 leading-8">
            24/7 monitoring, maintenance and proactive IT management.
          </p>

        </div>

        <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition">

          <h3 className="text-2xl font-bold text-[#081B33] mb-4">
            Digital Transformation
          </h3>

          <p className="text-gray-600 leading-8">
            Helping organizations embrace modern technologies and
            smarter business operations.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
{/* Our Solution Process */}

<section className="py-28 bg-white">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-20">

      <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-3">
        Our Process
      </p>

      <h2 className="text-5xl font-black text-[#081B33]">
        From Strategy to Success
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        Every engagement follows a structured methodology that ensures
        reliable delivery, seamless implementation and long-term success.
      </p>

    </div>

    <div className="relative">

      {/* Line */}

      <div className="hidden lg:block absolute top-8 left-0 w-full h-[2px] bg-gray-200"></div>

      <div className="grid lg:grid-cols-5 gap-10 relative">

        <div className="text-center">

          <div className="w-16 h-16 rounded-full bg-[#0D6EFD] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
            1
          </div>

          <h3 className="text-2xl font-bold text-[#081B33] mb-3">
            Discover
          </h3>

          <p className="text-gray-600 leading-7">
            Understanding your business goals and existing infrastructure.
          </p>

        </div>

        <div className="text-center">

          <div className="w-16 h-16 rounded-full bg-[#0D6EFD] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
            2
          </div>

          <h3 className="text-2xl font-bold text-[#081B33] mb-3">
            Design
          </h3>

          <p className="text-gray-600 leading-7">
            Creating an enterprise architecture tailored to your needs.
          </p>

        </div>

        <div className="text-center">

          <div className="w-16 h-16 rounded-full bg-[#0D6EFD] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
            3
          </div>

          <h3 className="text-2xl font-bold text-[#081B33] mb-3">
            Deploy
          </h3>

          <p className="text-gray-600 leading-7">
            Implementing solutions with minimal disruption to operations.
          </p>

        </div>

        <div className="text-center">

          <div className="w-16 h-16 rounded-full bg-[#0D6EFD] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
            4
          </div>

          <h3 className="text-2xl font-bold text-[#081B33] mb-3">
            Optimize
          </h3>

          <p className="text-gray-600 leading-7">
            Monitoring performance and continuously improving efficiency.
          </p>

        </div>

        <div className="text-center">

          <div className="w-16 h-16 rounded-full bg-[#0D6EFD] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
            5
          </div>

          <h3 className="text-2xl font-bold text-[#081B33] mb-3">
            Support
          </h3>

          <p className="text-gray-600 leading-7">
            Providing proactive support and long-term technology guidance.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
{/* Industries We Empower */}

<section className="py-28 bg-[#F8FAFC]">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-3">
        Industries We Empower
      </p>

      <h2 className="text-5xl font-black text-[#081B33]">
        Solutions Built For Every Industry
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        Every industry has unique technology challenges. Our enterprise
        solutions are tailored to improve security, efficiency and
        long-term business growth.
      </p>

    </div>

    <div className="grid lg:grid-cols-3 gap-8">

      {/* Banking */}

      <div className="bg-white rounded-3xl p-10 shadow-md hover:shadow-xl transition-all duration-300">

        <h3 className="text-3xl font-bold text-[#081B33] mb-5">
          Banking & Finance
        </h3>

        <p className="text-gray-600 leading-8 mb-8">
          Secure financial networks, compliance, cloud infrastructure
          and advanced cybersecurity solutions.
        </p>

        <span className="text-[#0D6EFD] font-semibold">
          Secure • Reliable • Compliant
        </span>

      </div>

      {/* Healthcare */}

      <div className="bg-white rounded-3xl p-10 shadow-md hover:shadow-xl transition-all duration-300">

        <h3 className="text-3xl font-bold text-[#081B33] mb-5">
          Healthcare
        </h3>

        <p className="text-gray-600 leading-8 mb-8">
          Reliable hospital connectivity, patient data protection,
          cloud systems and secure digital infrastructure.
        </p>

        <span className="text-[#0D6EFD] font-semibold">
          Connected • Secure • Efficient
        </span>

      </div>

      {/* Education */}

      <div className="bg-white rounded-3xl p-10 shadow-md hover:shadow-xl transition-all duration-300">

        <h3 className="text-3xl font-bold text-[#081B33] mb-5">
          Education
        </h3>

        <p className="text-gray-600 leading-8 mb-8">
          Campus networking, hybrid learning environments,
          Wi-Fi infrastructure and digital classrooms.
        </p>

        <span className="text-[#0D6EFD] font-semibold">
          Smart • Scalable • Future Ready
        </span>

      </div>

      {/* Government */}

      <div className="bg-white rounded-3xl p-10 shadow-md hover:shadow-xl transition-all duration-300">

        <h3 className="text-3xl font-bold text-[#081B33] mb-5">
          Government
        </h3>

        <p className="text-gray-600 leading-8 mb-8">
          Mission-critical infrastructure designed for secure,
          resilient and highly available public services.
        </p>

        <span className="text-[#0D6EFD] font-semibold">
          Reliable • Protected • Resilient
        </span>

      </div>

      {/* Manufacturing */}

      <div className="bg-white rounded-3xl p-10 shadow-md hover:shadow-xl transition-all duration-300">

        <h3 className="text-3xl font-bold text-[#081B33] mb-5">
          Manufacturing
        </h3>

        <p className="text-gray-600 leading-8 mb-8">
          Smart factories, industrial networking,
          automation and secure operational technology.
        </p>

        <span className="text-[#0D6EFD] font-semibold">
          Intelligent • Connected • Automated
        </span>

      </div>

      {/* Enterprise */}

      <div className="bg-[#081B33] rounded-3xl p-10 text-white flex flex-col justify-center">

        <p className="uppercase tracking-[4px] text-[#0D6EFD] font-semibold mb-4">
          Your Industry
        </p>

        <h3 className="text-4xl font-black leading-tight mb-6">
          Don't See
          <br />
          Your Industry?
        </h3>

        <p className="text-gray-300 leading-8 mb-8">
          Our experts design customized enterprise solutions
          tailored specifically to your organization's goals.
        </p>

        <Link
          href="/networks/contact"
          className="inline-block bg-[#0D6EFD] px-8 py-4 rounded-full font-semibold text-center hover:bg-blue-700 transition"
        >
          Talk To Our Experts
        </Link>

      </div>

    </div>

  </div>

</section>
{/* Technology Ecosystem */}

<section className="py-28 bg-white">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-3">
        Technology Ecosystem
      </p>

      <h2 className="text-5xl font-black text-[#081B33]">
        Powered By Industry Leaders
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        We partner with the world's leading technology vendors to
        deliver enterprise-grade networking, cloud and cybersecurity
        solutions.
      </p>

    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

      <div className="bg-[#F8FAFC] rounded-3xl p-10 flex items-center justify-center hover:shadow-xl hover:-translate-y-2 transition">
        <Image src="/images/cisco.png" alt="Cisco" width={140} height={60} />
      </div>

      <div className="bg-[#F8FAFC] rounded-3xl p-10 flex items-center justify-center hover:shadow-xl hover:-translate-y-2 transition">
        <Image src="/images/huawei.png" alt="Huawei" width={140} height={60} />
      </div>

      <div className="bg-[#F8FAFC] rounded-3xl p-10 flex items-center justify-center hover:shadow-xl hover:-translate-y-2 transition">
        <Image src="/images/dell.png" alt="Dell" width={140} height={60} />
      </div>

      <div className="bg-[#F8FAFC] rounded-3xl p-10 flex items-center justify-center hover:shadow-xl hover:-translate-y-2 transition">
        <Image src="/images/microsoft.png" alt="Microsoft" width={140} height={60} />
      </div>

      <div className="bg-[#F8FAFC] rounded-3xl p-10 flex items-center justify-center hover:shadow-xl hover:-translate-y-2 transition">
        <Image src="/images/aws.png" alt="AWS" width={130} height={60} />
      </div>

      <div className="bg-[#F8FAFC] rounded-3xl p-10 flex items-center justify-center hover:shadow-xl hover:-translate-y-2 transition">
        <Image src="/images/vmware.jpg" alt="VMware" width={140} height={60} />
      </div>

      <div className="bg-[#F8FAFC] rounded-3xl p-10 flex items-center justify-center hover:shadow-xl hover:-translate-y-2 transition">
        <Image src="/images/paloalto.png" alt="Palo Alto" width={150} height={60} />
      </div>

      <div className="bg-[#081B33] rounded-3xl p-10 flex flex-col justify-center text-center">

        <h3 className="text-white text-3xl font-black mb-3">
          + Many More
        </h3>

        <p className="text-gray-300 leading-7">
          Working with the world's
          most trusted technology partners.
        </p>

      </div>

    </div>

  </div>

</section>

{/* Why Organizations Choose COTSLE */}

<section className="py-28 bg-white">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* Left */}

      <div>

        <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-4">
          Why COTSLE
        </p>

        <h2 className="text-5xl font-black text-[#081B33] leading-tight mb-8">
          Why Organizations
          <br />
          Choose Our Solutions
        </h2>

        <p className="text-lg text-gray-600 leading-8 mb-12">

          We don't just deploy technology—we design secure,
          scalable and future-ready solutions that align with
          your business objectives and continue delivering value
          long after implementation.

        </p>

        <div className="space-y-7">

          <div className="flex items-start gap-4">

            <div className="w-8 h-8 rounded-full bg-[#0D6EFD]/10 flex items-center justify-center text-[#0D6EFD] font-bold flex-shrink-0">
              ✓
            </div>

            <p className="text-lg text-gray-700 leading-8">
              Enterprise-grade architecture designed for performance,
              security and long-term scalability.
            </p>

          </div>

          <div className="flex items-start gap-4">

            <div className="w-8 h-8 rounded-full bg-[#0D6EFD]/10 flex items-center justify-center text-[#0D6EFD] font-bold flex-shrink-0">
              ✓
            </div>

            <p className="text-lg text-gray-700 leading-8">
              Certified engineers with expertise across networking,
              cloud infrastructure and cybersecurity technologies.
            </p>

          </div>

          <div className="flex items-start gap-4">

            <div className="w-8 h-8 rounded-full bg-[#0D6EFD]/10 flex items-center justify-center text-[#0D6EFD] font-bold flex-shrink-0">
              ✓
            </div>

            <p className="text-lg text-gray-700 leading-8">
              End-to-end project delivery from consultation and design
              to implementation, optimization and ongoing support.
            </p>

          </div>

          <div className="flex items-start gap-4">

            <div className="w-8 h-8 rounded-full bg-[#0D6EFD]/10 flex items-center justify-center text-[#0D6EFD] font-bold flex-shrink-0">
              ✓
            </div>

            <p className="text-lg text-gray-700 leading-8">
              Strategic partnerships with leading technology vendors
              including Cisco, Microsoft, Dell, AWS and Huawei.
            </p>

          </div>

          <div className="flex items-start gap-4">

            <div className="w-8 h-8 rounded-full bg-[#0D6EFD]/10 flex items-center justify-center text-[#0D6EFD] font-bold flex-shrink-0">
              ✓
            </div>

            <p className="text-lg text-gray-700 leading-8">
              Tailored enterprise solutions aligned with your business
              objectives, operational requirements and future growth.
            </p>

          </div>

        </div>

      </div>

      {/* Right */}

      <div className="flex justify-center">

        <Image
          src="/images/why-solutions.png"
          alt="Enterprise Solutions"
          width={600}
          height={600}
          className="w-full max-w-lg"
        />

      </div>

    </div>

  </div>

</section>
{/* Our Commitment */}

<section className="py-28 bg-[#F8FAFC]">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-3">
        Our Commitment
      </p>

      <h2 className="text-5xl font-black text-[#081B33]">
        Delivering Technology That
        <br />
        Drives Business Growth
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        We build more than enterprise solutions—we build long-term
        technology partnerships that help organizations innovate,
        scale and succeed.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Card 1 */}

      <div className="bg-white rounded-3xl p-10 border border-gray-200 hover:border-[#0D6EFD] hover:shadow-xl transition-all duration-300">

        <div className="w-16 h-16 rounded-2xl bg-[#0D6EFD]/10 flex items-center justify-center mb-8">

          <FaBullseye className="text-3xl text-[#0D6EFD]" />

        </div>

        <h3 className="text-2xl font-bold text-[#081B33] mb-5">
          Business-Focused Strategy
        </h3>

        <p className="text-gray-600 leading-8">
          Every recommendation is aligned with your business objectives,
          ensuring technology investments create measurable value.
        </p>

      </div>

      {/* Card 2 */}

      <div className="bg-white rounded-3xl p-10 border border-gray-200 hover:border-[#0D6EFD] hover:shadow-xl transition-all duration-300">

        <div className="w-16 h-16 rounded-2xl bg-[#0D6EFD]/10 flex items-center justify-center mb-8">

          <FaChartLine className="text-3xl text-[#0D6EFD]" />

        </div>

        <h3 className="text-2xl font-bold text-[#081B33] mb-5">
          Built for Growth
        </h3>

        <p className="text-gray-600 leading-8">
          Scalable enterprise solutions designed to evolve with your
          organization as technology and business needs change.
        </p>

      </div>

      {/* Card 3 */}

      <div className="bg-white rounded-3xl p-10 border border-gray-200 hover:border-[#0D6EFD] hover:shadow-xl transition-all duration-300">

        <div className="w-16 h-16 rounded-2xl bg-[#0D6EFD]/10 flex items-center justify-center mb-8">

          <FaHandshake className="text-3xl text-[#0D6EFD]" />

        </div>

        <h3 className="text-2xl font-bold text-[#081B33] mb-5">
          Long-Term Partnership
        </h3>

        <p className="text-gray-600 leading-8">
          From deployment to optimization, our experts remain by your
          side to ensure continuous performance and support.
        </p>

      </div>

    </div>

  </div>

</section>
 
{/* CTA */}

<section className="py-28 bg-white border-t border-gray-200">

  <div className="max-w-4xl mx-auto px-6 text-center">

    <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-4">
      Ready To Get Started?
    </p>

    <h2 className="text-5xl lg:text-6xl font-black text-[#081B33] leading-tight mb-8">

      Let's Build Your
      <br />
      Next Enterprise Solution

    </h2>

    <p className="text-xl text-gray-600 leading-9 max-w-3xl mx-auto mb-12">

      Whether you're planning a secure network, modern cloud
      infrastructure or a complete digital transformation,
      our specialists are ready to help turn your vision into reality.

    </p>

    <div className="flex flex-wrap justify-center gap-5">

      <Link
        href="/networks/contact"
        className="bg-[#0D6EFD] text-white px-9 py-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
      >
        Schedule a Consultation
      </Link>

      <Link
        href="/networks/services"
        className="border-2 border-[#081B33] text-[#081B33] px-9 py-4 rounded-full font-semibold hover:bg-[#081B33] hover:text-white transition duration-300"
      >
        Explore Our Services
      </Link>

    </div>

  </div>

</section>

    </>
  );
}