import Image from "next/image";
import Link from "next/link";

export default function MSSPPage() {
  return (
    <>
    <section className="relative overflow-hidden bg-[#081B33] text-white py-32">

  {/* Background */}

  <div className="absolute inset-0">

    <Image
      src="/images/mssp-bg.jpg"
      fill
      alt=""
      className="object-cover opacity-15"
    />

  </div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* Left */}

      <div>

        <p className="uppercase tracking-[6px] text-[#0D6EFD] font-semibold mb-5">
          Managed Security Services
        </p>

        <h1 className="text-6xl lg:text-7xl font-black leading-tight">

          Protect.
          <br />

          Detect.
          <br />

          Respond.

        </h1>

        <p className="mt-10 text-xl text-gray-300 leading-9 max-w-xl">

          24/7 managed cybersecurity services that
          proactively monitor, detect and respond
          to evolving cyber threats before they
          impact your business.

        </p>

        <div className="mt-12 flex gap-5">

          <Link
            href="/networks/contact"
            className="bg-[#0D6EFD] px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Request Consultation
          </Link>

          <Link
            href="/networks/services"
            className="border border-white/30 px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
          >
            Explore Services
          </Link>

        </div>

      </div>

      {/* Right */}

      <div className="relative flex justify-center">

        <div className="absolute w-[520px] h-[520px] bg-[#0D6EFD]/20 rounded-full blur-[140px]" />

        <Image
          src="/images/mssp-hero.png"
          width={650}
          height={650}
          alt="Cyber Security"
          className="relative z-10"
        />

      </div>

    </div>

  </div>

</section>
{/* What is MSSP? */}

<section className="py-28 bg-white">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* Left */}

      <div className="flex justify-center">

        <Image
          src="/images/what-is-mssp.png"
          alt="Managed Security Services"
          width={600}
          height={600}
          className="w-full max-w-lg"
        />

      </div>

      {/* Right */}

      <div>

        <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-4">
          Managed Security Services
        </p>

        <h2 className="text-5xl font-black text-[#081B33] leading-tight mb-8">
          Your Dedicated
          <br />
          Cybersecurity Partner
        </h2>

        <p className="text-lg text-gray-600 leading-8 mb-12">

          A Managed Security Services Provider (MSSP) continuously
          monitors, protects and responds to cyber threats on your
          behalf, giving your business enterprise-grade security
          without the cost of maintaining a full in-house security team.

        </p>

        <div className="space-y-6">

          {[
            "24/7 continuous security monitoring.",
            "Real-time threat detection and incident response.",
            "Advanced firewall and endpoint protection.",
            "Security event monitoring and log analysis.",
            "Proactive vulnerability management.",
            "Expert security analysts available whenever you need them."
          ].map((item, index) => (

            <div
              key={index}
              className="flex items-start gap-4"
            >

              <div className="w-8 h-8 rounded-full bg-[#0D6EFD]/10 flex items-center justify-center text-[#0D6EFD] font-bold flex-shrink-0">
                ✓
              </div>

              <p className="text-lg text-gray-700 leading-8">
                {item}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>

</section>
{/* 24/7 Security Operations Center */}

<section className="py-28 bg-[#081B33] text-white">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-20">

      <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-3">
        24/7 Security Operations Center
      </p>

      <h2 className="text-5xl font-black">
        Around-the-Clock Protection
      </h2>

      <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
        Our Security Operations Center continuously monitors your
        infrastructure, detects threats in real time, and responds
        before incidents become business disruptions.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-10">

      {/* Left Panel */}

      <div className="bg-white/5 border border-white/10 rounded-3xl p-10">

        <h3 className="text-3xl font-bold mb-8">
          SOC Capabilities
        </h3>

        <div className="space-y-6">

          {[
            "24/7 Security Monitoring",
            "Real-Time Threat Detection",
            "Security Event Correlation",
            "Incident Investigation",
            "Threat Intelligence",
            "Rapid Incident Response"
          ].map((item, index) => (

            <div
              key={index}
              className="flex items-center gap-4"
            >

              <div className="w-8 h-8 rounded-full bg-[#0D6EFD] flex items-center justify-center font-bold">
                ✓
              </div>

              <span className="text-lg">
                {item}
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* Right Panel */}

      <div className="bg-white rounded-3xl p-10">

        <div className="flex justify-between items-center mb-10">

          <h3 className="text-3xl font-bold text-[#081B33]">
            Live Security Status
          </h3>

          <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">
            Operational
          </span>

        </div>

        <div className="space-y-6">

          <div className="flex justify-between border-b border-gray-200 pb-4">

            <span className="text-gray-600">
              Threats Blocked Today
            </span>

            <span className="font-bold text-[#081B33]">
              1,284
            </span>

          </div>

          <div className="flex justify-between border-b border-gray-200 pb-4">

            <span className="text-gray-600">
              Security Events Monitored
            </span>

            <span className="font-bold text-[#081B33]">
              98,000+
            </span>

          </div>

          <div className="flex justify-between border-b border-gray-200 pb-4">

            <span className="text-gray-600">
              Active Analysts
            </span>

            <span className="font-bold text-[#081B33]">
              24/7 Coverage
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-gray-600">
              Average Response Time
            </span>

            <span className="font-bold text-[#0D6EFD]">
              &lt; 15 Minutes
            </span>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* Managed Security Services */}

<section className="py-28 bg-white">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-20">

      <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-3">
        Our Security Services
      </p>

      <h2 className="text-5xl font-black text-[#081B33]">
        Comprehensive Protection
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        From continuous monitoring to incident response, our MSSP
        solutions protect every layer of your digital infrastructure.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Card */}

      {[
        {
          title: "Managed Detection & Response",
          desc: "Continuous monitoring and rapid response to cyber threats before they impact your business."
        },
        {
          title: "SIEM Monitoring",
          desc: "Collect, correlate and analyze security events across your entire IT environment."
        },
        {
          title: "Endpoint Protection",
          desc: "Protect desktops, laptops and servers from malware, ransomware and advanced attacks."
        },
        {
          title: "Firewall Management",
          desc: "Configure, optimize and continuously monitor enterprise firewalls for maximum security."
        },
        {
          title: "Vulnerability Management",
          desc: "Identify, prioritize and remediate security weaknesses before attackers exploit them."
        },
        {
          title: "Cloud Security",
          desc: "Protect cloud workloads, identities and applications across hybrid environments."
        }
      ].map((service, index) => (

        <div
          key={index}
          className="bg-[#F8FAFC] rounded-3xl border border-gray-200 p-10 hover:border-[#0D6EFD] hover:shadow-xl transition duration-300"
        >

          <div className="w-14 h-14 rounded-2xl bg-[#0D6EFD]/10 flex items-center justify-center text-[#0D6EFD] font-bold text-2xl mb-8">

            {String(index + 1).padStart(2, "0")}

          </div>

          <h3 className="text-2xl font-bold text-[#081B33] mb-5">
            {service.title}
          </h3>

          <p className="text-gray-600 leading-8">
            {service.desc}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>
{/* Incident Response Process */}

<section className="py-28 bg-[#F8FAFC]">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-20">

      <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-3">
        Incident Response
      </p>

      <h2 className="text-5xl font-black text-[#081B33]">
        How We Respond To Threats
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        Every second matters during a cyberattack. Our structured
        incident response process minimizes risk, contains threats,
        and restores operations quickly.
      </p>

    </div>

    <div className="grid md:grid-cols-5 gap-8">

      {[
        {
          number: "01",
          title: "Threat Detected",
          desc: "Suspicious activity is identified through continuous monitoring."
        },
        {
          number: "02",
          title: "AI Analysis",
          desc: "Advanced analytics evaluate the threat and determine its severity."
        },
        {
          number: "03",
          title: "Investigation",
          desc: "Security analysts verify the incident and identify affected systems."
        },
        {
          number: "04",
          title: "Containment",
          desc: "Immediate actions isolate the threat and prevent further spread."
        },
        {
          number: "05",
          title: "Recovery",
          desc: "Systems are restored safely with a complete security report."
        }
      ].map((step, index) => (

        <div
          key={index}
          className="relative text-center"
        >

          {/* Connector */}

          {index !== 4 && (

            <div className="hidden md:block absolute top-10 left-[60%] w-full h-[2px] bg-[#0D6EFD]/30"></div>

          )}

          <div className="relative z-10 w-20 h-20 rounded-full bg-[#0D6EFD] text-white flex items-center justify-center text-2xl font-black mx-auto mb-6">

            {step.number}

          </div>

          <h3 className="text-2xl font-bold text-[#081B33] mb-4">
            {step.title}
          </h3>

          <p className="text-gray-600 leading-7">
            {step.desc}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>
{/* Why Choose COTSLE MSSP */}

<section className="py-28 bg-white">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-20">

      <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-3">
        Why Choose COTSLE
      </p>

      <h2 className="text-5xl font-black text-[#081B33]">
        The Difference We Make
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        Compare the challenges of managing cybersecurity internally
        versus partnering with COTSLE's Managed Security Services.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-10">

      {/* Without MSSP */}

      <div className="rounded-3xl border border-red-100 bg-red-50 p-10">

        <h3 className="text-3xl font-bold text-red-600 mb-10">
          Without MSSP
        </h3>

        <div className="space-y-6">

          {[
            "Limited visibility into cyber threats",
            "Slow incident detection and response",
            "High operational and staffing costs",
            "Reactive security approach",
            "Greater risk of business downtime",
            "Difficulty keeping up with evolving threats"
          ].map((item, index) => (

            <div
              key={index}
              className="flex items-start gap-4"
            >

              <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                ✕
              </div>

              <p className="text-gray-700 leading-8">
                {item}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* With COTSLE */}

      <div className="rounded-3xl border border-[#0D6EFD]/20 bg-blue-50 p-10">

        <h3 className="text-3xl font-bold text-[#0D6EFD] mb-10">
          With COTSLE MSSP
        </h3>

        <div className="space-y-6">

          {[
            "24/7 continuous security monitoring",
            "Rapid threat detection and response",
            "Dedicated security experts",
            "Proactive threat hunting",
            "Reduced business risk and downtime",
            "Enterprise-grade security technologies"
          ].map((item, index) => (

            <div
              key={index}
              className="flex items-start gap-4"
            >

              <div className="w-8 h-8 rounded-full bg-[#0D6EFD] text-white flex items-center justify-center font-bold flex-shrink-0">
                ✓
              </div>

              <p className="text-gray-700 leading-8">
                {item}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>

</section>
{/* CTA */}

<section className="py-28 bg-[#F8FAFC]">

  <div className="max-w-5xl mx-auto px-6 text-center">

    <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-4">
      Secure Your Business
    </p>

    <h2 className="text-5xl lg:text-6xl font-black text-[#081B33] leading-tight mb-8">

      Stay One Step Ahead
      <br />

      Of Cyber Threats

    </h2>

    <p className="text-xl text-gray-600 leading-9 max-w-3xl mx-auto mb-14">

      Protect your business with proactive monitoring,
      advanced threat detection, rapid incident response,
      and enterprise-grade managed security services from
      COTSLE Networks.

    </p>

    <div className="flex flex-wrap justify-center gap-5">

      <Link
        href="/networks/contact"
        className="bg-[#0D6EFD] hover:bg-blue-700 text-white px-10 py-4 rounded-full font-semibold transition duration-300"
      >
        Request Security Assessment
      </Link>

      <Link
        href="/networks/contact"
        className="border-2 border-[#081B33] text-[#081B33] hover:bg-[#081B33] hover:text-white px-10 py-4 rounded-full font-semibold transition duration-300"
      >
        Talk To Our Experts
      </Link>

    </div>

  </div>

</section>
    </>
  );
}