import {
  FaCheckCircle,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Inquiry() {
  return (
    <section
      data-aos="fade-up"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div>

            <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
              Get In Touch
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Ready To Build Your
              <span className="text-[#0D6EFD]">
                {" "}Next Project?
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-8 mb-8">
              Whether you need software development,
              AI solutions, cybersecurity, cloud services,
              or professional IT training, our team is ready
              to help you achieve your goals.
            </p>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#0D6EFD]" />
                <span>Custom Software Development</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#0D6EFD]" />
                <span>Artificial Intelligence Solutions</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#0D6EFD]" />
                <span>Cloud Computing & Cyber Security</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#0D6EFD]" />
                <span>Professional IT Training</span>
              </div>

            </div>

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#0D6EFD]" />
                <span>info@cotsle.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#0D6EFD]" />
                <span>+92 300 1234567</span>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="bg-white rounded-2xl shadow-xl p-8">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-5 py-4 outline-none focus:border-[#0D6EFD]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg px-5 py-4 outline-none focus:border-[#0D6EFD]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg px-5 py-4 outline-none focus:border-[#0D6EFD]"
              />

              <select
                className="w-full border border-gray-300 rounded-lg px-5 py-4 outline-none focus:border-[#0D6EFD]"
              >
                <option>Select a Service</option>
                <option>Web Development</option>
                <option>AI Solutions</option>
                <option>Cloud Computing</option>
                <option>Cyber Security</option>
                <option>IT Training</option>
              </select>

              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full border border-gray-300 rounded-lg px-5 py-4 outline-none resize-none focus:border-[#0D6EFD]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#0D6EFD] hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Send Inquiry
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}