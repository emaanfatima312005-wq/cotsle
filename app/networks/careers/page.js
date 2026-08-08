import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
    {/* Careers Hero */}

<section
  data-aos="fade-up"
  className="relative overflow-hidden bg-[#081B33] text-white py-28"
>

  {/* Background Glow */}

  <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#0D6EFD]/20 rounded-full blur-[120px]" />

  <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] bg-[#0D6EFD]/10 rounded-full blur-[120px]" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

    <div className="max-w-4xl">

      <p
        data-aos="fade-down"
        className="uppercase tracking-[6px] text-[#0D6EFD] font-semibold mb-6"
      >
        Careers at COTSLE
      </p>

      <h1
        data-aos="fade-right"
        className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05]"
      >
        Build.
        <br />

        <span className="text-[#0D6EFD]">
          Learn.
        </span>

        <br />

        Make an Impact.
      </h1>

      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="mt-8 text-xl text-gray-300 leading-9 max-w-3xl"
      >
        Join a team that is building secure, connected, and
        future-ready technology solutions for modern businesses.
      </p>

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="mt-10"
      >

        <a
          href="#openings"
          className="inline-block bg-[#0D6EFD] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
        >
          Explore Opportunities
        </a>

      </div>

    </div>

  </div>

</section>
{/* Why Work With Us */}

<section
  data-aos="fade-up"
  className="py-28 bg-white"
