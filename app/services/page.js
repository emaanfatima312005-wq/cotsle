import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  FaReact,
  FaPython,
  FaJava,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaBrain,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import {
  FaRocket,
  FaShieldAlt,
  FaLayerGroup,
  FaHeadset,
} from "react-icons/fa";

export default function ServicesPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}

      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-100 py-24 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}

            <div>


              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">

                Technology That
                <span className="text-[#0D6EFD]">
                  {" "}Transforms{" "}
                </span>
                Your Business

              </h1>

              <p className="text-lg text-gray-600 leading-8 mb-10">

                From software development to Artificial Intelligence,
                cloud computing, cybersecurity, and professional IT
                training, Cotsle helps businesses embrace the future.

              </p>

              <div className="flex flex-wrap gap-5">

                <Link
                  href="#services"
                  className="bg-[#0D6EFD] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Explore Services
                </Link>

                <Link
                  href="/contact"
                  className="border-2 border-[#0D6EFD] text-[#0D6EFD] px-8 py-4 rounded-lg font-semibold hover:bg-[#0D6EFD] hover:text-white transition"
                >
                  Get Consultation
                </Link>

              </div>

            </div>

            {/* Right */}

            <div className="relative flex justify-center">

              <div className="absolute w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-60"></div>

              <Image
                src="/images/services.png"
                alt="Services"
                width={650}
                height={650}
                priority
                className="relative z-10 w-full max-w-xl"
              />

            </div>

          </div>

        </div>

      </section>
      {/* Our Services */}

<section
  id="services"
  className="py-24 bg-gray-50"
>

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
        What We Offer
      </p>

      <h2 className="text-5xl font-bold text-gray-900">
        Our Technology Services
      </h2>

      <p className="text-gray-600 text-lg mt-5 max-w-3xl mx-auto">
        We provide modern technology solutions that help businesses
        innovate, grow, and stay ahead in today's digital world.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Card 1 */}

      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">

        <div className="text-5xl mb-6">💻</div>

        <h3 className="text-2xl font-bold mb-4">
          Software Development
        </h3>

        <p className="text-gray-600 leading-7">
          Custom web applications, enterprise software,
          and scalable business solutions.
        </p>

      </div>

      {/* Card 2 */}

      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">

        <div className="text-5xl mb-6">🤖</div>

        <h3 className="text-2xl font-bold mb-4">
          Artificial Intelligence
        </h3>

        <p className="text-gray-600 leading-7">
          AI automation, chatbots, predictive analytics,
          and machine learning solutions.
        </p>

      </div>

      {/* Card 3 */}

      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">

        <div className="text-5xl mb-6">☁</div>

        <h3 className="text-2xl font-bold mb-4">
          Cloud Computing
        </h3>

        <p className="text-gray-600 leading-7">
          Secure cloud infrastructure,
          deployment, migration and management.
        </p>

      </div>

      {/* Card 4 */}

      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">

        <div className="text-5xl mb-6">🔐</div>

        <h3 className="text-2xl font-bold mb-4">
          Cybersecurity
        </h3>

        <p className="text-gray-600 leading-7">
          Protect your business with security assessments,
          penetration testing and monitoring.
        </p>

      </div>

      {/* Card 5 */}

      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">

        <div className="text-5xl mb-6">📱</div>

        <h3 className="text-2xl font-bold mb-4">
          Mobile App Development
        </h3>

        <p className="text-gray-600 leading-7">
          Android and iOS applications
          designed for performance and scalability.
        </p>

      </div>

      {/* Card 6 */}

      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">

        <div className="text-5xl mb-6">🎓</div>

        <h3 className="text-2xl font-bold mb-4">
          Professional IT Training
        </h3>

        <p className="text-gray-600 leading-7">
          Industry-focused courses designed to build
          practical skills and successful careers.
        </p>

      </div>

    </div>

  </div>

</section>
{/* Our Process */}

<section
  data-aos="fade-up"
  className="py-24 bg-white"
