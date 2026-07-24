import {
  FaLightbulb,
  FaShieldAlt,
  FaAward,
  FaGraduationCap,
} from "react-icons/fa";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";


export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}

      <section className="bg-gradient-to-r from-white via-blue-50 to-white py-20 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Side */}

            <div data-aos="fade-right">

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">

                Empowering

                <span className="text-[#0D6EFD]">
                  {" "}Businesses{" "}
                </span>

                Through Innovation

              </h1>

              <p className="text-gray-600 text-lg leading-8 mb-10">

                Cotsle is committed to delivering innovative technology
                solutions and professional IT education that empower
                individuals and businesses to succeed in the digital era.

              </p>

              <div className="flex flex-wrap gap-5">

                <Link
                  href="/courses"
                  className="bg-[#0D6EFD] hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Explore Courses
                </Link>

                <Link
                  href="/contact"
                  className="border-2 border-[#0D6EFD] text-[#0D6EFD] hover:bg-[#0D6EFD] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Contact Us
                </Link>

              </div>

            </div>

            {/* Right Side */}

            <div
              className="relative flex justify-center"
              data-aos="fade-left"
            >

              <div className="absolute w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-60"></div>

              <Image
                src="/images/about-hero.png"
                alt="About Cotsle"
                width={650}
                height={650}
                className="relative z-10 w-full max-w-xl"
                priority
              />

            </div>

          </div>

        </div>

      </section>
      {/* Our Story */}

<section
  data-aos="fade-up"
  className="py-24 bg-white"
>

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Side */}

      <div className="relative">

        <Image
          src="/images/about.png"
          alt="Our Story"
          width={600}
          height={650}
          className="rounded-3xl shadow-2xl"
        />

        <div className="absolute -bottom-8 -right-6 bg-[#0D6EFD] text-white rounded-2xl px-8 py-6 shadow-xl">

          <h3 className="text-4xl font-bold">
            15+
          </h3>

          <p className="text-blue-100">
            Years of Excellence
          </p>

        </div>

      </div>

      {/* Right Side */}

      <div>

        <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
          Our Story
        </p>

        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">

          Transforming Ideas Into

          <span className="text-[#0D6EFD]">
            {" "}Digital Success
          </span>

        </h2>

        <p className="text-gray-600 text-lg leading-8 mb-6">

          Cotsle was founded with a vision to bridge the gap between
          technology and opportunity. We provide innovative IT solutions,
          professional training, and digital transformation services that
          empower businesses and individuals to thrive in a rapidly evolving
          world.

        </p>

        <p className="text-gray-600 text-lg leading-8 mb-10">

          Through practical learning, experienced instructors, and
          industry-focused solutions, we prepare students for successful
          careers while helping organizations embrace the latest technologies.

        </p>

        <div className="grid sm:grid-cols-2 gap-5">

          <div className="bg-blue-50 rounded-xl p-5">

            <h3 className="text-xl font-bold text-[#0D6EFD] mb-2">
              Innovation
            </h3>

            <p className="text-gray-600">
              Modern solutions powered by today's latest technologies.
            </p>

          </div>

          <div className="bg-blue-50 rounded-xl p-5">

            <h3 className="text-xl font-bold text-[#0D6EFD] mb-2">
              Excellence
            </h3>

            <p className="text-gray-600">
              Delivering quality education and professional services.
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* Mission & Vision */}

<section
  data-aos="fade-up"
  className="py-24 bg-gray-50"
>

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
        Mission & Vision
      </p>

      <h2 className="text-5xl font-bold text-gray-900 mb-6">
        Driven By Purpose
      </h2>

      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        Everything we do is focused on empowering students, businesses, and
        communities through innovation, education, and technology.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-10">

      {/* Mission Card */}

      <div className="bg-white rounded-3xl shadow-lg p-10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

        

        <h3 className="text-3xl font-bold text-gray-900 mb-6">
          Our Mission
        </h3>

        <p className="text-gray-600 leading-8 text-lg">
          Our mission is to provide high-quality technology education and
          innovative digital solutions that prepare individuals and businesses
          for success in an ever-evolving digital world. We believe in
          practical learning, continuous innovation, and delivering real value
          to our students and clients.
        </p>

      </div>

      {/* Vision Card */}

      <div className="bg-white rounded-3xl shadow-lg p-10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">


        <h3 className="text-3xl font-bold text-gray-900 mb-6">
          Our Vision
        </h3>

        <p className="text-gray-600 leading-8 text-lg">
          We envision becoming a globally recognized technology company that
          inspires innovation, develops future-ready professionals, and helps
          organizations embrace digital transformation through cutting-edge
          solutions and world-class education.
        </p>

      </div>

    </div>

  </div>

</section>
{/* Core Values */}

<section
  data-aos="fade-up"
  className="py-24 bg-white"
