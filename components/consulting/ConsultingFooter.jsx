function ConsultingFooter() {
  return (
    <footer className="bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}

          <div className="lg:col-span-1">

            <a
              href="/"
              className="flex items-center gap-3"
            >

              <img
                src="/images/logo.png"
                alt="COTSLE"
                className="w-14 h-auto object-contain"
              />

              <span className="text-2xl font-black">
                COTSLE
              </span>

            </a>

            <p className="mt-6 text-gray-400 leading-7 max-w-sm">
              Helping organizations improve performance, strengthen
              technology practices, and create lasting business value
              through practical consulting expertise.
            </p>

          </div>


          {/* Consulting */}

          <div>

            <h3 className="text-lg font-bold mb-6">
              Consulting
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <a
                  href="/consulting"
                  className="hover:text-[#0D6EFD] transition-colors"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/consulting/about"
                  className="hover:text-[#0D6EFD] transition-colors"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/consulting/services"
                  className="hover:text-[#0D6EFD] transition-colors"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="/consulting/trainings"
                  className="hover:text-[#0D6EFD] transition-colors"
                >
                  Trainings
                </a>
              </li>

            </ul>

          </div>


          {/* Explore */}

          <div>

            <h3 className="text-lg font-bold mb-6">
              Explore
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <a
                  href="/consulting/insights"
                  className="hover:text-[#0D6EFD] transition-colors"
                >
                  Insights
                </a>
              </li>

              <li>
                <a
                  href="/consulting/careers"
                  className="hover:text-[#0D6EFD] transition-colors"
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  href="/consulting/contact"
                  className="hover:text-[#0D6EFD] transition-colors"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="hover:text-[#0D6EFD] transition-colors"
                >
                  Main COTSLE
                </a>
              </li>

            </ul>

          </div>


          {/* Contact */}

          <div>

            <h3 className="text-lg font-bold mb-6">
              Get In Touch
            </h3>

            <p className="text-gray-400 leading-7">
              Have a consulting requirement or need expert guidance?
            </p>

            <a
              href="/consulting/contact"
              className="inline-block mt-5 text-[#0D6EFD] font-semibold hover:text-white transition-colors"
            >
              Start a Conversation →
            </a>

          </div>

        </div>


        {/* Bottom */}

        <div className="mt-14 pt-7 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} COTSLE. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Consulting Division
          </p>

        </div>

      </div>

    </footer>
  );
}

export default ConsultingFooter;