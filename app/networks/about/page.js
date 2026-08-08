import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
{/* About Hero */}

<section
  data-aos="fade-up"
  className="relative overflow-hidden bg-[#081B33] text-white py-28"
>

  {/* Background Glow */}

  <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#0D6EFD]/20 rounded-full blur-[120px]" />

  <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] bg-[#0D6EFD]/10 rounded-full blur-[120px]" />


  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT */}

      <div>

        <p
          data-aos="fade-down"
          className="uppercase tracking-[6px] text-[#0D6EFD] font-semibold mb-6"
        >
          About COTSLE
        </p>

        <h1
          data-aos="fade-right"
          className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05]"
        >
          Technology.
          <br />

          <span className="text-[#0D6EFD]">
            Expertise.
          </span>

          <br />

          Impact.
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-8 text-xl text-gray-300 leading-9 max-w-xl"
        >
          COTSLE helps organizations build secure, connected, and
          future-ready technology environments through innovation,
          expertise, and solutions designed around real business needs.
        </p>

      </div>


      {/* RIGHT */}

      <div
        data-aos="fade-left"
        data-aos-delay="200"
        className="relative"
      >

        <div className="relative border-l-2 border-[#0D6EFD] pl-8">

          <p className="uppercase tracking-[4px] text-[#0D6EFD] font-semibold mb-6">
            Who We Are
          </p>

          <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
            Building technology that works for people and businesses.
          </h2>

          <p className="text-gray-400 text-lg leading-8">
            We bring together technology expertise, security-first
            thinking, and a practical understanding of business
            challenges to create solutions that deliver lasting value.
          </p>

        </div>

      </div>

    </div>


    {/* Bottom Statement */}

    <div
      data-aos="fade-up"
      data-aos-delay="350"
      className="mt-20 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6"
    >

      <p className="text-gray-400">
        Secure. Connected. Future Ready.
      </p>

      <div className="flex items-center gap-3">

        <span className="w-2 h-2 rounded-full bg-[#0D6EFD]" />

        <span className="text-sm uppercase tracking-[3px] text-gray-400">
          Technology With Purpose
        </span>

      </div>

    </div>

  </div>

</section>6
{/* Who We Are */}

<section
  data-aos="fade-up"
  className="py-28 bg-[#F8FAFC]"
