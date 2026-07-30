import Image from "next/image";
import Link from "next/link";

export default function CoursesPage() {
  const courses = [
  {
    title: "Python Development",
    image: "/images/python.jpeg",
    duration: "3 Months",
    level: "Beginner",
    description:
      "Learn Python from beginner to advanced with practical projects.",
    link: "/systems/courses/python",
  },
  {
    title: "Web Development",
    image: "/images/web.jpeg",
    duration: "4 Months",
    level: "Intermediate",
    description:
      "Master HTML, CSS, JavaScript, React and modern web technologies.",
    link: "/systems/courses/web-development",
  },
  {
    title: "AI & Machine Learning",
    image: "/images/ai.jpeg",
    duration: "5 Months",
    level: "Advanced",
    description:
      "Explore Machine Learning, Deep Learning and modern AI tools.",
    link: "/systems/courses/ai",
  },
  {
    title: "Cyber Security",
    image: "/images/cyber.jpeg",
    duration: "4 Months",
    level: "Intermediate",
    description:
      "Learn ethical hacking, penetration testing, network security and cyber defense.",
    link: "/systems/courses/cyber-security",
  },
  {
    title: "Cloud Computing",
    image: "/images/cloud.jpeg",
    duration: "3 Months",
    level: "Intermediate",
    description:
      "Master AWS, Microsoft Azure, cloud infrastructure and cloud deployment.",
    link: "/systems/courses/cloud-computing",
  },
  {
    title: "Network Administration",
    image: "/images/network.jpeg",
    duration: "4 Months",
    level: "Beginner",
    description:
      "Learn Cisco networking, routing, switching and network management.",
    link: "/systems/courses/network-administration",
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

        <div className="flex justify-between mt-8">

          <span className="font-semibold">
            ⏱ {course.duration}
          </span>

          <span className="text-[#0D6EFD] font-semibold">
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
className="py-24 bg-gradient-to-r from-white via-blue-50 to-white">

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