>

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
        How We Work
      </p>

      <h2 className="text-5xl font-bold text-gray-900">
        Our Development Process
      </h2>

      <p className="text-gray-600 text-lg mt-5 max-w-3xl mx-auto">
        Every successful project follows a proven process that ensures
        quality, transparency, and customer satisfaction.
      </p>

    </div>

    <div className="grid md:grid-cols-5 gap-8 text-center">

      <div>
        <div className="w-20 h-20 mx-auto rounded-full bg-[#0D6EFD] text-white flex items-center justify-center text-3xl font-bold mb-6">
          1
        </div>
        <h3 className="text-xl font-bold mb-3">
          Consultation
        </h3>
        <p className="text-gray-600">
          Understanding your goals and business requirements.
        </p>
      </div>

      <div>
        <div className="w-20 h-20 mx-auto rounded-full bg-[#0D6EFD] text-white flex items-center justify-center text-3xl font-bold mb-6">
          2
        </div>
        <h3 className="text-xl font-bold mb-3">
          Planning
        </h3>
        <p className="text-gray-600">
          Creating the roadmap and selecting the best technologies.
        </p>
      </div>

      <div>
        <div className="w-20 h-20 mx-auto rounded-full bg-[#0D6EFD] text-white flex items-center justify-center text-3xl font-bold mb-6">
          3
        </div>
        <h3 className="text-xl font-bold mb-3">
          Development
        </h3>
        <p className="text-gray-600">
          Building secure, scalable and high-quality solutions.
        </p>
      </div>

      <div>
        <div className="w-20 h-20 mx-auto rounded-full bg-[#0D6EFD] text-white flex items-center justify-center text-3xl font-bold mb-6">
          4
        </div>
        <h3 className="text-xl font-bold mb-3">
          Testing
        </h3>
        <p className="text-gray-600">
          Ensuring reliability, performance and security.
        </p>
      </div>

      <div>
        <div className="w-20 h-20 mx-auto rounded-full bg-[#0D6EFD] text-white flex items-center justify-center text-3xl font-bold mb-6">
          5
        </div>
        <h3 className="text-xl font-bold mb-3">
          Launch & Support
        </h3>
        <p className="text-gray-600">
          Deployment, maintenance and continuous improvements.
        </p>
      </div>

    </div>

  </div>

</section>
{/* Technologies */}

<section
  data-aos="fade-up"
  className="py-24 bg-gray-50"
>

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
        Technologies
      </p>

      <h2 className="text-5xl font-bold text-gray-900">
        Technologies We Use
      </h2>

      <p className="text-gray-600 text-lg mt-5 max-w-3xl mx-auto">
        We leverage modern technologies to build secure, scalable,
        and high-performance digital solutions.
      </p>

    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

      {/* React */}

      <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <FaReact className="mx-auto text-6xl text-[#61DAFB] mb-5" />
        <h3 className="font-bold text-lg">React</h3>
      </div>

      {/* Next.js */}

      <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <SiNextdotjs className="mx-auto text-6xl text-black mb-5" />
        <h3 className="font-bold text-lg">Next.js</h3>
      </div>

      {/* Python */}

      <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <FaPython className="mx-auto text-6xl text-[#3776AB] mb-5" />
        <h3 className="font-bold text-lg">Python</h3>
      </div>

      {/* Java */}

      <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <FaJava className="mx-auto text-6xl text-[#E76F00] mb-5" />
        <h3 className="font-bold text-lg">Java</h3>
      </div>

      {/* Node */}

      <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <FaNodeJs className="mx-auto text-6xl text-[#68A063] mb-5" />
        <h3 className="font-bold text-lg">Node.js</h3>
      </div>

      {/* AWS */}

      <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <FaAws className="mx-auto text-6xl text-[#FF9900] mb-5" />
        <h3 className="font-bold text-lg">AWS</h3>
      </div>

      {/* Docker */}

      <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <FaDocker className="mx-auto text-6xl text-[#2496ED] mb-5" />
        <h3 className="font-bold text-lg">Docker</h3>
      </div>

      {/* MongoDB */}

      <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <SiMongodb className="mx-auto text-6xl text-[#47A248] mb-5" />
        <h3 className="font-bold text-lg">MongoDB</h3>
      </div>

      {/* MySQL */}

      <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <SiMysql className="mx-auto text-6xl text-[#4479A1] mb-5" />
        <h3 className="font-bold text-lg">MySQL</h3>
      </div>

      {/* Artificial Intelligence */}

      <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <FaBrain className="mx-auto text-6xl text-[#0D6EFD] mb-5" />
        <h3 className="font-bold text-lg">Artificial Intelligence</h3>
      </div>

    </div>

  </div>

