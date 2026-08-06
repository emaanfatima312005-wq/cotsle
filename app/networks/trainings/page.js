import Image from "next/image";
import Link from "next/link";

export default function TrainingsPage() {
  return (
    <>
    
    <section className="relative overflow-hidden bg-[#F8FAFC] py-28">

  {/* Background Glow */}

  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0D6EFD]/10 blur-[140px] rounded-full"></div>
  <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-100 blur-[120px] rounded-full"></div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* Left */}

      <div>

        <p className="uppercase tracking-[6px] text-[#0D6EFD] font-semibold mb-5">
          Professional IT Training
        </p>

        <h1 className="text-5xl lg:text-7xl font-black leading-tight text-[#081B33]">

          Learn.
          <br />

          Get Certified.
          <br />

          Build Your Career.

        </h1>

        <p className="mt-10 text-xl text-gray-600 leading-9 max-w-xl">

          Master the world's leading technologies through
          instructor-led training, practical labs, and
          internationally recognized certifications designed
          for today's IT professionals.

        </p>

        <div className="mt-12 flex flex-wrap gap-5">

          <Link
            href="/networks/trainings"
            className="bg-[#0D6EFD] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Explore Programs
          </Link>

          <Link
            href="/networks/contact"
            className="border-2 border-[#081B33] text-[#081B33] px-8 py-4 rounded-full font-semibold hover:bg-[#081B33] hover:text-white transition"
          >
            Speak With an Advisor
          </Link>

        </div>

      </div>

      {/* Right */}

      <div className="relative flex justify-center">

        <div className="absolute w-[500px] h-[500px] bg-[#0D6EFD]/10 rounded-full blur-[120px]"></div>

        <Image
          src="/images/training-hero.png"
          alt="Professional IT Training"
          width={650}
          height={650}
          priority
          className="relative z-10 w-full max-w-xl"
        />

      </div>

    </div>

  </div>

</section>

{/* Why Train with COTSLE */}

<section className="py-28 bg-white">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* Left */}

      <div className="flex justify-center">

        <Image
          src="/images/why-training.png"
          alt="Why Train with COTSLE"
          width={600}
          height={600}
          className="w-full max-w-lg"
        />

      </div>

      {/* Right */}

      <div>

        <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-4">
          Why Train With Us
        </p>

        <h2 className="text-5xl font-black text-[#081B33] leading-tight mb-8">
          Learn From
          <br />
          Industry Professionals
        </h2>

        <p className="text-lg text-gray-600 leading-8 mb-12">

          Our programs combine expert instruction,
          practical experience and globally recognized
          certifications to prepare you for real-world
          IT careers.

        </p>

        <div className="space-y-6">

          {[
            "Certified instructors with real industry experience.",
            "Hands-on labs using enterprise technologies.",
            "Globally recognized certification preparation.",
            "Flexible learning options for students and professionals.",
            "Career guidance, interview preparation and mentorship.",
            "Training aligned with current industry demands."
          ].map((item, index) => (

            <div
              key={index}
              className="flex items-start gap-4"
            >

              <div className="w-8 h-8 rounded-full bg-[#0D6EFD]/10 flex items-center justify-center text-[#0D6EFD] font-bold flex-shrink-0">
                ✓
              </div>

              <p className="text-lg text-gray-700 leading-8">
                {item}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>

</section>
{/* Training Categories */}

<section className="py-28 bg-[#F8FAFC]">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-3">
        Training Categories
      </p>

      <h2 className="text-5xl font-black text-[#081B33]">
        Choose Your Learning Path
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        Whether you're starting your IT journey or advancing your
        expertise, our industry-focused programs prepare you for
        globally recognized certifications.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Networking */}

      <div className="bg-white rounded-3xl border border-gray-200 p-10 hover:border-[#0D6EFD] hover:shadow-xl transition-all duration-300">

        <h3 className="text-3xl font-bold text-[#081B33] mb-5">
          Networking
        </h3>

        <p className="text-gray-600 leading-8 mb-8">
          Master enterprise networking, routing, switching,
          wireless technologies and infrastructure management.
        </p>

        <span className="text-[#0D6EFD] font-semibold">
          Cisco • CCNA • CCNP
        </span>

      </div>

      {/* Cyber Security */}

      <div className="bg-white rounded-3xl border border-gray-200 p-10 hover:border-[#0D6EFD] hover:shadow-xl transition-all duration-300">

        <h3 className="text-3xl font-bold text-[#081B33] mb-5">
          Cyber Security
        </h3>

        <p className="text-gray-600 leading-8 mb-8">
          Learn ethical hacking, security operations,
          firewalls, penetration testing and risk management.
        </p>

        <span className="text-[#0D6EFD] font-semibold">
          Fortinet • CEH • Security+
        </span>

      </div>

      {/* Cloud */}

      <div className="bg-white rounded-3xl border border-gray-200 p-10 hover:border-[#0D6EFD] hover:shadow-xl transition-all duration-300">

        <h3 className="text-3xl font-bold text-[#081B33] mb-5">
          Cloud Computing
        </h3>

        <p className="text-gray-600 leading-8 mb-8">
          Build and manage secure cloud infrastructure
          using today's leading cloud platforms.
        </p>

        <span className="text-[#0D6EFD] font-semibold">
          AWS • Azure
        </span>

      </div>

      {/* Microsoft */}

      <div className="bg-white rounded-3xl border border-gray-200 p-10 hover:border-[#0D6EFD] hover:shadow-xl transition-all duration-300">

        <h3 className="text-3xl font-bold text-[#081B33] mb-5">
          Microsoft Technologies
        </h3>

        <p className="text-gray-600 leading-8 mb-8">
          Gain expertise in Windows Server,
          Active Directory, Microsoft 365 and Azure.
        </p>

        <span className="text-[#0D6EFD] font-semibold">
          Azure • Microsoft
        </span>

      </div>

      {/* Linux */}

      <div className="bg-white rounded-3xl border border-gray-200 p-10 hover:border-[#0D6EFD] hover:shadow-xl transition-all duration-300">

        <h3 className="text-3xl font-bold text-[#081B33] mb-5">
          Linux Administration
        </h3>

        <p className="text-gray-600 leading-8 mb-8">
          Learn Linux system administration,
          scripting, server management and automation.
        </p>

        <span className="text-[#0D6EFD] font-semibold">
          Red Hat • Linux
        </span>

      </div>

      {/* Virtualization */}

      <div className="bg-white rounded-3xl border border-gray-200 p-10 hover:border-[#0D6EFD] hover:shadow-xl transition-all duration-300">

        <h3 className="text-3xl font-bold text-[#081B33] mb-5">
          Virtualization
        </h3>

        <p className="text-gray-600 leading-8 mb-8">
          Design, deploy and manage virtualized
          enterprise infrastructure environments.
        </p>

        <span className="text-[#0D6EFD] font-semibold">
          VMware
        </span>

      </div>

    </div>

  </div>

</section>
{/* Popular Certifications */}

<section className="py-28 bg-white">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-20">

      <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-3">
        Industry Certifications
      </p>

      <h2 className="text-5xl font-black text-[#081B33]">
        Certifications That Employers Trust
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        Prepare for globally recognized certifications that validate
        your skills and open doors to career opportunities in networking,
        cybersecurity and cloud technologies.
      </p>

    </div>

    <div className="grid md:grid-cols-2 gap-8">

      {/* Cisco */}

      <div className="bg-[#F8FAFC] rounded-3xl border border-gray-200 p-8 hover:border-[#0D6EFD] hover:shadow-xl transition">

        <div className="flex justify-between items-center mb-6">

          <h3 className="text-3xl font-bold text-[#081B33]">
            Cisco
          </h3>

          <span className="px-4 py-2 rounded-full bg-[#0D6EFD]/10 text-[#0D6EFD] font-semibold">
            Networking
          </span>

        </div>

        <div className="space-y-4">

          <div className="flex justify-between border-b border-gray-200 pb-3">
            <span>CCNA</span>
            <span className="text-gray-500">Associate</span>
          </div>

          <div className="flex justify-between border-b border-gray-200 pb-3">
            <span>CCNP Enterprise</span>
            <span className="text-gray-500">Professional</span>
          </div>

          <div className="flex justify-between">
            <span>CCIE</span>
            <span className="text-gray-500">Expert</span>
          </div>

        </div>

      </div>

      {/* Microsoft */}

      <div className="bg-[#F8FAFC] rounded-3xl border border-gray-200 p-8 hover:border-[#0D6EFD] hover:shadow-xl transition">

        <div className="flex justify-between items-center mb-6">

          <h3 className="text-3xl font-bold text-[#081B33]">
            Microsoft
          </h3>

          <span className="px-4 py-2 rounded-full bg-[#0D6EFD]/10 text-[#0D6EFD] font-semibold">
            Cloud
          </span>

        </div>

        <div className="space-y-4">

          <div className="flex justify-between border-b border-gray-200 pb-3">
            <span>Azure Fundamentals</span>
            <span className="text-gray-500">AZ-900</span>
          </div>

          <div className="flex justify-between border-b border-gray-200 pb-3">
            <span>Azure Administrator</span>
            <span className="text-gray-500">AZ-104</span>
          </div>

          <div className="flex justify-between">
            <span>Azure Solutions Architect</span>
            <span className="text-gray-500">AZ-305</span>
          </div>

        </div>

      </div>

      {/* AWS */}

      <div className="bg-[#F8FAFC] rounded-3xl border border-gray-200 p-8 hover:border-[#0D6EFD] hover:shadow-xl transition">

        <div className="flex justify-between items-center mb-6">

          <h3 className="text-3xl font-bold text-[#081B33]">
            AWS
          </h3>

          <span className="px-4 py-2 rounded-full bg-[#0D6EFD]/10 text-[#0D6EFD] font-semibold">
            Cloud
          </span>

        </div>

        <div className="space-y-4">

          <div className="flex justify-between border-b border-gray-200 pb-3">
            <span>Cloud Practitioner</span>
            <span className="text-gray-500">Foundational</span>
          </div>

          <div className="flex justify-between border-b border-gray-200 pb-3">
            <span>Solutions Architect</span>
            <span className="text-gray-500">Associate</span>
          </div>

          <div className="flex justify-between">
            <span>DevOps Engineer</span>
            <span className="text-gray-500">Professional</span>
          </div>

        </div>

      </div>

      {/* Security */}

      <div className="bg-[#F8FAFC] rounded-3xl border border-gray-200 p-8 hover:border-[#0D6EFD] hover:shadow-xl transition">

        <div className="flex justify-between items-center mb-6">

          <h3 className="text-3xl font-bold text-[#081B33]">
            Cyber Security
          </h3>

          <span className="px-4 py-2 rounded-full bg-[#0D6EFD]/10 text-[#0D6EFD] font-semibold">
            Security
          </span>

        </div>

        <div className="space-y-4">

          <div className="flex justify-between border-b border-gray-200 pb-3">
            <span>Fortinet NSE</span>
            <span className="text-gray-500">Professional</span>
          </div>

          <div className="flex justify-between border-b border-gray-200 pb-3">
            <span>CompTIA Security+</span>
            <span className="text-gray-500">Core</span>
          </div>

          <div className="flex justify-between">
            <span>CEH</span>
            <span className="text-gray-500">Ethical Hacking</span>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* Learning Journey */}

<section className="py-28 bg-[#F8FAFC]">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-20">

      <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-3">
        Learning Journey
      </p>

      <h2 className="text-5xl font-black text-[#081B33]">
        Your Path to Success
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        Every learner follows a structured roadmap designed to build
        confidence, practical experience, and certification readiness.
      </p>

    </div>

    <div className="grid md:grid-cols-5 gap-10">

      {/* Step 1 */}

      <div className="text-center">

        <div className="w-20 h-20 rounded-full bg-[#0D6EFD] text-white flex items-center justify-center text-3xl font-bold mx-auto mb-6">
          1
        </div>

        <h3 className="text-2xl font-bold text-[#081B33] mb-4">
          Enroll
        </h3>

        <p className="text-gray-600 leading-7">
          Choose the training program that aligns with your career goals.
        </p>

      </div>

      {/* Step 2 */}

      <div className="text-center">

        <div className="w-20 h-20 rounded-full bg-[#0D6EFD] text-white flex items-center justify-center text-3xl font-bold mx-auto mb-6">
          2
        </div>

        <h3 className="text-2xl font-bold text-[#081B33] mb-4">
          Learn
        </h3>

        <p className="text-gray-600 leading-7">
          Attend instructor-led sessions with expert trainers.
        </p>

      </div>

      {/* Step 3 */}

      <div className="text-center">

        <div className="w-20 h-20 rounded-full bg-[#0D6EFD] text-white flex items-center justify-center text-3xl font-bold mx-auto mb-6">
          3
        </div>

        <h3 className="text-2xl font-bold text-[#081B33] mb-4">
          Practice
        </h3>

        <p className="text-gray-600 leading-7">
          Gain real-world experience through practical labs and projects.
        </p>

      </div>

      {/* Step 4 */}

      <div className="text-center">

        <div className="w-20 h-20 rounded-full bg-[#0D6EFD] text-white flex items-center justify-center text-3xl font-bold mx-auto mb-6">
          4
        </div>

        <h3 className="text-2xl font-bold text-[#081B33] mb-4">
          Get Certified
        </h3>

        <p className="text-gray-600 leading-7">
          Prepare confidently for internationally recognized certification exams.
        </p>

      </div>

      {/* Step 5 */}

      <div className="text-center">

        <div className="w-20 h-20 rounded-full bg-[#0D6EFD] text-white flex items-center justify-center text-3xl font-bold mx-auto mb-6">
          5
        </div>

        <h3 className="text-2xl font-bold text-[#081B33] mb-4">
          Launch Career
        </h3>

        <p className="text-gray-600 leading-7">
          Step into the IT industry with practical skills and confidence.
        </p>

      </div>

    </div>

  </div>

</section>
{/* Training Experience */}

<section className="py-28 bg-white">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* Left */}

      <div>

        <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-4">
          Training Experience
        </p>

        <h2 className="text-5xl font-black text-[#081B33] leading-tight mb-8">
          Everything You Need
          <br />
          To Succeed
        </h2>

        <p className="text-lg text-gray-600 leading-8 mb-12">
          Our programs are designed to provide practical knowledge,
          certification preparation, and career support through a
          complete learning experience.
        </p>

        <div className="space-y-5">

          {[
            "Live instructor-led training sessions",
            "Hands-on enterprise lab environments",
            "Flexible weekday and weekend schedules",
            "Certification exam preparation",
            "Real-world projects and practical exercises",
            "Career mentoring and interview guidance",
          ].map((item, index) => (

            <div
              key={index}
              className="flex items-center gap-4"
            >

              <div className="w-7 h-7 rounded-full bg-[#0D6EFD] text-white flex items-center justify-center font-bold text-sm">
                ✓
              </div>

              <p className="text-lg text-gray-700">
                {item}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Right */}

      <div className="flex justify-center">

        <Image
          src="/images/training-features.png"
          alt="Training Experience"
          width={600}
          height={600}
          className="w-full max-w-lg"
        />

      </div>

    </div>

  </div>

</section>
{/* Student Success Stories */}

<section className="py-28 bg-[#F8FAFC]">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-20">

      <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-3">
        Student Success
      </p>

      <h2 className="text-5xl font-black text-[#081B33]">
        What Our Learners Say
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        Thousands of professionals have accelerated their careers
        through our industry-focused training programs.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Card 1 */}

      <div className="bg-white rounded-3xl border border-gray-200 p-10 hover:shadow-xl hover:border-[#0D6EFD] transition">

        <div className="text-[#0D6EFD] text-xl mb-6">
          ★★★★★
        </div>

        <p className="text-gray-600 leading-8 italic mb-8">
          "The hands-on labs and experienced instructors gave me the
          confidence to pass my CCNA certification on the first attempt."
        </p>

        <div>

          <h4 className="font-bold text-xl text-[#081B33]">
            Ahmed Khan
          </h4>

          <p className="text-gray-500">
            Cisco CCNA Graduate
          </p>

        </div>

      </div>

      {/* Card 2 */}

      <div className="bg-white rounded-3xl border border-gray-200 p-10 hover:shadow-xl hover:border-[#0D6EFD] transition">

        <div className="text-[#0D6EFD] text-xl mb-6">
          ★★★★★
        </div>

        <p className="text-gray-600 leading-8 italic mb-8">
          "The cloud training was practical and industry-focused.
          I landed my first Azure Administrator role within months."
        </p>

        <div>

          <h4 className="font-bold text-xl text-[#081B33]">
            Sarah Ali
          </h4>

          <p className="text-gray-500">
            Microsoft Azure Certified
          </p>

        </div>

      </div>

      {/* Card 3 */}

      <div className="bg-white rounded-3xl border border-gray-200 p-10 hover:shadow-xl hover:border-[#0D6EFD] transition">

        <div className="text-[#0D6EFD] text-xl mb-6">
          ★★★★★
        </div>

        <p className="text-gray-600 leading-8 italic mb-8">
          "Excellent mentorship, practical projects and interview
          preparation helped me transition into cybersecurity."
        </p>

        <div>

          <h4 className="font-bold text-xl text-[#081B33]">
            Hassan Raza
          </h4>

          <p className="text-gray-500">
            Cyber Security Professional
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
{/* CTA */}

<section className="py-28 bg-white border-t border-gray-200">

  <div className="max-w-4xl mx-auto px-6 text-center">

    <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-4">
      Start Your Learning Journey
    </p>

    <h2 className="text-5xl lg:text-6xl font-black text-[#081B33] leading-tight mb-8">

      Invest In Your Skills.
      <br />

      Invest In Your Future.

    </h2>

    <p className="text-xl text-gray-600 leading-9 max-w-3xl mx-auto mb-12">

      Join our industry-focused training programs, gain practical
      experience, earn globally recognized certifications, and
      build the confidence to excel in today's technology industry.

    </p>

    <div className="flex flex-wrap justify-center gap-5">

      <Link
        href="/networks/contact"
        className="bg-[#0D6EFD] text-white px-9 py-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
      >
        Enroll Today
      </Link>

      <Link
        href="/networks/trainings"
        className="border-2 border-[#081B33] text-[#081B33] px-9 py-4 rounded-full font-semibold hover:bg-[#081B33] hover:text-white transition duration-300"
      >
        Browse Programs
      </Link>

    </div>

  </div>

</section>
      </>
  );
}