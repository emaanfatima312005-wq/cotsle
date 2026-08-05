import Link from "next/link";
import {
  FaShieldAlt,
  FaCloud,
  FaNetworkWired,
  FaServer,
  FaLock,
  FaDatabase,
} from "react-icons/fa";

export default function Solutions() {
  const solutions = [
    {
      icon: <FaShieldAlt />,
      title: "Cyber Security",
      description:
        "Protect your organization with advanced threat detection, firewalls, endpoint security and security monitoring.",
      link: "/networks/solutions/cyber-security",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      description:
        "Design, migrate and manage secure cloud environments using Microsoft Azure, AWS and hybrid infrastructures.",
      link: "/networks/solutions/cloud",
    },
    {
      icon: <FaNetworkWired />,
      title: "Enterprise Networking",
      description:
        "High-performance LAN, WAN, SD-WAN and wireless networking solutions built for modern businesses.",
      link: "/networks/solutions/networking",
    },
    {
      icon: <FaServer />,
      title: "Data Center",
      description:
        "Modern server infrastructure, virtualization, storage and disaster recovery for mission-critical systems.",
      link: "/networks/solutions/datacenter",
    },
    {
      icon: <FaLock />,
      title: "Managed Security",
      description:
        "24/7 monitoring, vulnerability management and incident response through our managed security services.",
      link: "/networks/mssp",
    },
    {
      icon: <FaDatabase />,
      title: "Backup & Recovery",
      description:
        "Business continuity solutions with automated backup, replication and rapid disaster recovery.",
      link: "/networks/solutions/backup",
    },
  ];

  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[6px] text-[#0D6EFD] font-semibold mb-3">
            Enterprise Solutions
          </p>

          <h2 className="text-5xl lg:text-6xl font-black text-gray-900">
            Technology That
            <span className="text-[#0D6EFD]"> Drives Business</span>
          </h2>

          <p className="mt-7 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            We help organizations modernize their IT infrastructure through
            secure networking, cloud technologies, cybersecurity and managed
            enterprise solutions.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {solutions.map((solution) => (

            <Link
              key={solution.title}
              href={solution.link}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-9 transition-all duration-500 hover:-translate-y-3 hover:border-[#0D6EFD] hover:shadow-2xl"
            >

              {/* Background Glow */}

              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#0D6EFD]/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative">

                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0D6EFD]/10 text-3xl text-[#0D6EFD] transition duration-300 group-hover:scale-110 group-hover:bg-[#0D6EFD] group-hover:text-white">

                  {solution.icon}

                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {solution.title}
                </h3>

                <p className="mt-5 leading-7 text-gray-600">
                  {solution.description}
                </p>

                <div className="mt-8 flex items-center font-semibold text-[#0D6EFD] transition-all duration-300 group-hover:gap-4 gap-2">

                  Learn More →

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}