>

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Content */}

      <div data-aos="fade-right">

        <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-4">
          Who We Are
        </p>

        <h2 className="text-5xl font-black text-[#081B33] leading-tight mb-7">
          Technology Built Around
          <span className="text-[#0D6EFD]"> Your Business.</span>
        </h2>

        <p className="text-lg text-gray-600 leading-8 mb-6">
          COTSLE is a technology solutions company focused on helping
          organizations use technology to improve the way they work,
          connect, and grow.
        </p>

        <p className="text-lg text-gray-600 leading-8 mb-8">
          We bring together enterprise networking, cybersecurity,
          cloud infrastructure, managed IT services, and digital
          transformation to create reliable technology environments
          that support long-term business growth.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex flex-wrap gap-4"
        >

          <div className="px-6 py-4 bg-white rounded-xl border border-gray-200 hover:border-[#0D6EFD] hover:shadow-lg transition-all duration-300">

            <p className="text-2xl font-black text-[#081B33]">
              Secure
            </p>

            <p className="text-gray-500 text-sm mt-1">
              Protection first
            </p>

          </div>

          <div className="px-6 py-4 bg-white rounded-xl border border-gray-200 hover:border-[#0D6EFD] hover:shadow-lg transition-all duration-300">

            <p className="text-2xl font-black text-[#081B33]">
              Reliable
            </p>

            <p className="text-gray-500 text-sm mt-1">
              Built to perform
            </p>

          </div>

          <div className="px-6 py-4 bg-white rounded-xl border border-gray-200 hover:border-[#0D6EFD] hover:shadow-lg transition-all duration-300">

            <p className="text-2xl font-black text-[#081B33]">
              Scalable
            </p>

            <p className="text-gray-500 text-sm mt-1">
              Ready to grow
            </p>

          </div>

        </div>

      </div>


      {/* Right Side */}

      <div
        data-aos="fade-left"
        data-aos-delay="150"
        className="relative"
      >

        <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#0D6EFD]/10 rounded-full blur-3xl" />

        <div className="relative bg-[#081B33] rounded-[32px] p-10 lg:p-12 shadow-2xl">

          <p className="text-[#0D6EFD] uppercase tracking-[4px] font-semibold mb-8">
            What We Believe
          </p>

          <div className="space-y-8">

            <div
              className="group border-l-2 border-[#0D6EFD]/30 pl-6 hover:border-[#0D6EFD] transition-all duration-300"
            >

              <h3 className="text-xl font-bold text-white mb-2">
                Technology Should Solve Problems
              </h3>

              <p className="text-gray-400 leading-7">
                We focus on practical solutions that address real
                business needs instead of technology for technology's sake.
              </p>

            </div>

            <div
              className="group border-l-2 border-[#0D6EFD]/30 pl-6 hover:border-[#0D6EFD] transition-all duration-300"
            >

              <h3 className="text-xl font-bold text-white mb-2">
                Security Should Be Built In
              </h3>

              <p className="text-gray-400 leading-7">
                Security is considered from the beginning of every
                technology environment we design.
              </p>

            </div>

            <div
              className="group border-l-2 border-[#0D6EFD]/30 pl-6 hover:border-[#0D6EFD] transition-all duration-300"
            >

              <h3 className="text-xl font-bold text-white mb-2">
                Businesses Should Be Future Ready
              </h3>

              <p className="text-gray-400 leading-7">
                We build solutions that can adapt as technology,
                customers, and business requirements evolve.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* Mission & Vision */}

<section
  data-aos="fade-up"
  className="py-28 bg-white"
>

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Heading */}

    <div
      data-aos="fade-up"
      className="text-center max-w-3xl mx-auto mb-16"
    >

      <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-4">
        Our Direction
      </p>

      <h2 className="text-5xl font-black text-[#081B33]">
        Driven By Purpose.
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        Everything we build is guided by a clear purpose and a
        long-term vision for how technology can create better
        possibilities for businesses.
      </p>

    </div>


    {/* Mission & Vision */}

    <div className="grid lg:grid-cols-2 gap-8">

      {/* Mission */}

      <div
        data-aos="fade-right"
        className="group relative overflow-hidden rounded-[32px] bg-[#081B33] p-10 lg:p-14 hover:-translate-y-2 transition-all duration-500"
      >

        {/* Glow */}

        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#0D6EFD]/20 rounded-full blur-3xl group-hover:bg-[#0D6EFD]/30 transition-all duration-500" />

        <div className="relative z-10">

          <div className="w-16 h-16 rounded-2xl bg-[#0D6EFD] flex items-center justify-center mb-8">

            <span className="text-white text-2xl font-black">
              M
            </span>

          </div>

          <p className="uppercase tracking-[4px] text-[#0D6EFD] font-semibold mb-4">
            Our Mission
          </p>

          <h3 className="text-3xl lg:text-4xl font-black text-white mb-6">
            Making Technology Work For Businesses.
          </h3>

          <p className="text-gray-400 text-lg leading-8">
            Our mission is to deliver secure, reliable, and practical
            technology solutions that help organizations operate
            efficiently, solve complex challenges, and achieve
            sustainable growth.
          </p>

        </div>

      </div>


      {/* Vision */}

      <div
        data-aos="fade-left"
        data-aos-delay="150"
        className="group relative overflow-hidden rounded-[32px] border border-gray-200 bg-[#F8FAFC] p-10 lg:p-14 hover:-translate-y-2 hover:border-[#0D6EFD]/40 hover:shadow-xl transition-all duration-500"
      >

        {/* Glow */}

        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#0D6EFD]/10 rounded-full blur-3xl group-hover:bg-[#0D6EFD]/20 transition-all duration-500" />

        <div className="relative z-10">

          <div className="w-16 h-16 rounded-2xl bg-[#081B33] flex items-center justify-center mb-8">

            <span className="text-white text-2xl font-black">
              V
            </span>

          </div>

          <p className="uppercase tracking-[4px] text-[#0D6EFD] font-semibold mb-4">
            Our Vision
          </p>

          <h3 className="text-3xl lg:text-4xl font-black text-[#081B33] mb-6">
            Building A Smarter Digital Future.
          </h3>

          <p className="text-gray-600 text-lg leading-8">
            Our vision is to become a trusted technology partner for
            organizations seeking to build secure, connected, and
            future-ready digital environments.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
{/* Core Values */}

