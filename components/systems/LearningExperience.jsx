import Image from "next/image";
import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaBriefcase,
  FaBookOpen,
  FaUserGraduate,
  FaClock,
} from "react-icons/fa";

export default function LearningExperience() {
  const features = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Industry Expert Trainers",
      description:
        "Learn directly from experienced professionals with real-world expertise.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Hands-on Projects",
      description:
        "Build practical, portfolio-ready projects throughout every course.",
    },
    {
      icon: <FaBookOpen />,
      title: "Modern Curriculum",
      description:
        "Stay updated with the latest technologies and industry practices.",
    },
    {
      icon: <FaBriefcase />,
      title: "Career Guidance",
      description:
        "Receive interview preparation, resume reviews, and career mentoring.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Placement Assistance",
      description:
        "Connect with internships and employment opportunities after training.",
    },
    {
      icon: <FaClock />,
      title: "Flexible Learning",
      description:
        "Study on-campus or online with schedules designed for your convenience.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Illustration */}

          <div className="relative flex justify-center">

            <div className="absolute w-[420px] h-[420px] rounded-full bg-[#0D6EFD]/10 blur-[100px]" />

            <Image
              src="/images/learning-experience.png"
              alt="Learning Experience"
              width={600}
              height={600}
              className="relative z-10 w-full max-w-xl"
            />

          </div>

          {/* Right Content */}

          <div>

            <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-3">
              Why Choose COTSLE
            </p>

            <h2 className="text-5xl font-black text-gray-900 leading-tight mb-6">
              The
              <span className="text-[#0D6EFD]">
                {" "}COTSLE Learning Experience
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-8 mb-10">
              We combine expert instruction, practical learning, and career-focused
              training to prepare students for successful careers in today's
              technology industry.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">

              {features.map((item, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-gray-200 p-5 hover:border-[#0D6EFD] hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-3xl text-[#0D6EFD] mb-4 group-hover:scale-110 transition">
                    {item.icon}
                  </div>

                  <h3 className="font-bold text-lg text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-600 text-sm leading-6">
                    {item.description}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}