export default function ConsultingContactPage() {
  return (
    <>
      {/* ============================= */}
      {/* Contact Hero */}
      {/* ============================= */}

      <section className="relative overflow-hidden bg-[#081B33] text-white py-24 lg:py-32">

        {/* Background Glows */}

        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="absolute -top-48 -right-48 w-[600px] h-[600px] bg-[#0D6EFD]/20 rounded-full blur-[140px]"
        />

        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-[#0D6EFD]/10 rounded-full blur-[130px]"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}

            <div>

              <p
                data-aos="fade-down"
                className="uppercase tracking-[6px] text-[#0D6EFD] font-semibold mb-6"
              >
                Contact COTSLE Consulting
              </p>

              <h1
                data-aos="fade-right"
                data-aos-delay="150"
                className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95]"
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
                className="mt-8 text-xl text-gray-300 leading-9 max-w-xl"
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
  <div className="relative w-full max-w-[520px] ml-auto">

    {/* Image */}

    <div className="relative h-[480px] overflow-hidden rounded-3xl shadow-2xl">

      <img
        src="/images/contact.png"
        alt="COTSLE Consulting"
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
      />

      {/* Dark overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-[#081B33]/60 via-transparent to-transparent" />

    </div>


    {/* Floating Blue Card */}

    <div
      data-aos="fade-up"
      data-aos-delay="600"
      className="absolute -bottom-8 -left-8 bg-[#0D6EFD] text-white px-7 py-6 rounded-2xl shadow-xl"
    >

      <p className="text-3xl font-black">
        Let's
      </p>

      <p className="text-sm uppercase tracking-[3px] mt-1">
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

      <section className="py-28 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16">

            {/* Contact Information */}

            <div data-aos="fade-right">

              <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-5">
                Get In Touch
              </p>

              <h2 className="text-5xl font-black text-[#081B33] leading-tight">
                Start a
                <br />

                <span className="text-[#0D6EFD]">
                  Conversation.
                </span>
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-8">
                Tell us what you're working on, what challenge
                you're facing, or where you need support.
              </p>


              {/* Contact Details */}

              <div className="mt-12 space-y-7">

                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="flex gap-5"
                >

                  <div className="w-12 h-12 shrink-0 rounded-xl bg-[#0D6EFD]/10 flex items-center justify-center text-[#0D6EFD] text-xl">
                    ✉
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wider text-gray-400 font-semibold">
                      Email
                    </p>

                    <p className="mt-1 text-lg font-semibold text-[#081B33]">
                      consulting@cotsle.com
                    </p>
                  </div>

                </div>


                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="flex gap-5"
                >

                  <div className="w-12 h-12 shrink-0 rounded-xl bg-[#0D6EFD]/10 flex items-center justify-center text-[#0D6EFD] text-xl">
                    ☎
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wider text-gray-400 font-semibold">
                      Phone
                    </p>

                    <p className="mt-1 text-lg font-semibold text-[#081B33]">
                      +92 XXX XXXXXXX
                    </p>
                  </div>

                </div>


                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="flex gap-5"
                >

                  <div className="w-12 h-12 shrink-0 rounded-xl bg-[#0D6EFD]/10 flex items-center justify-center text-[#0D6EFD] text-xl">
                    📍
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wider text-gray-400 font-semibold">
                      Location
                    </p>

                    <p className="mt-1 text-lg font-semibold text-[#081B33]">
                      Pakistan
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* Contact Form */}

            <div
              data-aos="fade-left"
              className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-sm"
            >

              <h3 className="text-3xl font-black text-[#081B33]">
                Send Us a Message
              </h3>

              <p className="mt-3 text-gray-500">
                Fill out the form and our team will get back to you.
              </p>


              <form className="mt-8 space-y-6">

                {/* Name */}

                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <label className="block text-sm font-semibold text-[#081B33] mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 outline-none focus:border-[#0D6EFD] focus:ring-2 focus:ring-[#0D6EFD]/10 transition-all"
                  />
                </div>


                {/* Email */}

                <div
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <label className="block text-sm font-semibold text-[#081B33] mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 outline-none focus:border-[#0D6EFD] focus:ring-2 focus:ring-[#0D6EFD]/10 transition-all"
                  />
                </div>


                {/* Subject */}

                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <label className="block text-sm font-semibold text-[#081B33] mb-2">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 outline-none focus:border-[#0D6EFD] focus:ring-2 focus:ring-[#0D6EFD]/10 transition-all"
                  />
                </div>


                {/* Message */}

                <div
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  <label className="block text-sm font-semibold text-[#081B33] mb-2">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Tell us about your requirements..."
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 outline-none resize-none focus:border-[#0D6EFD] focus:ring-2 focus:ring-[#0D6EFD]/10 transition-all"
                  />
                </div>


                {/* Submit */}

                <button
                  data-aos="fade-up"
                  data-aos-delay="300"
                  type="submit"
                  className="w-full bg-[#0D6EFD] text-white py-4 rounded-xl font-semibold hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
                >
                  Send Message →
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* ============================= */}
      {/* Location Section */}
      {/* ============================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div
            data-aos="fade-up"
            className="rounded-3xl bg-[#081B33] text-white p-10 lg:p-16 relative overflow-hidden"
          >

            <div className="absolute -right-32 -top-32 w-96 h-96 bg-[#0D6EFD]/20 rounded-full blur-[100px]" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

              <div>

                <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-5">
                  Our Location
                </p>

                <h2 className="text-4xl lg:text-5xl font-black">
                  Let's Connect
                  <br />

                  <span className="text-[#0D6EFD]">
                    In Person.
                  </span>
                </h2>

                <p className="mt-6 text-gray-300 leading-8 max-w-lg">
                  Visit us to discuss your requirements, explore
                  opportunities, or simply learn more about how
                  COTSLE Consulting can support your organization.
                </p>

              </div>


              <div
                data-aos="zoom-in"
                data-aos-delay="250"
                className="h-64 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center"
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

      <section className="py-24 bg-[#F8FAFC]">

        <div
          data-aos="fade-up"
          className="max-w-4xl mx-auto px-6 text-center"
        >

          <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-5">
            COTSLE Consulting
          </p>

          <h2 className="text-5xl lg:text-6xl font-black text-[#081B33]">
            Have a Challenge?
            <br />

            <span className="text-[#0D6EFD]">
              Let's Solve It.
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-2xl mx-auto">
            From strategy and technology to training and
            transformation, we're here to help you move forward.
          </p>

        </div>

      </section>

    </>
  );
}