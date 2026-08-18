"use client";

import { useState } from "react";

export default function About() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          division: "networks",
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
          data?.detail || "Something went wrong. Please try again."
        );
      }

      setStatus({
        type: "success",
        message: "Your message has been submitted successfully. We'll get back to you soon.",
      });

      setFormData({
        full_name: "",
        email: "",
        phone_number: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message:
          error.message ||
          "Unable to submit your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ============================= */}
      {/* Contact Hero */}
      {/* ============================= */}

      <section
        data-aos="fade-up"
        className="relative overflow-hidden bg-[#081B33] py-28 lg:py-36"
      >
        {/* Subtle Blue Glow */}

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0D6EFD]/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          {/* Label */}

          <p
            data-aos="fade-down"
            className="uppercase tracking-[6px] text-[#0D6EFD] font-semibold mb-6"
          >
            Contact COTSLE Networks
          </p>

          {/* Heading */}

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05]"
          >
            Let's Build Something
            <br />

            <span className="text-[#0D6EFD]">
              Great Together.
            </span>
          </h1>

          {/* Description */}

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-8 text-xl text-gray-300 leading-9 max-w-2xl mx-auto"
          >
            Have a question, a project idea, or a technology challenge?
            Tell us what you're working on and let's explore how
            COTSLE Networks can help.
          </p>

          {/* Divider */}

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-10 flex justify-center items-center gap-4"
          >
            <div className="w-12 h-px bg-[#0D6EFD]" />

            <span className="text-sm uppercase tracking-[3px] font-semibold text-gray-300">
              We're Ready To Listen
            </span>

            <div className="w-12 h-px bg-[#0D6EFD]" />
          </div>

        </div>
      </section>


      {/* ============================= */}
      {/* Contact Information & Form */}
      {/* ============================= */}

      <section
        data-aos="fade-up"
        className="py-28 bg-[#F8FAFC]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-5 gap-12">

            {/* ============================= */}
            {/* Contact Information */}
            {/* ============================= */}

            <div
              data-aos="fade-right"
              className="lg:col-span-2"
            >

              <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-4">
                Get In Touch
              </p>

              <h2 className="text-4xl lg:text-5xl font-black text-[#081B33] leading-tight mb-6">
                We'd Love To
                <span className="text-[#0D6EFD]">
                  {" "}Hear From You.
                </span>
              </h2>

              <p className="text-lg text-gray-600 leading-8 mb-10">
                Have a question, project idea, or need help choosing
                the right technology solution? Reach out to our team.
              </p>


              {/* Email */}

              <div className="flex gap-5 items-start mb-7">

                <div className="w-12 h-12 rounded-xl bg-[#081B33] text-white flex items-center justify-center flex-shrink-0">
                  ✉
                </div>

                <div>

                  <p className="text-sm uppercase tracking-wider text-gray-400 font-semibold">
                    Email
                  </p>

                  <p className="text-lg font-semibold text-[#081B33] mt-1">
                    info@cotsle.com
                  </p>

                </div>

              </div>


              {/* Phone */}

              <div className="flex gap-5 items-start mb-7">

                <div className="w-12 h-12 rounded-xl bg-[#081B33] text-white flex items-center justify-center flex-shrink-0">
                  ☎
                </div>

                <div>

                  <p className="text-sm uppercase tracking-wider text-gray-400 font-semibold">
                    Phone
                  </p>

                  <p className="text-lg font-semibold text-[#081B33] mt-1">
                    +92 XXX XXXXXXX
                  </p>

                </div>

              </div>


              {/* Location */}

              <div className="flex gap-5 items-start">

                <div className="w-12 h-12 rounded-xl bg-[#081B33] text-white flex items-center justify-center flex-shrink-0">
                  ●
                </div>

                <div>

                  <p className="text-sm uppercase tracking-wider text-gray-400 font-semibold">
                    Location
                  </p>

                  <p className="text-lg font-semibold text-[#081B33] mt-1">
                    Pakistan
                  </p>

                </div>

              </div>

            </div>


            {/* ============================= */}
            {/* Contact Form */}
            {/* ============================= */}

            <div
              data-aos="fade-left"
              data-aos-delay="150"
              className="lg:col-span-3 bg-white rounded-3xl border border-gray-200 p-8 lg:p-10 shadow-sm"
            >

              <h3 className="text-2xl font-bold text-[#081B33] mb-2">
                Send Us a Message
              </h3>

              <p className="text-gray-500 mb-8">
                Tell us about your project or requirements and our team
                will get back to you.
              </p>


              {/* ============================= */}
              {/* Success Message */}
              {/* ============================= */}

              {status.type === "success" && (
                <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-medium text-green-700">
                  {status.message}
                </div>
              )}


              {/* ============================= */}
              {/* Error Message */}
              {/* ============================= */}

              {status.type === "error" && (
                <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">
                  {status.message}
                </div>
              )}


              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* Name + Email */}

                <div className="grid md:grid-cols-2 gap-6">

                  <div>

                    <label className="block text-sm font-semibold text-[#081B33] mb-2">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 outline-none focus:border-[#0D6EFD] focus:ring-2 focus:ring-[#0D6EFD]/10 transition"
                    />

                  </div>


                  <div>

                    <label className="block text-sm font-semibold text-[#081B33] mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 outline-none focus:border-[#0D6EFD] focus:ring-2 focus:ring-[#0D6EFD]/10 transition"
                    />

                  </div>

                </div>


                {/* Phone */}

                <div>

                  <label className="block text-sm font-semibold text-[#081B33] mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 outline-none focus:border-[#0D6EFD] focus:ring-2 focus:ring-[#0D6EFD]/10 transition"
                  />

                </div>


                {/* Subject */}

                <div>

                  <label className="block text-sm font-semibold text-[#081B33] mb-2">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 outline-none focus:border-[#0D6EFD] focus:ring-2 focus:ring-[#0D6EFD]/10 transition"
                  />

                </div>


                {/* Message */}

                <div>

                  <label className="block text-sm font-semibold text-[#081B33] mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us about your project or question..."
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 outline-none resize-none focus:border-[#0D6EFD] focus:ring-2 focus:ring-[#0D6EFD]/10 transition"
                  />

                </div>


                {/* Submit */}

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full text-white py-4 rounded-xl font-semibold transition-all duration-300 ${
                    loading
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-[#0D6EFD] hover:bg-blue-700 hover:-translate-y-1"
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
        className="py-28 bg-[#F8FAFC]"
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Location Info */}

            <div data-aos="fade-right">

              <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-4">
                Find Us
              </p>

              <h2 className="text-5xl lg:text-6xl font-black text-[#081B33] leading-tight">
                We're Here
                <span className="text-[#0D6EFD]">
                  {" "}To Help.
                </span>
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
                Visit us or get in touch with our team to discuss your
                technology requirements and explore how COTSLE Networks
                can support your organization.
              </p>


              {/* Location */}

              <div className="mt-10 flex gap-5 items-start">

                <div className="w-14 h-14 rounded-2xl bg-[#081B33] text-white flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">
                    ●
                  </span>
                </div>

                <div>

                  <p className="text-sm uppercase tracking-[3px] text-gray-400 font-semibold">
                    Our Location
                  </p>

                  <h3 className="text-2xl font-bold text-[#081B33] mt-2">
                    Pakistan
                  </h3>

                  <p className="text-gray-600 mt-1">
                    COTSLE Networks
                  </p>

                </div>

              </div>


              {/* Contact */}

              <div className="mt-8 pt-8 border-t border-gray-200">

                <p className="text-sm uppercase tracking-[3px] text-gray-400 font-semibold mb-3">
                  Get In Touch
                </p>

                <p className="text-[#081B33] font-semibold">
                  info@cotsle.com
                </p>

              </div>

            </div>


            {/* Map Visual */}

            <div
              data-aos="fade-left"
              data-aos-delay="150"
              className="relative"
            >

              <div className="relative h-[420px] rounded-[32px] overflow-hidden bg-[#081B33] shadow-xl">

                {/* Map Grid */}

                <div className="absolute inset-0 opacity-10">

                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                      backgroundSize: "45px 45px",
                    }}
                  />

                </div>


                {/* Decorative Circles */}

                <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-[#0D6EFD]/20" />

                <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border border-[#0D6EFD]/20" />


                {/* Location Marker */}

                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="relative">

                    <div className="absolute inset-0 w-24 h-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0D6EFD]/20 animate-ping" />

                    <div className="relative w-16 h-16 rounded-full bg-[#0D6EFD] flex items-center justify-center shadow-lg">

                      <span className="text-white text-xl font-black">
                        C
                      </span>

                    </div>

                  </div>

                </div>


                {/* Map Label */}

                <div className="absolute bottom-7 left-7 right-7 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-5">

                  <p className="text-[#0D6EFD] text-xs uppercase tracking-[3px] font-semibold">
                    COTSLE NETWORKS
                  </p>

                  <p className="text-white font-semibold mt-1">
                    Pakistan
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}