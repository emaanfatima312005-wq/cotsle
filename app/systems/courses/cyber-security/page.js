import Image from "next/image";
import Link from "next/link";

export default function WebCoursePage() {
  return (
    <>
      {/* Hero */}

      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-[#0d1b35] to-slate-900 text-white py-24">

        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/web-bg.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="uppercase tracking-[6px] text-[#4DA3FF] font-semibold mb-4">
                Professional Course
              </p>

              <h1 className="text-5xl lg:text-6xl font-black leading-tight">

                Cyber Security

              </h1>

              <p className="mt-8 text-lg text-gray-300 leading-8 max-w-xl">

               Learn ethical hacking, penetration testing, network security, and cyber defense techniques to protect organizations from modern digital threats and cyber attacks.

              </p>

              <div className="mt-10 flex gap-5">

                <Link
                  href="/systems/contact"
                  className="bg-[#0D6EFD] hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition"
                >
                  Enroll Now
                </Link>

                <Link
                  href="/systems/schedules"
                  className="border border-white/30 px-8 py-4 rounded-xl hover:bg-white hover:text-black transition"
                >
                  View Schedule
                </Link>

              </div>

            </div>

            <div className="relative flex justify-center items-center">

  {/* Glow */}
  <div className="absolute h-[420px] w-[420px] rounded-full bg-[#0D6EFD]/10 blur-[120px]" />

  {/* Floating background square */}
  <div className="absolute h-[520px] w-[420px] rounded-[40px] bg-gradient-to-br from-[#0D6EFD]/10 to-transparent rotate-6" />

  {/* Main Card */}
  <div className="relative rounded-[32px] bg-white p-5 shadow-[0_30px_80px_rgba(13,110,253,0.18)]">

    <Image
      src="/images/course-ai.jpeg"
      alt="Courses"
      width={600}
      height={600}
      className="rounded-[24px]"
      priority
    />

  </div>

  {/* Floating Badge */}

  <div className="absolute -left-10 top-14 rounded-2xl bg-white px-6 py-4 shadow-xl">

    <p className="text-sm text-gray-500">
      Students
    </p>

    <h3 className="text-3xl font-black text-[#0D6EFD]">
      50K+
    </h3>

  </div>

  {/* Floating Badge */}

  <div className="absolute -right-8 bottom-14 rounded-2xl bg-white px-6 py-4 shadow-xl">

    <p className="text-sm text-gray-500">
      Courses
    </p>

    <h3 className="text-3xl font-black text-[#0D6EFD]">
      30+
    </h3>

  </div>

</div>

          </div>

        </div>

      </section>
{/* About Course */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left */}

      <div>

        <p className="text-[#0D6EFD] font-semibold uppercase tracking-[4px] mb-3">
          About The Course
        </p>

        <h2 className="text-5xl font-black text-gray-900 leading-tight mb-8">
          Master Cyber Security
          <span className="block text-[#0D6EFD]">
            Protect Modern Networks
          </span>
        </h2>

        <p className="text-gray-600 text-lg leading-8 mb-6">
          As cyber threats continue to grow, organizations need skilled professionals
  who can protect digital systems and sensitive information. This course
  introduces students to cybersecurity principles, ethical hacking, and
  defensive security techniques.
        </p>

        <p className="text-gray-600 text-lg leading-8">
          Throughout the training, students will perform security assessments, learn
  penetration testing methodologies, secure networks, and gain practical
  experience using professional cybersecurity tools in realistic scenarios.
        </p>

      </div>

      {/* Right */}

      <div className="grid gap-5">

        <div className="rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition">

          <h3 className="text-xl font-bold text-gray-900">
            Hands-on Labs
          </h3>

          <p className="mt-3 text-gray-600">
            Ethical Hacking
          </p>

        </div>

        <div className="rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition">

          <h3 className="text-xl font-bold text-gray-900">
            Industry Certifications
          </h3>

          <p className="mt-3 text-gray-600">
            Learn directly from professionals working in the technology
            industry.
          </p>

        </div>

        <div className="rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition">

          <h3 className="text-xl font-bold text-gray-900">
            Career Focused
          </h3>

          <p className="mt-3 text-gray-600">
            Basic to Advance Networking Knowledge
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

  {/* Course Details */}

<section className="py-24 bg-gray-50">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest">
        Course Details
      </p>

      <h2 className="text-5xl font-bold text-gray-900 mt-3">
        Everything You Need To Know
      </h2>

    </div>

    <div className="grid lg:grid-cols-2 gap-10">

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <h3 className="text-2xl font-bold mb-8">
          Training Information
        </h3>

        <div className="space-y-6">

          <div className="flex justify-between border-b pb-4">
            <span className="font-semibold">Duration</span>
            <span>4 Months</span>
          </div>

          <div className="flex justify-between border-b pb-4">
            <span className="font-semibold">Mode</span>
            <span>On Campus / Online</span>
          </div>

          <div className="flex justify-between border-b pb-4">
            <span className="font-semibold">Level</span>
            <span>Beginner - Intermediate</span>
          </div>

          <div className="flex justify-between border-b pb-4">
            <span className="font-semibold">Prerequisites</span>
            <span>Basic Computer Skills</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Certificate</span>
            <span>COTSLE Certified</span>
          </div>

        </div>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <h3 className="text-2xl font-bold mb-8">
          Career Opportunities
        </h3>

        <div className="grid grid-cols-2 gap-4">

          {[
  "Cyber Security Analyst",
  "SOC Analyst",
  "Penetration Tester",
  "Ethical Hacker",
  "Security Engineer",
  "Network Security Engineer",
  "Security Consultant",
  "Incident Responder",
   ].map((job) => (

            <div
              key={job}
              className="rounded-xl bg-blue-50 p-4 text-center font-semibold text-gray-700 hover:bg-[#0D6EFD] hover:text-white transition"
            >
              {job}
            </div>

          ))}

        </div>

      </div>

    </div>

  </div>

</section>

<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16">

<h2 className="text-5xl font-black">
Course Curriculum
</h2>

</div>

<div className="space-y-6">

<div className="rounded-2xl border p-8">
<h3 className="font-bold text-2xl">Module 1</h3>
<p className="mt-3 text-gray-600">
Cyber Security Basics
</p>
</div>

<div className="rounded-2xl border p-8">
<h3 className="font-bold text-2xl">Module 2</h3>
<p className="mt-3 text-gray-600">
Ethical Hacking
</p>
</div>

<div className="rounded-2xl border p-8">
<h3 className="font-bold text-2xl">Module 3</h3>
<p className="mt-3 text-gray-600">
Penetration Testing
</p>
</div>

<div className="rounded-2xl border p-8">
<h3 className="font-bold text-2xl">Module 4</h3>
<p className="mt-3 text-gray-600">
Security Tools
</p>
</div>

<div className="rounded-2xl border p-8">
<h3 className="font-bold text-2xl">Module 5</h3>
<p className="mt-3 text-gray-600">
Security Assessment
</p>
</div>

<div className="rounded-2xl border p-8">
<h3 className="font-bold text-2xl">Final Project</h3>
<p className="mt-3 text-gray-600">
Network Security
</p>
</div>

</div>

</div>

</section>

{/* CTA */}

<section className="py-24 bg-white">

  <div className="max-w-6xl mx-auto px-6">

    <div className="relative overflow-hidden rounded-[40px] border border-gray-200 bg-white px-10 py-20 shadow-[0_25px_60px_rgba(13,110,253,0.12)]">

      {/* Background Glow */}

      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#0D6EFD]/10 blur-[120px]" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#0D6EFD]/10 blur-[120px]" />

      <div className="relative text-center">

        <p className="uppercase tracking-[6px] text-[#0D6EFD] font-semibold">
          Start Your Journey
        </p>

        <h2 className="mt-5 text-5xl font-black text-gray-900">
          Ready to Build Your Future?
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
          Become a professional Full Stack Web Developer through practical projects, modern technologies, and expert-led training at COTSLE Systems.
        </p>

        {/* Buttons */}

        <div className="mt-14 flex flex-wrap justify-center gap-5">

          <Link
            href="/systems/contact"
            className="rounded-full bg-[#0D6EFD] px-8 py-4 font-semibold text-white transition hover:bg-blue-700 hover:scale-105"
          >
            Enroll Now
          </Link>

          <Link
            href="/systems/contact"
            className="rounded-full border border-[#0D6EFD] px-8 py-4 font-semibold text-[#0D6EFD] transition hover:bg-[#0D6EFD] hover:text-white"
          >
            Talk to an Advisor
          </Link>

        </div>

      </div>

    </div>

  </div>

</section>
    </>
  );
}