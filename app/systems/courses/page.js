import Image from "next/image";
import Link from "next/link";

export default function CoursesPage() {
  const courses = [
    {
      title: "Cyber Security",
      image: "/images/cyber.jpeg",
      duration:"Course Duration:   4 Months",
      level: "Professional",
      description:
        "Develop skills in cybersecurity, security fundamentals, threat protection and cyber defense.",
      link: "/systems/courses/cyber-security",
    },
    {
      title: "App Development",
      image: "/images/app_development.jpg",
      duration:"Course Duration:   3 Months",
      level: "Professional",
      description:
        "Learn the fundamentals of application development and build modern applications.",
      link: "/systems/courses/app-development",
    },
    {
      title: "Web Development",
      image: "/images/web.jpeg",
      duration:"Course Duration:   4 Months",
      level: "Professional",
      description:
        "Learn modern web development and build responsive, functional websites and web applications.",
      link: "/systems/courses/web-development",
    },
    {
      title: "Artificial Intelligence",
      image: "/images/ai.jpeg",
      duration: "Course Duration:   4 Months",
      level: "Advanced",
      description:
        "Explore artificial intelligence concepts, intelligent systems and modern AI technologies.",
      link: "/systems/courses/ai",
    },
    {
      title: "Cloud Computing",
      image: "/images/cloud.jpeg",
      duration:"Course Duration:  4 Months",
      level: "Professional",
      description:
        "Learn cloud computing concepts and work with leading cloud platforms including AWS and Azure.",
      link: "/systems/courses/cloud-computing",
    },
    {
      title: "DevOps",
      image: "/images/devops.jpg",
      duration: "Course Duration: 3 Months ",
      level: "Professional",
      description:
        "Learn modern DevOps practices, development workflows, deployment and infrastructure technologies.",
      link: "/systems/courses/devops",
    },
    {
      title: "Project Management (PMP)",
      image: "/images/pmp.jpg",
      duration: "Course Duration:   4 Months",
      level: "Professional",
      description:
        "Develop professional project management skills and learn key concepts related to PMP.",
      link: "/systems/courses/pmp",
    },
    {
      title: "Digital Marketing",
      image: "/images/digital_marketing.jpg",
      duration: "Course Duration:   3 Months",
      level: "Professional",
      description:
        "Learn digital marketing strategies, online promotion, audience engagement and digital platforms.",
      link: "/systems/courses/digital-marketing",
    },
    {
      title: "Graphic Designing",
      image: "/images/graphic_Designing.jpg",
      duration: "Course Duration:   3 Months",
      level: "Professional",
      description:
        "Develop creative graphic design skills for digital content, branding and visual communication.",
      link: "/systems/courses/graphic-designing",
    },
    {
      title: "UI/UX",
      image: "/images/uiux.jpg",
      duration: "Course Duration:  3 Months",
      level: "Professional",
      description:
        "Learn user interface and user experience principles for creating modern digital products.",
      link: "/systems/courses/uiux",
    },
    {
      title: "Video Editing",
      image: "/images/video_editing.jpg",
      duration: "Course Duration:  4 Months",
      level: "Professional",
      description:
        "Learn video editing techniques and develop skills for creating professional digital video content.",
      link: "/systems/courses/video-editing",
    },
    {
      title: "Data Analytics / Data Science",
      image: "/images/data_analytics.jpg",
      duration: "Course Duration:   4 Months",
      level: "Professional",
      description:
        "Learn data analysis and data science concepts to work with data and generate meaningful insights.",
      link: "/systems/courses/data-analytics",
    },
  ];

  return (
    <>

      {/* Hero */}

      <section className="bg-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
                Learn Today's
                <span className="text-[#0D6EFD]">
                  {" "}Most In-Demand{" "}
                </span>
                Skills
              </h1>

              <p className="text-gray-600 text-lg leading-8 mb-10">
                Build your future with practical, industry-focused
                training designed by professionals.
              </p>

              <div className="flex flex-wrap gap-5">

                <Link
                  href="#courses"
                  className="bg-[#0D6EFD] hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Browse Courses
                </Link>

                <Link
                  href="/systems/contact"
                  className="border-2 border-[#0D6EFD] text-[#0D6EFD] hover:bg-[#0D6EFD] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Contact Us
                </Link>

              </div>

            </div>

            <div className="relative flex justify-center">

              <div className="absolute w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-70"></div>

              <Image
                src="/images/courses.png"
                alt="Courses"
                width={650}
                height={650}
                className="relative z-10 w-full max-w-xl"
                priority
              />

            </div>

          </div>
        </div>
      </section>

      {/* Courses */}

      <section
        id="courses"
        className="py-24 bg-gray-50"
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">

            <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
              Popular Courses
            </p>

            <h2 className="text-5xl font-bold text-gray-900">
              Explore Our Courses
            </h2>

            <p className="text-gray-600 text-lg mt-5">
              Industry-focused courses designed to prepare
              you for the future.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {courses.map((course, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 overflow-hidden"
              >

                <Image
                  src={course.image}
                  alt={course.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                />

                <div className="p-7">

                  <h3 className="text-2xl font-bold">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 mt-4 leading-7">
                    {course.description}
                  </p>

                  {/* Course Duration and Level */}

                  <div className="mt-8">

                    <span className="block font-semibold">
                      ⏱ {course.duration}
                    </span>

                    <span className="block text-[#0D6EFD] font-semibold mt-2">
                      {course.level}
                    </span>

                  </div>

                  <Link href={course.link}>
                    <button className="mt-8 w-full bg-[#0D6EFD] hover:bg-blue-700 text-white py-3 rounded-lg transition-all duration-300">
                      Learn More
                    </button>
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Why Learn With Cotsle */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">

            <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
              Why Choose Us
            </p>

            <h2 className="text-5xl font-bold text-gray-900">
              Why Learn With
              <span className="text-[#0D6EFD]"> Cotsle</span>
            </h2>

            <p className="text-gray-600 text-lg mt-5 max-w-3xl mx-auto">
              We combine experienced instructors, practical learning,
              and career-focused training to help you succeed.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-5">🎓</div>
              <h3 className="text-2xl font-bold mb-3">Expert Trainers</h3>
              <p className="text-gray-600">
                Learn from experienced professionals with real industry knowledge.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-5">💼</div>
              <h3 className="text-2xl font-bold mb-3">Hands-on Projects</h3>
              <p className="text-gray-600">
                Build practical projects to strengthen your portfolio and confidence.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-5">📜</div>
              <h3 className="text-2xl font-bold mb-3">Certification</h3>
              <p className="text-gray-600">
                Receive a certificate after successfully completing your course.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-5">🤝</div>
              <h3 className="text-2xl font-bold mb-3">Career Support</h3>
              <p className="text-gray-600">
                Resume building, interview preparation, and career guidance.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-5">💻</div>
              <h3 className="text-2xl font-bold mb-3">Modern Labs</h3>
              <p className="text-gray-600">
                Learn using the latest software, tools, and technologies.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-5">🚀</div>
              <h3 className="text-2xl font-bold mb-3">Placement Assistance</h3>
              <p className="text-gray-600">
                Get guidance and support to connect with internship and job opportunities.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA Section */}

      <section
        data-aos="zoom-in"
        className="py-24 bg-gradient-to-r from-white via-blue-50 to-white"
      >

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
            Start Your Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Build Your Future?
          </h2>

          <p className="text-gray-600 text-lg leading-8 max-w-3xl mx-auto mb-10">
            Join Cotsle and gain the skills you need to succeed in today's technology
            industry. Learn from experienced instructors through practical,
            career-focused training programs.
          </p>

          <div className="flex flex-wrap justify-center gap-5">

            <Link
              href="/systems/contact"
              className="bg-[#0D6EFD] hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Enroll Now
            </Link>

            <Link
              href="/systems/courses"
              className="border-2 border-[#0D6EFD] text-[#0D6EFD] hover:bg-[#0D6EFD] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Explore More Courses
            </Link>

          </div>

        </div>

      </section>

    </>
  );
}