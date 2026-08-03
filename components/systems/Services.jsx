import {
  FaLaptopCode,
  FaRobot,
  FaCloud,
  FaShieldAlt,
  FaMobileAlt,
  FaGraduationCap,
} from "react-icons/fa";
import Link from "next/link";

export default function Services() {
  const services = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    description:
      "Modern websites and web applications built with the latest technologies.",
    link: "/systems/courses/web-development",
  },
  {
    icon: <FaRobot />,
    title: "AI Solutions",
    description:
      "Intelligent automation and AI-powered business solutions.",
    link: "/systems/courses/ai",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Computing",
    description:
      "Scalable cloud infrastructure and deployment services.",
    link: "/systems/courses/cloud-computing",
  },
  {
    icon: <FaShieldAlt />,
    title: "Cyber Security",
    description:
      "Protecting businesses with advanced security solutions.",
    link: "/systems/courses/cyber-security",
  },
  {
    icon: <FaMobileAlt />,
    title: "Python Programming",
    description:
      "Develop fully functional web apps using Python programming.",
    link: "/systems/courses/python",
  },
  {
    icon: <FaGraduationCap />,
    title: "Network Adminstration",
    description:
      "Professional training programs for modern technologies.",
    link: "/systems/courses/network-administration",
  },
];

  return (
    <section
  data-aos="fade-up"
  className="py-24 bg-gray-50"
>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
            Our Courses
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            What We Offer
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We provide innovative technology solutions that empower businesses
            to grow, improve efficiency, and stay ahead in the digital world.
          </p>

        </div>

        {/* Service Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <Link
  key={index}
  href={service.link}
  className="
    group
    block
    bg-white
    p-8
    rounded-2xl
    border
    shadow-md
    cursor-pointer
    hover:border-[#0D6EFD]
    hover:shadow-2xl
    hover:-translate-y-3
    transition-all
    duration-500
    ease-in-out
  "
>

              {/* Icon */}

              <div
                className="
                  text-5xl
                  text-[#0D6EFD]
                  mb-6
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              >
                {service.icon}
              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}

              <p className="text-gray-600 leading-7"> 
                {service.description}
              </p>

              {/* Learn More */}

              <div
                className="
                  mt-6
                  font-semibold
                  text-[#0D6EFD]
                  flex
                  items-center
                  gap-2
                  group-hover:gap-4
                  transition-all
                  duration-300
                "
              >
                Learn More →
              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}