"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ConsultingInsightsPage() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <>
      {/* Insights Hero */}

      <section className="relative overflow-hidden bg-[#081B33] text-white py-28 lg:py-36">

        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#0D6EFD]/20 rounded-full blur-[130px]" />

        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-[#0D6EFD]/10 rounded-full blur-[120px]" />


        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-end">

            {/* Heading */}

            <div
              data-aos="fade-right"
              data-aos-duration="1000"
            >

              <p
                data-aos="fade-down"
                data-aos-delay="100"
                className="uppercase tracking-[6px] text-[#0D6EFD] font-semibold mb-6"
              >
                COTSLE Insights
              </p>

              <h1
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95]"
              >
                Think.
                <br />

                <span className="text-[#0D6EFD]">
                  Learn.
                </span>

                <br />

                Transform.
              </h1>

            </div>


            {/* Description */}

            <div
              data-aos="fade-left"
              data-aos-delay="400"
            >

              <p className="text-xl text-gray-300 leading-9">
                Ideas, perspectives, and practical knowledge
                exploring the technologies, strategies, and
                challenges shaping modern organizations.
              </p>

              <div
                data-aos="zoom-in"
                data-aos-delay="600"
                className="mt-8 h-px bg-white/20"
              />

              <p
                data-aos="fade-up"
                data-aos-delay="700"
                className="mt-5 text-sm uppercase tracking-[3px] text-gray-400"
              >
                Business • Technology • Strategy
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Featured Insight */}

      <section className="py-28 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div
            data-aos="fade-up"
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
          >

            <div>

              <p
                data-aos="fade-down"
                data-aos-delay="100"
                className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-4"
              >
                Featured Insight
              </p>

              <h2
                data-aos="fade-right"
                data-aos-delay="200"
                className="text-5xl lg:text-6xl font-black text-[#081B33]"
              >
                Latest Thinking.
              </h2>

            </div>

            <p
              data-aos="fade-left"
              data-aos-delay="300"
              className="text-gray-500 max-w-md leading-7"
            >
              Explore perspectives designed to help leaders
              understand change and make better decisions.
            </p>

          </div>


          {/* Featured Card */}

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="grid lg:grid-cols-2 overflow-hidden rounded-3xl bg-[#F8FAFC]"
          >

            {/* Image */}

            <div className="relative h-[350px] lg:h-[500px] overflow-hidden">

              <img
                src="/images/insights-featured.jpg"
                alt="Featured COTSLE Insight"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />

            </div>


            {/* Content */}

            <div
              data-aos="fade-left"
              data-aos-delay="400"
              className="p-10 lg:p-14 flex flex-col justify-center"
            >

              <span className="text-[#0D6EFD] uppercase tracking-[3px] text-sm font-bold">
                Technology
              </span>

              <h3
                data-aos="fade-up"
                data-aos-delay="500"
                className="mt-5 text-4xl lg:text-5xl font-black text-[#081B33] leading-tight"
              >
                Navigating Technology
                <br />
                in a Changing World
              </h3>

              <p
                data-aos="fade-up"
                data-aos-delay="600"
                className="mt-6 text-gray-600 leading-8"
              >
                Organizations are facing rapid technological
                change. Understanding where technology creates
                real value is becoming more important than simply
                adopting the latest tools.
              </p>

              <a
                data-aos="fade-up"
                data-aos-delay="700"
                href="#insights"
                className="mt-8 inline-flex items-center gap-3 text-[#0D6EFD] font-bold hover:gap-5 transition-all duration-300"
              >
                Read Insight
                <span>→</span>
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* Insight Categories & Articles */}

<section
  id="insights"
  className="py-28 bg-[#F8FAFC]"
