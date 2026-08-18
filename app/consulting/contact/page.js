"use client";

import { useState } from "react";

export default function ConsultingContactPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("http://127.0.0.1:8000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          division: "consulting",
          full_name: formData.full_name,
          email: formData.email,
          phone_number: formData.phone_number,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.detail || "Failed to submit your inquiry."
        );
      }

      setSuccessMessage(
        "Your message has been submitted successfully. Our team will get back to you soon."
      );

      setFormData({
        full_name: "",
        email: "",
        phone_number: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setErrorMessage(
        error.message ||
          "Something went wrong. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ============================= */}
      {/* Contact Hero */}
      {/* ============================= */}

      <section className="relative overflow-hidden bg-[#081B33] py-24 text-white lg:py-32">

        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="absolute -right-48 -top-48 h-[600px] w-[600px] rounded-full bg-[#0D6EFD]/20 blur-[140px]"
        />

        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-[#0D6EFD]/10 blur-[130px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Left */}

            <div>

              <p
                data-aos="fade-down"
                className="mb-6 uppercase tracking-[6px] font-semibold text-[#0D6EFD]"
              >
                Contact COTSLE Consulting
              </p>

              <h1
                data-aos="fade-right"
                data-aos-delay="150"
                className="text-6xl font-black leading-[0.95] md:text-7xl lg:text-8xl"
              >
                Let's
                <br />

                <span className="text-[#0D6EFD]">
                  Talk.
                </span>
              </h1>

              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="mt-8 max-w-xl text-xl leading-9 text-gray-300"
              >
                Whether you need strategic guidance, technology
                expertise, training, or support with a business
                challenge, we're ready to start the conversation.
              </p>

            </div>

            {/* Right */}

            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="hidden lg:block"
            >

              <div className="relative ml-auto w-full max-w-[520px]">

                <div className="relative h-[480px] overflow-hidden rounded-3xl shadow-2xl">

                  <img
                    src="/images/contact.png"
                    alt="COTSLE Consulting"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#081B33]/60 via-transparent to-transparent" />

                </div>

                <div
                  data-aos="fade-up"
                  data-aos-delay="600"
                  className="absolute -bottom-8 -left-8 rounded-2xl bg-[#0D6EFD] px-7 py-6 text-white shadow-xl"
                >

                  <p className="text-3xl font-black">
                    Let's
                  </p>

                  <p className="mt-1 text-sm uppercase tracking-[3px]">
                    Start Something Great
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ============================= */}
      {/* Contact Information + Form */}
      {/* ============================= */}

      <section className="bg-[#F8FAFC] py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            {/* Contact Information */}

            <div data-aos="fade-right">

              <p className="mb-5 uppercase tracking-[5px] font-semibold text-[#0D6EFD]">
                Get In Touch
              </p>

              <h2 className="text-5xl font-black leading-tight text-[#081B33]">
                Start a
                <br />

                <span className="text-[#0D6EFD]">
                  Conversation.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Tell us what you're working on, what challenge
                you're facing, or where you need support.
              </p>

              <div className="mt-12 space-y-7">

                {/* Email */}

                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="flex gap-5"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0D6EFD]/10 text-xl text-[#0D6EFD]">
                    ✉
                  </div>

                  <div>

                    <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                      Email
                    </p>

                    <p className="mt-1 text-lg font-semibold text-[#081B33]">
                      consulting@cotsle.com
                    </p>

                  </div>

                </div>

                {/* Phone */}

                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="flex gap-5"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0D6EFD]/10 text-xl text-[#0D6EFD]">
                    ☎
                  </div>

                  <div>

                    <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                      Phone
                    </p>

                    <p className="mt-1 text-lg font-semibold text-[#081B33]">
                      +92 XXX XXXXXXX
                    </p>

                  </div>

                </div>

                {/* Location */}

                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="flex gap-5"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0D6EFD]/10 text-xl text-[#0D6EFD]">
                    📍
                  </div>

                  <div>

                    <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                      Location
                    </p>

                    <p className="mt-1 text-lg font-semibold text-[#081B33]">
                      Pakistan
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* ============================= */}
            {/* Contact Form */}
            {/* ============================= */}

            <div
              data-aos="fade-left"
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm lg:p-12"
            >

              <h3 className="text-3xl font-black text-[#081B33]">
                Send Us a Message
              </h3>

              <p className="mt-3 text-gray-500">
                Fill out the form and our team will get back to you.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
              >

                {/* Full Name */}

                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                >

                  <label className="mb-2 block text-sm font-semibold text-[#081B33]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition-all focus:border-[#0D6EFD] focus:ring-2 focus:ring-[#0D6EFD]/10"
                  />

                </div>

                {/* Email */}

                <div
                  data-aos="fade-up"
                  data-aos-delay="150"
                >

                  <label className="mb-2 block text-sm font-semibold text-[#081B33]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition-all focus:border-[#0D6EFD] focus:ring-2 focus:ring-[#0D6EFD]/10"
                  />

                </div>

                {/* Phone */}

                <div
                  data-aos="fade-up"
                  data-aos-delay="175"
                >

                  <label className="mb-2 block text-sm font-semibold text-[#081B33]">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    placeholder="+92 XXX XXXXXXX"
                    required
                    className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition-all focus:border-[#0D6EFD] focus:ring-2 focus:ring-[#0D6EFD]/10"
                  />

                </div>

                {/* Subject */}

                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                >

                  <label className="mb-2 block text-sm font-semibold text-[#081B33]">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition-all focus:border-[#0D6EFD] focus:ring-2 focus:ring-[#0D6EFD]/10"
                  />

                </div>

                {/* Message */}

                <div
                  data-aos="fade-up"
                  data-aos-delay="250"
                >

                  <label className="mb-2 block text-sm font-semibold text-[#081B33]">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us about your requirements..."
                    required
                    className="w-full resize-none rounded-xl border border-gray-200 px-5 py-4 outline-none transition-all focus:border-[#0D6EFD] focus:ring-2 focus:ring-[#0D6EFD]/10"
                  />

                </div>

                {/* Success */}

                {successMessage && (
                  <div className="rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-medium text-green-700">
                    ✓ {successMessage}
                  </div>
                )}

                {/* Error */}

                {errorMessage && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">
                    ✕ {errorMessage}
                  </div>
                )}

                {/* Submit */}

                <button
                  data-aos="fade-up"
                  data-aos-delay="300"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-[#0D6EFD] py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting
                    ? "Sending..."
                    : "Send Message →"}
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* ============================= */}
      {/* Location Section */}
      {/* ============================= */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div
            data-aos="fade-up"
            className="relative overflow-hidden rounded-3xl bg-[#081B33] p-10 text-white lg:p-16"
          >

            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#0D6EFD]/20 blur-[100px]" />

            <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">

              <div>

                <p className="mb-5 uppercase tracking-[5px] font-semibold text-[#0D6EFD]">
                  Our Location
                </p>

                <h2 className="text-4xl font-black lg:text-5xl">
                  Let's Connect
                  <br />

                  <span className="text-[#0D6EFD]">
                    In Person.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg leading-8 text-gray-300">
                  Visit us to discuss your requirements, explore
                  opportunities, or simply learn more about how
                  COTSLE Consulting can support your organization.
                </p>

              </div>

              <div
                data-aos="zoom-in"
                data-aos-delay="250"
                className="flex h-64 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
              >

                <div className="text-center">

                  <div className="text-5xl">
                    📍
                  </div>

                  <p className="mt-4 text-xl font-bold">
                    COTSLE Consulting
                  </p>

                  <p className="mt-2 text-gray-400">
                    Pakistan
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ============================= */}
      {/* Final CTA */}
      {/* ============================= */}

      <section className="bg-[#F8FAFC] py-24">

        <div
          data-aos="fade-up"
          className="mx-auto max-w-4xl px-6 text-center"
        >

          <p className="mb-5 uppercase tracking-[5px] font-semibold text-[#0D6EFD]">
            COTSLE Consulting
          </p>

          <h2 className="text-5xl font-black text-[#081B33] lg:text-6xl">
            Have a Challenge?
            <br />

            <span className="text-[#0D6EFD]">
              Let's Solve It.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            From strategy and technology to training and
            transformation, we're here to help you move forward.
          </p>

        </div>

      </section>

    </>
  );
}