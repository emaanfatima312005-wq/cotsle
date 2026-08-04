"use client";

import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Khan",
      course: "Artificial Intelligence",
      review:
        "The AI course exceeded my expectations. Practical projects and experienced instructors made learning enjoyable.",
    },
    {
      name: "Sara Ali",
      course: "Python Development",
      review:
        "The Python course gave me confidence to build real applications. Highly recommended for beginners.",
    },
    {
      name: "Usman Tariq",
      course: "Web Development",
      review:
        "I landed my first freelance client after completing the Web Development course at COTSLE.",
    },
    {
      name: "Fatima Noor",
      course: "Cyber Security",
      review:
        "Hands-on labs and penetration testing exercises made the learning experience incredible.",
    },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold">
            Testimonials
          </p>

          <h2 className="text-5xl font-black text-gray-900 mt-3">
            What Our Students Say
          </h2>

          <p className="text-lg text-gray-600 mt-5 max-w-3xl mx-auto">
            Thousands of students have transformed their careers with
            industry-focused training at COTSLE Systems.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className={`rounded-3xl bg-white p-8 transition-all duration-700 border
              ${
                index === active
                  ? "scale-110 shadow-2xl border-[#0D6EFD] z-10"
                  : "scale-95 opacity-70 shadow-md border-gray-200"
              }`}
            >

              <div className="flex gap-1 text-yellow-400 mb-6">

                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}

              </div>

              <p className="text-gray-600 leading-8 italic">
                "{item.review}"
              </p>

              <div className="mt-8 border-t pt-5">

                <h3 className="font-bold text-xl text-gray-900">
                  {item.name}
                </h3>

                <p className="text-[#0D6EFD] font-medium mt-1">
                  {item.course}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}