import {
  FaGraduationCap,
  FaRoute,
  FaRobot,
} from "react-icons/fa";

import Link from "next/link";


export default function AiAdvisor() {

  const features = [
    {
      icon: <FaGraduationCap />,
      title: "Course Recommendation",
      description:
        "Get personalized course suggestions based on your interests, current skills, and career goals.",
      link: "/systems/ai-advisor/course-recommendation",
    },
    {
      icon: <FaRoute />,
      title: "Learning Roadmap",
      description:
        "Generate a structured learning path with technologies, skills, and projects to achieve your goals.",
      link: "/systems/ai-advisor/learning-roadmap",
    },
    {
      icon: <FaRobot />,
      title: "AI Chat Assistant",
      description:
        "Ask questions about courses, technologies, and learning opportunities.",
      link: "/systems/ai-advisor/chat",
    },
  ];


  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">


        <div className="text-center mb-16">

          <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
            AI Powered
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            AI Learning Advisor
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Explore intelligent tools designed to guide your learning journey
            and help you achieve your technology goals.
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


          {features.map((feature,index)=>(

            <Link
              key={index}
              href={feature.link}
              className="
              group
              bg-white
              p-8
              rounded-2xl
              border
              shadow-md
              hover:border-[#0D6EFD]
              hover:shadow-2xl
              hover:-translate-y-3
              transition-all
              duration-500
              "
            >


              <div
                className="
                text-5xl
                text-[#0D6EFD]
                mb-6
                group-hover:scale-110
                transition-transform
                duration-500
                "
              >
                {feature.icon}
              </div>


              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>


              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>


              <div className="mt-6 font-semibold text-[#0D6EFD]">
                Explore →
              </div>


            </Link>

          ))}


        </div>


      </div>

    </section>
  );
}