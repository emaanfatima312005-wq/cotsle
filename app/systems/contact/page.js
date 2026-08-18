"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:8000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          division: "systems",
          full_name: formData.full_name,
          email: formData.email,
          phone_number: formData.phone_number,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Failed to submit inquiry.");
      }

      setSuccess(
        "Your message has been submitted successfully. Our team will get back to you soon."
      );

      setFormData({
        full_name: "",
        email: "",
        phone_number: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("Contact form error:", err);

      setError(
        err.message ||
          "Something went wrong while submitting your message."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ============================= */}
      {/* Hero */}
      {/* ============================= */}

      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}

            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Let's Build Something
                <span className="text-[#0D6EFD]">
                  {" "}Amazing Together
                </span>
              </h1>

              <p className="text-gray-600 text-lg leading-8 mb-10">
                Whether you need software development,
                AI solutions, cloud services, cybersecurity,
                or professional IT training, our team is
                ready to help.
              </p>

              <div className="flex flex-wrap gap-5">

                <Link
                  href="#contact-form"
                  className="bg-[#0D6EFD] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  Send Message
                </Link>

                <Link
                  href="/systems/services"
                  className="border border-gray-300 hover:border-[#0D6EFD] hover:text-[#0D6EFD] px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  Our Services
                </Link>

              </div>
            </div>

            {/* Right */}

            <div className="relative flex justify-center">

              <div className="absolute w-80 h-80 bg-[#0D6EFD] opacity-10 blur-[140px] rounded-full" />

              <Image
                src="/images/contact.png"
                alt="Contact"
                width={600}
                height={600}
                className="relative z-10 w-full max-w-lg"
                priority
              />

            </div>

          </div>
        </div>
      </section>


      {/* ============================= */}
      {/* Contact Cards */}
      {/* ============================= */}

      <section
        data-aos="fade-up"
        className="py-24 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">

            <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
              Get In Touch
            </p>

            <h2 className="text-5xl font-bold text-gray-900 mb-5">
              We're Always Here to Help
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Reach out to us through any of the following channels.
              We'd love to hear about your ideas and help you achieve
              your goals.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Phone */}

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FaPhoneAlt className="text-3xl text-[#0D6EFD]" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Call Us
              </h3>

              <p className="text-gray-600">
                +92 300 1234567
              </p>

            </div>


            {/* Email */}

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FaEnvelope className="text-3xl text-[#0D6EFD]" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Email
              </h3>

              <p className="text-gray-600 break-words">
                info@cotsle.com
              </p>

            </div>


            {/* Address */}

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FaMapMarkerAlt className="text-3xl text-[#0D6EFD]" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Office
              </h3>

              <p className="text-gray-600">
                Lahore, Pakistan
              </p>

            </div>


            {/* WhatsApp */}

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FaWhatsapp className="text-3xl text-[#0D6EFD]" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                WhatsApp
              </h3>

              <p className="text-gray-600">
                +92 300 1234567
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ============================= */}
      {/* Contact Form */}
      {/* ============================= */}

      <section
        id="contact-form"
        data-aos="fade-up"
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Side */}

            <div>

              <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
                Send Us A Message
              </p>

              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Let's Discuss Your Project
              </h2>

              <p className="text-gray-600 text-lg leading-8 mb-10">
                Fill out the form and one of our experts will get back
                to you as soon as possible. Whether it's software
                development, AI, cloud services, cybersecurity or IT
                training, we're here to help.
              </p>

              <div className="space-y-6">

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    ✓
                  </div>

                  <span className="text-lg">
                    Free consultation for every inquiry
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    ✓
                  </div>

                  <span className="text-lg">
                    Response within 24 hours
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    ✓
                  </div>

                  <span className="text-lg">
                    Customized solutions for your business
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    ✓
                  </div>

                  <span className="text-lg">
                    Professional support from experienced experts
                  </span>
                </div>

              </div>

            </div>


            {/* Right Side - FORM */}

            <div className="bg-gray-50 rounded-3xl shadow-xl p-10">

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h3>

              <p className="text-gray-500 mb-6">
                Tell us about your requirements.
              </p>


              {/* SUCCESS MESSAGE */}

              {success && (
                <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-green-700">
                  {success}
                </div>
              )}


              {/* ERROR MESSAGE */}

              {error && (
                <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-red-700">
                  {error}
                </div>
              )}


              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* Full Name */}

                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-[#0D6EFD]"
                />


                {/* Email */}

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-[#0D6EFD]"
                />


                {/* Phone */}

                <input
                  type="tel"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-[#0D6EFD]"
                />


                {/* Subject */}

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-[#0D6EFD]"
                />


                {/* Message */}

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your project..."
                  required
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-[#0D6EFD]"
                />


                {/* Submit */}

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full text-white py-4 rounded-xl font-semibold transition-all duration-300 ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#0D6EFD] hover:bg-blue-700 hover:scale-[1.02]"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>


      {/* ============================= */}
      {/* Location */}
      {/* ============================= */}

      <section
        data-aos="fade-up"
        className="py-24 bg-gray-50"
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">

            <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
              Visit Our Office
            </p>

            <h2 className="text-5xl font-bold text-gray-900 mb-5">
              Find Us On The Map
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We'd love to meet you! Visit our office or schedule an
              appointment with our team.
            </p>

          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">

            <iframe
              src="https://www.google.com/maps?q=Lahore,Pakistan&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="COTSLE Systems Location"
            />

          </div>

        </div>

      </section>


      {/* ============================= */}
      {/* FAQ */}
      {/* ============================= */}

      <section
        data-aos="fade-up"
        className="py-24 bg-white"
      >

        <div className="max-w-5xl mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">

            <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
              Frequently Asked Questions
            </p>

            <h2 className="text-5xl font-bold text-gray-900 mb-5">
              Have Questions?
            </h2>

            <p className="text-gray-600 text-lg">
              Here are some of the most common questions we receive.
            </p>

          </div>

          <div className="space-y-6">

            <div className="bg-gray-50 rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-bold mb-3">
                How quickly do you respond?
              </h3>

              <p className="text-gray-600 leading-7">
                Our team aims to respond to all inquiries within 24
                hours during business days.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-bold mb-3">
                Do you offer free consultations?
              </h3>

              <p className="text-gray-600 leading-7">
                Yes! We provide an initial consultation to understand
                your requirements and recommend the best solution.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-bold mb-3">
                What services does COTSLE provide?
              </h3>

              <p className="text-gray-600 leading-7">
                We specialize in software development, AI solutions,
                cloud computing, cybersecurity, networking, and IT
                training.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-bold mb-3">
                Do you provide online training?
              </h3>

              <p className="text-gray-600 leading-7">
                Yes. We offer both online and on-campus training
                programs, depending on the course and schedule.
              </p>
            </div>

          </div>

        </div>

      </section>

    </>
  );
}