<section
  data-aos="fade-up"
  className="py-28 bg-[#F8FAFC]"
>

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Heading */}

    <div
      data-aos="fade-up"
      className="text-center max-w-3xl mx-auto mb-16"
    >

      <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-4">
        What Drives Us
      </p>

      <h2 className="text-5xl font-black text-[#081B33]">
        Our Core Values
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        The principles that guide how we work, how we build solutions,
        and how we create lasting relationships with our clients.
      </p>

    </div>


    {/* Values */}

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Value 1 */}

      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="group bg-white border border-gray-200 rounded-3xl p-8 hover:-translate-y-2 hover:border-[#0D6EFD]/40 hover:shadow-xl transition-all duration-500"
      >

        <div className="w-14 h-14 rounded-2xl bg-[#081B33] text-white flex items-center justify-center text-xl font-black mb-7 group-hover:bg-[#0D6EFD] transition-colors duration-300">
          01
        </div>

        <h3 className="text-2xl font-bold text-[#081B33] mb-4">
          Integrity
        </h3>

        <p className="text-gray-600 leading-7">
          We operate with honesty, transparency, and accountability
          in every relationship and every solution we deliver.
        </p>

      </div>


      {/* Value 2 */}

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="group bg-white border border-gray-200 rounded-3xl p-8 hover:-translate-y-2 hover:border-[#0D6EFD]/40 hover:shadow-xl transition-all duration-500"
      >

        <div className="w-14 h-14 rounded-2xl bg-[#081B33] text-white flex items-center justify-center text-xl font-black mb-7 group-hover:bg-[#0D6EFD] transition-colors duration-300">
          02
        </div>

        <h3 className="text-2xl font-bold text-[#081B33] mb-4">
          Innovation
        </h3>

        <p className="text-gray-600 leading-7">
          We continuously explore better technologies and smarter
          approaches to solve evolving business challenges.
        </p>

      </div>


      {/* Value 3 */}

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="group bg-white border border-gray-200 rounded-3xl p-8 hover:-translate-y-2 hover:border-[#0D6EFD]/40 hover:shadow-xl transition-all duration-500"
      >

        <div className="w-14 h-14 rounded-2xl bg-[#081B33] text-white flex items-center justify-center text-xl font-black mb-7 group-hover:bg-[#0D6EFD] transition-colors duration-300">
          03
        </div>

        <h3 className="text-2xl font-bold text-[#081B33] mb-4">
          Excellence
        </h3>

        <p className="text-gray-600 leading-7">
          We hold ourselves to high standards and focus on delivering
          reliable, secure, and high-quality results.
        </p>

      </div>


      {/* Value 4 */}

      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="group bg-white border border-gray-200 rounded-3xl p-8 hover:-translate-y-2 hover:border-[#0D6EFD]/40 hover:shadow-xl transition-all duration-500"
      >

        <div className="w-14 h-14 rounded-2xl bg-[#081B33] text-white flex items-center justify-center text-xl font-black mb-7 group-hover:bg-[#0D6EFD] transition-colors duration-300">
          04
        </div>

        <h3 className="text-2xl font-bold text-[#081B33] mb-4">
          Partnership
        </h3>

        <p className="text-gray-600 leading-7">
          We work closely with our clients, building long-term
          partnerships based on trust, communication, and shared goals.
        </p>

      </div>

    </div>

  </div>