>
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Section Heading */}

    <div
      data-aos="fade-up"
      className="text-center max-w-3xl mx-auto"
    >

      <p
        data-aos="fade-down"
        className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-5"
      >
        Explore Insights
      </p>

      <h2
        data-aos="fade-up"
        data-aos-delay="150"
        className="text-5xl lg:text-6xl font-black text-[#081B33] leading-tight"
      >
        Ideas Worth
        <br />

        <span className="text-[#0D6EFD]">
          Exploring.
        </span>
      </h2>

      <p
        data-aos="fade-up"
        data-aos-delay="250"
        className="mt-6 text-lg text-gray-600 leading-8"
      >
        Discover practical perspectives across business,
        technology, leadership, and organizational transformation.
      </p>

    </div>


    {/* Articles */}

    <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">


      {/* Article 01 */}

      <article
        data-aos="fade-up"
        data-aos-delay="100"
        className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
      >

        <div className="h-56 overflow-hidden">

          <img
            src="/images/insight-technology.jpg"
            alt="Technology Insight"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

        </div>

        <div className="p-8">

          <span className="text-xs uppercase tracking-[3px] text-[#0D6EFD] font-bold">
            Technology
          </span>

          <h3 className="mt-4 text-2xl font-bold text-[#081B33] leading-tight">
            Making Technology Work for Your Organization
          </h3>

          <p className="mt-4 text-gray-600 leading-7">
            Technology should support business goals rather than
            simply add complexity. Discover how organizations can
            approach technology with purpose.
          </p>

          <a
            href="#"
            className="inline-flex mt-6 text-[#0D6EFD] font-semibold hover:gap-3 transition-all"
          >
            Read More →
          </a>

        </div>

      </article>


      {/* Article 02 */}

      <article
        data-aos="fade-up"
        data-aos-delay="200"
        className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
      >

        <div className="h-56 overflow-hidden">

          <img
            src="/images/insight-strategy.jpg"
            alt="Strategy Insight"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

        </div>

        <div className="p-8">

          <span className="text-xs uppercase tracking-[3px] text-[#0D6EFD] font-bold">
            Strategy
          </span>

          <h3 className="mt-4 text-2xl font-bold text-[#081B33] leading-tight">
            Turning Strategy Into Action
          </h3>

          <p className="mt-4 text-gray-600 leading-7">
            Strong strategies require clear priorities and
            practical execution. Learn how organizations can
            move from planning to meaningful action.
          </p>

          <a
            href="#"
            className="inline-flex mt-6 text-[#0D6EFD] font-semibold hover:gap-3 transition-all"
          >
            Read More →
          </a>

        </div>

      </article>


      {/* Article 03 */}

      <article
        data-aos="fade-up"
        data-aos-delay="300"
        className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
      >

        <div className="h-56 overflow-hidden">

          <img
            src="/images/insight-cybersecurity.jpg"
            alt="Cybersecurity Insight"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

        </div>

        <div className="p-8">

          <span className="text-xs uppercase tracking-[3px] text-[#0D6EFD] font-bold">
            Cybersecurity
          </span>

          <h3 className="mt-4 text-2xl font-bold text-[#081B33] leading-tight">
            Building a Stronger Security Culture
          </h3>

          <p className="mt-4 text-gray-600 leading-7">
            Cybersecurity is not only a technical challenge.
            Learn why people, processes, and awareness are
            equally important.
          </p>

          <a
            href="#"
            className="inline-flex mt-6 text-[#0D6EFD] font-semibold hover:gap-3 transition-all"
          >
            Read More →
          </a>

        </div>

      </article>


      {/* Article 04 */}

      <article
        data-aos="fade-up"
        data-aos-delay="400"
        className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
      >

        <div className="h-56 overflow-hidden">

          <img
            src="/images/insight-leadership.jpg"
            alt="Leadership Insight"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

        </div>

        <div className="p-8">

          <span className="text-xs uppercase tracking-[3px] text-[#0D6EFD] font-bold">
            Leadership
          </span>

          <h3 className="mt-4 text-2xl font-bold text-[#081B33] leading-tight">
            Leading Through Change
          </h3>

          <p className="mt-4 text-gray-600 leading-7">
            Effective leadership becomes even more important
            when organizations face uncertainty and transformation.
          </p>

          <a
            href="#"
            className="inline-flex mt-6 text-[#0D6EFD] font-semibold"
          >
            Read More →
          </a>

        </div>

      </article>


      {/* Article 05 */}

      <article
        data-aos="fade-up"
        data-aos-delay="500"
        className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
      >

        <div className="h-56 overflow-hidden">

          <img
            src="/images/insight-digital.jpg"
            alt="Digital Transformation Insight"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

        </div>

        <div className="p-8">

          <span className="text-xs uppercase tracking-[3px] text-[#0D6EFD] font-bold">
            Transformation
          </span>

          <h3 className="mt-4 text-2xl font-bold text-[#081B33] leading-tight">
            The Human Side of Digital Transformation
          </h3>

          <p className="mt-4 text-gray-600 leading-7">
            Successful transformation requires more than new
            systems. People and organizational readiness matter too.
          </p>

          <a
            href="#"
            className="inline-flex mt-6 text-[#0D6EFD] font-semibold"
          >
            Read More →
          </a>

        </div>

      </article>


      {/* Article 06 */}

      <article
        data-aos="fade-up"
        data-aos-delay="600"
        className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
      >

        <div className="h-56 overflow-hidden">

          <img
            src="/images/insight-business.jpg"
            alt="Business Insight"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

        </div>

        <div className="p-8">

          <span className="text-xs uppercase tracking-[3px] text-[#0D6EFD] font-bold">
            Business
          </span>

          <h3 className="mt-4 text-2xl font-bold text-[#081B33] leading-tight">
            Creating Sustainable Business Value
          </h3>

          <p className="mt-4 text-gray-600 leading-7">
            Long-term value comes from connecting people,
            processes, technology, and strategy effectively.
          </p>

          <a
            href="#"
            className="inline-flex mt-6 text-[#0D6EFD] font-semibold"
          >
            Read More →
          </a>

        </div>

      </article>

    </div>

  </div>
</section>

{/* Insights CTA */}

<section
  data-aos="fade-up"
  className="relative overflow-hidden bg-[#081B33] text-white py-24 lg:py-28"
>
  {/* Glow */}

  <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#0D6EFD]/15 rounded-full blur-[130px]" />

  <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-[#0D6EFD]/10 rounded-full blur-[120px]" />

  <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center">

    <p
      data-aos="fade-down"
      className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-5"
    >
      Stay Curious
    </p>

    <h2
      data-aos="fade-up"
      data-aos-delay="150"
      className="text-5xl lg:text-6xl font-black leading-tight"
    >
      Keep Learning.
      <br />

      <span className="text-[#0D6EFD]">
        Keep Moving Forward.
      </span>
    </h2>

    <p
      data-aos="fade-up"
      data-aos-delay="250"
      className="mt-7 text-lg lg:text-xl text-gray-300 leading-8 max-w-2xl mx-auto"
    >
      Explore new ideas, understand emerging challenges,
      and discover practical perspectives that can help
      your organization move forward.
    </p>

    <div
      data-aos="fade-up"
      data-aos-delay="350"
      className="mt-10 flex flex-wrap justify-center gap-4"
    >

      <a
        href="/consulting/contact"
        className="bg-[#0D6EFD] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
      >
        Talk To Our Experts
      </a>

      <a
        href="/consulting"
        className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#081B33] transition-all duration-300"
      >
        Explore Consulting
      </a>

    </div>

  </div>
</section>

    </>
  );
}