"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SchedulePage() {
    const [openFAQ, setOpenFAQ] = useState(null);

const faqs = [
  {
    question: "How do I enroll in a course?",
    answer:
      "Simply choose your preferred batch, click 'Enroll Now', or contact our admissions team for assistance.",
  },
  {
    question: "Do you offer online classes?",
    answer:
      "Yes. Selected courses are available both online and on-campus for maximum flexibility.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. Every student who successfully completes the course receives an industry-recognized certificate.",
  },
  {
    question: "Can I switch my batch later?",
    answer:
      "Yes, depending on seat availability, you can request a batch transfer through our support team.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, online payments, debit/credit cards, and selected digital wallets.",
  },
];
  return (
    <>

      {/* Hero */}

      <section className="bg-white py-24 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">

                Find The Perfect

                <span className="text-[#0D6EFD]">
                  {" "}Learning Schedule
                </span>

              </h1>

              <p className="text-gray-600 text-lg leading-8 mb-10">

                Choose from flexible morning, afternoon, evening,
                and weekend batches designed to fit your lifestyle.

              </p>

              <div className="flex gap-5">

                <Link
                  href="#batches"
                  className="bg-[#0D6EFD] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  View Schedule
                </Link>

                <Link
                  href="/systems/contact"
                  className="border border-gray-300 hover:border-[#0D6EFD] hover:text-[#0D6EFD] px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  Contact Us
                </Link>

              </div>

            </div>

            <div className="relative flex justify-center">

              <div className="absolute w-80 h-80 bg-[#0D6EFD] opacity-10 blur-[140px] rounded-full"></div>

              <Image
                src="/images/schedule.jpeg"
                alt="Schedules"
                width={650}
                height={650}
                className="relative z-10 w-full max-w-lg"
                priority
              />

            </div>

          </div>

        </div>

      </section>
  {/* Upcoming Batches */}

<section
  id="batches"
  data-aos="fade-up"
  className="py-24 bg-gray-50"
>

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
        Upcoming Batches
      </p>

      <h2 className="text-5xl font-bold text-gray-900 mb-5">
        Available Training Batches
      </h2>

      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        Browse our upcoming batches and choose the schedule that works best for you.
      </p>

    </div>

    <div className="space-y-8">

      {/* Batch 1 */}

      <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#0D6EFD] hover:shadow-xl transition-all duration-300">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          <div className="flex-1">

            <div className="flex items-center gap-4 mb-6">

              <h3 className="text-3xl font-bold text-gray-900">
                Python Development
              </h3>

              <span className="bg-[#0D6EFD]/10 text-[#0D6EFD] px-4 py-1 rounded-full text-sm font-semibold">
                Open Batch
              </span>

            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

              <div>
                <p className="text-sm uppercase tracking-wide text-gray-400">
                  Start Date
                </p>
                <h4 className="font-semibold mt-1">
                  August 5, 2026
                </h4>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-gray-400">
                  Schedule
                </p>
                <h4 className="font-semibold mt-1">
                  Mon • Wed • Fri
                </h4>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-gray-400">
                  Timing
                </p>
                <h4 className="font-semibold mt-1">
                  6:00 PM – 8:00 PM
                </h4>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-gray-400">
                  Seats
                </p>
                <h4 className="font-semibold mt-1 text-[#0D6EFD]">
                  20 Remaining
                </h4>
              </div>

            </div>

          </div>

          <div>

            <button className="bg-[#0D6EFD] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
              Enroll Now
            </button>

          </div>

        </div>

      </div>

      {/* Batch 2 */}

      <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#0D6EFD] hover:shadow-xl transition-all duration-300">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          <div className="flex-1">

            <div className="flex items-center gap-4 mb-6">

              <h3 className="text-3xl font-bold text-gray-900">
                Web Development
              </h3>

              <span className="bg-[#0D6EFD]/10 text-[#0D6EFD] px-4 py-1 rounded-full text-sm font-semibold">
                Open Batch
              </span>

            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

              <div>
                <p className="text-sm uppercase tracking-wide text-gray-400">Start Date</p>
                <h4 className="font-semibold mt-1">August 8, 2026</h4>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-gray-400">Schedule</p>
                <h4 className="font-semibold mt-1">Tue • Thu • Sat</h4>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-gray-400">Timing</p>
                <h4 className="font-semibold mt-1">5:00 PM – 7:30 PM</h4>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-gray-400">Seats</p>
                <h4 className="font-semibold mt-1 text-[#0D6EFD]">16 Remaining</h4>
              </div>

            </div>

          </div>

          <button className="bg-[#0D6EFD] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">
            Enroll Now
          </button>

        </div>

      </div>

      {/* Batch 3 */}

      <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#0D6EFD] hover:shadow-xl transition-all duration-300">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          <div className="flex-1">

            <div className="flex items-center gap-4 mb-6">

              <h3 className="text-3xl font-bold text-gray-900">
                AI & Machine Learning
              </h3>

              <span className="bg-[#0D6EFD]/10 text-[#0D6EFD] px-4 py-1 rounded-full text-sm font-semibold">
                Open Batch
              </span>

            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

              <div>
                <p className="text-sm uppercase tracking-wide text-gray-400">Start Date</p>
                <h4 className="font-semibold mt-1">August 10, 2026</h4>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-gray-400">Schedule</p>
                <h4 className="font-semibold mt-1">Mon • Wed</h4>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-gray-400">Timing</p>
                <h4 className="font-semibold mt-1">7:00 PM – 9:00 PM</h4>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-gray-400">Seats</p>
                <h4 className="font-semibold mt-1 text-[#0D6EFD]">12 Remaining</h4>
              </div>

            </div>

          </div>

          <button className="bg-[#0D6EFD] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">
            Enroll Now
          </button>

        </div>

      </div>

    </div>

  </div>

</section>
{/* Weekly Schedule */}

<section
  data-aos="fade-up"
  className="py-24 bg-white"
>

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
        Weekly Schedule
      </p>

      <h2 className="text-5xl font-bold text-gray-900 mb-5">
        Class Timetable
      </h2>

      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        Plan your week with our flexible class timings.
      </p>

    </div>

    <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-lg">

      <table className="w-full text-left">

        <thead className="bg-[#0D6EFD] text-white">

          <tr>

            <th className="px-8 py-5 font-semibold">Day</th>
            <th className="px-8 py-5 font-semibold">Morning</th>
            <th className="px-8 py-5 font-semibold">Afternoon</th>
            <th className="px-8 py-5 font-semibold">Evening</th>

          </tr>

        </thead>

        <tbody>

          <tr className="border-b hover:bg-blue-50 transition">

            <td className="px-8 py-6 font-semibold">Monday</td>
            <td className="px-8 py-6">Python Development</td>
            <td className="px-8 py-6">Web Development</td>
            <td className="px-8 py-6">AI & Machine Learning</td>

          </tr>

          <tr className="border-b hover:bg-blue-50 transition">

            <td className="px-8 py-6 font-semibold">Tuesday</td>
            <td className="px-8 py-6">Cloud Computing</td>
            <td className="px-8 py-6">Network Administration</td>
            <td className="px-8 py-6">Cyber Security</td>

          </tr>

          <tr className="border-b hover:bg-blue-50 transition">

            <td className="px-8 py-6 font-semibold">Wednesday</td>
            <td className="px-8 py-6">Python Development</td>
            <td className="px-8 py-6">Web Development</td>
            <td className="px-8 py-6">AI & Machine Learning</td>

          </tr>

          <tr className="border-b hover:bg-blue-50 transition">

            <td className="px-8 py-6 font-semibold">Thursday</td>
            <td className="px-8 py-6">Cloud Computing</td>
            <td className="px-8 py-6">Network Administration</td>
            <td className="px-8 py-6">Cyber Security</td>

          </tr>

          <tr className="border-b hover:bg-blue-50 transition">

            <td className="px-8 py-6 font-semibold">Friday</td>
            <td className="px-8 py-6">Python Development</td>
            <td className="px-8 py-6">Web Development</td>
            <td className="px-8 py-6">AI & Machine Learning</td>

          </tr>

          <tr className="hover:bg-blue-50 transition">

            <td className="px-8 py-6 font-semibold">Saturday</td>
            <td className="px-8 py-6">Cyber Security</td>
            <td className="px-8 py-6">Cloud Computing</td>
            <td className="px-8 py-6">Web Development</td>

          </tr>

        </tbody>

      </table>

    </div>

  </div>

</section>
{/* FAQ */}

<section
  data-aos="fade-up"
  className="py-24 bg-gray-50"
>

  <div className="max-w-5xl mx-auto px-6">

    <div className="text-center mb-16">

      <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
        FAQ
      </p>

      <h2 className="text-5xl font-bold text-gray-900 mb-5">
        Frequently Asked Questions
      </h2>

      <p className="text-gray-600 text-lg">
        Everything you need to know before joining Cotsle.
      </p>

    </div>

    <div className="space-y-5">

      {faqs.map((faq, index) => (

        <div
          key={index}
          className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
        >

          <button
            onClick={() =>
              setOpenFAQ(openFAQ === index ? null : index)
            }
            className="w-full flex justify-between items-center px-8 py-6 text-left"
          >

            <span className="text-xl font-semibold text-gray-900">
              {faq.question}
            </span>

            <span className="text-3xl text-[#0D6EFD] font-light">
              {openFAQ === index ? "−" : "+"}
            </span>

          </button>

          {openFAQ === index && (

            <div className="px-8 pb-7">

              <p className="text-gray-600 leading-8">
                {faq.answer}
              </p>

            </div>

          )}

        </div>

      ))}

    </div>

  </div>

</section>

    </>
  );
}