>

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <div data-aos="fade-right">

        <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-4">
          Life at COTSLE
        </p>

        <h2 className="text-5xl font-black text-[#081B33] leading-tight">
          Grow With
          <span className="text-[#0D6EFD]"> The Technology.</span>
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          At COTSLE, we believe great technology starts with great
          people. We encourage curiosity, continuous learning,
          collaboration, and the freedom to bring new ideas to the table.
        </p>

      </div>

      <div
        data-aos="fade-left"
        className="grid sm:grid-cols-2 gap-5"
      >

        <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-gray-200 hover:border-[#0D6EFD] hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl font-bold text-[#081B33] mb-3">
            Continuous Learning
          </h3>
          <p className="text-gray-600 leading-7">
            Develop your skills and stay ahead of evolving technologies.
          </p>
        </div>

        <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-gray-200 hover:border-[#0D6EFD] hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl font-bold text-[#081B33] mb-3">
            Collaboration
          </h3>
          <p className="text-gray-600 leading-7">
            Work with talented people and solve challenges together.
          </p>
        </div>

        <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-gray-200 hover:border-[#0D6EFD] hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl font-bold text-[#081B33] mb-3">
            Meaningful Work
          </h3>
          <p className="text-gray-600 leading-7">
            Build solutions that create real value for businesses.
          </p>
        </div>

        <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-gray-200 hover:border-[#0D6EFD] hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl font-bold text-[#081B33] mb-3">
            Career Growth
          </h3>
          <p className="text-gray-600 leading-7">
            Take on new challenges and grow with the organization.
          </p>
        </div>

      </div>

    </div>

  </div>

</section>
{/* Open Positions */}

<section
  id="openings"
  data-aos="fade-up"
  className="py-28 bg-[#F8FAFC]"
>

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center max-w-3xl mx-auto mb-16">

      <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-4">
        Join Our Team
      </p>

      <h2 className="text-5xl font-black text-[#081B33]">
        Current Opportunities
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        Explore opportunities to work with our team and contribute
        to technology solutions that make a difference.
      </p>

    </div>

    <div className="space-y-5">

      {/* Position 1 */}

      <div
        data-aos="fade-up"
        className="bg-white border border-gray-200 rounded-2xl p-7 lg:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-[#0D6EFD] hover:shadow-lg transition-all duration-300"
      >

        <div>

          <h3 className="text-2xl font-bold text-[#081B33]">
            Network Engineer
          </h3>

          <div className="flex flex-wrap gap-4 mt-3 text-gray-500 text-sm">
            <span>Full Time</span>
            <span>•</span>
            <span>Lahore, Pakistan</span>
          </div>

        </div>

        <a
          href="/networks/contact"
          className="inline-flex justify-center bg-[#0D6EFD] text-white px-7 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Apply Now
        </a>

      </div>


      {/* Position 2 */}

      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="bg-white border border-gray-200 rounded-2xl p-7 lg:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-[#0D6EFD] hover:shadow-lg transition-all duration-300"
      >

        <div>

          <h3 className="text-2xl font-bold text-[#081B33]">
            Cybersecurity Analyst
          </h3>

          <div className="flex flex-wrap gap-4 mt-3 text-gray-500 text-sm">
            <span>Full Time</span>
            <span>•</span>
            <span>Lahore, Pakistan</span>
          </div>

        </div>

        <a
          href="/networks/contact"
          className="inline-flex justify-center bg-[#0D6EFD] text-white px-7 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Apply Now
        </a>

      </div>


      {/* Position 3 */}

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="bg-white border border-gray-200 rounded-2xl p-7 lg:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-[#0D6EFD] hover:shadow-lg transition-all duration-300"
      >

        <div>

          <h3 className="text-2xl font-bold text-[#081B33]">
            Cloud Solutions Engineer
          </h3>

          <div className="flex flex-wrap gap-4 mt-3 text-gray-500 text-sm">
            <span>Full Time</span>
            <span>•</span>
            <span>Lahore, Pakistan</span>
          </div>

        </div>

        <a
          href="/networks/contact"
          className="inline-flex justify-center bg-[#0D6EFD] text-white px-7 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Apply Now
        </a>

      </div>

    </div>

  </div>

</section>
{/* What We Look For */}

<section
  data-aos="fade-up"
  className="py-28 bg-white"
>

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left */}

      <div data-aos="fade-right">

        <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-4">
          What We Look For
        </p>

        <h2 className="text-5xl lg:text-6xl font-black text-[#081B33] leading-tight">
          People Who Are
          <span className="text-[#0D6EFD]"> Curious.</span>
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
          We value people who are eager to learn, solve problems,
          collaborate with others, and take ownership of their work.
          You don't have to know everything — you need the curiosity
          to keep learning.
        </p>

      </div>


      {/* Right */}

      <div
        data-aos="fade-left"
        className="space-y-4"
      >

        {/* Point 1 */}

        <div className="group flex gap-5 items-start p-6 rounded-2xl border border-gray-200 hover:border-[#0D6EFD] hover:shadow-lg transition-all duration-300">

          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#081B33] text-white flex items-center justify-center font-black group-hover:bg-[#0D6EFD] transition-colors duration-300">
            01
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#081B33] mb-2">
              Curiosity
            </h3>

            <p className="text-gray-600 leading-7">
              You enjoy learning new technologies and finding better
              ways to solve problems.
            </p>
          </div>

        </div>


        {/* Point 2 */}

        <div className="group flex gap-5 items-start p-6 rounded-2xl border border-gray-200 hover:border-[#0D6EFD] hover:shadow-lg transition-all duration-300">

          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#081B33] text-white flex items-center justify-center font-black group-hover:bg-[#0D6EFD] transition-colors duration-300">
            02
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#081B33] mb-2">
              Problem Solving
            </h3>

            <p className="text-gray-600 leading-7">
              You approach challenges thoughtfully and look for
              practical, effective solutions.
            </p>
          </div>

        </div>


        {/* Point 3 */}

        <div className="group flex gap-5 items-start p-6 rounded-2xl border border-gray-200 hover:border-[#0D6EFD] hover:shadow-lg transition-all duration-300">

          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#081B33] text-white flex items-center justify-center font-black group-hover:bg-[#0D6EFD] transition-colors duration-300">
            03
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#081B33] mb-2">
              Collaboration
            </h3>

            <p className="text-gray-600 leading-7">
              You communicate clearly, support your teammates, and
              understand the value of working together.
            </p>
          </div>

        </div>


        {/* Point 4 */}

        <div className="group flex gap-5 items-start p-6 rounded-2xl border border-gray-200 hover:border-[#0D6EFD] hover:shadow-lg transition-all duration-300">

          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#081B33] text-white flex items-center justify-center font-black group-hover:bg-[#0D6EFD] transition-colors duration-300">
            04
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#081B33] mb-2">
              Ownership
            </h3>

            <p className="text-gray-600 leading-7">
              You take responsibility for your work and care about
              delivering results that make a difference.
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* Careers CTA */}

<section
  data-aos="fade-up"
  className="py-24 bg-white"
>

  <div className="max-w-5xl mx-auto px-6 text-center">

    <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-5">
      Your Next Opportunity
    </p>

    <h2 className="text-5xl lg:text-6xl font-black text-[#081B33] leading-tight">
      Ready to Grow With
      <span className="text-[#0D6EFD]"> COTSLE?</span>
    </h2>

    <p className="mt-6 text-lg text-gray-600 leading-8 max-w-2xl mx-auto">
      Don't see the right position? We're always interested in meeting
      talented people who are passionate about technology and learning.
    </p>

    <div className="mt-10">

      <a
        href="/networks/contact"
        className="inline-flex items-center justify-center bg-[#0D6EFD] text-white px-9 py-4 rounded-full font-semibold hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
      >
        Get In Touch
      </a>

    </div>

  </div>

</section>
    </>
     );
}