</section>
{/* Why Choose COTSLE */}

<section
  data-aos="fade-up"
  className="py-28 bg-white"
>

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Heading */}

    <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">

      <div data-aos="fade-right">

        <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-4">
          Why COTSLE
        </p>

        <h2 className="text-5xl lg:text-6xl font-black text-[#081B33] leading-tight">
          A Technology Partner
          <span className="text-[#0D6EFD]"> You Can Rely On.</span>
        </h2>

      </div>

      <p
        data-aos="fade-left"
        className="text-lg text-gray-600 leading-8 max-w-xl"
      >
        We combine technical expertise, security-first thinking,
        and a deep understanding of business needs to deliver
        technology that creates lasting value.
      </p>

    </div>


    {/* Reasons */}

    <div className="grid md:grid-cols-2 gap-x-16">

      {/* Reason 1 */}

      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="group flex gap-6 py-8 border-t border-gray-200"
      >

        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#081B33] text-white flex items-center justify-center font-black group-hover:bg-[#0D6EFD] transition-colors duration-300">
          01
        </div>

        <div>

          <h3 className="text-2xl font-bold text-[#081B33] mb-3">
            Deep Technical Expertise
          </h3>

          <p className="text-gray-600 leading-7">
            Our approach brings together expertise across networking,
            cybersecurity, cloud, infrastructure, and modern technology.
          </p>

        </div>

      </div>


      {/* Reason 2 */}

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="group flex gap-6 py-8 border-t border-gray-200"
      >

        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#081B33] text-white flex items-center justify-center font-black group-hover:bg-[#0D6EFD] transition-colors duration-300">
          02
        </div>

        <div>

          <h3 className="text-2xl font-bold text-[#081B33] mb-3">
            Security-First Approach
          </h3>

          <p className="text-gray-600 leading-7">
            Security is integrated into our solutions from the beginning,
            helping organizations reduce risk and protect critical systems.
          </p>

        </div>

      </div>


      {/* Reason 3 */}

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="group flex gap-6 py-8 border-t border-gray-200"
      >

        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#081B33] text-white flex items-center justify-center font-black group-hover:bg-[#0D6EFD] transition-colors duration-300">
          03
        </div>

        <div>

          <h3 className="text-2xl font-bold text-[#081B33] mb-3">
            Business-Focused Solutions
          </h3>

          <p className="text-gray-600 leading-7">
            We focus on understanding your goals first, then designing
            technology solutions that directly support your business.
          </p>

        </div>

      </div>


      {/* Reason 4 */}

      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="group flex gap-6 py-8 border-t border-gray-200"
      >

        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#081B33] text-white flex items-center justify-center font-black group-hover:bg-[#0D6EFD] transition-colors duration-300">
          04
        </div>

        <div>

          <h3 className="text-2xl font-bold text-[#081B33] mb-3">
            Long-Term Partnership
          </h3>

          <p className="text-gray-600 leading-7">
            We aim to become a trusted technology partner, supporting
            your organization as its needs and technology evolve.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
{/* Our Technology Approach */}

<section
  data-aos="fade-up"
  className="py-28 bg-[#F8FAFC]"