>
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
        Our Core Values
      </p>

      <h2 className="text-5xl font-bold text-gray-900 mb-6">
        The Values That Drive Us
      </h2>

      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        Our culture is built on strong values that inspire innovation,
        teamwork, excellence, and continuous growth.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Innovation */}

      <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">

        <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6">

          <FaLightbulb className="text-3xl text-[#0D6EFD]" />

        </div>

        <h3 className="text-2xl font-bold mb-4">
          Innovation
        </h3>

        <p className="text-gray-600 leading-7">
          We embrace creativity and continuously explore new technologies
          to deliver smarter and more effective solutions.
        </p>

      </div>

      {/* Integrity */}

      <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">

        <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6">

          <FaShieldAlt className="text-3xl text-[#0D6EFD]" />

        </div>

        <h3 className="text-2xl font-bold mb-4">
          Integrity
        </h3>

        <p className="text-gray-600 leading-7">
          Honesty, transparency, and trust are at the heart of every
          relationship we build with our clients and students.
        </p>

      </div>

      {/* Excellence */}

      <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">

        <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6">

          <FaAward className="text-3xl text-[#0D6EFD]" />

        </div>

        <h3 className="text-2xl font-bold mb-4">
          Excellence
        </h3>

        <p className="text-gray-600 leading-7">
          We strive for the highest standards in education, technology,
          and customer satisfaction.
        </p>

      </div>

      {/* Continuous Learning */}

      <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">

        <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6">

          <FaGraduationCap className="text-3xl text-[#0D6EFD]" />

        </div>

        <h3 className="text-2xl font-bold mb-4">
          Continuous Learning
        </h3>

        <p className="text-gray-600 leading-7">
          We believe learning never stops and encourage growth through
          knowledge, experience, and innovation.
        </p>

      </div>

    </div>

  </div>

</section>
{/* Company Statistics */}

<section
  data-aos="fade-up"
  className="py-24 bg-gradient-to-r from-blue-50 via-white to-blue-50"
>

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
        Our Achievements
      </p>

      <h2 className="text-5xl font-bold text-gray-900">
        Numbers That Speak
      </h2>

    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-5xl font-bold text-[#0D6EFD] mb-3">50K+</h3>
        <p className="text-gray-600 font-medium">Students Trained</p>
      </div>

      <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-5xl font-bold text-[#0D6EFD] mb-3">30+</h3>
        <p className="text-gray-600 font-medium">Professional Courses</p>
      </div>

      <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-5xl font-bold text-[#0D6EFD] mb-3">500+</h3>
        <p className="text-gray-600 font-medium">Projects Delivered</p>
      </div>

      <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-5xl font-bold text-[#0D6EFD] mb-3">15+</h3>
        <p className="text-gray-600 font-medium">Years of Excellence</p>
      </div>

    </div>

  </div>

</section>
{/* Meet Our Team */}

<section
  data-aos="fade-up"
  className="py-24 bg-gray-50"
>
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
        Meet Our Team
      </p>

      <h2 className="text-5xl font-bold text-gray-900 mb-6">
        The People Behind Cotsle
      </h2>

      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        Our experienced professionals are passionate about technology,
        innovation, and helping students and businesses achieve success.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Team Member 1 */}

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <div className="overflow-hidden">

          <Image
            src="/images/team1.jpg"
            alt="CEO & Founder"
            width={400}
            height={450}
            className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
          />

        </div>

        <div className="p-6 text-center">

          <h3 className="text-2xl font-bold text-gray-900">
            Mr Ali
          </h3>

          <p className="text-[#0D6EFD] font-semibold mt-2">
            CEO & Founder
          </p>

        </div>

      </div>

      {/* Team Member 2 */}

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <div className="overflow-hidden">

          <Image
            src="/images/team2.jpg"
            alt="Lead Developer"
            width={400}
            height={450}
            className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
          />

        </div>

        <div className="p-6 text-center">

          <h3 className="text-2xl font-bold text-gray-900">
            Ms. Amna
          </h3>

          <p className="text-[#0D6EFD] font-semibold mt-2">
            Lead Developer
          </p>

        </div>

      </div>

      {/* Team Member 3 */}

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <div className="overflow-hidden">

          <Image
            src="/images/team3.jpg"
            alt="IT Trainer"
            width={400}
            height={450}
            className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
          />

        </div>

        <div className="p-6 text-center">

          <h3 className="text-2xl font-bold text-gray-900">
            Mr.Aamir
          </h3>

          <p className="text-[#0D6EFD] font-semibold mt-2">
            IT Trainer
          </p>

        </div>

      </div>

      {/* Team Member 4 */}

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <div className="overflow-hidden">

          <Image
            src="/images/team4.jpg"
            alt="Career Advisor"
            width={400}
            height={450}
            className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
          />

        </div>

        <div className="p-6 text-center">

          <h3 className="text-2xl font-bold text-gray-900">
            Mr.Abbas
          </h3>

          <p className="text-[#0D6EFD] font-semibold mt-2">
            Career Advisor
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
{/* CTA */}

<section
  data-aos="zoom-in"
  className="py-24 bg-gradient-to-r from-white via-blue-50 to-white"
>

  <div className="max-w-5xl mx-auto px-6 text-center">

    <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
      Join Our Community
    </p>

    <h2 className="text-5xl font-bold text-gray-900 mb-6">
      Let's Build Your Future Together
    </h2>

    <p className="text-gray-600 text-lg leading-8 max-w-3xl mx-auto mb-10">
      Whether you're looking to build new skills, launch a career in
      technology, or transform your business with innovative solutions,
      Cotsle is here to help you succeed.
    </p>

    <div className="flex flex-wrap justify-center gap-5">

      <Link
        href="/courses"
        className="bg-[#0D6EFD] hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
      >
        Explore Courses
      </Link>

      <Link
        href="/contact"
        className="border-2 border-[#0D6EFD] text-[#0D6EFD] hover:bg-[#0D6EFD] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
      >
        Contact Us
      </Link>

    </div>

  </div>

</section>

      <Footer />
    </>
  );
}