</section>
{/* Why Choose Cotsle */}

<section
  data-aos="fade-up"
  className="py-24 bg-white"
>
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
        Why Choose Us
      </p>

      <h2 className="text-5xl font-bold text-gray-900">
        Why Businesses Trust Cotsle
      </h2>

      <p className="text-gray-600 text-lg mt-5 max-w-3xl mx-auto">
        We combine innovation, technical expertise and customer-focused
        solutions to deliver exceptional digital experiences.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Fast Delivery */}

      <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center hover:border-[#0D6EFD] hover:shadow-xl transition-all duration-300">

        <div className="w-20 h-20 mx-auto rounded-full bg-blue-50 flex items-center justify-center mb-6">
          <FaRocket className="text-4xl text-[#0D6EFD]" />
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Fast Delivery
        </h3>

        <p className="text-gray-600 leading-7">
          We deliver projects on time while maintaining exceptional quality.
        </p>

      </div>

      {/* Enterprise Security */}

      <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center hover:border-[#0D6EFD] hover:shadow-xl transition-all duration-300">

        <div className="w-20 h-20 mx-auto rounded-full bg-blue-50 flex items-center justify-center mb-6">
          <FaShieldAlt className="text-4xl text-[#0D6EFD]" />
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Enterprise Security
        </h3>

        <p className="text-gray-600 leading-7">
          Every solution is built with security, privacy and reliability in mind.
        </p>

      </div>

      {/* Scalable Solutions */}

      <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center hover:border-[#0D6EFD] hover:shadow-xl transition-all duration-300">

        <div className="w-20 h-20 mx-auto rounded-full bg-blue-50 flex items-center justify-center mb-6">
          <FaLayerGroup className="text-4xl text-[#0D6EFD]" />
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Scalable Solutions
        </h3>

        <p className="text-gray-600 leading-7">
          Our software is designed to grow alongside your business.
        </p>

      </div>

      {/* 24/7 Support */}

      <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center hover:border-[#0D6EFD] hover:shadow-xl transition-all duration-300">

        <div className="w-20 h-20 mx-auto rounded-full bg-blue-50 flex items-center justify-center mb-6">
          <FaHeadset className="text-4xl text-[#0D6EFD]" />
        </div>

        <h3 className="text-2xl font-bold mb-4">
          24/7 Support
        </h3>

        <p className="text-gray-600 leading-7">
          Our team is always available to provide assistance whenever you need it.
        </p>

      </div>

    </div>

  </div>

</section>
{/* CTA */}

<section
  data-aos="fade-up"
  className="py-24 bg-slate-50 overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="relative bg-white rounded-[32px] shadow-2xl border border-gray-200 overflow-hidden">

      {/* Blue Glow */}

      <div className="absolute -top-32 -right-20 w-80 h-80 bg-[#0D6EFD] opacity-10 blur-[140px] rounded-full"></div>

      <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-[#0D6EFD] opacity-10 blur-[140px] rounded-full"></div>

      <div className="relative z-10 grid lg:grid-cols-2 items-center gap-14 px-10 lg:px-16 py-16">

        {/* Left */}

        <div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Ready to Build Your
            <span className="text-[#0D6EFD]"> Next Digital Solution?</span>
          </h2>

          <p className="text-gray-600 text-lg leading-8 mb-10">
            Whether you're looking for custom software, AI solutions,
            cloud services, cybersecurity, or IT consulting,
            Cotsle is ready to help transform your ideas into reality.
          </p>

          <div className="flex flex-wrap gap-5">

            <Link
              href="/contact"
              className="bg-[#0D6EFD] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </Link>

            <Link
              href="/services"
              className="border border-gray-300 hover:border-[#0D6EFD] hover:text-[#0D6EFD] px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              View Services
            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="relative flex justify-center">

          <div className="absolute w-72 h-72 bg-[#0D6EFD] opacity-10 blur-[120px] rounded-full"></div>

          <Image
            src="/images/services-cta.png"
            alt="Technology"
            width={550}
            height={550}
            className="relative z-10 w-full max-w-md hover:scale-105 transition-transform duration-500"
          />

        </div>

      </div>

    </div>

  </div>

</section>
      <Footer />
    </>
  );
}