>

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Heading */}

    <div className="max-w-3xl mb-16">

      <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-4">
        Our Approach
      </p>

      <h2 className="text-5xl lg:text-6xl font-black text-[#081B33] leading-tight">
        Technology That
        <span className="text-[#0D6EFD]"> Moves Business Forward.</span>
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        We take a practical, security-focused approach to technology,
        making sure every solution is designed around reliability,
        performance, and long-term business growth.
      </p>

    </div>


    {/* Approach Steps */}

    <div className="grid md:grid-cols-3 gap-8">

      {/* Step 1 */}

      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="group bg-white rounded-3xl p-8 border border-gray-200 hover:-translate-y-2 hover:border-[#0D6EFD]/40 hover:shadow-xl transition-all duration-500"
      >

        <div className="flex items-center justify-between mb-10">

          <div className="w-14 h-14 rounded-2xl bg-[#081B33] text-white flex items-center justify-center font-black text-lg group-hover:bg-[#0D6EFD] transition-colors duration-300">
            01
          </div>

          <span className="text-5xl font-black text-gray-100">
            01
          </span>

        </div>

        <h3 className="text-2xl font-bold text-[#081B33] mb-4">
          Understand
        </h3>

        <p className="text-gray-600 leading-7">
          We begin by understanding your business, infrastructure,
          challenges, objectives, and technology requirements.
        </p>

      </div>


      {/* Step 2 */}

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="group bg-white rounded-3xl p-8 border border-gray-200 hover:-translate-y-2 hover:border-[#0D6EFD]/40 hover:shadow-xl transition-all duration-500"
      >

        <div className="flex items-center justify-between mb-10">

          <div className="w-14 h-14 rounded-2xl bg-[#081B33] text-white flex items-center justify-center font-black text-lg group-hover:bg-[#0D6EFD] transition-colors duration-300">
            02
          </div>

          <span className="text-5xl font-black text-gray-100">
            02
          </span>

        </div>

        <h3 className="text-2xl font-bold text-[#081B33] mb-4">
          Design
        </h3>

        <p className="text-gray-600 leading-7">
          We develop a solution that balances security, performance,
          scalability, and the practical needs of your organization.
        </p>

      </div>


      {/* Step 3 */}

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="group bg-white rounded-3xl p-8 border border-gray-200 hover:-translate-y-2 hover:border-[#0D6EFD]/40 hover:shadow-xl transition-all duration-500"
      >

        <div className="flex items-center justify-between mb-10">

          <div className="w-14 h-14 rounded-2xl bg-[#081B33] text-white flex items-center justify-center font-black text-lg group-hover:bg-[#0D6EFD] transition-colors duration-300">
            03
          </div>

          <span className="text-5xl font-black text-gray-100">
            03
          </span>

        </div>

        <h3 className="text-2xl font-bold text-[#081B33] mb-4">
          Deliver & Evolve
        </h3>

        <p className="text-gray-600 leading-7">
          We implement, support, monitor, and continuously improve
          solutions as your business and technology evolve.
        </p>

      </div>

    </div>

  </div>

</section>
{/* Final CTA */}

<section
  data-aos="fade-up"
  className="py-24 bg-white"
>

  <div className="max-w-5xl mx-auto px-6 text-center">

    <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-5">
      Let's Work Together
    </p>

    <h2 className="text-5xl lg:text-6xl font-black text-[#081B33] leading-tight">
      Ready to Build a
      <span className="text-[#0D6EFD]"> Better Future?</span>
    </h2>

    <p className="mt-6 text-lg text-gray-600 leading-8 max-w-2xl mx-auto">
      Whether you need stronger infrastructure, better security,
      or a technology strategy built for growth, COTSLE is ready
      to help.
    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-5">

      <Link
        href="/networks/contact"
        className="bg-[#0D6EFD] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
      >
        Talk To Our Experts
      </Link>

      <Link
        href="/networks/services"
        className="border-2 border-[#081B33] text-[#081B33] px-8 py-4 rounded-full font-semibold hover:bg-[#081B33] hover:text-white hover:-translate-y-1 transition-all duration-300"
      >
        Explore Services
      </Link>

    </div>

  </div>

</section>
    </>
     );
}
